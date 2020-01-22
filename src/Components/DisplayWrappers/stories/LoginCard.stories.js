import React from "react";
import {
  storiesOf
} from "@storybook/react";

import LoginCard from "../LoginCard";

storiesOf("DisplayWrappers|LoginCard", module)
  .add("standard", () => ( < LoginCard / > ))