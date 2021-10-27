export default {
  name: "services",
  title: "Tjenester",
  type: "document",
  fields: [
    {
      name: "serviceTitle",
      title: "Overskrift",
      type: "string",
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Bilde",
      type: "image",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
