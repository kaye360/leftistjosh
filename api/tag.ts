import { client } from "./api"

export interface BlogPostTag {
	hyphen : string,
	space : string
}


interface GetTagData { 
	tags : string[], 
}


/**
 * 
 * @description Gets an array of unique tags used in all blog posts
 * 
 */
export async function getTags() : Promise<BlogPostTag[]> {
	const tagSet: Set<string>  = new Set()
	const tagData = await getTagData()

	tagData.forEach( post => {
		post.tags.forEach( tag => tagSet.add( tag ))
	})
	
	return createPostTagList( Array.from( tagSet ).sort() )
}


/**
 * 
 * @description Gets a list of all tags and commonTags used in all blog posts
 * The data is not validated
 * 
 */
async function getTagData() : Promise<GetTagData[]> {
	const tagData = await client.fetch(`
		*[ _type == 'post'] {
			tags
		}
	`)
	if(!tagData) return []
	return tagData.filter( (post: {tags : string[] | null} ) => post.tags !== null )
}


/**
 * 
 * @description Get an array of tags with hyphenated and spaced versions of each tag
 * This is needed for tags with spaces in them that are in URLs
 * @param tagList 
 * 
 */
export function createPostTagList(tagList: string[]) : BlogPostTag[] {
	if(!tagList) return []
	return tagList
		.map( (tag: string) => ({
			hyphen : tag.replaceAll(' ', '-'),
			space  : tag
		}))
		.filter(tag => (
			!(tag.hyphen === '' || tag.space === '')
		))
}