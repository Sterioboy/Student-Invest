import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function ProfileInterests() {
  return (
    <Card style={{ width: '20rem' }}>
      <Container>
        <Row>
          <Col>
            <h4>Interests</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              blandit tristique est nec condimentum. Aliquam bibendum, urna at
              bibendum varius, augue purus varius erat, ut aliquam dolor lectus
              vitae urna. Duis convallis, ipsum vel porttitor pharetra, tellus
              neque accumsan urna, non tristique nibh felis ac eros. Ut sed orci
              lacinia, bibendum purus sit amet, eleifend ipsum. Ut eget lorem
              est. Nullam eu augue ligula. Cras placerat porttitor mi ac
              finibus. Vestibulum pretium, augue et bibendum facilisis, orci
              ligula rutrum libero, eu luctus orci nunc quis purus. Aliquam erat
              volutpat.
            </p>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

export default ProfileInterests;
