import { Modal, Card, Button, ButtonGroup } from 'react-bootstrap';
import {useState} from 'react';


function PicComponent(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleClose = () => setModalIsOpen(false);
    const handleShow = () => setModalIsOpen(true);

    return (
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} className="card-img" />
        <Card.Body>
            <Card.Title>{props.user}</Card.Title>
            <ButtonGroup size="sm">
                <Button variant="success">Approve</Button>
                <Button onClick={handleShow} variant="danger">Decline</Button>
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
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary">Confirm</Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}
export default PicComponent