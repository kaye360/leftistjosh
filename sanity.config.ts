import { structureTool } from 'sanity/structure';
// sanity.config.ts
import { defineConfig } from "sanity";
import { post } from './schemaTypes/post';
import { visionTool } from '@sanity/vision';

export default defineConfig({
  name: "leftistjosh",
  title: "LeftistJosh",
  projectId: "tn81fag1",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [
      post
    ],
  },
});