// .storybook/manager.js

import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";
import myTheme from "./theme";

addons.setConfig({
  theme: myTheme,
});
