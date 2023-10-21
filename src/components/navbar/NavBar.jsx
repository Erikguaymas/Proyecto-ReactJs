import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "../cart/CartWidget";
import { Link, Outlet } from "react-router-dom";
import { menuNavigate } from "./menuNavigate";

const NavBar = () => {
  return (
    <>
      <Navbar
        className="sticky-top"
        style={{ backgroundColor: "lightgray" }}
        data-bs-theme="light"
      >
        <Container className="justify-content-between">
          <Navbar.Brand as={Link} to="/">
            ferrErik
          </Navbar.Brand>
          <Nav>
            {menuNavigate.map(({ id, path, title }) => (
              <Nav.Link key={id} as={Link} to={path}>
                {title}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/carrito"}>
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavBar;
