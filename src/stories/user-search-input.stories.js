import React from "react";
import { UserSearchInput } from "../components/user-search-input";

export default {
  title: "App/Components/User Search Input",
  component: UserSearchInput,
};

/*
export const Default = () => {
  const handleOnSubmit = (value) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("The form value is:", value);
        resolve();
      }, [2000]);
    });
  };

  return <UserSearchInput onSubmit={handleOnSubmit} />;
};
*/

const Template = () => {
  const handleOnSubmit = (value) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("The form value is:", value);
        resolve();
      }, [2000]);
    });
  };

  return <UserSearchInput onSubmit={handleOnSubmit} />;
};

export const Waiting = Template.bind({});
