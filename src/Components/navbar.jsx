import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class NavBar1 extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Navbar will be Porsche LOGO and links to home. */}
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <Card.Img src="./images/porsche-svg.svg" height="120px" />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <NavDropdown title="Models" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">718</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar1;
