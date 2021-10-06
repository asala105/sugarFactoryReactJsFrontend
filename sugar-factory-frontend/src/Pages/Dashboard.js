import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import UserList from "../Pages/UserList";

function Dashboard() {
  return (
    <>
      <NavBar />
      <Container>
        <UserList />
      </Container>
    </>
  );
}
export default Dashboard;
