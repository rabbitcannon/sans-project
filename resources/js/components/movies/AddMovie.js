import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faVideo, faSave } from '@fortawesome/free-solid-svg-icons';
import { Header, Modal, Button } from 'semantic-ui-react';

import AddMovieForm from "./AddMovieForm";
import Loader from "../Loader";

class AddMovieModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false
        }
    }

    toggleLoading = () => {
        this.setState(prevState => ({
            loading: !prevState.loading
        }));

        let submitButton = document.getElementById("add-movie-btn");
        submitButton.innerHTML = "<img src='assets/images/loader_18.svg' />Saving...";
        submitButton.disabled = true;
    }

    render() {
        console.log(this.state);

        return (
            <Modal className="animated fadeIn" centered
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
                <Modal.Actions>
                    {/*<Button color='red' close>*/}
                    {/*    <FontAwesomeIcon icon={faBan} /> Cancel*/}
                    {/*</Button>*/}
                    <Button id="add-movie-btn" type="submit" color='blue' onClick={this.toggleLoading}>
                        <FontAwesomeIcon icon={faSave} /> Save
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

export default AddMovieModal;
