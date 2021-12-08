import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Image, NavLink} from "react-bootstrap"

function ProfileImage() {
  const { user } = useSelector((store) => store.user);
  return (
    <Container>
      <Row>
        <NavLink>
        <Col xs={6} md={4}>
          <Image src="#" roundedCircle />
        </Col>
        </NavLink>
        <h3>{user}</h3>
      </Row>
    </Container>
  );
}

export default ProfileImage;
