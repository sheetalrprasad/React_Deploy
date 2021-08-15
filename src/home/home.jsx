import data from '../static/text-data/english.json';
import './home.scss';

const Home = () =>{

    return (
            <div className="introduction" > 
                <div className="intro-text">
                    <h2>{data.introductionH2}</h2>
                    <h4>{data.introductionH4}</h4>
                </div>
            </div>
            
    );
};

export default Home;