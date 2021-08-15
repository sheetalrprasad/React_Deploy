import { NavigationBar } from '../navigation';
import { Home } from '../home';
import { AboutMe } from '../about-me';
import { Skills } from '../skills';
import { MyProjects } from '../my-projects';
import { ContactMe } from '../contact-me';
import './portfolio-page.scss';
import { useState } from 'react';
import { useCallback } from 'react';

const PortfolioPage = () => {
    const [home, setHome] = useState(true);
    const [about, setAbout] = useState(false);
    const [skills, setSkills] = useState(false);
    const [projects, setProjects] = useState(false);
    const [contact, setContact] = useState(false);

    const onClickHandle = useCallback(section => {
        
        setHome(false);
        setAbout(false);
        setSkills(false);
        setProjects(false);
        setContact(false);
        
        console.log("section ", section);

        switch (section) {
            case 'home':
                setHome(true);
                break;
            case 'about':
                setAbout(true);
                break;
            case 'skills':
                setSkills(true);
                break;
            case 'projects':
                setProjects(true);
                break;
            case 'contact':
                setContact(true);
                break;
            default:
                setHome(true);
        }
    });

    return (
        <div className="main-content">
            
            { home ? <div id="#"> <Home /> </div> : <></> }
            { about ? <div id="about"> <AboutMe /> </div> : <></> }
            { skills ? <div id="skills"> <Skills /> </div> : <></> }
            { projects ? <div id="projects" > <MyProjects /> </div> : <></> }
            { contact ? <div id="contact" > <ContactMe /> </div> : <></> }
            
            <NavigationBar onClickHandle={onClickHandle} />
        </div>
    );
};

export default PortfolioPage;
