import React from 'react'
import About from './About'
import CoffeTime from './CoffeTime'
import VideoPlayer from './Video'
import Navbar from './Navbar'
import Firstsection from './Firstsection'
import Homeslider from './Homeslider'
import Blogsection from './Blogsection'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            {/* <Navbar></Navbar> */}
            <Firstsection></Firstsection>
            <About></About>
            <CoffeTime></CoffeTime>
            <VideoPlayer></VideoPlayer>
            <Homeslider></Homeslider>
            <Blogsection></Blogsection>
            <Footer></Footer>

        </>
    )
}

export default Home