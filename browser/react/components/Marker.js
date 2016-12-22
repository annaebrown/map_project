import React, {Component} from 'react';

export default class MarkerComponent extends Component {

  componentDidUpdate() {

        this.renderMarker();
        console.log(this.marker)
  	 }
  

	renderMarker() {

		let map = this.props.map;
		let mapCenter = this.props.mapCenter;
		let google = this.props.google;
		let position = this.props.position || mapCenter;

		position = new google.maps.LatLng(position.lat, position.lng);

		const pref = {
			map: map,
			position: position
		};

		this.marker = new google.maps.Marker(pref);

	}


	render() {
		return null;
	}

}

MarkerComponent.propTypes = {
  map: React.PropTypes.object,
  position: React.PropTypes.object
}

MarkerComponent.defaultProps = {
	name: 'Marker'
}