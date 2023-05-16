import React from "react";

import '../Styles/mainPage.css';
import Trophy from'../Media/Icons/trophy.png';

const Home = () => {
    return(
        <div>
            <div id="banner">
                <video autoPlay loop muted id="bgVideo" disablePictureInPicture>
                    <source src={require("../Media/bgVideo.mp4")} type="video/mp4"/>
                </video>
                <div id="bannerTitle">
                    <h2 id="companyName">Samuel Romero & Co.</h2>
                    <h2 id="bannerText">Music & Sound for Films and Videogames</h2>
                </div>
            </div>
            <main>
                <h3>About Us</h3>
                <div id="features">
                    <div className="feature">
                        <img src={Trophy} alt="Trophy"/>
                        <h3>Who are we?</h3>
                        <p>We’re a team of highly creative sound designers and composers working on some of the biggest game franchises worldwide.</p>
                    </div>
                    <div className="feature">
                        <img src={Trophy} alt="Trophy"/>
                        <h3>WHAT DO WE DO?</h3>
                        <p>We design and produce impactful sound and award winning music for video games, VR, and interactive media projects.</p>
                    </div>
                    <div className="feature">
                        <img src={Trophy} alt="Trophy"/>
                        <h3>WHY CHOOSE US?</h3>
                        <p>We work the world’s top brands and are committed to delivering your project on time and within budget.</p>
                    </div>
                </div>
                <h3></h3>
            </main>
        </div>
    );
}

export default Home;