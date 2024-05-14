import { createClient } from "@sanity/client"

/**
 * 
 * Create the sanity client to be used throught the site
 * 
 */
export const client = createClient({
   projectId: "tn81fag1", 
   dataset: "production", 
   apiVersion: "2024-03-11",
   useCdn: false, 
})