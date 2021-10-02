import { Table, Container, Button } from 'react-bootstrap';

function UserList() {
    return (
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>email</th>
            <th>Net worth</th>
            <th></th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>profile pic (small size with a circular border)</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>example@example.com</td>
            <td>Net Worth + Currency</td>
            <td><Button size="sm">Highlight</Button></td>
            <td><Button size="sm">Remove Highlight</Button></td>
            </tr>

        </tbody>
    </Table>
    );
}
export default UserList