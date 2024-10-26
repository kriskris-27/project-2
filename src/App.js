import React from "react";
import Navbar from "./components/Navbar";
import Mainpage from "./components/Mainpage";
import Card from "./components/Card";
import Contact from "./components/Contact";

export default function App() {
    return (
    <div className="contacts">
            {/* <Navbar/>
        <Mainpage/>
        <Card/> */}
            <Contact 
                img="./images/mr-whiskerson.png"
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img="./images/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img="./images/felix.png"
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img="./images/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        
        
        </div>
    )
}