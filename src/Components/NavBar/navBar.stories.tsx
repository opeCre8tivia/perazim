import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import NavBar from ".";

export default {
  title: "NavBar/Nav Bar",
  component: NavBar,
  argTypes: {},
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = () => <NavBar />;

export const WebNavBar = Template.bind({});
