import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faVideo, faSave } from '@fortawesome/free-solid-svg-icons';
import { Header, Modal, Button } from 'semantic-ui-react';

import AddMovieForm from "./AddMovieForm";

class AddMovieModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }
    }

    render() {
        return (
            <Modal className="animated fadeIn" size={'tiny'} centered
                   trigger={
                       <Button color="blue">
                           <FontAwesomeIcon icon={faPlus} />  Add Movie
                       </Button>
                   } closeIcon>
                <Header>
                    <FontAwesomeIcon icon={faVideo} /> Add a movie to your list!
                </Header>
                <Modal.Content>
                    <AddMovieForm loading={this.state.loading} />
                </Modal.Content>
            </Modal>
        );
    }
}

export default AddMovieModal;
