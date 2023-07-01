import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
} from "reactstrap";

function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="navigationBar">
      <Container>
        <Navbar light expand="md">
          <NavbarBrand className="logo" href="/">
            Car Rental
          </NavbarBrand>
          <NavbarToggler onClick={toggle}></NavbarToggler>
          <Offcanvas
            className="SideBar"
            direction="end"
            isOpen={isOpen}
            scrollable
            toggle={toggle}
            returnFocusAfterClose={false}
          >
            <OffcanvasHeader toggle={toggle}>Car Rental</OffcanvasHeader>
            <OffcanvasBody>
              <Nav className="ms-auto" navbar>
                <NavItem>
                  <NavLink href="/" onClick={toggle}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/#OurService" onClick={toggle}>
                    Our Service
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/#tanya" onClick={toggle}>
                    Why Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/#Testimoni" onClick={toggle}>
                    Testimonial
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/#FAQ" onClick={toggle}>
                    FAQ
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/searchCar" onClick={toggle}>
                    Cart
                  </NavLink>
                </NavItem>
              </Nav>
            </OffcanvasBody>
          </Offcanvas>

          <Collapse navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#OurService">Our Service</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#tanya">Why Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#Testimoni">Testimonial</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#FAQ">FAQ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/searchCar">Cart</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default MyNavbar;
