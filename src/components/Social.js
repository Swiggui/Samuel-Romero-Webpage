import { Nav } from 'react-bootstrap';

const Social = ({name, link}) => {
    if(!link){
        return null;
    }
    if(!name){
        return null;
    }
    return(
        
            <Nav.Link className='member-social-network' href={link}>
                <img className='social-icon' src={require('../Media/Icons/' + name.toLowerCase() + '.png')} alt={name + ' logo'}/>
            </Nav.Link>
        
    );
}

export default Social;