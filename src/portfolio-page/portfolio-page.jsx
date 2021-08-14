import { NavigationBar } from '../navigation';
import { Home } from '../home';
import { AboutMe } from '../about-me';
import { Skills } from '../skills';
import { MyProjects } from '../my-projects';
import { ContactMe } from '../contact-me';
import './portfolio-page.scss';

const PortfolioPage = () => {
    return (
        <div>
            <NavigationBar/>
            <p className="underConstruction">Under Construction...</p>
            <div className="wrapper parent">
                <div id="#home"><Home /></div> 
                    <div className="scroll-bg bg-1 child">
                        <div id="about"><AboutMe /> </div>
                        <div className="bg-2">
                            <div id="skills"> <Skills /> </div>
                            <div id="projects" > <MyProjects /></div>
                            <div id="contact" > <ContactMe /></div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default PortfolioPage;
