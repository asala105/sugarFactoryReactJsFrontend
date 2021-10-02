import { Table, Container, Button } from 'react-bootstrap';

function MessagesList() {
    return (
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>Message Body</th>
            <th></th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing ... see more (when the user clicks on see more the whole message is viewed)</td>
            <td><Button variant="success">Approve</Button></td>
            <td><Button variant="danger">Decline</Button></td>
            </tr>

        </tbody>
    </Table>
    );
}
export default MessagesList