import React, {useEffect} from "react";
import TopNav from "../components/topNav";
import Aos from "aos";
import "aos/dist/aos.css";
import Card from "../components/card"
import Grid from '@material-ui/core/Grid';
import "../css/projects.css"

const Projects = () => {

    return (
    <div>
        <TopNav PageName={"Projects"} />
        <div className = 'cardContainer'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
    );
};

export default Projects;
