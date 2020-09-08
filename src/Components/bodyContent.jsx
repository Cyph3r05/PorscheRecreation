import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

class BodyContent extends Component {
  /*
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  */

  /* Insert Arrows/Icons for "All Models" 
  
  IDK WHAT TO DO FOR THE BUILD PART. LoL
  */
  render() {
    return (
      <React.Fragment>
        <Row className="topRow">
          <Col xs={1} md={4}>
            <Image
              src="./images/porsche-small_718.webp"
              rounded
              className="imgRow"
            />

            <Button className="buildButton" variant="light">
              Build Your Porsche
            </Button>
            <Button className="allModels" variant="outline-primary">
              {" "}
              > All Models
            </Button>
            <Card.Text className="carName">718</Card.Text>
            <Card.Text className="carPrice">From $57,500.00*</Card.Text>
          </Col>
          <Col xs={2} md={4}>
            <Image
              src="./images/porsche-small_911.webp"
              rounded
              className="imgRow"
            />
            <Button className="buildButton" variant="light">
              Build Your Porsche
            </Button>
            <Button className="allModels" variant="outline-primary">
              {" "}
              > All Models
            </Button>
            <Card.Text className="carName">911</Card.Text>
            <Card.Text className="carPrice">From $97,400.00*</Card.Text>
          </Col>
          <Col xs={3} md={4}>
            <Image
              src="./images/porsche-small_taycan.webp"
              rounded
              className="imgRow"
            />
            <Button className="buildButton" variant="light">
              Build Your Porsche
            </Button>
            <Button className="allModels" variant="outline-primary">
              {" "}
              > All Models
            </Button>
            <Card.Text className="carName">Taycan</Card.Text>
            <Card.Text className="carPrice">From $103,800.00*</Card.Text>
          </Col>
        </Row>

        <Row className="bottomRow">
          <Col xs={4} md={4}>
            <Image
              src="./images/porsche-small_panamera.webp"
              rounded
              className="imgRow"
            />
            <Button className="buildButton" variant="light">
              Build Your Porsche
            </Button>
            <Button className="allModels" variant="outline-primary">
              {" "}
              > All Models
            </Button>
            <Card.Text className="carName">Panamera</Card.Text>
            <Card.Text className="carPrice">From $87,200.00*</Card.Text>
          </Col>
          <Col xs={5} md={4}>
            <Image
              src="./images/porsche-small_macan.webp"
              rounded
              className="imgRow"
            />
            <Button className="buildButton" variant="light">
              Build Your Porsche
            </Button>
            <Button className="allModels" variant="outline-primary">
              {" "}
              > All Models
            </Button>
            <Card.Text className="carName">Macan</Card.Text>
            <Card.Text className="carPrice">From $50,900.00*</Card.Text>
          </Col>
          <Col xs={6} md={4}>
            <Image
              src="./images/porsche-small_cayenne.webp"
              rounded
              className="imgRow"
            />
            <Button className="buildButton" variant="light">
              Build Your Porsche
            </Button>
            <Button className="allModels" variant="outline-primary">
              {" "}
              > All Models
            </Button>
            <Card.Text className="carName">Cayenne</Card.Text>
            <Card.Text className="carPrice">From $66,800.00*</Card.Text>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default BodyContent;
