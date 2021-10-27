import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "qme7y1bf",
  dataset: "production",
  apiVersion: "2021-07-25",
  useCdn: true,
});
