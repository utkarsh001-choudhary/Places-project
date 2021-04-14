import React from "react";
import Block from "./block";
import places from "../places";
import RoomIcon from '@material-ui/icons/Room';
function createBlock(place) {
    return (
        <Block
            key={place.id}
            id={place.id}
            name={place.name}
            img={place.imgURL}
            state={place.state}
        />
    );
}
function Main() {
    return (
        <div>
            <div className="heading-container">
                <h1 className="heading">Tour to The Incredible India <RoomIcon fontSize="large"/></h1>
            </div>
            <div className="card-container">
                {places.map(createBlock)}
            </div>
        </div>
    );
}
export default Main;