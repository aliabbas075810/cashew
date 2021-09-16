import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffd11c",
      contrastText: "#fff",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: "'Poppins', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 600,
      lineHeight: 1,
    },
    h2: {
      fontWeight: 600,
      lineHeight: 1,
    },
    h3: {
      fontWeight: 600,
      lineHeight: 1,
    },
    h4: {
      fontWeight: 600,
      lineHeight: 1,
    },
    h5: {
      fontWeight: 600,
      lineHeight: 1,
    },
    h6: {
      fontWeight: 600,
      lineHeight: 1,
    },
  },

  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
      label: {
        color: "black",
        textDecoration: "none",
      },
      contained: {
        boxShadow: "none",
      },
    },
    MuiFormHelperText: {
      root: {
        marginTop: "5px",
      },
      contained: {
        marginLeft: "0",
      },
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
