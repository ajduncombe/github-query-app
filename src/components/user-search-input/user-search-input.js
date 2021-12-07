import { React, useState } from "react";
import { PropTypes } from "prop-types";
import { TextField, Button, InputAdornment } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export function UserSearchInput({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleOnSubmit = async (event) => {
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
      onSubmit={handleOnSubmit}
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
        <Button
          style={{ marginLeft: 20 }}
          variant="contained"
          size="large"
          disabled
          startIcon={<ArrowForwardIosIcon />}
          type="submit"
        >
          Submitting...
        </Button>
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
