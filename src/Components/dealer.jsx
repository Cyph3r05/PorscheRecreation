import React, { Component } from "react";
import { Map, GoogleApiWrapper, SearchBox } from "google-maps-react";

class Dealer extends Component {
  render() {
    const style = {
      width: "100%",
      height: "600px"
    };

    return (
      <React.Fragment>
        <Map
          google={this.props.google}
          zoom={10}
          initialCenter={{
            lat: 35.5496939,
            lng: -120.7060049
          }}
          style={style}
        />
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB8LDG1PYox2vkCB2KFOAiuC0PsH1kUgVQ"
})(Dealer);
