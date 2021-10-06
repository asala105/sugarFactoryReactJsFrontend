import { useHistory, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import classes from "./NavBar.module.css";
import Navbar from "react-bootstrap/Navbar";
import api from "../Service/api";
import img from "../images/dashboard-logo.png";

function NavBar() {
  const history = useHistory();
  const logout = (event) => {
    event.preventDefault();
    console.log("logout");
    api.logout().then((response) => {
      localStorage.clear();
      console.log(response.data);
    });
    history.replace("/");
    window.location.reload();
  };
  return (
    <Navbar collapseOnSelect variant="dark" expand="lg" className="nav-bg">
      <Container>
        <Navbar.Brand href="">
          <img src={img} alt="sugar factory logo" className="dashboard-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/users" className={classes.navList}>
              Users
            </Link>
            <Link to="/pictures" className={classes.navList}>
              Pictures
            </Link>
            <Link to="/messages" className={classes.navList}>
              Messages
            </Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} onClick={logout}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
