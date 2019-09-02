import React, {Component} from "react";
import { Header, Table, Rating } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

class MovieItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { movie } = this.props;
console.log(typeof movie.year);
        return (
            <Table.Row className="text-center animated fadeIn">
                <Table.Cell singleLine>
                    <Header as='h5' textAlign='center'>
                        {movie.title}
                    </Header>
                </Table.Cell>
                <Table.Cell singleLine>{movie.format}</Table.Cell>
                <Table.Cell singleLine>{movie.length} <FontAwesomeIcon icon={faStopwatch} /></Table.Cell>
                <Table.Cell singleLine>{movie.year}</Table.Cell>
                <Table.Cell>
                    <Rating icon='star' defaultRating={movie.rating} maxRating={5} disabled />
                </Table.Cell>
            </Table.Row>
        );
    }
}

export default MovieItem;
