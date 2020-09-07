import React, { Component } from "react";
import { Input, InputGroup, Nav, Navbar, Dropdown, Icon } from "rsuite";
import Card from "react-bootstrap/Card";

import "rsuite/dist/styles/rsuite-default.css";
import "bootstrap/dist/css/bootstrap.min.css";

class newNavBar extends Component {
  render() {
    const styles = {
      width: 300,
      marginBottom: 10
    };
    return (
      <React.Fragment>
        <Navbar>
          <Navbar.Header>
            <a href="#" className="navbar-brand logo">
              <Card.Img src="./images/porsche-svg.svg" height="120px" />
            </a>
          </Navbar.Header>
          <Navbar.Body>
            <Nav>
              <Dropdown title="Models">
                <Dropdown.Menu title="718">
                  <Dropdown.Item>718 Cayman</Dropdown.Item>
                  <Dropdown.Item>718 Boxster</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Body>
          <div className="searchBox">
            <InputGroup style={styles}>
              <Input placeholder="Search e.g. Porsche 911 Carrera" />
              <InputGroup.Button>
                <Icon icon="search" />
              </InputGroup.Button>
            </InputGroup>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default newNavBar;
