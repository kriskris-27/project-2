import React from "react";

export default function Card(props) {
    console.log(props.openSpots)

    let badgeText
    if(props.item. openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if(props.item. location === "Online") {
        badgeText="ONLINE"
    }

    return (
        <div className="card">

        {badgeText && <div className="card-bad">{badgeText}</div>}

            <div className="img-hold">
            <img className="card-img" src={`${props.item.coverImg}`}/>


            </div>
            <div className="card-status">
                <img src="Star 1.png" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats. reviewCount}) • </span>
                <span className="gray">{props.item. country}</span>
            </div>
            <h2>{props.item.title}</h2>
            <p><span className="bold">From {props.item. price}</span> / person</p>        
        </div>
    )
}