export default {
  name: "certificate",
  title: "Sertifiseringer",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Overskrift",
      type: "string",
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "string",
    },
    {
      name: "url",
      title: "Nettside",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      name: "hide",
      title: "Skjul",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
