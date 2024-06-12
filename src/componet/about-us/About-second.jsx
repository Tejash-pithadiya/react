import './about-second.css'

const Aboutsecond = () =>{
    const obj1 = 
      [
        {
            blogimg : "img/b3.jpg",
            blogtitle : "Brewed Coffee",
            blogbutton : "READ MORE"
        },
        {
            blogimg : "img/b2.jpg",
            blogtitle : "Blended Beverages",
            blogbutton : "READ MORE"
        },
        {
            blogimg : "img/b1.jpg",
            blogtitle : "Espresso Beverages",
            blogbutton : "READ MORE"
        }
      ] 
    

      return (
        <div className="container about-container">
            <center className='abouttitle1'>EXPERTLY ROSTED & RICHLY BREWED COFFEE</center>
            <center className='abouttitle2'>We Only have the best in Town</center>
            <div className='blog-grid'>
                {obj1.map((item, index) => (
                    <div className='card' key={index}>
                        <img src={item.blogimg} alt={item.blogtitle} />
                        <div className='card-body about-card-body'>
                            <div className='blogtitle mt-3'>{item.blogtitle}</div>
                            <button className="blogbutton mt-3">{item.blogbutton}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Aboutsecond;