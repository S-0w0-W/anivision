import React from 'react'
import TopNav from "../components/topNav";
import "../css/landing.css"

const Landing = () => {
    return (
        <div className="landingPage">
            <TopNav PageName={"Landing"} />
            <div className="titleContainer">
                <p id="title">(0-0)</p>
            </div>

        </div>
    );
};

export default Landing;
