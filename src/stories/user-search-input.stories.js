import React from "react";
import { action } from "@storybook/addon-actions";
import { userEvent, within } from "@storybook/testing-library";
import { UserSearchInput } from "../components/user-search-input";

export default {
  title: "App/Components/User Search Input",
  component: UserSearchInput,
};

const Template = (args) => <UserSearchInput {...args} />;

Template.args = {
  onSubmit: async (query) => {
    action("onSubmit")(query);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, [2000]);
    });
  },
};

export const Initial = Template.bind({});

export const Submitting = Template.bind({});

Submitting.args = {
  ...Template.args,
  onSubmit: async (query) => {
    action("onSubmit")(query);
    return new Promise(() => {});
  },
};

Submitting.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByRole("textbox"), "ajduncombe", {
    delay: 100,
  });
  await userEvent.click(canvas.getByRole("button"));
};
