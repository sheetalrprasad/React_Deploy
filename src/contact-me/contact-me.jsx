import './contact-me.scss';

const ContactMe = () =>{
      
    return(
        <div className="contact-me">

            <span className="left-column">
                <h1>Let's Get In Touch!</h1>

                <br />
                <p> 
                    <i className="fa fa-map-marker"></i> Address
                    <br />
                    Pune, Maharashtra
                    <br />INDIA
                    <br />411014
                </p>

                <br/>
                <p> 
                    <i className="fa fa-envelope"></i> Email
                <br />
                sheetalraniprasad@gmail.com
                </p>

                <br/>

                <h6>
                <i class="fa fa-handshake-o" aria-hidden="true"></i> Social
                </h6>

                <table> 
                    <tr>
                        <td className="social-icon">
                            <a href="https://www.linkedin.com/in/sheetalrprasad/" target="_blank"  rel="noreferrer" className="fa fa-linkedin btn btn-primary"></a>
                        </td>
                    <td className="social-icon">
                        <a href="https://github.com/sheetalrprasad" target="_blank" rel="noreferrer" className="fa fa-github btn btn-primary"></a>
                    </td>
                    </tr>
                </table>
            </span>
            
        </div>
    );
       
};

export default ContactMe;