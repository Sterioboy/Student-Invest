import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import Cards from "./Cards";
import { getInvestorsAC } from "../../store/actions";
import { useDispatch } from "react-redux";

function MainStudent() {
  //JS
  const dispatch = useDispatch();
  React.useEffect(() => {
    (async () => {
      //Auth Data
      const res = await fetch("/getAllInvestors");
      const data = await res.json();
      dispatch(getInvestorsAC(data));
    })();
  }, [dispatch]);

  const investorArr = useSelector((store) => store.investor);

  //Component
  return (
    <div className="mainModule">
      {/* Investors Section */}
      <Container fluid id="welcome_block" className="my-3 p-3">
        <h2 className="text-center">Investors</h2>
        <Row className="ps-3 py-2 mb-3">
          {/* MAP */}
          {investorArr ? investorArr.map((element) => (
          <Cards element={element} key={element.id} />
        )) : null}
        </Row>
      </Container>

      {/* Universities Section - Optional*/}
      <Container fluid id="welcome_block" className="my-3 p-3">
        <h2 className="text-center">Universities</h2>
        <Row className="ps-3 py-2 mb-3">
          {/* MAP */}
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
