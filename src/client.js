import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "", // add sanity project id
  dataset: "production",
  apiVersion: "2021-07-25",
  useCdn: true,
});
