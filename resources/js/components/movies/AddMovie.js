import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Header, Modal, Button } from 'semantic-ui-react';

import AddMovieForm from "./AddMovieForm";

class AddMovieModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            showModal: false
        }
    }

    toggleModal = () => {
        this.setState(prevState => ({ showModal: !prevState.showModal }));
    }

    render() {
        return (
            <Modal className="animated fadeIn" size={'tiny'} centered
                   open={this.state.showModal}
                   trigger={
                       <Button color="blue" onClick={this.toggleModal}>
                           <FontAwesomeIcon icon={faPlus} />  Add Movie
                       </Button>
                   } closeIcon>
                <Header>
                    <FontAwesomeIcon icon={faVideo} /> Add a movie to your list!
                </Header>
                <Modal.Content>
                    <AddMovieForm toggleModal={this.toggleModal}
                                  loading={this.state.loading}
                                  getMovieList={this.props.getMovieList} />
                </Modal.Content>
            </Modal>
        );
    }
}

export default AddMovieModal;
