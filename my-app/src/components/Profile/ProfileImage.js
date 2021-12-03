import React from "react";
import { Container, Row, Col, Image} from "react-bootstrap"

function ProfileImage() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://lurkmore.so/images/thumb/2/2e/1247996959_patrick-star-nr2.jpg/196px-1247996959_patrick-star-nr2.jpg" roundedCircle />
        </Col>
        <h3>Name</h3>
      </Row>
    </Container>
  );
}

export default ProfileImage;
