import { React } from "react";
import { PropTypes } from "prop-types";
import { UserSearchInput } from "../user-search-input";
import { FeedbackMessage } from "../feedback-message";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export function MainView({ onSubmit, submitting, response, error }) {
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
          response={response}
          error={error}
        />
      </Box>
    </Container>
  );
}

MainView.propTypes = {
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  response: PropTypes.array,
  error: PropTypes.bool,
};
