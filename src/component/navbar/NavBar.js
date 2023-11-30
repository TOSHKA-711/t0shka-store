import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiStore } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbListSearch } from "react-icons/tb";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import "./Nav.css";

function NavBar() {
  // ------------------------------------------------

  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  useEffect(() => {}, [activeItem]);

  // ------------------------------------------------

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary nav-bar">
        <Container fluid>
          <Navbar.Brand as={Link} className="nav-brand" to="/">
            T0SHKA STORE <BiStore />{" "}
          </Navbar.Brand>
          <Navbar.Toggle>
            <TbListSearch className="nav-list-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                as={Link}
                to="/"
                className={activeItem === "home" ? "active" : ""}
                onClick={() => handleItemClick("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/products"
                className={activeItem === "products" ? "active" : ""}
                onClick={() => handleItemClick("products")}
              >
                Products
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/cart"
                className={activeItem === "cart" ? "active" : ""}
                onClick={() => handleItemClick("cart")}
              >
                Cart <AiOutlineShoppingCart className="cart-nav-icon" />
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />

              <button class="button">
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z"></path>
                  </svg>
                </span>
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
