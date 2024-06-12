import React from 'react'
import Navbar from './Navbar'
import Firstsection from './Firstsection'
import Footer from './Footer'

const Menu = () => {

    const Data = [
        {
            Name: "Coffee Latte",
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            price: "$2.95"
        },
        {
            Name: "Coffee Moccha Latte",
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            price: "$3.05"
        },
        {
            Name: "Capucino",
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            price: "$5.50"
        },
        {
            Name: "Java Coffee",
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            price: "$3.05"
        }, {
            Name: "Luwak Coffee",
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            price: "$13.00"
        }

    ]
    return (
        <>
        {/* <Navbar></Navbar> */}
       
        <section className="contact-us">
          <div className="contact-overlay">
            <div className="contact-content">
              <h1>Our Menu</h1>
              <p>Home - Menu</p>
            </div>
          </div>
        </section>

            <div className="menuHero">
                <div className="Text">
                    <center className="text">
                        <h1>Drinks & Beverages</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque et non erat maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.</p>
                    </center>
                </div>
                <div className="Menu">

                    <div className="menu1 coman">
                        <div className='title'> <b>HOT DRINKS</b> </div>
                        {
                            Data.map((item) => <div className="menu-item">
                                <div className="description">
                                    <h2>{item.Name}</h2>
                                    <p>{item.data}</p>
                                </div>

                                <div className="price">
                                    {item.price}
                                </div>

                            </div>)
                        }
                    </div>

                    <div className="menu2 coman">
                        <div className='title'> <b>COLD DRINKS</b> </div>
                        {
                            Data.map((item) => <div className="menu-item">
                                <div className="description">
                                    <h2>{item.Name}</h2>
                                    <p>{item.data}</p>
                                </div>

                                <div className="price">
                                    {item.price}
                                </div>

                            </div>)
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Menu