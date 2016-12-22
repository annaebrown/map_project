import React, {Component} from 'react';
import {GoogleApiWrapper} from 'google-maps-react/dist/index';
import MapComponent from '../components/Map';
import MarkerComponent from '../components/Marker';

export class MapContainer extends Component {
  
	render() {

	const pos = {lat: 37.759703, lng: -122.428093}

    return (
    	<div>
      		<MapComponent google={this.props.google}>
      			<MarkerComponent position={pos}/>
      		</MapComponent>
      	</div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDfQxgWt-LSZcEmTEN8581Uq9SzZHnpuys'
})(MapContainer)