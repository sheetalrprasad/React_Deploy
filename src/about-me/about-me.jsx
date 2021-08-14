import doc from '../static/SHEETAL_RANI_PRASAD.pdf';
import './about-me.scss';
import me from '../static/me.jfif';
import data from '../static/text-data/english.json';

const AboutMe = () =>{
    return (
        <div className="about-me-outer">
            <h2 id="heading">About me </h2>
            <div className="about-me-web">
                <div id="imageSelf">
                    <img src={me} id="sheetal"/>
                </div>
                <div id="descriptionSelf">
                    <h2 id="professionalTitle">{data.professionalTitle}</h2>
                    <p id="jobDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus atque saepe expedita recusandae, possimus consequuntur assumenda omnis ipsum soluta, sapiente quidem, et dolorem?
                        Modi eum repellendus perspiciatis totam corrupti? Autem!<br/><br/>
                    {/* <p id="jobDescription">{data.jobDescription1}
                    <br />{data.jobDescription2}
                    <br /><i>"Passionately curious"</i> - that's how I'll describe myself.<br /> */}
                    <i>"Passionately curious"</i>
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