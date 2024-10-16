import type { Block } from "astro-portabletext/types"
import { client } from "./api"
import { getImageDataFromURL } from "./image"
import {  type ImageData } from './image'
import { createPostTagList, type BlogPostTag } from "./tag"
import { formatPostDate, type BlogPostDate } from "./date"

export interface Post {
    title : string,
    date  : BlogPostDate, 
    tags     : BlogPostTag[],
    post     : Block[],
    preview  : string,
    slug     : string,
    image?   : ImageData | null,
    updatedAt : string
}

export async function getPosts() : Promise<Post[]> {

    const query = await client.fetch(`
        *[_type == "post"] {
            'imageURL': image.asset->url,
            ...
        } | order(date desc )
    `)
    
    const posts = query.map( (post: any) => ({
        title   : post.title,
        date    : formatPostDate(post.date),
        image   : getImageDataFromURL(post.imageURL),
        post    : post.post,
        preview : post.preview || '',
        tags    : createPostTagList(post.tags),
        slug    : getSlug({title: post.title, date: post.date}),
        updatedAt : new Date(post._updatedAt).toDateString()
    }))

    return posts
}


function getSlug({title, date} : {[key:string]: string}) : string {
    const slug = (date + '-' + title.trim().replaceAll('-', '').replaceAll(' ', '-'))
        .toLowerCase()
        .replaceAll('/', '-')
        .replaceAll(/([^a-z0-9\-]+)/g, '')
        .replaceAll('--', '-')
    return slug
}
