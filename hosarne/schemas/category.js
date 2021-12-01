const category = {
  name: "category",
  title: "Kategori",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Navn",
      type: "string",
      validation: (Rule) => [Rule.required()],
    },
  ],
};
export default category;
