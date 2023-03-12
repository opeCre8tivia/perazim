import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./button";

const bgChange = (StoryFn: any) => {
  return (
    <div style={{ background: "pink", width: "100%", height: "100vh" }}>
      <StoryFn />
    </div>
  );
};

export default {
  title: "Components/Atomic/Button",
  component: Button,
  argTypes: {},
  decorators: [bgChange],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const BlackButton = Template.bind({});

BlackButton.args = {
  title: "Default",
};
