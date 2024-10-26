import React from "react";

export default function Card() {
    return (
        <div className="card">
            <img className="card-img" src="image 12.png"/>
            <div className="card-status">
                <img src="Star 1.png" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <h2>Life Lessons with Katie Zaferes</h2>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}