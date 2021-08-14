import './my-projects.scss';
import { useState }from 'react';
import { Carousel } from 'react-bootstrap';

const MyProjects = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  
    return (
        <div className="project-section">
            <h2>Project Gallery</h2>
            <p><i>"One thing is sure. We have to do something. We have to do the best we know how at the moment . . . If it doesn't turn out right, we can modify it as we go along."</i></p>
            
            <div className="my-projects-carousel">
                <Carousel activeIndex={index} onSelect={handleSelect} nextIcon={<span className="fa fa-arrow-right icon-color"></span>} prevIcon={<span className="fa fa-arrow-left icon-color"></span>} className="Carousel">
                    <Carousel.Item className="item">
                        <div className="card text-center bg-light mb-3 eachCard">
                            <div className="card-header">
                                Featured
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Sentiment Analysis</h5>
                                <p className="card-text">Using Natural Language Processing determining whether data is positive, negative or neutral. 
                                <br />
                                </p>
                            </div>
                            <div className="card-footer text-muted">
                                <a href="https://github.com/sheetalrprasad/twitterAnalysis" target="_blank" className="fa fa-github btn btn-primary"></a>
                            </div>
                        </div>
                </Carousel.Item>
                <Carousel.Item className="item">
                    <div className="card text-center bg-light mb-3 eachCard">
                        <div className="card-header">
                            Featured
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Recommendation System</h5>
                            <p className="card-text">Developed using Python, Django and sci-kit learn to recommend show based on show's user rating.
                                <br />
                            </p>
                        </div>
                        <div className="card-footer text-muted">
                            <a href="https://github.com/sheetalrprasad/Netflix_Show_Recommendation" target="_blank" className="fa fa-github btn btn-primary"></a>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="item">
                    <div className="card text-center bg-light mb-3 eachCard">
                        <div className="card-header">
                            Featured
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Web Mapping</h5>
                            <p className="card-text">Mapping of all volcanoes location on world map. Used Python, Folium, Pandas.
                                <br />
                            </p>
                        </div>
                        <div className="card-footer text-muted">
                            <a href="https://github.com/sheetalrprasad/Data-Visualization" target="_blank" className="btn btn-primary fa fa-github"></a>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
                <a id="more-projects" href="https://github.com/sheetalrprasad" target="_blank" className="btn btn-primary"> More Projects</a>
            </div>

            <div className="project-table">
                <table>
                    <tr className="with-border">
                        <td>
                            <h5>Sentiment Analysis</h5>
                            <p>Using Natural Language Processing technique determining whether data is positive, negative or neutral. </p>
                            <a href="https://github.com/sheetalrprasad/twitterAnalysis" target="_blank" className="fa fa-github btn btn-primary"></a>
                        </td>
                    </tr>
                    <tr className="with-border">
                        <td>
                        <h5>Recommendation System</h5>
                            <p>Developed using Python, Django and sci-kit learn to recommend show based on show's user rating. </p>
                            <a href="https://github.com/sheetalrprasad/Netflix_Show_Recommendation" target="_blank" className="fa fa-github btn btn-primary"></a>
                        </td>
                    </tr>
                    <tr className="with-border">
                        <td>
                        <h5>Web Mapping</h5>
                            <p>Mapping of all volcanoes location on world map. Used Python, Folium, Pandas. </p>
                            <a href="https://github.com/sheetalrprasad/webmapping" target="_blank" className="fa fa-github btn btn-primary"></a>
                        </td>
                    </tr>
                    <tr className="with-border">
                        <td>
                        <h5>Data Visualization</h5>
                            <p>COVID-19 Spread around the world. Geo Mapping using Python. </p>
                            <a href="https://github.com/sheetalrprasad/Data-Visualization" target="_blank" className="fa fa-github btn btn-primary"></a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <a id="more-projects-table" href="https://github.com/sheetalrprasad" target="_blank" className="btn btn-primary"> More Projects</a> 
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
  };
  
  export default MyProjects;