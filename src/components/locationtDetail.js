import React, { Component } from "react";
import locations from "../database/locations.json";

class LocationDetail extends Component {
    render() {
      return locations.map((location) => (<div data-reactid={location.id}> {location.id} </div>));
    }
}

export default LocationDetail;