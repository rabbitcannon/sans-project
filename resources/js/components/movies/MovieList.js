import React, {Component} from "react";
import {Header, Table} from "semantic-ui-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilm} from "@fortawesome/free-solid-svg-icons";
import AddMovie from "./AddMovie";
import MovieItem from "./MovieItem";
import Loader from "../Loader";
import Axios from "axios";

const userID = document.getElementById("user_id").value;

class MovieList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            movies: null
        }
    }

    componentDidMount() {
        this.getMovieList();
    }

    getMovieList = () => {
        Axios.get(`/movie/${userID}/list`)
            .then((response) => {
                this.setState({
                    isLoading: false,
                    movies: response.data
                });
            }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        const { isLoading, movies } = this.state;

        return (
            <div className="container animated fadeIn">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="card-header">
                                <Header as='h3'>
                                    <div className="float-left">
                                        <FontAwesomeIcon icon={faFilm} /> My Movies
                                    </div>
                                    <div className="float-right">
                                        <AddMovie getMovieList={this.getMovieList} />
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
                                            <Table.HeaderCell>Modify</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        {!isLoading ? movies.map((movie) =>
                                            <MovieItem key={movie.id} movie={movie} />
                                        ) :
                                            <Table.Row className="text-center">
                                                <Table.Cell colSpan={6}>
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

export default MovieList;
