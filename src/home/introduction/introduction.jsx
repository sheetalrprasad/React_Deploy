import './introduction.scss';
import data from '../../static/text-data/english.json';

const Introduction = () =>{
    return(
        <div className="intro">
            <h2>{data.introductionH2}</h2>
            <h4>{data.introductionH4}</h4>
        </div>
    );
};

export default Introduction;