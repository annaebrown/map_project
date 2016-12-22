import React, {Component} from 'react';

export default class MarkerComponent extends Component {

  componentDidUpdate() {
  		this.renderMarker();
    }

	renderMarker() {

		let {
			map, google, position
		} = this.props;

		let pos = position;
		position = new google.maps.LatLng(pos.lat, pos.lng);

		const pref = {
			position: position,
			map: map
		};

		this.marker = new google.maps.Marker(pref)
	}


	render() {

		return null;

	}

}

MarkerComponent.propTypes = {
  position: React.PropTypes.object,
  map: React.PropTypes.object
}