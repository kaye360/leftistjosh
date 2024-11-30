import { OGImageRoute } from 'astro-og-canvas';
import { getPosts } from '../../../api/post';

/**
 * @see https://github.com/delucis/astro-og-canvas/tree/latest/packages/astro-og-canvas
 */

export const { getStaticPaths, GET } = OGImageRoute({

  param: 'route',

  pages: await getPosts(),

  getImageOptions: (path, page) => ({
    title: 'LeftistJosh',
    description: page.title.slice(0, 60),
    logo: {
      path: './public/logo.webp',
      size : [100]
    },
    bgGradient : [[8, 47, 73]]
  }),

  getSlug(_path, page) {
      return page.slug + '.png'
  },
});