import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { saveMovie, getMovie, getMovies } from "./../services/fakeMovieService";

class MovieForm extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", rate: "" },
    genres: [],
    errors: {}
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "-", key: "firstItem" }, ...getGenres()];
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    let movieInDb = getMovie(movieId);
    console.log(movieInDb);

    if (!movieInDb) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movieInDb) });
  }

  mapToViewModel = m => {
    return {
      _id: m._id,
      title: m.title,
      genreId: m.genre._id,
      numberInStock: m.numberInStock,
      rate: m.dailyRentalRate
    };
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .required()
      .label("Genre")
      .min(0),
    rate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Genre")
  };

  doSubmit = () => {
    const movie = { ...this.state.data };
    const newMovie = {
      name: movie.title,
      genreId: movie.genreId,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.rate
    };
    saveMovie(newMovie);

    const movieindb = getMovies();
    console.log(movieindb);

    this.props.onSaveClick();
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect(this.state.genres, "genreId", "Genre")}
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("rate", "Rate")}
          {this.renderSubmitButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
