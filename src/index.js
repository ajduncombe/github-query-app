import React from "react";
import ReactDOM from "react-dom";
import { PropTypes } from "prop-types";
import { MainView } from "./components/main-view";

export function Container({ submitting, githubResponse, error }) {
  const onSubmit = (value, submitting) => {
    console.log({ submitting });
    if (submitting) {
      console.log(`${value}`);
      const url = `https://api.github.com/users/${value}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data));
      error = false;
      console.log({ error });
      githubResponse = [{ label: "Username", value: value }];
      console.log(githubResponse);
    }
  };

  return (
    <MainView
      onSubmit={onSubmit}
      submitting={submitting}
      githubResponse={githubResponse}
      error={error}
    />
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
  document.getElementById("root")
);

Container.propTypes = {
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  githubResponse: PropTypes.array,
  error: PropTypes.bool,
};
