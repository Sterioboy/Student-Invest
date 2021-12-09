import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Image, NavLink, Button } from "react-bootstrap";
import { thunkUploadHandler } from "../../store/actions";

function ProfileImage() {
  const { user } = useSelector((store) => store.user);
  const { photo } = useSelector((store) => store.profile);

  return (
    <Container>
      <Row>
        <NavLink>
          <Col xs={6} md={4}>
            <Image className="w-50" src={`${photo}`} rounded />
          </Col>
        </NavLink>
        <form onSubmit={thunkUploadHandler}>
          <input type="file" name="file" />
          <Button variant="outline-primary" type="submit">
            ok
          </Button>
        </form>
        <h3 className="text-center">{user}</h3>
      </Row>
    </Container>
  );
}

export default ProfileImage;
