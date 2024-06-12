import React from 'react'
import { FiFramer, FiDollarSign, FiAtSign } from "react-icons/fi";

const About = () => {

    const Data = [
        {
            Name: "MODERN COFFEE BAG",
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            icon: <FiFramer></FiFramer>
        },
        {
            Name: "CHOICE SEEDS",
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            icon: <FiDollarSign></FiDollarSign>
        },
        {
            Name: "PREMIUM TASTE",
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            icon: <FiAtSign></FiAtSign>
        }

    ]

    return (
        <>

            <div class="boxMain ">
                <div class="box">
                    <div class="chlBox1">
                        <div className='title'> <b>ABOUT THE PRODUCT</b> </div>
                        <h1>The Best Ingredient</h1>
                        {
                            Data.map(
                                (item) => <div className='about'>   <span className='span'>
                                    {item.icon}
                                </span>
                                    <div className='chlAbout'>
                                        <h5> <span>{item.Name}</span> </h5> <div className="aboutData">
                                            <p>{item.data}</p>
                                        </div>

                                    </div>
                                </div>

                            )
                        }
                    </div>
                    <div class="chlBox2">
                        {/* <img src="https://yaaliexim.in/wp-content/uploads/2023/05/varieties-of-coffee-beans.jpg" alt="" className="img" /> */}
                        <img src="img/coffeBean1.png" alt="" className="img" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
