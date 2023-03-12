import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Logo from "./logo";

export default {
  title: "Components/Atomic/Logo",
  component: Logo,
  args: {
    long: true,
  },
  argTypes: {
    color: { control: "inline-radio", options: ["red", "gray", "green"] },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Long = Template.bind({});

export const Short = Template.bind({});
Short.args = {
  long: false,
};

export const Black = Template.bind({});
Black.args = {
  color: "gray",
};
