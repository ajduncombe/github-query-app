import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { TextField, Button, InputAdornment } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LoadingButton from "@mui/lab/LoadingButton";

// UserSearchInput provides a TextField for username input.
export function UserSearchInput({ onSubmit }) {
  // State variables have been declared using destructuring.
  const [inputValue, setInputValue] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    // preventDefault allows React to override the default action when a form is submitted.
    event.preventDefault();
    setSubmitting(true);

    // Await a response (i.e. promise) from the onSubmit function in App.js before proceeding.
    await onSubmit(inputValue);

    setSubmitting(false);
    setInputValue("");
  };

  // TextField is a controlled input, handleChange is called each time the input changes (i.e. as the user types).
  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", alignItems: "center" }}
    >
      {/* TextField is disabled when the form is submitting to prevent further input. */}
      <TextField
        data-test="text-field"
        fullWidth
        required
        id="outlined-required"
        label="GitHub username"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        value={inputValue}
        onChange={handleChange}
        disabled={submitting}
      />

      {/* LoadingButton changes depending on the submitting state of the form and whether TextField is empty or not. */}
      {submitting ? (
        <LoadingButton
          data-test="loading-button"
          style={{ marginLeft: 20 }}
          variant="contained"
          size="large"
          loading
          loadingPosition="start"
          startIcon={<ArrowForwardIosIcon />}
          type="submit"
        >
          Search
        </LoadingButton>
      ) : (
        <Button
          data-test="submit-button"
          style={{ marginLeft: 20 }}
          variant="contained"
          size="large"
          disabled={!inputValue}
          startIcon={<ArrowForwardIosIcon />}
          type="submit"
        >
          Search
        </Button>
      )}
    </form>
  );
}

UserSearchInput.propTypes = {
  onSubmit: PropTypes.func,
};
