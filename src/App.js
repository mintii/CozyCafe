import "./App.css";
import Menu from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <section id="our_menu" className="pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page_title text-center mb-4">
                <h1>Cozy Cafe</h1>
                <div className="single_line"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <Menu />
          </div>
          <Button
            className="cart-button"
            variant="primary"
            onClick={handleShow}
          >
            Cart
          </Button>
        </div>
      </section>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h2>Pick Up Order</h2>
            <h4>Hours: 9:00 AM - 7:00 PM</h4>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ol>
            <li>
              Dish Name | Qty: 000
              <p>Cost: $000</p>
              <p>Remove</p>
            </li>
          </ol>
          <div>Total: $000</div>
          <Row>
            <Button className="checkout-button">Checkout</Button>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default App;
