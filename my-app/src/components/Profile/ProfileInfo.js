import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { profileAC } from "../../store/actions";

function ProfileInfo() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    (async () => {
      const res = await fetch("/profile");
      const data = await res.json();
      dispatch(profileAC(data));
    })();
  }, [dispatch]);

  const info = useSelector((store) => store.profile);

  return (
    <Card style={{ width: '30rem' }}>
      <Container>
        <Row>
          <Col>
            <p>{info.info} {info.language} {info.country} {info.interests} {info.photo}</p>
            <h4>Info</h4>
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

export default ProfileInfo;
