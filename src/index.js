import { React, useState } from "react";
import ReactDOM from "react-dom";
import { MainView } from "./components/main-view";

export function Container() {
  const [appState, setAppState] = useState({
    submitting: false,
    githubResponse: null,
    error: false,
  });

  const pause = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  };

  const fetchUrl = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      if (json.message == "Not Found") {
        throw true;
      } else {
        setAppState({
          ...{
            githubResponse: [
              { label: "Username", value: json.login },
              { label: "Name", value: json.name },
              {
                label: "No. of public repos",
                value: json.public_repos,
              },
            ],
          },
        });
      }
    } catch (e) {
      setAppState({ ...{ error: e } });
    }
  };

  const onSubmit = async (value) => {
    if (!appState.submitting) {
      setAppState({ ...{ submitting: true } });
      await pause();
      const url = `https://api.github.com/users/${value}`;
      fetchUrl(url);
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
  //<React.StrictMode>
  <Container />,
  //</React.StrictMode>,
  document.getElementById("root")
);
