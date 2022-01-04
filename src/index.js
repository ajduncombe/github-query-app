import React, { useState } from "react";
import ReactDOM from "react-dom";
import { MainView } from "./components/main-view";

const initialState = {
  submitting: false,
  githubResponse: null,
  error: false,
};

export function Container() {
  const [appState, setAppState] = useState({
    ...initialState,
  });

  const fetchUrl = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      if (json.message == "Not Found") {
        throw true;
      } else {
        setAppState((prevState) => ({
          ...prevState,
          submitting: false,
          githubResponse: [
            {
              label: "Username",
              value: json.login == null ? "No data" : json.login,
            },
            {
              label: "Name",
              value: json.name == null ? "No data" : json.name,
            },
            {
              label: "No. of public repos",
              value: json.public_repos == null ? "No data" : json.public_repos,
            },
          ],
        }));
      }
    } catch (e) {
      setAppState({
        ...initialState,
        error: e,
      });
    }
  };

  const onSubmit = async (value) => {
    if (!appState.submitting) {
      setAppState((prevState) => ({
        ...prevState,
        submitting: true,
        error: false,
      }));
      const url = `https://api.github.com/users/${value}`;
      await fetchUrl(url);
    }
  };

  return (
    <MainView
      onSubmit={onSubmit}
      submitting={appState.submitting}
      githubResponse={appState.githubResponse}
      error={appState.error}
    />
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>,
  document.getElementById("root")
);
