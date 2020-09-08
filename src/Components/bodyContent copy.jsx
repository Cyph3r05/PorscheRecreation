import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

class BodyContent extends Component {
  /*
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  */

  render() {
    return (
      <div className="imgCardContainer">
        <div className="row">
          <div className="column">
            <Card classNameName="bg-dark text-dark">
              <Card.Img src="./images/porsche-thumbwhite.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Title>
                  <Button>Card Title</Button>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <Card classNameName="bg-dark text-dark">
              <Card.Img src="./images/porsche-thumbwhite.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Title>
                  <Button>Card Title</Button>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <Card classNameName="bg-dark text-dark">
              <Card.Img src="./images/porsche-thumbwhite.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Title>
                  <Button>Card Title</Button>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <Card classNameName="bg-dark text-dark">
              <Card.Img src="./images/porsche-thumbwhite.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Title>
                  <Button>Card Title</Button>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <Card className="bg-dark text-dark">
              <Card.Img src="./images/porsche-thumbwhite.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Title>
                  <Button>Card Title</Button>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <Card className="bg-dark text-dark">
              <Card.Img src="./images/porsche-thumbwhite.jpg" alt="Card image" />
              <Card.ImgOverlay>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Title>
                  <Button>Card Title</Button>
                </Card.Title>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyContent;
