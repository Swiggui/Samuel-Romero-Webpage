import { Nav } from 'react-bootstrap';

const Social = ({name, link}) => {
    if(link){
        return(
            <ui className="member-social-network">
                <Nav.Link className='member-social-icons' href={link}>
                    <img className='social-icon' src={require('../Media/Icons/' + name.toLowerCase() + '.png')}/>
                </Nav.Link>
            </ui>
        );
    }
    return null;
}

export default Social;