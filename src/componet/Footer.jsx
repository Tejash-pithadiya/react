import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaFacebookF ,FaInstagram,FaYoutube} from "react-icons/fa";


const Footer = () => {

    return (
        <>
            <center className="footertitle">BOOK A TABLE</center>
            <div className="main1">
                <div className="hero1">
                    <div className="container">
                        <div className="infosection">
                            <center className="infoblock1">
                                <h2>We're Open 7 Days a Week</h2>
                                <p>22.00 - 09.00</p>
                            </center>
                            <div className="infoblock">
                                <div className="infoblock2">
                                    <h5>ADDRESS</h5>
                                    <p>Ngagel Rejo Kidul 03<br />Surabaya, East Java<br />Indonesia <br />612345</p>
                                </div>
                                <div className="vi"></div>
                                <div className="infoblock3">
                                    <h5>Need Help? Call Us</h5>
                                    <p>+628123456789</p>
                                    <h3>WRITE US MASSAGE</h3>
                                    <h3>email@youremail.com</h3>
                                </div>
                            </div>
                        </div>
                        <div className="socialmedia mt-5">
                            <a href="https://facebook.com"><FaFacebookF /></a>
                            <a href="https://instagram.com"><FaInstagram /></a>
                            <a href="https://youtube.com"><FaYoutube/></a>
                        </div>
                        <center className='footer mt-4'>&copy; Copyright 2024 dement.com</center>

                    </div>
                </div>
            </div>
        </>         
    )

}
export default Footer