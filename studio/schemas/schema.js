import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import blockContent from "./blockContent";
import certificate from "./certificate";
import employee from "./employee";
import history from "./history";
import projects from "./projects";
import services from "./services";
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    certificate,
    employee,
    history,
    projects,
    services,
    blockContent,
  ]),
});
