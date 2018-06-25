import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Flat from "./components/Flat";
import Marker from "./components/Marker";
import GoogleMapReact from "google-map-react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      selectedFlat: null
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

  selectFlat = flat => {
    console.log(flat);
    this.setState({
      selectedFlat: flat
    });
  };

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
            {this.state.flats.map(flat => {
              return (
                <Flat
                  key={flat.name}
                  flat={flat}
                  selectFlat={this.selectFlat}
                />
              );
            })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
            // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
            center={center}
            defaultZoom={11}
          >
            {this.state.flats.map(flat => {
              return (
                <Marker
                  key={flat.name}
                  lat={flat.lat}
                  lng={flat.lng}
                  text={flat.price}
                />
              );
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
