import { configure } from "@storybook/react";
import { addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";

// Option defaults.
addParameters({
  options: {
    theme: themes.normal
  }
});

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
