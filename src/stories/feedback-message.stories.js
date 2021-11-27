import React from "react";
import { FeedbackMessage } from "../components/feedback-message";

export default {
  title: "App/Components/Feedback Message",
  component: FeedbackMessage,
};

const Template = (args) => <FeedbackMessage {...args} />;

export const Waiting = Template.bind({});
Waiting.args = {
  submitting: false,
  error: false,
};

export const Submitting = Template.bind({});
Submitting.args = {
  submitting: true,
  error: false,
};

export const Result = Template.bind({});
Result.args = {
  submitting: false,
  response: [
    {
      label: "Login",
      value: "ajduncombe",
    },
    {
      label: "Name",
      value: "Andrew Duncombe",
    },
    {
      label: "No. of public repos",
      value: "999",
    },
    {
      label: "Test label",
      value: "Test value",
    },
  ],
  error: false,
};

export const Error = Template.bind({});
Error.args = {
  submitting: false,
  error: true,
};
