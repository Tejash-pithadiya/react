
import './about-first.css'

const Aboutfirst = () =>{
    return (
        <>
        <section className="about-us">
          <div className="overlay">
            <div className="content">
              <h1>About Us</h1>
              <p>Home - About Us</p>
            </div>
          </div>
        </section>
    
        <div className="coffeehouse-container">
            <div className="coffeehouse-image">
                <img src="img/about1.jpg" alt="Coffeehouse" />
            </div>
            <div className="coffeehouse-content">
                <h3>30 YEARS IN COFFEEHOUSE HISTORY</h3>
                <h1>A gifted rewarding coffeehouse</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus molestias ex voluptatem repudiandae officia excepturi voluptates nostrum voluptatum provident beatae? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, enim.</p>
            </div>
        </div>
        </>
      );
} 

export default Aboutfirst;