import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import SectionHeading from "./sectionHeading";

export default {
  title: "Components/Atomic/Section Heading",
  component: SectionHeading,
  argTypes: {
    // heading: { control: "text" },
  },
} as ComponentMeta<typeof SectionHeading>;

const Template: ComponentStory<typeof SectionHeading> = (args) => (
  <SectionHeading {...args} />
);

export const Black = Template.bind({});
Black.args = {
  heading: "Black Section Heading",
};

export const Red = Template.bind({});
Red.args = {
  heading: "Read Section Heading",
  color: "red",
};
