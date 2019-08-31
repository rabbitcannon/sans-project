import React, {Component} from "react";
import { Header, Table, Rating } from 'semantic-ui-react'

class MovieItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { movie } = this.props;

        return (
            <Table.Row className="text-center">
                <Table.Cell singleLine>
                    <Header as='h5' textAlign='center'>
                        {movie.title}
                    </Header>
                </Table.Cell>
                <Table.Cell singleLine>{movie.format}</Table.Cell>
                <Table.Cell singleLine>{movie.length}</Table.Cell>
                <Table.Cell singleLine>{movie.year}</Table.Cell>
                <Table.Cell>
                    {movie.rating}
                    <Rating defaultRating={movie.rating} maxRating={5} disabled />
                    <Rating icon='star' defaultRating={movie.rating} maxRating={5} disabled />
                </Table.Cell>
            </Table.Row>
        );
    }
}

export default MovieItem;
