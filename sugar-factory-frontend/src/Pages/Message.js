import { Modal, Table, Container, Button } from 'react-bootstrap';
import { React, useState } from 'react';

function Message(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleClose = () => setModalIsOpen(false);
    const handleShow = () => setModalIsOpen(true);

    return (
    <>             
    <tr>
        <td>{props.message} see more (when the user clicks on see more the whole message is viewed)</td>
        <td><Button variant="success">Approve</Button></td>
        <td><Button onClick={handleShow} variant="danger">Decline</Button></td>
    </tr>
            <Modal show={modalIsOpen} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Decline Message</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to decline this message? This will delete it permanently.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary">Confirm</Button>
            </Modal.Footer>
        </Modal>
    </>
    );
}

export default Message;