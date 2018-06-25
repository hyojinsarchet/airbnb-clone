import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Flat from "./components/Flat";
import GoogleMapReact from "google-map-react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    };
  }

  componentDidMount() {
    console.log("DID MOUNT");

    const url =
      "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";

    // AJAX
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        this.setState({
          flats: data
        });
      });
  }

  render() {
    // const flat = {
    //   id: 148,
    //   name: "Trendy Apt in Buttes Montmartre",
    //   imageUrl:
    //     "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat2.jpg",
    //   price: 200,
    //   priceCurrency: "EUR",
    //   lat: 48.885707,
    //   lng: 2.343543
    // };
    //
    // const flats = [flat, flat, flat, flat];
    const center = {
      lat: 48.8566,
      lng: 2.3522
    };

    return (
      <div className="app">
        <div className="main">
          <div className="search" />
          <div className="flats">
            {this.state.flats.map(function(flat) {
              return <Flat flat={flat} />;
            })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
            // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
            center={center}
            defaultZoom={11}
          >
            {/* <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text={"Kreyser Avrora"}
            /> */}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
