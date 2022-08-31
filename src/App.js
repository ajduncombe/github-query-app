import React, { useState } from "react";
import { MainView } from "./components/main-view";

// initialState is declared as an object.
// This approach provides a clear reference for the default states and an easy means to apply the default state to the variables in one action (see appState declaration, for example).
const initialState = {
  submitting: false,
  githubResponse: null,
  error: false,
};

// Container provides the main logic that drives the app.
export function Container() {
  const [appState, setAppState] = useState({
    ...initialState,
  });

  // The url is fetched asynchronously, try and catch are used to return a response depending on the success/failure of the fetch operation.
  const fetchUrl = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      if (json.message == "Not Found") {
        throw true; // Triggers the catch statement below.
      } else {
        // prevState returns the App's state as at the last DOM refresh.
        // The arguments of prevState are spread-in, but only submitting and gitHubResponse are further updated in this else statement.
        setAppState((prevState) => ({
          ...prevState,
          submitting: false,
          githubResponse: [
            {
              label: "Username",
              value: json.login ?? <em>No data</em>,
            },
            {
              label: "Name",
              value: json.name ?? <em>No data</em>,
            },
            {
              label: "No. of public repos",
              value: json.public_repos ?? <em>No data</em>,
            },
          ],
        }));
      }
    } catch (e) {
      // appState is reset to its default values, and then the error object updated to true.
      setAppState({
        ...initialState,
        error: e,
      });
    }
  };

  const onSubmit = async (value) => {
    // Check whether the form is in a submitting state, return if true so no further processing occurs
    if (appState.submitting) return;
    // appState is changed when the form is submitted: submitting is set to true and the error state reset for the current request.
    setAppState((prevState) => ({
      ...prevState,
      submitting: true,
      error: false,
    }));
    const url = `https://api.github.com/users/${value}`;
    await fetchUrl(url); // Await the response (i.e. promise) of the fetchUrl function before proceeding.
  };

  return (
    // MainView is called and the required variables passed for control of the subcomponents.
    <MainView
      onSubmit={onSubmit}
      submitting={appState.submitting}
      githubResponse={appState.githubResponse}
      error={appState.error}
    />
  );
}
