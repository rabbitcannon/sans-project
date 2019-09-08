import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MovieList from "./components/movies/MovieList";

export default class Main extends Component {
    render() {
        return (
            <MovieList />
        );
    }
}

if(document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
