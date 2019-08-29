import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
    width: '100%',
    height: '85%'
}

export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={5}
                style={style}
                initialCenter={{
                    lat: 53.474420,
                    lng: -2.286677
                }}
                onClick={this.onMapClicked}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    {/* <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div> */}
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBt8q1SW1wHHMhOdBUnkw18M3u1LFIaPbc")
})(MapContainer)