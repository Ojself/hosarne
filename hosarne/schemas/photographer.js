const photographer = {
  name: "photographer",
  title: "In-House medlem",
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
    {
      name: 'images',
      type: 'array',
      title: 'Bildegalleri',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'title',
              title: 'Tittel',
              type: 'string',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
      "Slug er hva URL'en ender med på nettsiden. eg: hosarne.no/in-house/erling",
      options: {
        source: "name",
        maxLength: 72,
      },
      validation: (Rule) => [Rule.required()],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
export default photographer;

