
import { createClient } from "@sanity/client";
import dotenv from 'dotenv'

dotenv.config()

const sanity = createClient({
    
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2023-01-01',
  useCdn: false
})

export default sanity;