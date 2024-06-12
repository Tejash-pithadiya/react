import './homeslider.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState ,useEffect} from 'react';
import { AiOutlineDoubleRight ,AiOutlineDoubleLeft} from "react-icons/ai";

const images = [
  {
    id: 1, 
    profilephoto: "/img/profile1.jpg",
    name: "Maliek Doe",
    title: "Young Business",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",

  },
  {
    id: 2,
    profilephoto: "/img/profile2.jpg",
    name: "Jono Kopler",
    title: "Designation",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",

  },
  {
    id: 3,
    profilephoto: "/img/profile3.jpg",
    name: "Wong Sae We",
    title: "Accounting",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    
  }
];

const Homeslider = () => {
    
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <div className="homesliderBG">
    <center className='Himageslider-h3'>TESTIMONIAL</center>
    <center className='Himageslider-h1'>Our Happy Customers</center>
    <div className="container Hslider-container">
      <div className="Hslider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image) => (
          <div className="Hslide" key={image.id}>
           
            <div className="Hprofile-photo"><img src={image.profilephoto} alt="" /></div>
            <div className="Hslider-body">
              <h3>{image.name}</h3>
              <h4>{image.title}</h4>
              <p>{image.content}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="Hprev" onClick={prevSlide}><AiOutlineDoubleLeft /></button>
      <button className="Hnext" onClick={nextSlide}><AiOutlineDoubleRight /></button>
    </div>
    </div>
    </>
  );
}
export default Homeslider;



