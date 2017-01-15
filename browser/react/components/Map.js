import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import MarkerComponent from '../components/Marker'
//import Map, {GoogleApiWrapper} from 'google-maps-react/dist/index';

export default class MapComponent extends Component {

	constructor(props){
		super(props);

		const lat = this.props.initialCenter.lat;
		const lng = this.props.initialCenter.lng;

		this.state = {
			currentLocation: {
				lat: lat,
				lng: lng
			}
		}
	}

	componentDidUpdate() {
	      this.loadMap();
    }

    loadMap() {

	    if (this.props && this.props.google) {
	      // checks if google api is available
	      
	      const maps = this.props.google.maps;

	      const mapRef = this.refs.map;
	      const node = ReactDOM.findDOMNode(mapRef);

	      let zoom = this.props.zoom;
	      let lat = this.state.currentLocation.lat;
	      let lng = this.state.currentLocation.lng;

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

	    if (!this.props.children) return;

	    return React.Children.map(this.props.children, (child, i) => {
		      return React.cloneElement(child, {
		        map: this.map,
		        google: this.props.google,
		        mapCenter: this.state.currentLocation
	      });
    })
  }

	render() {

	const position = {lat: 40.718378, lng: -73.955290}

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

MapComponent.propTypes = {
  google: React.PropTypes.object,
  zoom: React.PropTypes.number,
  initialCenter: React.PropTypes.object
}

MapComponent.defaultProps = {
  zoom: 12,
  // New York, by default
  initialCenter: {
    lat: 40.718378,
    lng: -73.955290
  }
}

