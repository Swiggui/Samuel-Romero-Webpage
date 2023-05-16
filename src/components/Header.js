import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Media/logo.png';

import '../Styles/headerStyles.css';

const Header = () => {
  return (
    <Navbar expand="lg" className='py-4 px-3' id='header' variant='dark'>
      <Container fluid>
        <Navbar.Brand href="/"><img alt='Logo de Samuel Romero y compañía' src={Logo} id="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          />
          <Nav>
            <Nav.Link href="AboutSamuel">About Samuel</Nav.Link>
            <Nav.Link href="#Team">Team</Nav.Link>
            <Nav.Link href="#Credits">Credits</Nav.Link>
            <Button variant='outline-light' className='px-5 mx-3 rounded-pill' id='contactButton' href='mailto:samuel@samuel-romero.com'>Contact Us</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;