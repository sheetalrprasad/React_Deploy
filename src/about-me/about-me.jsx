import doc from '../static/SHEETAL_RANI_PRASAD.pdf';
import './about-me.scss';
import me from '../static/me.jfif';
import data from '../static/text-data/english.json';

const AboutMe = () =>{
    return (
        <div className="about-me">
            <div className="content-title">
                <h2 id="heading">About me</h2>
            </div>
            <div className="content">
                <div className="imageSelf">
                    {/* <img src={me} alt="sheetal" id="sheetal"/> */}
                </div>
                <div className="text-content">
                    <h2 id="professionalTitle">{data.professionalTitle}</h2>
                    <p id="jobDescription">{data.jobDescription1}
                    <br />{data.jobDescription2}
                    <br /><i>"Passionately curious"</i> - that's how I'll describe myself.<br />
                    <br/>
                    <br />
                    <a id="downloadButton" href={doc} download="CV_Sheetal_R_Prasad">
                        <button type="button" className="btn btn-primary">{data.downloadButton}</button>
                    </a>
                    </p>  
                </div>
            </div>
        </div>
    );
};

export default AboutMe;