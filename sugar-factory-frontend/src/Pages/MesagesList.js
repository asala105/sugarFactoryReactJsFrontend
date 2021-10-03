import { Table } from 'react-bootstrap';
import Message from './Message';

function MessagesList() {
    return (
        <>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Message Body</th>
                <th></th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                <Message message="message body here "/>
            </tbody>
        </Table>
        </>
    );
}
export default MessagesList