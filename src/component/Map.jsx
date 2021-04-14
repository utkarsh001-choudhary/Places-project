import { Button } from '@material-ui/core';
import React, { useState ,useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import { Link } from 'react-router-dom';
import places from '../places.js';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import history from './history';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const LocationPin = ({ text }) => (
    <div className="pin">
        <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">{text}</p>
    </div>
)
function Map() {
    const [index,setIndex]=useState(0);
    const location = {
        lat: places[index].lat,
        lng: places[index].lon,
        address: places[index].name
    }
    useEffect(() => {
        setIndex(history.location.state.index)
         location.lat=places[index].lat;
         location.lng=places[index].lon;
         location.address=places[index].name;
      });
    return (<div className="Map-class" >
       
        <Link exact to={'/'} >
        <div className="back">
            <ArrowBackIcon fontSize="large"/>
        </div>
        </Link> 
        

        <div className="map">
            <h1 className="map-h1 heading">Welcome to {location.address}</h1>

            <div className="google-map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: '' }}
                    defaultCenter={location}
                    defaultZoom={17}
                >
                    <LocationPin
                        lat={location.lat}
                        lng={location.lng}
                        text={location.address}
                    />
                </GoogleMapReact>
            </div>
        </div>
    </div>);
}
export default Map;