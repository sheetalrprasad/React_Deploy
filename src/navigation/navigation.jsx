import './navigation.scss';
import sp from '../static/sp.png';
import { Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () =>{
    return (
        <Navbar collapseOnSelect expand="sm" variant="dark" sticky="top" bg="transparent" className="navbar-custom">
            <Navbar.Brand href="#"><img id="brand-img" src={sp} alt="SP" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle"><i className="fa fa-ellipsis-v icon-color"></i></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto font-color">
                <Nav.Link href="#about">ABOUT</Nav.Link>
                <Nav.Link href="#skills">SKILLS</Nav.Link>
                <Nav.Link href="#projects">PROJECTS</Nav.Link>
                <Nav.Link href="#contact">CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;