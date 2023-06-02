import Samuel from '../Media/Images/Samuel.png';
import SamuelProfile from '../Media/Text/SamuelProfile';
import '../Styles/AboutSamuel.css';

const AboutSamuel = () => {
    return(
        <main>
            <h1>AboutSamuel</h1>
            <article>
                <img src={Samuel} alt='Samuel Romero' id='samuel-photo'/>
                <SamuelProfile/>
            </article>
        </main>
    );

}

export default AboutSamuel;