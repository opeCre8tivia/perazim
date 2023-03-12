import { addons } from "@storybook/addons";

import { create } from "@storybook/theming";

const theme = create({
  base: "light",

  // colors
  colorPrimary: "orange",
  colorSecondary: "red",

  //brand assets
  brandTitle: "Perazim Security",
  brandUrl: "www.perazimsecurity.com",
  brandImage: "./perazimlogo.png",
});

addons.setConfig({
  theme: theme,
});
