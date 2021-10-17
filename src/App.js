/*
To do:
- See how you could break this into smaller sub components to make App() less complex, try to utilise Material UI and StoryBook. Extra points: see if you can then compose these sub-components into a main presentational representation of App, that accepts props and callbacks. You can then wrapp the main presentation App view in a controller that is responsible for the logic. Separation of concerns!
- Write unit tests for sub-components, testing in isolation (see: https://jestjs.io/, https://testing-library.com/docs/react-testing-library/intro/)
- Write E2E test for the main app, mocking the gitHub API (see: https://mswjs.io/)
*/

import React, { useState } from "react";

// Set our intial state outside of the main function, allows us to easily reset back to a default state when required
const initialState = {
  query: "",
  querying: false,
  queryMessage: "Querying GitHub user data",
  hasError: false,
  errorMessages: {
    404: "User not found, please check your entry and try again",
    401: "You are not authorised to view this content, sorry.",
    other: "There was an error trying to lookup the user. Please try again.",
  },
  gitHubUserData: null,
};

function App() {
  const [state, setState] = useState({ ...initialState });

  // Event handler to capture user input and set to state, trims start of input to prevent empty spaces
  const handleOnQueryInputChange = (event) => {
    const queryInputValue = event.currentTarget.value.trimStart();

    setState((prevState) => ({ ...prevState, query: queryInputValue }));
  };

  // Main logic to fetch user data via GitHub API on submit
  const handleOnQuerySubmit = async (event) => {
    event.preventDefault();

    // Move into querying state and reset error state (if previous lookup caused error)
    setState((prevState) => ({
      ...prevState,
      querying: true,
      hasError: false,
    }));

    try {
      const response = await fetch(
        `https://api.github.com/users/${state.query}`
      );

      const gitHubUserData = await response.json();

      // Fetch response returns some helper methods and properties, check if the response was okay
      if (response.ok) {
        setState({ ...initialState, gitHubUserData: { ...gitHubUserData } });
      } else {
        // If response was not okay, inspect response status code and update state to allow a helpfull message to be passed to the user
        switch (response.status) {
          case 404:
            setState((prevState) => ({
              ...initialState,
              hasError: "404",
              querying: false,
              query: prevState.query,
            }));

            break;

          case 401:
            setState((prevState) => ({
              ...initialState,
              hasError: "401",
              querying: false,
              query: prevState.query,
            }));

            break;

          default:
            throw new Error();
        }
      }
      // If it all went terribly wrong, don't crash the app. Catch the error and let the user know (so they can try again)
    } catch (error) {
      setState((prevState) => ({
        ...initialState,
        hasError: "other",
        querying: false,
        query: prevState.query,
      }));

      console.error(error);
    }
  };

  // Simple utility function to get the feeback message (if githubUserData is not set in state)
  const getFeedbackMessage = () => {
    if (state.querying) {
      return state.queryMessage;
    }

    if (!state.querying && state.hasError) {
      return state.errorMessages[state.hasError];
    }

    return "Lookup a GitHub user's account data, start by entering a valid username in the search field above.";
  };

  // Render the required HTML UI, note: I never do inline styles, this is just for convinience
  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: "1em" }}>
      <form
        onSubmit={handleOnQuerySubmit}
        noValidate
        autoComplete="off"
        name="GitHubUserQueryForm"
        style={{ marginBottom: "1em", display: "flex", flexWrap: "wrap" }}
      >
        <label
          htmlFor="github-user-query"
          style={{ display: "block", marginBottom: "0.5em", width: "100%" }}
        >
          Enter a valid GitHub username:
        </label>

        <input
          id="github-user-query"
          type="text"
          name="query"
          value={state.query}
          disabled={state.querying}
          onChange={handleOnQueryInputChange}
          style={{ flex: "1 1 auto", height: "2em", marginRight: "0.25em" }}
        />
        <button
          type="submit"
          disabled={state.query.length < 1 || state.querying}
          style={{ flex: "0 0 auto" }}
        >
          {state.querying ? "Querying" : "Query"}
        </button>
      </form>

      <article style={{ marginBottom: "1em" }}>
        {state.gitHubUserData ? (
          <dl>
            <dt>Username:</dt>
            <dd>{state.gitHubUserData.login ?? "Not set"}</dd>
            <dt>Name:</dt>
            <dd>{state.gitHubUserData.name ?? "Not set"}</dd>
            <dt>Bio:</dt>
            <dd>{state.gitHubUserData.bio ?? "Not set"}</dd>
            <dt>Public repositories:</dt>
            <dd>{state.gitHubUserData.public_repos ?? "Not set"}</dd>
          </dl>
        ) : (
          <p>{getFeedbackMessage()}</p>
        )}
      </article>
    </div>
  );
}

export default App;
