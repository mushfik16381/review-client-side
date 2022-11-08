import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <Navbar style={{backgroundColor: '#8000ff',}} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/'>
            <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-item text-white">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
            <Nav.Link as={Link} to="/Faq">FAQ</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
          </Nav>
          {/* <Nav >
            {
              user?.uid ?
                <button className='log-out' onClick={logOut}>Log Out</button>
              :
              <>
                <Nav.Link as={Link} to="/login"><Button variant="outline-primary">Login</Button></Nav.Link>
                <Nav.Link as={Link} to="/register"><Button variant="outline-secondary">Register</Button></Nav.Link>
              </>
            }
          </Nav>
          <Nav>
            <div className='user-img'><OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip-disabled">{user?.displayName}</Tooltip>}>
            <Nav.Link >{user?.photoURL ?
              <Image style={{height:'30px'}} roundedCircle 
              src={user.photoURL}></Image>
              : <FaUser></FaUser>
            }</Nav.Link>
          </OverlayTrigger></div>
            
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;