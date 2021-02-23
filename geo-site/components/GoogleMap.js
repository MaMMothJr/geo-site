import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div style={{
    color: 'white',
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
}}>{text}</div>;


class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 47.275254819668355,
            lng: 39.68961030861758
        },
        zoom: 15
    };



    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
            >
                    <AnyReactComponent
                        lat={47.275254819668355}
                        lng={39.68961030861758}
                        text="ООО ГЕОРЕСУРС"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default GoogleMap;