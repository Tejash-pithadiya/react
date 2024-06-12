import Aboutfirst from "./about-us/About-firstsection"
import Aboutsecond from "./about-us/About-second"
import Aboutthird from "./about-us/About-third"
import Footer from "./Footer"
import Imageslider from "./about-us/Image-slider"
import Navbar from "./Navbar"

const Aboutus = () =>{
 return(
    <>
        {/* <Navbar/> */}
        <Aboutfirst/>
        <Aboutsecond/>
        <Aboutthird/>
        <Imageslider/>
        <Footer/>
    </>
 )
}
export default Aboutus