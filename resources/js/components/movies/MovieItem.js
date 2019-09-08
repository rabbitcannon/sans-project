import React, {Component} from "react";
import { Header, Table, Rating } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class MovieItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false
        }
    }

    toggleEditMode = () => {

    }

    render() {
        const { movie } = this.props;

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
                <Table.Cell>
                    <a href="#">
                        <FontAwesomeIcon icon={faEdit} size='lg' />
                    </a>
                    &nbsp;&nbsp;
                    <a href="#">
                        <FontAwesomeIcon icon={faTrashAlt} size='lg' />
                    </a>
                </Table.Cell>
            </Table.Row>
        );
    }
}

export default MovieItem;
