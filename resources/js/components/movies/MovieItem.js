import React, {Component} from "react";
import {Header, Table, Rating, Input, Form, Dropdown, Confirm} from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch, faEdit, faTrashAlt, faSave, faBan } from '@fortawesome/free-solid-svg-icons';
import Toastr from "toastr";

const formatOptions = [
    {key: '1', text: 'VHS', value: 1},
    {key: '2', text: 'Blu-Ray', value: 2},
    {key: '3', text: 'Streaming', value: 3},
];

class MovieItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            errorTitle: false,
            errorFormat: false,
            errorLength: false,
            errorYear: false,
            errorRating: false,
            formats: [],
            formatSelect: null,
            rating: null,
            confirmState: false,
        }
    }

    componentDidMount = () => {
        Toastr.options.newestOnTop = true;
        Toastr.options.showMethod = "slideDown";
        Toastr.options.positionClass = "toast-bottom-right";
    }

    handleCancel = () => this.setState({ confirmState: false })
    handleOpen = () => this.setState({ confirmState: true })

    toggleEditMode = () => {
        this.setState({ editMode: !this.state.editMode });
    }

    handleRating = (event, { rating, maxRating }) => {
        this.setState({ rating, maxRating });
    }

    deleteMovie = (id) => {
        this.setState({ confirmState: false }, this.props.deleteMovie(id));
    }

    render() {
        const { movie } = this.props;
        const { editMode, errorTitle, errorFormat, errorLength, errorYear } = this.state;

        let deleteMessage = `Are you sure you wiah to delete: ${movie.title}?`

        return (
            <Table.Row className="text-center animated fadeIn">
                <Table.Cell singleLine>
                    <Header as='h5' textAlign='center'>
                        {editMode === false
                            ? movie.title
                            : <Form.Field size='mini' error={errorTitle} id='form-input-control-title' control={Input}
                                          value={movie.title} />
                        }
                    </Header>
                </Table.Cell>
                <Table.Cell singleLine>
                    {editMode === false
                    ? movie.format
                    : <Dropdown
                        placeholder='Format'
                        selection
                        options={formatOptions}
                        defaultValue={movie.format}
                        />
                        // <Form.Select size='mini' error={errorFormat} options={formatOptions}
                        //     onChange={(event, { value }) => this.setState({formatSelect: value})} />
                    }
                </Table.Cell>
                <Table.Cell singleLine>
                    {editMode === false
                        ? <span>{movie.length} <FontAwesomeIcon icon={faStopwatch} /></span>
                        : <Form.Field size='mini' error={errorLength} id='form-input-control-length' control={Input}
                                      value={movie.length} />
                    }
                </Table.Cell>
                <Table.Cell singleLine>
                    {editMode === false
                        ? movie.year
                        : <Form.Field size='mini' error={errorYear} id='form-input-control-year' control={Input}
                                      value={movie.year} />
                    }
                </Table.Cell>
                <Table.Cell>
                    {editMode === false
                        ? <Rating icon='star' defaultRating={movie.rating} maxRating={5} disabled />
                        : <Rating icon='star' maxRating={5} onRate={this.handleRating} size='small' />
                    }

                </Table.Cell>
                <Table.Cell>
                    <a href="#" onClick={this.toggleEditMode}>
                        <FontAwesomeIcon icon={faEdit} size='lg' />
                    </a>
                    &nbsp;&nbsp;
                    <a href="#" onClick={this.handleOpen}>
                        <FontAwesomeIcon icon={faTrashAlt} size='lg' />
                    </a>

                    <Confirm
                        size='mini'
                        open={this.state.confirmState}
                        onCancel={this.handleCancel}
                        onConfirm={() => this.deleteMovie(movie.id)}
                        content={deleteMessage}
                    />

                    {/*header='This is a large confirm'*/}
                    {/*open={this.state.open}*/}
                    {/*onCancel={this.handleCancel}*/}
                    {/*onConfirm={this.handleConfirm}*/}
                    {/*size='large'*/}
                </Table.Cell>
            </Table.Row>
        );
    }
}

export default MovieItem;
