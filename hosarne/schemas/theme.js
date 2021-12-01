const color = {
  name: "theme",
  title: "Farge",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Navn",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "hex",
      title: "Hex",
      type: "string",
      validation: (Rule) =>
        Rule.custom((value) => {
          const isColorCode = /^#[0-9A-F]{6}$/i.test(value);
          if (!isColorCode) {
            return "Farge må være en hex-kode, eks: #ff02ca";
          }
          return true;
        }),
    },
  ],
};
export default color;
