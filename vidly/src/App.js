import React, { Component } from "react";
import LoginForm from "./components/loginForm";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import { getGenres } from "./services/fakeGenreService";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route
              path="/movies/:id"
              render={props => (
                <MovieForm
                  onSaveClick={() => props.history.push("/")}
                  {...props}
                />
              )}
            />
            <Route
              path="/movies/new"
              render={props => (
                <MovieForm
                  onSaveClick={() => props.history.push("/")}
                  {...props}
                />
              )}
            />
            <Route path="/login" component={LoginForm} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/movies" component={Movies} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
          <br />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
