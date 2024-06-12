import './image-slider.css'
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

const Imageslider = () => {

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
    <center className='imageslider-h3'>TESTIMONIAL</center>
    <center className='imageslider-h1'>Our Happy Customers</center>
    <div className="container slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image) => (
          <div className="slide" key={image.id}>
           
            <div className="profile-photo"><img src={image.profilephoto} alt="" /></div>
            <div className="slider-body">
              <h3>{image.name}</h3>
              <h4>{image.title}</h4>
              <p>{image.content}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}><AiOutlineDoubleLeft /></button>
      <button className="next" onClick={nextSlide}><AiOutlineDoubleRight /></button>
    </div>
    </>
  );
}

export default Imageslider;