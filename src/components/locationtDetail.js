import React, { Component } from "react";
import locations from "../database/locations.json";

class LocationDetail extends Component {
    render() {
      return locations.map((location) => <div key={location.name}>{location.name}</div>);
    }
}

export default LocationDetail;