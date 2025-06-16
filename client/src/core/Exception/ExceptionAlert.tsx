import { Alert, AlertColor } from "@mui/material";
import React from "react";
import { JSX } from "react";

export function ExceptionAlert(
  message: string,
  severity: AlertColor
): JSX.Element {
  return <Alert severity={severity}>{message}</Alert>;
}
