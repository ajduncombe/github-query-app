import React from "react";
import ReactDOM from "react-dom";
import { PropTypes } from "prop-types";
import { MainView } from "./components/main-view";

export function Container({ inputValue, onSubmit, submitting, error }) {
  if (submitting) {
    console.log(`${inputValue}`);
    const url = `https://api.github.com/users/${inputValue}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
    error = false;
  }

  return <MainView onSubmit={onSubmit} submitting={submitting} error={error} />;
}

ReactDOM.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
  document.getElementById("root")
);

Container.propTypes = {
  inputValue: PropTypes.string,
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  response: PropTypes.array,
  error: PropTypes.bool,
};
