import { Modal, Card, Button, ButtonGroup } from 'react-bootstrap';
import {useState} from 'react';
import api from '../Service/api';

function PicComponent(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleClose = () => setModalIsOpen(false);
    const handleShow = () => setModalIsOpen(true);

    function handleApprove (id){ 
        api.approvePicture(id)
        .then(response => {
            console.log(response.data);
            props.onRemove();
        })
        .catch(error => {
            alert('incorrect username or password');
        });
    }

    function handleDecline (id){
        api.declinePicture(id)
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
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} className="card-img" />
        <Card.Body>
            <Card.Title>{props.user}</Card.Title>
            <ButtonGroup size="sm">
                <Button variant="outline-success" onClick={handleApprove}>Approve</Button>
                <Button onClick={()=>{handleShow(props.id)}} variant="outline-danger">Decline</Button>
            </ButtonGroup>
        </Card.Body>
        </Card>
        <Modal show={modalIsOpen} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Decline Picture</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to decline this picture? This will delete it permanently.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="outline-primary" onClick={handleDecline}>Confirm</Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}
export default PicComponent