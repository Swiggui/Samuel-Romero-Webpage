import '../Styles/mainPage.css';
import Trophy from'../Media/Icons/trophy.png';
import bgVideo from '../Media/Videos/bgVideo.mp4';
import Projects from '../components/Projects';
import { Button } from 'react-bootstrap';


const Home = () => {
    return(
        <div>
            <video autoPlay loop muted disablePictureInPicture id="bg-video">
                <source src={bgVideo} type="video/mp4"/>
            </video>
            <div id="banner">        
                <div id="banner-title">
                    <span id="company-name">Samuel Romero &amp; Co.</span>
                    <span id="banner-text">Music &amp; Sound for Films and Videogames</span>
                </div>
            </div>
            <main>
                <h1>About Us</h1>
                <section id="features">
                    <div className="feature">
                        <img src={Trophy} alt="Logo of a trophy"/>
                        <h3>Who are we?</h3>
                        <p>We’re a team of highly creative sound designers and composers working on some of the biggest game franchises worldwide.</p>
                    </div>
                    <div className="feature">
                        <img src={Trophy} alt="Trophy"/>
                        <h3>What Do We Do?</h3>
                        <p>We design and produce impactful sound and award winning music for video games, VR, and interactive media projects.</p>
                    </div>
                    <div className="feature">
                        <img src={Trophy} alt="Trophy"/>
                        <h3>Why Choose Us?</h3>
                        <p>We work the world’s top brands and are committed to delivering your project on time and within budget.</p>
                    </div>
                </section>
            </main>
            <section id="projects">
                <h1>Our Work</h1>
                <Projects/>
                <Button variant='outline-light' id='show-more-button'>Show More</Button>
            </section>
        </div>
    );
}

export default Home;