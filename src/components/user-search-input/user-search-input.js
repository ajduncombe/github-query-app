import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { TextField, Button, InputAdornment } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LoadingButton from "@mui/lab/LoadingButton";

export function UserSearchInput({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    await onSubmit(inputValue);

    setSubmitting(false);
    setInputValue("");
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", alignItems: "center" }}
    >
      <TextField
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

      {submitting ? (
        <LoadingButton
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
