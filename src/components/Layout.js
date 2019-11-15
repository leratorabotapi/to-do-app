import React, { memo } from "react";
import { AppBar, Toolbar, Typography, Paper } from "@material-ui/core";

const Layout = memo(props => (
  <Paper 
    elevation={0}
    style={{ padding: 0, margin: 40, backgroundColor: "#fff" }}
  >
    <AppBar color="inherit" position="static" style={{ height: 64 }}>
      <Toolbar style={{ height: 64 }}>
        <Typography  style={{ fontSize: 22 }} color="inherit">My To-Do App</Typography>
      </Toolbar>
    </AppBar>
    {props.children}
  </Paper>
));

export default Layout;
