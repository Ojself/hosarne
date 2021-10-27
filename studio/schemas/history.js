export default {
  name: "history",
  title: "Historie",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Overskrift",
      type: "string",
    },
    {
      name: "year",
      title: "Årstall",
      type: "number",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "mainImage",
      title: "Hovedbilde",
      type: "image",
    },
  ],
};
