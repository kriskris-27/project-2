import React from "react";

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img className="card-img" src={`${props.img}`}/>
            <div className="card-status">
                <img src="Star 1.png" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <h2>{props.title}</h2>
            <p><span className="bold">From {props.price}</span> / person</p>
        </div>
    )
}