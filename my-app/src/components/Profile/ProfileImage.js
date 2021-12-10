import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { thunkUploadHandler } from "../../store/actions";

function ProfileImage() {
  const { user } = useSelector((store) => store.user);
  const { photo } = useSelector((store) => store.profile);
  const dispatch = useDispatch()
  
  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(thunkUploadHandler(event))
  }

  React.useEffect(() => {
  }, [photo]);



  return (
    <Container>
      <Row>
          <Col xs={6} md={4}>
            <Image className="w-50" src={photo} rounded />
          </Col>
        <form onSubmit={submitHandler}>
          {/* <input type="file" name="file" /> */}
          <input name="file" type="file" id="input__file" hidden />
            <label for="input__file" className="input__file-button">
              <span class="input__file-icon-wrapper">Choose file</span>
            </label>
          <Button
            variant="outline-primary"
            type="submit"
          >
            ok
          </Button>
        </form>
        <h3 className="text-center">{user}</h3>
      </Row>
    </Container>
  );
}

export default ProfileImage;
