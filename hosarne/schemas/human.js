const human = {
  name: "human",
  title: "Menneske",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Navn",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      title: "Tittel",
      type: "string",
    },
    {
      name: "email",
      title: "Epost",
      type: "string",
    },
    {
      name: "mobile",
      title: "Mobilnummer",
      type: "string",
    },
    {
      name: "body",
      title: "bio",
      type: "blockContent",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
export default human;

