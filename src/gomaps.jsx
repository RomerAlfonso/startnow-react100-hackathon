import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (<div>{text}</div>);


class GoMaps extends Component {
  static defaultProps = {
    center: {lat: 32.715736 , lng:-117.161087},
    lat: 32.715736,
    lng: -117.161087,
    zoom: 9
  };
  

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
           lat={this.props.lat}
           lng={this.props.lng}
          text={<i className="fa fa-blind fa-3x"></i> }
        />
      </GoogleMapReact>
    );
  }
}
export default GoMaps;