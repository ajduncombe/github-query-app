import React, { useState } from "react";
import { UserSearchInput } from "../components/user-search-input";

const config = {
  title: "App/Components/User Search Input",
  component: UserSearchInput,
};

/*
function Default(args) {
  const [value, setValue] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleOnSubmit = () => {
    setSubmitting(true);

    setTimeout(() => {
      console.log("The form value is:", value);
      setSubmitting(false);
    }, [2000]);
  };

  return (
    <UserSearchInput
      onSubmit={handleOnSubmit}
      submitting={submitting}
      inputValue={value}
      onInputValueChange={(value) => setValue(value)}
    />
  );
}
*/

function Default(args) {
  const handleOnSubmit = (value) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("The form value is:", value);
        resolve();
      }, [2000]);
    });
  };

  return <UserSearchInput onSubmit={handleOnSubmit} />;
}

export default config;
export { Default };
