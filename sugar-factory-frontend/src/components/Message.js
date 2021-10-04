import { Modal, Button, ButtonGroup } from 'react-bootstrap';
import { React, useState } from 'react';
import api from '../Service/api';

function Message(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [expanded, setExpended] = useState(false);

    const handleClose = () => setModalIsOpen(false);
    const handleShow = () => setModalIsOpen(true);
    
    function viewMore(){
        setExpended(true);
    }
    function viewLess(){
        setExpended(false);
    }

    function handleApprove (id){ 
        api.approveMessage(id)
        .then(response => {
            console.log(response.data);
            props.onRemove();
        })
        .catch(error => {
            alert('incorrect username or password');
        });
    }

    function handleDecline (id){
        api.declineMessage(id)
        .then(response => {
            console.log(response.data);
            props.onRemove();
        })
        .catch(error => {
            alert('Oops! An error has occurred :(');
        });
    }

    return (
    <>             
    <tr id={props.id}>
            {expanded? 
            <td>{props.message} <a onClick={viewLess}> Less..</a></td>:
            <td>{props.message.substr(0,100)} <a onClick={viewMore}> More..</a></td>}
            <td>
            <ButtonGroup size="sm">
                <Button variant="outline-success" onClick={() => {handleApprove(props.id)}}>Approve</Button>
                <Button onClick={handleShow} variant="outline-danger">Decline</Button>
            </ButtonGroup>
        </td>
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
                <Button variant="primary" onClick={()=>{handleDecline(props.id)}}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    </>
    );
}

export default Message;