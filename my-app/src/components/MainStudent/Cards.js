import React from "react";
import { Col, Button, Card, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { thunkConnectionAC } from "../../store/actions";
import inst from "./imgs/inst.jpg";

function Cards({ element }) {
  const dispatch = useDispatch();
  return (
    <Col
      className="
              d-flex
              justify-content-center
              align-self-center
            "
    >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={inst} />
        <Card.Body>
          <Card.Title>{element.user}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {element.country}
          </Card.Subtitle>
          <Card.Text>{element.info}</Card.Text>
          {element.language && (
            <ListGroup variant="flush" className="mb-3">
              <ListGroup.Item>Language: {element.language}</ListGroup.Item>
              <ListGroup.Item>Interests: {element.interests}</ListGroup.Item>
            </ListGroup>
          )}
          <Button onClick={() => dispatch(thunkConnectionAC(element.id))} variant="primary">Connect</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;
