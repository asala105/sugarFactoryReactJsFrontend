import {Container, Tabs, Tab} from 'react-bootstrap';
import NavBar from '../components/NavBar';
import UserList from '../Pages/UserList';
import PicList from '../Pages/PicList';
import MessagesList from './MesagesList';

function Dashboard() {
    return (<>
            <NavBar />
            <Container>
            <Tabs defaultActiveKey="userList" id="uncontrolled-tab-example" className="mb-3 m-4">
            <Tab eventKey="userList" title="List of Users">
                <UserList />
            </Tab>
            <Tab eventKey="pics" title="List of Pictures">
                <PicList />
            </Tab>
            <Tab eventKey="messages" title="List of Messages">
                <MessagesList />
            </Tab>
            </Tabs>
            </Container>
            </>
    );
}
export default Dashboard