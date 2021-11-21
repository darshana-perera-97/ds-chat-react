import { Grid } from "@mui/material";
import React from "react";
import HomePage from "../HomePage/HomePage";
import Left from "./Layouts/Left";
import Messenger from "./Layouts/Messenger";

export default function Common() {
  return (
    <div style={{ display: "flex" }}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Left />
        </Grid>
        <Grid item xs={8}>
          <HomePage />
        </Grid>
        <Grid item xs={2}>
          <Messenger />
        </Grid>
      </Grid>
    </div>
  );
}
