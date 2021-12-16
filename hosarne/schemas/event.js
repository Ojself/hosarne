const event = {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Overskrift",
      type: "string",
      validation: (Rule) => [Rule.required()],
    },
    {
      name: "timeStart",
      title: "Starter",
      type: "datetime",
      dateFormat: "DD-MM-YYYY",
      validation: (Rule) => [Rule.required()],
    },
    {
      name: "timeEnd",
      title: "Avslutter",
      dateFormat: "DD-MM-YYYY",
      type: "datetime",
    },
    {
      name: "theme",
      title: "Farge",
      type: "reference",
      to: { type: "theme" },
    },
    {
      name: "mainEvent",
      title: "Viktig Event",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "facebookUrl",
      title: "FacebookeventURL",
      type: "url",
      description: "eg 'https://fb.me/e/2Ipa9x16x'",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
      "Slug er hva URL'en ender med på nettsiden. eg: hosarne.no/program/breathwork-a-rebirthing-journey",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => [Rule.required()],
    },
    {
      name: "mainImage",
      title: "Hovedbilde",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: { isHighlighted: true },
        },
      ],
      validation: (Rule) => [Rule.required()],
    },
  ],
};
export default event;
