import React from 'react';
import './Card.scss';
import Tilt from "react-parallax-tilt";
import {useNavigate} from 'react-router-dom';

const Card = props => {

    const nav = useNavigate();
    const clickHandler = () => {
       nav('/blog/'+props.id)
    }

    return (
        <Tilt
          className="tilt"
          tiltMaxAngleX={30}
          tiltMaxAngleY={30}
          perspective={1000}
          transitionSpeed={1000}
          scale={1}
          gyroscope={true}
        >
            <div className="card" style={{backgroundColor: 'rgba(255,255,255, 0.1)'}} onClick = { () => clickHandler()}>
            <img src={props.im} alt="" />
            <div className="content">
                <h2>{props.head}</h2>
                <p>{props.sub}</p>
            </div>
        </div>
        </Tilt>
    )
}

export default Card;