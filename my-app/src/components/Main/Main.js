import "../../App.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Stack,
  Image,
  Button,
  Carousel,
  Form
} from "react-bootstrap";
import inst from "./imgs/inst.jpg"; // with import
import inst2 from "./imgs/inst2.jpg"; // with import
import inst3 from "./imgs/inst3.jpg"; // with import
import main from './main.scss'

function Main() {
  return (
    <div className="mainModule">
     <div>
      <img className='image1' src='https://www.princeton.edu//sites/default/files/images/2017/06/20060425_NassauHall_JJ_IMG_5973.jpg' alt=''/>
     </div>
     <div >
      <img className='image1' src='https://www.bbva.com/wp-content/uploads/2020/08/BBVA-open-mentoring-19082020.jpg' alt=''/>
     </div>
     <div className='image2'>
      <div className='left'></div>
      <div className='right'>
       <div className='infocard'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
       <button>Lorem</button></div>
      </div>

     </div>
      {/* Welcome Section */}
      <Container fluid id="welcome_block" className="my-3 p-3">
        <Row className="ps-3 py-2 bg-light bg-gradient">
          <Col
            md={7}
            lg={6}
            className="
              d-flex
              justify-content-start
              align-self-center
              flex-column
            "
          >
            <Stack>
              <p className="fs-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="fs-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <Button variant="outline-primary" className="w-50 h-auto p-3">
                Call to action
              </Button>
            </Stack>
          </Col>
          <Col
            md={5}
            lg={6}
            className="
              d-flex
              align-items-center
              lite-description
              d-none d-md-block
            "
          >
            <Image fluid src={inst} alt="University #1" />
          </Col>
        </Row>
      </Container>

      {/* CAROUSEL */}
      <Container fluid id="carousel_block" className="my-3 p-3">
        <Row className="w-100 mx-auto my-3 d-none d-md-block">
          <Carousel>
            <Carousel.Item>
              <img src={inst} className="d-block w-100" alt="Man on a Cliff" />
              <Carousel.Caption>
                <h3>University#1</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem necessitatibus minima, ad deleniti ratione officia,
                  corporis tempora perspiciatis vero dicta ab. Reiciendis
                  delectus magni perferendis qui repellat eligendi repudiandae
                  velit?
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={inst2} className="d-block w-100" alt="Man on a Cliff" />
              <Carousel.Caption>
                <h3>University#2</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem necessitatibus minima, ad deleniti ratione officia,
                  corporis tempora perspiciatis vero dicta ab. Reiciendis
                  delectus magni perferendis qui repellat eligendi repudiandae
                  velit?
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={inst3} className="d-block w-100" alt="Man on a Cliff" />
              <Carousel.Caption>
                <h3>University#3</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem necessitatibus minima, ad deleniti ratione officia,
                  corporis tempora perspiciatis vero dicta ab. Reiciendis
                  delectus magni perferendis qui repellat eligendi repudiandae
                  velit?
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>

      {/* Call-to-action Section */}
      <Container fluid id="call_to_action_block" className="p-3 my-3">
        <Row className="px-5">
          <p className="fs-3">Call-to-Action</p>
          <Col lg={7}>
            <p className="fw-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              ipsum atque facere iure qui neque aut accusantium mollitia
              assumenda porro distinctio, laborum, suscipit corrupti repellendus
              itaque corporis blanditiis architecto labore.
            </p>
          </Col>
        </Row>
        <Row className="px-5">
          <Form className="align-items-center">
            <Stack direction="horizontal" gap={3}>
              <Form.Group className="col-auto" controlId="formName">
                <Form.Control
                  type="text"
                  placeholder="ФИО"
                />
              </Form.Group>
              <Form.Group className="col-auto" controlId="formPhone">
                <Form.Control
                  type="text"
                  placeholder="Телефон"
                />
              </Form.Group>
              <Form.Group className="col-auto" controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>
              <div className="col-auto">
                <Button variant="outline-primary" type="submit">
                  Submit
                </Button>
              </div>
            </Stack>
          </Form>
        </Row>
      </Container>

      {/* FOOTER */}
      <footer className="footer mt-3 bg-light">
        <Row className="px-5">
          <p className="fs-3">Contacts</p>
          <Col lg={6}>
            <p className="fw-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              accusamus corporis? Cum expedita ipsam iste error?
            </p>
          </Col>
          <Col lg={6}>
            <p className="fw-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              dolore sint, soluta a quos consequatur voluptatem, neque, optio
              vero molestias voluptates!
            </p>
          </Col>
        </Row>
        <Row className="px-5 pb-3">
          <Col md={5} lg={3}>
            <p className="fw-light">+1(123)456-78-90</p>
          </Col>
          <Col md={7} lg={9} className="d-flex justify-content-end">
            <Link className="nav-link d-none d-md-block" to="#">
              Услуги
            </Link>
            <Link className="nav-link d-none d-md-block" to="#">
              Портфолио
            </Link>
            <Link className="nav-link d-none d-md-block" to="#">
              Контакты
            </Link>
          </Col>
        </Row>
      </footer>
    </div>
  );
}

export default Main;
