import PicComponent from '../Pages/PicComponent';
import { Row, Col} from 'react-bootstrap'
import img from "../images/img_avatar6.png";

function PicList() {
    return (
        <Row xs={2} md={4} className="g-4">
        {Array.from({ length: 10 }).map((_, idx) => (
            <Col>
            <PicComponent image = {img} user='John Doe'/>
            </Col>
        ))}
        </Row>
    );
}
export default PicList 