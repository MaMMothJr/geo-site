import { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

class Mapbox extends Component {
    state = {
        viewport: {
            width: '70w',
            height: '50vh',
            latitude: 47.275254819668355,
            longitude: 39.68961030861758,
            zoom: 16
        }
    };

    render() {
        return (
            <ReactMapGL
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxApiAccessToken="pk.eyJ1IjoiZ2VvcmVzdXJzbmV0IiwiYSI6ImNrbGdkcDRtNzA4bG8yb24yYm8yMHhja2wifQ.chyeZZKxNG8BAOJjgIXZ5A"
                onViewportChange={(viewport) => this.setState({ viewport })}
                {...this.state.viewport}>
                <Marker latitude={47.275254819668355} longitude={39.68961030861758} offsetLeft={-10} offsetTop={-10}>
                    <img src="/images/logomap.jpg" className="logomap" alt="geo"/>
                </Marker>
            </ ReactMapGL>
        );
    }
}

export default Mapbox;