import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./blockContent";
import photographer from './photographer'
import theme from "./theme";
import event from "./event";
import human from "./human";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    human,
    event,
    theme,
    photographer,
    blockContent,
  ]),
});
