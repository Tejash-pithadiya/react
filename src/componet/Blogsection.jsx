import 'bootstrap/dist/css/bootstrap.min.css'
import { CiCalendar } from "react-icons/ci";
import { GoComment } from "react-icons/go";
import './blogsection.css'

const Blogsection = () =>{

    const obj = 
      [
        {
            blogimg : "img/b1.jpg",
            blogdateicon : <CiCalendar />,
            blogdate : "JULY,10,2020",
            commenticon : <GoComment />,
            commentno : "0",
            blogtitle : "Blended Beverages"
        },
        {
            blogimg : "img/b2.jpg",
            blogdateicon : <CiCalendar />,
            blogdate : "JULY,10,2020",
            commenticon : <GoComment />,
            commentno : "0",
            blogtitle : "Espresso Beverages"
        },
        {
            blogimg : "img/b1.jpg",
            blogdateicon : <CiCalendar />,
            blogdate : "JUNE,14,2017",
            commenticon : <GoComment />,
            commentno : "0",
            blogtitle : "Top 5 Tips Of Selecting Healty Beverages"
        }
      ] 
    

      return (
        <div className="container blog-container">
            <center className='title1'>MARKETING FACS</center>
            <center className='title2'>Our Blog News</center>
            <div className='blog-grid'>
                {obj.map((item, index) => (
                    <div className='card' key={index}>
                        <img src={item.blogimg} alt={item.blogtitle} />
                        <div className='card-body'>
                            <div className='dateicon'>{item.blogdateicon}</div>
                            <div className='date'>{item.blogdate}</div>
                            <div className='commenticon'>{item.commenticon}</div>
                            <div className='commentno'>{item.commentno}</div>
                            <div className='blogtitle'>{item.blogtitle}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Blogsection;