import { Card, Button, ButtonGroup } from 'react-bootstrap';
import img from "../images/img_avatar6.png";
function PicComponent() {
    /* note that we will pass the img and user full name from PicList to here! */
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} className="card-img" />
        <Card.Body>
            <Card.Title>User Full Name Here</Card.Title>
            <ButtonGroup size="sm">
                <Button variant="success">Approve</Button>
                <Button variant="danger">Decline</Button>
            </ButtonGroup>
        </Card.Body>
        </Card>
    );
}
export default PicComponent