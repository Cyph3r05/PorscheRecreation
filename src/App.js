import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/navbar";
import NewNavbar from "./Components/newNavbar";
import CriaCarousel from "./Components/carousel";
import BodyContent from "./Components/bodyContent";
import Dealer from "./Components/dealer";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// Custom dropdowns
// https://react-bootstrap.netlify.com/components/dropdowns/#custom-dropdown-components

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="navContainer">
          {/* Add a fake login page???  */}
          <NewNavbar />
          <CriaCarousel />
        </div>
        <div className="headlineContainer">
          <Card.Text className="headlineText">Models</Card.Text>
          <BodyContent />
        </div>
        {/*         
        ??? Shopping Tools...

        ???? Porsche Live

        ???? Discover
        
        ???? Change Region ????
        
        */}
        <div className="headlineContainer">
          <Card.Text className="headlineText">Find a Dealer</Card.Text>
          <Dealer />
        </div>
        <div className="headlineContainer">
          <Card.Text className="headlineText">Find a Dealer</Card.Text>
          {/* <shoppingTools /> */}
        </div>
        <div className="headlineContainer">
          <Card.Text className="headlineText">Porsche Live</Card.Text>
          {/* <porscheLive /> */}
        </div>
        <div className="headlineContainer">
          <Card.Text className="headlineText">Discover</Card.Text>
          {/* <discover /> */}
        </div>
        <div className="push" />
        <div className="footerContainer">
          <Card.Footer>© 202rs North America, Inc.</Card.Footer>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
