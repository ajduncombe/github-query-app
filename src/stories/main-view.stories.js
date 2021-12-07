import React from "react";
import * as FeedbackMessageStories from "./feedback-message.stories";
import { MainView } from "../components/main-view";
import { expect } from "@storybook/jest";
import { userEvent, waitFor, within } from "@storybook/testing-library";
//import * as UserSearchInputStories from "./user-search-input.stories";

export default {
  title: "App/Main View",
  component: MainView,
};

const Template = (args) => <MainView {...args} />;

export const Waiting = Template.bind({});
Waiting.args = {
  ...FeedbackMessageStories.Waiting.args,
};

export const Submitting = Template.bind({});
Submitting.args = {
  ...FeedbackMessageStories.Submitting.args,
};

export const Result = Template.bind({});
Result.args = {
  ...FeedbackMessageStories.Result.args,
};

export const Error = Template.bind({});
Error.args = {
  ...FeedbackMessageStories.Error.args,
};

export const Submitted = Template.bind({});
Submitted.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByRole("textbox"), "ajduncombe");
  await userEvent.click(canvas.getByRole("button"));

  await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
};
