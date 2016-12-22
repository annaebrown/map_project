import React, {Component} from 'react';
import {GoogleApiWrapper} from 'google-maps-react/dist/index';
import MapComponent from '../components/Map';
import MarkerComponent from '../components/Marker';

export class MapContainer extends Component {
  
	render() {

	const position = {lat: 40.718378, lng: -73.955290}

    return (
    	<div>
      		<MapComponent google={this.props.google}>
      			<MarkerComponent position={position}/>
      		</MapComponent>
      	</div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDfQxgWt-LSZcEmTEN8581Uq9SzZHnpuys'
})(MapContainer)