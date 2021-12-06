import React from "react";
//import { FeedbackMessage } from "../components/feedback-message";
import * as FeedbackMessageStories from "./feedback-message.stories";
import { MainView } from "../components/main-view";
//import { UserSearchInput } from "../components/user-search-input";
import * as UserSearchInputStories from "./user-search-input.stories";

export default {
  title: "App/Main View",
  component: MainView,
};

const Template = (args) => <MainView {...args} />;

export const Waiting = Template.bind({});
Waiting.args = {
  ...FeedbackMessageStories.Waiting.args,
  ...UserSearchInputStories.Waiting.args,
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
