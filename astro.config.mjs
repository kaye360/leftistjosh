import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react(), sanity({
		projectId: "tn81fag1",
		dataset: "production",
		useCdn: false,
		studioBasePath: '/admin'
	})],

	base : '/',
	redirects : import.meta.env.DEV 
		? { '/admin/[...page]' : '/admin' } 
		: {},
});