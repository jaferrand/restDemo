import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary ms-4" >
            
                <Navbar.Brand as={Link} to='/' ><img src="../public/img/logoPNG2.png" alt="logo" width='100px' height='100px' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/restDemo/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/restDemo/about'>About</Nav.Link>
                        <Nav.Link as={Link} to='/restDemo/menu'>Menu</Nav.Link>
                        <Nav.Link as={Link} to='/restDemo/reservas'>Reservas</Nav.Link>
                        <Nav.Link as={Link} to='/restDemo/blog'>Blog</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            
        </Navbar>
    );
}



