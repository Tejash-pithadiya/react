import './contact-us.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa6";
import Navbar from './Navbar';
import Footer from './Footer';



const Contactus = () =>{
    const box = [
        {
            boxicon : <FaLocationDot />,
            boxtitle : "ADDRESS",
            boxsubtitle : "PO BOX 161718 X-street Indonesia"
        },
        {
            boxicon : <FaPhoneAlt />,
            boxtitle : "PHONE",
            boxsubtitle : "+62 12345678 +62 87654321"
        },
        {
            boxicon :<HiOutlineMailOpen />,
            boxtitle : "EMAIL",
            boxsubtitle : "dement@your.com email@your.com"
        },
        {
            boxicon : <FaRegClock />,
            boxtitle : "COFFEE HOUR",
            boxsubtitle : "Tuesday - Sunday 10.00am - 11.30pm"
        }
    ]

    return(

<>
    {/* <Navbar/> */}
         <section className="contact-us">
          <div className="contact-overlay">
            <div className="contact-content">
              <h1>Contact Us</h1>
              <p>Home - Contact Us</p>
            </div>
          </div>
        </section>
       
       
        <div className="contact-section">
      {box.map((item, index) => (
        <div className="contact-item" key={index}>
          <div className="contact-icon">{item.boxicon}</div>
          <h3>{item.boxtitle}</h3>
          <p>{item.boxsubtitle}</p>
        </div>
      ))}
    </div>


    <div className="container">
      <h3 className="text-center my-4 small">IF YOU HAVE ANY QUESTION</h3>
      <h1 className="text-center my-4 form-h1">Leave us a message</h1>
      <form>
        <div className="row">
          <div className="form-group col-md-6">
            <input type="text" className="form-control no-radius" id="fullName" placeholder="Full Name" />
          </div>
          <div className="form-group col-md-6">
            <input type="email" className="form-control no-radius" id="email" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <input type="text" className="form-control no-radius" id="subject" placeholder="Subject" />
        </div>
        <div className="form-group">
          <textarea className="form-control no-radius" id="textarea"placeholder='Textarea' rows="4"></textarea>
        </div>
        <button type="submit" className=" btn-block no-radius">SUBMIT</button>
      </form>
    </div>


    <div className="google-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1373.0474187090465!2d72.85222549283152!3d21.23528552083001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f27ee8159e3%3A0xf6defb4d03e81080!2sSutex%20Bank%20College%20of%20Computer%20Applications%20%26%20Science!5e0!3m2!1sen!2sin!4v1717836769599!5m2!1sen!2sin" width="600" height="45" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <Footer/>

        
  </>
)
}

export default Contactus;