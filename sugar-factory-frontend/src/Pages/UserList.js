import { Container, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import api from "../Service/api";
import User from "../components/User";
import classes from "./UserList.module.css";

function UserList() {
  const [fetchedUsers, setFetchedUsers] = useState("");

  const allUsers = () => {
    api
      .viewAllUsers()
      .then((response) => {
        setFetchedUsers(response.data.users);
      })
      .catch((error) => {
        alert("incorrect username or password");
      });
  };

  useEffect(() => {
    allUsers();
  }, []);

  return (
    <Container className={classes.container}>
      <Table hover responsive>
        <thead className="text">
          <tr>
            <th>Profile Pic</th>
            <th>Full Name</th>
            <th>email</th>
            <th>Net worth</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fetchedUsers.length === 0
            ? null
            : fetchedUsers.map((user) => (
                <tr key={user.id}>
                  <User
                    id={user.id}
                    is_highlighted={user.is_highlighted}
                    first_name={user.first_name}
                    last_name={user.last_name}
                    net_worth={user.net_worth}
                    currency={user.currency}
                    email={user.email}
                  />
                </tr>
              ))}
        </tbody>
      </Table>
    </Container>
  );
}
export default UserList;
