import React from "react";
import { Route, Switch, Link, useLocation } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Paper,
  makeStyles,
  CssBaseline,
} from "@material-ui/core";

import { ReactComponent as Logo } from "../logo.svg";
import Controls from "../components/Controls/Controls";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Thanks from "../pages/Thanks";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  cta: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1519219788971-8d9797e0928e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1028&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundColor: theme.palette.primary.main,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  formArea: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    margin: theme.spacing(4, 10),
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
  logo: {
    margin: theme.spacing(3, 0),
    height: "6.25rem",
    width: "13rem",
  },
}));

const App = () => {
  const classes = useStyles();
  const location = useLocation();
  const currentPath = location.pathname;

  let ctaAction =
    currentPath === "/login" ? (
      <Controls.Button
        variant="contained"
        color="primary"
        text="Register"
        size="large"
        component={Link}
        to="/"
      ></Controls.Button>
    ) : (
      <Controls.Button
        variant="contained"
        color="primary"
        text="Login"
        size="large"
        component={Link}
        to="/login"
      ></Controls.Button>
    );

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />

      <Grid
        item
        xs={false}
        sm={4}
        md={5}
        className={classes.cta}
        component={Paper}
      >
        <div className={classes.paper}>
          <Logo className={classes.logo} />
          <Box mb={3}>
            <Typography component="h3" variant="h4">
              Get reminders when your payments are due.
            </Typography>
          </Box>
          <Typography>
            Once your cashew account is created, you will be able to see and
            manage your payments through our website or our iOS and Android
            Apps. Don’t worry, we will send you reminders when your payments are
            due.
          </Typography>
          {ctaAction}
        </div>
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        md={7}
        component={Paper}
        elevation={6}
        className={classes.formArea}
        square
      >
        <div className={classes.paper}>
          <Switch>
            <Route exact path="/" component={Register} />
            <Route exact path="/thank-you" component={Thanks} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Grid>
    </Grid>
  );
};

export default App;
