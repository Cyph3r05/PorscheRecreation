import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

class CriaCarousel extends Component {
  render() {
    return (
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/background/porsche-normal0.webp?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption className="carouselHeadline">
            <h3 className="carouselHeadline">> Relentess.</h3>
            <p className="carouselSubline">The new 911 Turbo S models.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/background/porsche-normal1.webp?text=Second slide&bg=282c34"
            alt="Third slide"
          />

          <Carousel.Caption className="carouselHeadline">
            <h3 className="carouselHeadline">> This changes everything.</h3>
            <p className="carouselSubline">The Panamera 4S.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/background/porsche-normal2.webp?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption className="carouselHeadline">
            <h3 className="carouselHeadline">> The Heist.</h3>
            <p className="carouselSubline">
              See why it takes a Porsche to catch a Porsche.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/background/porsche-normal3.webp?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption className="carouselHeadline">
            <h3 className="carouselHeadline">> Shaped by Performance.</h3>
            <p className="carouselSubline">The new Cayenne Coupe.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/background/porsche-normal4.webp?text=Third slide&bg=20232a"
            alt="Third slide"
          />
          <Carousel.Caption className="carouselHeadline">
            <h3 className="carouselHeadline">> Soul, electrified.</h3>
            <p className="carouselSubline">The new Taycan.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CriaCarousel;
