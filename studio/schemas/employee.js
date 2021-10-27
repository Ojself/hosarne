export default {
  name: "employee",
  title: "Ansatte",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Stilling",
      type: "string",
    },
    {
      name: "name",
      title: "navn",
      type: "string",
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
