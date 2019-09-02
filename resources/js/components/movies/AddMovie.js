import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Header, Modal, Button, Icon } from 'semantic-ui-react';

const AddMovieModal = () => (
    <Modal className="animated fadeIn" centered trigger={<Button><FontAwesomeIcon icon={faPlus} />  Add Movie</Button>} closeIcon>
        <Header icon='archive' content='Add a movie to your list!' />
        <Modal.Content>
            <p>
                Your inbox is getting full, would you like us to enable automatic
                archiving of old messages?
            </p>
        </Modal.Content>
        <Modal.Actions>
            <Button color='red'>
                <Icon name='remove' /> No
            </Button>
            <Button color='green'>
                <Icon name='checkmark' /> Yes
            </Button>
        </Modal.Actions>
    </Modal>
)

// export default AddMovieModal

export default () => (<div><AddMovieModal/></div>)
