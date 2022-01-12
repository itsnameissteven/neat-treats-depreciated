// .storybook/YourTheme.js

import { create } from "@storybook/theming";

export default create({
  base: "dark",

  colorPrimary: "#FF4785",
  colorSecondary: "#1EA7FD",

  // UI
  appBg: "#2f2f2f",
  appBorderColor: "rgba(255,255,255,.1)",
  appBorderRadius: 4,
  appContentBg: "#1F2028",

  // Typography
  fontBase:
    '"Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode:
    'ui-monospace, Menlo, Monaco, "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Droid Sans Mono", "Courier New", monospace',

  // Text colors
  textColor: "#FFFFFF",
  textInverseColor: "#fff",
  textMutedColor: "#999999",

  // Toolbar default and active colors
  barBg: "#333333",
  barSelectedColor: "#1EA7FD",
  barTextColor: "#999999",

  // Form colors
  inputBg: "#3f3f3f",
  inputBorder: "rgba(0,0,0,.3)",
  inputBorderRadius: 4,
  inputTextColor: "#FFFFFF",

  brandTitle: "My custom storybook",
  brandUrl: "https://example.com",
  brandImage: "https://place-hold.it/350x150",
});
