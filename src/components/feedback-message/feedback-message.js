import { React } from "react";
import { PropTypes } from "prop-types";
import {
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

export function FeedbackMessage({ submitting, response, error }) {
  if (error) {
    return (
      <Card sx={{ maxWidth: 250 }}>
        <CardContent>
          <Typography sx={{ textAlign: "center" }}>
            There was an error. Please check your input and try again.
          </Typography>
        </CardContent>
      </Card>
    );
  } else if (submitting) {
    return (
      <Card sx={{ maxWidth: 250 }}>
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress size="24px" />
          </Box>
        </CardContent>
      </Card>
    );
  } else if (response) {
    return (
      <TableContainer component={Paper} sx={{ maxWidth: 600 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Parameter</TableCell>
              <TableCell align="left">Data</TableCell>
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
    );
  } else {
    return (
      <Card sx={{ maxWidth: 250 }}>
        <CardContent>
          <Typography sx={{ textAlign: "center" }}>
            Your results will appear here.
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

FeedbackMessage.propTypes = {
  submitting: PropTypes.bool.isRequired,
  response: PropTypes.array,
  error: PropTypes.bool.isRequired,
};

FeedbackMessage.defaultProps = {
  submitting: false,
  error: false,
};
