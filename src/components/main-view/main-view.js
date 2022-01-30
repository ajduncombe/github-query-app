import React from "react";
import { PropTypes } from "prop-types";
import { UserSearchInput } from "../user-search-input";
import { FeedbackMessage } from "../feedback-message";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

// MainView is a wrapper for the App's subcomponents, it presents the App in its complete form.
export function MainView({ onSubmit, submitting, githubResponse, error }) {
  return (
    <Container
      sx={{
        border: 2,
        borderRadius: 2,
        borderColor: "text.disabled",
        padding: 2,
        width: 600,
      }}
    >
      <Box>
        <UserSearchInput onSubmit={onSubmit} />
      </Box>
      <Box sx={{ mt: 2 }}>
        <FeedbackMessage
          submitting={submitting}
          githubResponse={githubResponse}
          error={error}
        />
      </Box>
    </Container>
  );
}

MainView.propTypes = {
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  githubResponse: PropTypes.array,
  error: PropTypes.bool,
};
