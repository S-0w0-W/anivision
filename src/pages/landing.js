import React from 'react'
import TopNav from "../components/topNav";
import "../css/landing.css"
import resumeIcon from "../assets/icons8-resume-96.png"
import githubIcon from "../assets/icons8-github-96.png"
import { Document, Page } from 'react-pdf';
import ResumePDF from "../assets/resume.pdf"
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';
// import { Button } from '@material-ui/core';

const LightTooltip = withStyles((theme) => ({
    arrow: {
        "&:before": {
          border: "1px solid #E6E8ED"
        },
        color: theme.palette.common.white
      },
    tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        color: 'rgba(0, 0, 0, 0.6)',
        boxShadow: theme.shadows[1],
        fontSize: 15,
        margin: "34% 0",
    },
}))(Tooltip);

const Landing = () => {
    return (
        <div className="landingPage">
            <TopNav PageName={"Landing"} />
            <div className="titleContainer">
                <p id="title">SHIYAO WANG</p>
            </div>
            <div className="icons">
            <LightTooltip title="Resume" arrow>
                <div onClick={resumeIconClick} id="resumeIcon">
                    <img  src={resumeIcon} alt="resumeIcon"/>
                </div>
            </LightTooltip>
            <LightTooltip title="GitHub" arrow>
                <div onClick={githubIconClick}id="githubIcon">
                    <img  src={githubIcon} alt="githubIcon"/>
                </div>
            </LightTooltip>
            </div>
        </div>
    );
};

function githubIconClick(){
    console.log("github icon clicked")
    window.open("https://github.com/S-0w0-W?tab=repositories");
}

function resumeIconClick(){
    console.log("resume icon clicked")
    window.open(ResumePDF);
}

export default Landing;
