import PicComponent from "../components/PicComponent";
import { Row, Col, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import api from "../Service/api";

function PicList() {
  const [fetchedPictures, setFetchedPictures] = useState("");

  function removeRow(id) {
    document.getElementById(id).remove();
  }

  const allPictures = () => {
    api
      .viewAllPictures()
      .then((response) => {
        setFetchedPictures(response.data);
      })
      .catch((error) => {
        alert("incorrect username or password");
      });
  };
  useEffect(() => {
    allPictures();
  }, []);

  return (
    <><NavBar /><Container>
      <Row sm={1} md={3} className="g-3">
        {fetchedPictures.length === 0
          ? null
          : fetchedPictures.map((pic) => (
            <Col key={pic} id={pic.id}>
              <PicComponent
                onRemove={function decline() {
                  removeRow(pic.id);
                } }
                id={pic.id}
                image={pic.picture_url}
                user="John Doe" />
            </Col>
          ))}
      </Row>
    </Container></>
  );
}
export default PicList;
