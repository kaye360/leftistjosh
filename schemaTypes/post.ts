import { defineType, defineField } from 'sanity'

export const post = defineType({
	type: "document",
	name: "post",
	title: 'Post',
	preview: {
		select: {
			title: 'title',
			media: 'image'
		}
	},
	fields: [

		defineField({
			type: "string",
			name: "title",
			title: 'Title',
			validation: rule => rule.required(),
		}),

		defineField({
			type: "image",
			name: "image",
			title: 'Image',
			options: {
				hotspot: true
			},
		}),

		defineField({
			type: "date",
			name: "date",
			title: 'Date',
			options: {
				dateFormat: 'MMM DD YYYY'
			},
			validation: rule => rule.required(),
		}),

		defineField({
			type: 'text',
			name: 'preview',
			title: 'Preview',
			validation: rule => rule.required(),
		}),

		defineField({
			title: 'Post',
			name: 'post',
			type: 'array',
			
			of: [
				{
					type: 'block', styles: [
						{ title: 'Normal', value: 'normal' },
						{ title: 'Heading', value: 'h2' },
						{ title: 'SubhHeading', value: 'h3' },
						{ title: 'Quote', value: 'blockquote' }
					]
				},
				{ type: 'image' }
			],
			validation: rule => rule.required(),
		}),

		defineField({
			type: "array",
			of: [{ type: 'string' }],
			name: "tags",
			title: 'Tags',
		}),
	],
});
