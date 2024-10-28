import React from "react";
import Navbar from "./components/Navbar";
import Mainpage from "./components/Mainpage";
import Card from "./components/Card";
import data from "./components/data";



export default function App() {

    const cards=data.map(item => {
        return (
            <Card key={item.id} item={item} />
        )
    })
    return (
    <div className="contacts">
            <Navbar/>
            <Mainpage/>
            <section className="cards-list">
                {cards}
            </section>

        </div>
    )
}