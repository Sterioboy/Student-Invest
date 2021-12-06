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
          <Image src="https://lurkmore.so/images/thumb/2/2e/1247996959_patrick-star-nr2.jpg/196px-1247996959_patrick-star-nr2.jpg" roundedCircle />
        </Col>
        </NavLink>
        <h3>{user}</h3>
      </Row>
    </Container>
  );
}

export default ProfileImage;
