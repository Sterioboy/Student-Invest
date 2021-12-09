import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Image, NavLink} from "react-bootstrap"

function ProfileImage() {
  const { user } = useSelector((store) => store.user);
  const profile = useSelector((store) => store.profile);

   const uploadHandler = async (event) => {
     event.preventDefault()
    const data = new FormData(event.target);
    const response = await fetch('/profile', {
        method: 'post',
        body: data
    })
  }
  return (
    <Container>
      <Row>
        <NavLink>
        <Col xs={6} md={4}>
          <Image src={``} roundedCircle />
        </Col>
        </NavLink>
        <form onSubmit={uploadHandler}>
        <input type='file' name='file' />
        <button type='submit'>ok</button>
        </form>
        <h3 className="text-center">{user}</h3>
      </Row>
    </Container>
  );
}

export default ProfileImage;
