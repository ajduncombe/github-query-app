import React from "react";
import * as FeedbackMessageStories from "./feedback-message.stories";
import { MainView } from "../components/main-view";
import * as UserSearchInputStories from "./user-search-input.stories";

export default {
  title: "App/Main View",
  component: MainView,
};

const Template = (args) => <MainView {...args} />;

export const Initial = Template.bind({});
Initial.args = {
  ...FeedbackMessageStories.Initial.args,
};

export const Submitting = Template.bind({});
Submitting.args = {
  ...FeedbackMessageStories.Submitting.args,
  onSubmit: UserSearchInputStories.Submitting.args.onSubmit,
};

Submitting.play = async (context) => {
  await UserSearchInputStories.Submitting.play(context);
};

export const Result = Template.bind({});
Result.args = {
  ...FeedbackMessageStories.Result.args,
};

// Result.play = async (context) => {
//   await Submitting.play(context);
// };

export const Error = Template.bind({});
Error.args = {
  ...FeedbackMessageStories.Error.args,
};
