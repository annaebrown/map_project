import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MarkerComponent from '../components/Marker'
//import Map, {GoogleApiWrapper} from 'google-maps-react/dist/index';

export default class MapComponent extends Component {

	componentDidUpdate() {
	      this.loadMap();
    }

    loadMap() {
	    if (this.props && this.props.google) {
	      // google is available
	      const {google} = this.props;
	      const maps = google.maps;

	      const mapRef = this.refs.map;
	      const node = ReactDOM.findDOMNode(mapRef);

	      let zoom = 12;
	      let lat = 40.718378;
	      let lng = -73.955290;
	      const center = new maps.LatLng(lat, lng);
	      const mapConfig = Object.assign({}, {
	        center: center,
	        zoom: zoom
	      })
	      this.map = new maps.Map(node, mapConfig);
	    }
    // ...
  	}

  	renderChildren() {
	    const {children} = this.props;

	    if (!children) return;

	    return React.Children.map(children, c => {
	      return React.cloneElement(c, {
	        map: this.map,
	        google: this.props.google
	      });
    })
  }

	render() {

	const style = {
		width: '100vw',
		height: '100vh'
    }


	 return (
	      <div ref='map' style = {style}>
	        Loading map...
	        {this.renderChildren()}
	      </div>
    )
	}
}


