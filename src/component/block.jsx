import React, { useState ,useEffect } from "react";
import Logo from "./logo";
import Detail from "./Details";
import history from './history'
import { Link } from "react-router-dom";


function Block(props) {
    const [id,setId]=useState(0);

    useEffect(() => {
        setId(props.id)
        console.log(props);
      });
const pushToHistory = (e)=>{ 
    history.push({
        pathname: '/location',
        state:{index:id}
        });
}

    return (
        <div className="card-main">
            {/* <Link exact to={'/location'} className="main-anchor"> */}
                <div className="card" onClick={pushToHistory}>
                    <div className="top">
                        <h2 className="name">{props.name}</h2>
                        <Logo img={props.img} />
                    </div>
                    <div className="bottom">
                        <Detail detailInfo={props.state} />
                    </div>
                </div>
            {/* </Link> */}
        </div>
    );
}

export default Block;
