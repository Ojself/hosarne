export default {
  name: "projects",
  title: "Prosjekter",
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
      title: "Prosjektbilder",
      name: "images",
      type: "array",
      of: [
        {
          name: "image",
          type: "image",
          title: "Prosjektbilde",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
