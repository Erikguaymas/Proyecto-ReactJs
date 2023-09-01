import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: "lightgray" }} data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ferrErik</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#herramientas">Herramientas</Nav.Link>
            <Nav.Link href="#soldadura">Soldadura</Nav.Link>
            <Nav.Link href="#tornilleria">Tornilleria</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link>
              <CartWidget />
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
