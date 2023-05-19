import { Nav } from 'react-bootstrap';

import logoYouTube from '../Media/Icons/youtube.png';
import logoSoundcloud from '../Media/Icons/soundcloud.png'
import logoInstagram from '../Media/Icons/instagram.png';

import '../Styles/footerStyles.css';

const Footer = () => {
    return(
        <div id='footer'>
            <div>
                <Nav.Link href='mailto:samuel@samuel-romero.com'>samuel@samuel-romero.com</Nav.Link>
            </div>
            <div id='socialNetworks'>
                <Nav.Link className='icons' href='https://youtube.com/@samuelromero7203'>
                    <img className='socialIcon' src={logoYouTube} alt='YouTube Channel'/>
                </Nav.Link>
                <Nav.Link className='icons' href='https://on.soundcloud.com/gejvM'>
                    <img className='socialIcon' src={logoSoundcloud} alt='SoundCloud Channel'/>
                </Nav.Link>
                <Nav.Link className='icons' href='https://www.instagram.com/samuelromerotorres/'>
                    <img className='socialIcon' src={logoInstagram} alt='Instagram Profile'/>                    
                </Nav.Link>
            </div> 
        </div>
    );

}

export default Footer;