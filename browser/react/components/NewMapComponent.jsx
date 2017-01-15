import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react/dist/GoogleMapReact';
import MyGreatPlace from './my_great_place.jsx';

export default class SimpleMapPage extends Component {

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);

    this.state = {
      center: {lat: 59.938043, lng: 30.337157},
      zoom: 9,
      greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
    }
  }

  render() {
    return (
       <GoogleMap
        defaultCenter={this.state.center}
        defaultZoom={this.state.zoom}>
        <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
        <MyGreatPlace {...this.state.greatPlaceCoords} text={'B'} /* road circle */ />
      </GoogleMap>
    );
  }
}