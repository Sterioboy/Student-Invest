import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button, Form, InputGroup } from "react-bootstrap";
import { thunkProfileAC } from "../../store/actions";

function ProfileEdit() {
  const formEl = useRef();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Form
            ref={formEl}
            className="w-50 mx-auto my-3"
            onSubmit={(e) => dispatch(thunkProfileAC(e, formEl))}
          >
            <h3>Редактирование профиля</h3>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Email address</Form.Label>
              <Form.Control required type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Select required className="mb-3" name="">
              <option>Status</option>
              <option value="Investor">Investor</option>
              <option value="Student">Student</option>
              <option value="University">University</option>
            </Form.Select>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Password</Form.Label>
              <Form.Control required type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Аватар</Form.Label><br/>
              <input type='file' name='store_img'/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="infoProfile">
              <Form.Label>Info</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter about you"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="interestsProfile">
              <Form.Label>Interests</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter your interests"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="countryProfile">
              <Form.Label>Country</Form.Label>
              <Form.Control required type="text" placeholder="Enter country" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="languageProfile">
              <Form.Label>Language</Form.Label>
              <Form.Control required type="text" placeholder="Enter language" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Save
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-primary" type="submit" onClick={handleClose}>
            Save
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProfileEdit;
