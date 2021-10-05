import { Container, Tabs, Tab } from "react-bootstrap";
import NavBar from "../components/NavBar";
import UserList from "../Pages/UserList";
import PicList from "../Pages/PicList";
import MessagesList from "./MesagesList";

function Dashboard() {
  return (
    <>
      <NavBar />
      <Container>
        <UserList />
        {/* </Tab>
            <Tab eventKey="pics" title="List of Pictures">
                <PicList />
            </Tab>
            <Tab eventKey="messages" title="List of Messages">
                <MessagesList />
            </Tab>
            </Tabs> */}
      </Container>
    </>
  );
}
export default Dashboard;
