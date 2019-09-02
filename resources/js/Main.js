import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { Header, Table } from 'semantic-ui-react';
import Axios from 'axios';

import MovieItem from "./components/movies/MovieItem";
import Loader from "./components/Loader";

import AddMovie from "./components/movies/AddMovie";

const userID = document.getElementById("user_id").value;

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            movies: null
        }
    }

    componentDidMount = () => {
        this.getMovieList();
    }

    getMovieList = () => {
        Axios.get(`/movie/${userID}/list`)
            .then((response) => {
                this.setState({
                    isLoading: false,
                    movies: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                // console.log(this.state.movies)
            });
    }



    render() {
        return (
            <div className="container animated fadeIn">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <Header as='h3'>
                                    <div className="float-left">
                                        <FontAwesomeIcon icon={faFilm} /> My Movies
                                    </div>
                                    <div className="float-right">
                                        <AddMovie/>
                                    </div>
                                </Header>
                            </div>

                            <div className="card-body">
                                <Table celled padded>
                                    <Table.Header>
                                        <Table.Row className="text-center">
                                            <Table.HeaderCell>Title</Table.HeaderCell>
                                            <Table.HeaderCell>Format</Table.HeaderCell>
                                            <Table.HeaderCell>Length</Table.HeaderCell>
                                            <Table.HeaderCell>Year</Table.HeaderCell>
                                            <Table.HeaderCell>Rating</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        {!this.state.isLoading ? this.state.movies.map((movie) =>
                                            <MovieItem key={movie.id} movie={movie}/>
                                        ) : <Table.Row className="text-center">
                                                <Table.Cell colSpan={5}>
                                                    <Loader loaderSize="43"/>
                                                </Table.Cell>
                                            </Table.Row>
                                        }
                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
