import "./activities.css";
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import img1 from "../../../assets/images/food_1.jpeg"
import img2 from "../../../assets/images/food_2.jpeg"
import img3 from "../../../assets/images/food_3.jpeg"
import img4 from "../../../assets/images/img_4.jpeg"
import img5 from "../../../assets/images/img_5.jpg"
import img6 from "../../../assets/images/img_6.jpg"
import img7 from "../../../assets/images/img_7.jpg"
import img8 from "../../../assets/images/img_8.jpeg"
import img9 from "../../../assets/images/img_9.jpeg"
import img10 from "../../../assets/images/img_10.jpg"
import img11 from "../../../assets/images/img_11.jpeg"
import img12 from "../../../assets/images/img_12.jpeg"
import img13 from "../../../assets/images/img_13.jpg"
import img14 from "../../../assets/images/img_14.jpeg"
import img15 from "../../../assets/images/img_15.jpeg"
import img16 from "../../../assets/images/img_16.jpg"
import img17 from "../../../assets/images/img_17.jpg"
import img18 from "../../../assets/images/img_18.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const roomData = [
  {
    images: [img1,img2,img3],
    title: "Traditional Marathi Foods",
    details: "The secret to our flavorful dishes lies in the freshness of our ingredients.  We source vegetables, lentils, and spices directly from our farm, ensuring the highest quality and the truest taste of Maharashtra.",
  },
  {
    images: [img4,img5,img6],
    title: "A visit to an orange farm",
    details: "Experience the essence of Maharashtra's agricultural legacy with a visit to an orange farm. immersing yourself in the heart of Maharashtra's agricultural tradition. Explore vibrant citrus groves abundantly.",
  },
  {
    images: [img7,img8,img9],
    title: "Shiva Hill Tour",
    details: "Embark on a journey to Shiva Hill and delve into the spiritual and natural wonders it holds. Explore the serene surroundings and discover the divine essence of this sacred site.",
  },
  {
    images: [img10,img11,img12],
    title: "Bullock Cart Ride",
    details: "Take a nostalgic ride through time on a traditional bullock cart. Experience the rustic charm and tranquil pace of rural life, immersing yourself in the authentic heritage of a bygone era",
  },
  {
    images: [img13,img14,img15],
    title: "Sunset over the Pench River",
    details: "Marvel at the breathtaking beauty of a sunset over the Pench River. Witness nature's masterpiece unfold before your eyes as the sky transforms into a canvas of vibrant hues, creating an unforgettable experience.",
  },
  {
    images: [img16,img17,img18],
    title: "Air Rifle Shooting Game",
    details: "Experience the thrill of precision with archery and air rifle shooting. Test your aim and skill amidst the tranquil beauty of the countryside, creating unforgettable memories with each bullseye hit.",
  },

];

const ActivitiesSection = () => {

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



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: null
  };

  return (
    <div className="site-section bg-light">
      <div className="container">
        <div className="row justify-content-center pb-4 wrapper">
          <div
            className="col-md-7 text-center heading-section aos-init aos-animate inner mb-5 mt-5"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            <h2 style={{fontFamily:"monospace"}} className="activityHeading">Activities in Mahuli Agro-Tourism</h2>
            <span>----------</span> <FaCanadianMapleLeaf style={{fontSize:"40px",color:"rgb(141, 196, 63)"}}/> <span>----------</span>
          </div>
        </div>

        <div className="row">
          {roomData.map((room, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-5">
              <div className="hotel-room text-center shadow">
                <Slider {...settings}>
                  {room.images.map((image, i) => (
                    <div key={i}>
                      <img src={image} alt={`Image ${i + 1}`} className="img-fluid" />
                    </div>
                  ))}
                </Slider>
                <div className="hotel-room-body">
                  <h4 style={{fontFamily:"monospace"}}>{room.title}</h4>
                  <strong className="details">{room.details}</strong>
                </div>
              </div>
            </div>
          ))}
          <div style={{justifyContent:"center", display:"flex"}}>
          <Link to="/activity" className="btn-get-started navlink" style={{textDecoration:"none"}}>View More</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSection;
