import SanityClient  from "@sanity/client";
// import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import createImageUrlBuilder from '@sanity/image-url'



const client = SanityClient({
  projectId: "hkv68hbj",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21"
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
export default client;
