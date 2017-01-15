import React, {Component} from 'react';
// import {GoogleApiWrapper} from 'google-maps-react/dist/index';
// import MapComponent from '../components/Map';
// import Marker from '../components/Marker';
import NewMapComponent from '../components/NewMapComponent'

export class Container extends Component {
  
	render() {

    return (
      		<NewMapComponent/>
    )
  }
}

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyDfQxgWt-LSZcEmTEN8581Uq9SzZHnpuys'
// })(Container)