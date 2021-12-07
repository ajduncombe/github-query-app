import { React } from "react";
import { PropTypes } from "prop-types";
import { UserSearchInput } from "../user-search-input";
import { FeedbackMessage } from "../feedback-message";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

export function MainView({ onSubmit, submitting, response, error }) {
  return (
    <Container
      sx={{
        border: 1,
        borderRadius: 2,
        borderColor: "primary.main",
        padding: 2,
        width: 600,
      }}
    >
      <Box sx={{ mx: "auto" }}>
        <UserSearchInput onSubmit={onSubmit} />
      </Box>
      <Box sx={{ mt: 2 }}>
        <FeedbackMessage
          submitting={submitting}
          response={response}
          error={error}
        />
      </Box>
    </Container>
  );
}

MainView.propTypes = {
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool.isRequired,
  response: PropTypes.array,
  error: PropTypes.bool.isRequired,
};
