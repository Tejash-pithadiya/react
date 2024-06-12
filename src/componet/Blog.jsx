import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const Blog = () => {
    const blogPosts = [
        {
            title: "Brewed Coffee",
            date: "10 Jul 2020",
            imgSrc: "img/1Blog.jpg",
        },
        {
            title: "Blended Beverages",
            date: "10 Jul 2020",
            imgSrc: "img/1Blog.jpg",
        },
        {
            title: "Espresso Beverages",
            date: "10 Jul 2020",
            imgSrc: "img/1Blog.jpg",
        },
        {
            title: "Top 5 Tips Of Selecting Healthy Beverages",
            date: "14 Jun 2017",
            imgSrc: "img/1Blog.jpg",
        },
        {
            title: "How to make the air in your home much fresher?",
            date: "14 Jun 2017",
            imgSrc: "img/1Blog.jpg",
        },
    ];

    const posts = [
        {
            img: "img/1Blog.jpg",
            title: "Brewed Coffee",
            text: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book psum is simply dummy text of the printing and typesetting industry",
            date: "July 10,2020",
            author: "Author",
            menu: "Menus"
        },
        {
            img: "img/2Blog.jpg",
            title: "Brewed Coffee",
            text: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book psum is simply dummy text of the printing and typesetting industry",
            date: "July 10,2020",
            author: "Author",
            menu: "Menus"
        },
        {
            img: "img/3Blog.jpg",
            title: "Brewed Coffee",
            text: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book psum is simply dummy text of the printing and typesetting industry",
            date: "July 10,2020",
            author: "Author",
            menu: "Menus"
        },
    ]

    const tags = [
        "barista", "brewing", "equipment", "espresso",
        "food", "health", "healty", "roasting"
    ];
    return (
        <>
            {/* <Navbar></Navbar> */}

            <section className="contact-us">
                <div className="contact-overlay">
                    <div className="contact-content">
                        <h1>Blog</h1>
                        <p>Home - Blog</p>
                    </div>
                </div>
            </section>

            <div className="Blog">
                <div className="Blog1">
                    {
                        posts.map((item) => (

                            <div className='chlblog'>
                                <div className="img">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="text">
                                    <div> <span>{item.date}</span> <span>{item.author} </span>  <span> {item.menu}</span></div>
                                    <div className="h1">{item.title}</div>
                                    <p>{item.text}</p>
                                </div>
                            </div>

                        ))
                    }

                </div>


                <div className="Blog2">

                    <div className="blog-section">
                        <h2>Popular Blog</h2>
                        <ul className="blog-list">
                            {blogPosts.map((post, index) => (
                                <li key={index} className="blog-item">
                                    <img src={post.imgSrc} alt={post.title} className="blog-image" />
                                    <div className="blog-content">
                                        <h3><b>{post.title}</b></h3>
                                        <p>{post.date}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="tagging-section">
                        <h2>Tagging</h2>
                        <div className="tags">
                            {tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <Footer></Footer>
        </>
    )

}

export default Blog