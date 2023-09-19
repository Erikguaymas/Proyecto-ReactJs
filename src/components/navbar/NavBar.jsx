import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "../cart/CartWidget";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: "lightgray" }} data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            ferrErik
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/category/herramienta">
              Herramientas
            </Nav.Link>
            <Nav.Link as={Link} to="/category/soldadura">
              Soldadura
            </Nav.Link>
            <Nav.Link as={Link} to="/category/tornilleria">
              Tornilleria
            </Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to={"/carrito"}>
              <CartWidget />
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavBar;

{
  /*     <Link to="/">Inicio</Link>
            <Link to="/category/herramienta">Herramientas</Link>
            <Link to="/category/soldadura">Soldadura</Link>
            <Link to="/category/tornilleria">Tornilleria</Link> */
}
