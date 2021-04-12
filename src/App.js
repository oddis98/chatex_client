import "./App.css";
import React from "react";
import CreateUser from "./components/CreateUser.js";
import GetAllUsers from "./components/GetAllUsers.js";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage.js";
import UserPage from "./components/UserPage.js";
import Home from "./components/Home/Home.js";
import Nav from "./components/Nav.js";

function App() {
  const theme = createMuiTheme({
    palette: {
      type: "light",
      primary: {
        main: "#94E4F5",
        contrastText: "#000",
      },
      secondary: {
        main: "#ffffff",
        contrastText: "#fff",
      },
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/https://oddis98.github.io">
            <Home />
          </Route>
          <Route exact path="/https://oddis98.github.io/home">
            <LandingPage />
          </Route>
          <Route exact path="/https://oddis98.github.io/create">
            <CreateUser />
          </Route>
          <Route exact path="/https://oddis98.github.io/users">
            <GetAllUsers />
          </Route>
          <Route path="/https://oddis98.github.io/users/:id">
            <UserPage />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
