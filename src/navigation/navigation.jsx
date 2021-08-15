import './navigation.scss';
import sp from '../static/sp.png';
import { Nav, Navbar } from 'react-bootstrap';

const NavigationBar = props =>{
    const { onClickHandle } = props;
    
    return (
        <Navbar collapseOnSelect expand="sm" variant="dark" bg="transparent" sticky="bottom" className="navbar-custom fixed-bottom">
            <Navbar.Brand href="#" onClick={()=> onClickHandle('home')}><img id="brand-img" src={sp} alt="SP" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggle"><i className="fa fa-ellipsis-v icon-color"></i></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto font-color">
                <Nav.Link href="#about" onClick={() => onClickHandle('about')}>ABOUT</Nav.Link>
                <Nav.Link href="#skills" onClick={() => onClickHandle('skills')}>SKILLS</Nav.Link>
                <Nav.Link href="#projects" onClick={() => onClickHandle('projects')}>PROJECTS</Nav.Link>
                <Nav.Link href="#contact" onClick={() => onClickHandle('contact')}>CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;