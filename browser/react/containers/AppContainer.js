import React, {Component} from 'react';
import MapContainer from './MapContainer';
import Navbar from '../components/Navbar';

export default class AppContainer extends Component {
  
	render() {
	  
    return (
    	<div>
    		<Navbar/>
      		<MapContainer/>
      	</div>
    )
  }

}