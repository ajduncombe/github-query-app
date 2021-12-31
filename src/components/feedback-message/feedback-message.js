import { React } from "react";
import { PropTypes } from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

export function FeedbackMessage({ submitting, response, error }) {
  if (error) {
    return (
      <Alert severity="error">
        There was an error. Please check your input and try again.
      </Alert>
    );
  } else if (submitting) {
    return <Alert severity="warning">Please wait.</Alert>;
  } else if (response) {
    return (
      <Box>
        <Alert severity="success">
          The username &quot;{response[0].value}&quot; was found.
        </Alert>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <b>Parameter</b>
                </TableCell>
                <TableCell align="left">
                  <b>Data</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {response.map(({ label: parameter, value }) => (
                <TableRow key={parameter}>
                  <TableCell>{parameter}</TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  } else {
    return <Alert severity="info">Your results will appear below.</Alert>;
  }
}

FeedbackMessage.propTypes = {
  submitting: PropTypes.bool,
  response: PropTypes.array,
  error: PropTypes.bool,
};

FeedbackMessage.defaultProps = {
  submitting: false,
  error: false,
};
