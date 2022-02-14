import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {PaginasApp } from '../data/PaginasApp';
import './header.css';


class BootstrapHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
       <Navbar bg="light" expand={false}>
  <Container fluid>
  <Navbar.Brand href="#home">
              <img
                className="logo-image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
              />
              <i className="fas fa-user-graduate" />
            </Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >

      <Offcanvas.Body>
     < Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#">Ejercicio1</Nav.Link>
          <Nav.Link href="#action2">Ejercicio2</Nav.Link>
          <Nav.Link href="#action2">Ejercicio3</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
      </>
    );
  }
}

export default BootstrapHeader;
