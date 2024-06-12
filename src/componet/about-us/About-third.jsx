import './about-third.css'
import { IoIosPlay } from "react-icons/io";

const Aboutthird = () =>{

    return(
        <div className="about-thirdMain">
            <div className="about-thirdOverlay">
                <h6>OUR MAIN GOAL</h6>
                <h1>We give best quality <br /> food to our customer</h1>
                <div className="aboutthird-box1 mt-5">
                    <div className="aboutthird-box2">
                    <IoIosPlay className='playbutton'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutthird;