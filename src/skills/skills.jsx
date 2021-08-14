import './skills.scss';
import python from '../static/python.png';
import go from '../static/go.png';
import react from '../static/react.png';
import postgres from '../static/postgres.png';
import git from '../static/git.png';
import api from '../static/api.png';
import cassandra from '../static/cassandra-logo.png';
import mongo from '../static/mongodb-logo.png';
import java from '../static/java-logo-2.png';


const Skills = () =>{

    return(
        <div className="skills-section">
            <div id="box1">
                <h2 id="skillTitle">My Expertises</h2>
            </div>
            <a href="#contact" className="btn btn-primary">Hire Me</a>
            <div className="skills">
                    <table className="techBox1">
                        <tbody>
                            <tr> 
                                <td><img id="techImg" src={python} /><br />Python</td>
                                <td><img id="techImg" src={go} /><br/> Go </td>
                                <td><img id="techImg" src={java} /> <br />Java</td>
                            </tr>
                            <tr> 
                                <td><img id="techImg" src={git} /><br /> Git</td>
                                <td><img id="techImg" src={api} /><br />Microservices</td>
                                <td><img id="techImg" src={react} /><br />React</td>
                            </tr>
                            <tr> 
                                <td><img id="techImg" src={cassandra} /><br />Cassandra DB</td>
                                <td><img id="techImg" src={mongo} /><br />MongoDB </td>
                                <td><img id="techImg" src={postgres} /><br />PostgreSQL</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    );
};

export default Skills;