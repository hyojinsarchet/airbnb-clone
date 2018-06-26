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
      // duplicate all the flats again
      allFlats: [],
      selectedFlat: null,
      search: ""
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
          flats: data,
          allFlats: data
        });
      });
  }

  selectFlat = flat => {
    console.log(flat);
    this.setState({
      selectedFlat: flat
    });
  };

  handleSearch = event => {
    console.log(event);
    this.setState({
      search: event.target.value,
      flats: this.state.allFlats.filter(flat =>
        new RegExp(event.target.value, "i").exec(flat.name)
      )
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
    let center = {
      lat: 48.8566,
      lng: 2.3522
    };

    if (this.state.selectedFlat) {
      center = {
        lat: this.state.selectedFlat.lat,
        lng: this.state.selectedFlat.lng
      };
    }

    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.search}
              onChange={this.handleSearch}
            />
          </div>
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
            bootstrapURLKeys={{
              key: "AIzaSyDfC3eEVkeC5PPrVMX1muM2VchFbBWnWRA"
            }}
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
                  selected={flat === this.state.selectedFlat}
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
