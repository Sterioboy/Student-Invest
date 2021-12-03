import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Cards from "./Cards";

function MainStudent() {
  //JS
  const investorArr = useSelector((store) => store.investor);
  const universityArr = useSelector((store) => store.university);

  //Component
  return (
    <div className="mainModule">
      {/* Investors Section */}
      <Container fluid id="welcome_block" className="my-3 p-3">
        <h2 className="text-center">Investors</h2>
        <Row className="ps-3 py-2 mb-3">
          {/* MAP */}
          {investorArr.map((element) => (
          <Cards element={element} key={element.id} />
        ))}
        </Row>
      </Container>

      {/* Universities Section */}
      <Container fluid id="welcome_block" className="my-3 p-3">
        <h2 className="text-center">Universities</h2>
        <Row className="ps-3 py-2 mb-3">
          {/* MAP */}
          {universityArr.map((element) => (
          <Cards element={element} key={element.id} />
        ))}
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

export default MainStudent;
