import { Nav } from 'react-bootstrap';

const Social = ({name, link}) => {
    if(!link){
        return null;
    }
    if(!name){
        return null;
    }
    return(
        <ui className="member-social-network">
            <Nav.Link className='member-social-icons' href={link}>
                <img className='social-icon' src={require('../Media/Icons/' + name.toLowerCase() + '.png')} alt={name + ' logo'}/>
            </Nav.Link>
        </ui>
    );
}

export default Social;