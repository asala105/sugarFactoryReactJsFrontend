import PicComponent from '../Pages/PicComponent';
import { Row, Col} from 'react-bootstrap'

function PicList() {
    return (
        <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 10 }).map((_, idx) => (
            <Col>
            <PicComponent />
            </Col>
        ))}
        </Row>
    );
}
export default PicList 