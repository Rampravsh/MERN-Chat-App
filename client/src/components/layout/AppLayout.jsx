import React from "react";
import Header from "./Header";
import { Grid } from "@mui/material";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <title>ChitChat</title>
        <meta name="description" content="this is the chat App call ChitChat" />
        <Header />
        <Grid container height={"calc(100vh-4rem)"}>
          <Grid item xs={4} height={"100%"} bgcolor="primary.main">
            first
          </Grid>
          <Grid item xs={4} height={"100%"} bgcolor="primary.main">
            <WrappedComponent {...props} />
          </Grid>
          <Grid item xs={4} height={"100%"} bgcolor="primary.main">
            third
          </Grid>
        </Grid>

        <div>Footer</div>
      </>
    );
  };
};

export default AppLayout;
