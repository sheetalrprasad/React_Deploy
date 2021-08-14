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
                {/* <Nav.Link href="#">HOME</Nav.Link> */}
                <Nav.Link href="#about">ABOUT</Nav.Link>
                <Nav.Link href="#skills">SKILLS</Nav.Link>
                <Nav.Link href="#projects">PROJECTS</Nav.Link>
                <Nav.Link href="#contact">CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>




    //     <header className="mobile-nav">
    //     <nav className="navbar navbar-expand-lg navbar-dark navbar-custom" sticky="top">
    //     <a className="navbar-brand" href="#">
    //         <img id="brand-img" src={sp} />
    //     </a>
    //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //         <div className="navbar-nav">
    //             <a className="nav-item nav-link" href="#">HOME</a>
    //             <a className="nav-item nav-link" href="#about">ABOUT</a>
    //             <a className="nav-item nav-link" href="#skills">SKILLS</a>
    //             <a className="nav-item nav-link" href="#projects">PROJECTS</a>
    //             <a className="nav-item nav-link" href="#contact">CONTACT</a>
    //         </div>
    //     </div>
    // </nav>
    // </header>
    );
};

export default NavigationBar;