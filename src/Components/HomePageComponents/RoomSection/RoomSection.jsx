import "./roomSection.css";
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import img1 from "../../../assets/images/room-1.jpg"
import img2 from "../../../assets/images/room-2.jpg"
import img3 from "../../../assets/images/room-3.jpg"
import { Link } from "react-router-dom";
import { useEffect } from "react";


const roomData = [
  {
    image: `${img2}`,
    title: "Single Bed Per Room",
    price: "Each room is equipped with a comfortable single bed, ensuring a cozy and private space for guests to relax and unwind during their stay.",
  },
  {
    image: `${img1}`,
    title: "Combined Rooms",
    price: "Our combined rooms feature multiple single beds, providing ample sleeping space for groups or families traveling together.",
  },
  {
    image: `${img3}`,
    title: "Dormitory",
    price: "Our dormitory rooms offer a communal living experience with individual single beds, allowing guests to socialize while enjoying their own personal space",
  },

];

const RoomSection = () => {

  useEffect(() => {

    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };


    const navLinks = document.querySelectorAll('.navlink');
    navLinks.forEach(link => {
      link.addEventListener('click', handleScrollToTop);
    });


    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleScrollToTop);
      });
    };
  }, []);


  return (
    <div className="site-section bg-light" id="rooms">
      <div className="container">
        <div className="row justify-content-center pb-4">
          <div
            className="col-md-7 text-center heading-section aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <h2 className="mb-3 mt-5" style={{fontFamily:"monospace"}}>What We Offer</h2>
            <span>----------</span> <FaCanadianMapleLeaf style={{fontSize:"40px",color:"rgb(141, 196, 63)"}}/> <span>----------</span>
          </div>
        </div>
        <div className="row">
          {roomData.map((room, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-5" data-aos="flip-right" data-aos-duration="500">
              <div className="hotel-room  text-center shadow">
                <a href="#" className="d-block mb-0 thumbnail">
                  <img src={room.image} alt="Image" className="img-fluid" />
                </a>
                <div className="hotel-room-body">
                  <h3 className="heading mb-0">
                    <h5 style={{fontFamily:"sans-serif"}}>{room.title}</h5>
                  </h3>
                  <strong className="price">{room.price}</strong>
                </div>
                <Link to="/contact" className="view-detail mb-4 navlink" style={{fontSize:"15px"}}>
                  Contact now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomSection;
