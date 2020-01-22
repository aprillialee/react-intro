import React from "react";
import {
  storiesOf
} from "@storybook/react";

import TextInput from "../TextInput";

storiesOf("Primitives|TextInput", module)
  .add("email", () => < TextInput placeholder = {
      "Email plz"
    }
    />)
    .add("password", () => < TextInput placeholder = {
        "Password"
      }

      />)