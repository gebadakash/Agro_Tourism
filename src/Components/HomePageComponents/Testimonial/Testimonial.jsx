import "./testimonial.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import Person1 from "../../../assets/images/Person_1.jpg";
import Person2 from "../../../assets/images/Person_2.jpeg";
import Person3 from "../../../assets/images/Person_3.jpeg";

const Testimonial = () => {
  const testimonialData = [
    {
      imageUrl: `${Person1}`,
      text: `Mahuli Agro Tourism is a peaceful getaway in Maharashtra's countryside. With cozy cottages and fun activities like nature walks, it's perfect for anyone who loves nature. The food is fresh from their farms, and they care about the environment. It's a great place to relax and have fun outdoors!`
    },
    {
      imageUrl: `${Person2}`,
      text: `Mahuli Agro Tourism is a peaceful getaway in Maharashtra's countryside. With cozy cottages and fun activities like nature walks, it's perfect for anyone who loves nature. The food is fresh from their farms, and they care about the environment. It's a great place to relax and have fun outdoors`
    },
    {
      imageUrl: `${Person3}`,
      text: `Location is very good , situated at the boundary of Pench Forest. Food preparation is excellent. We can enjoy in the Pench river which is at 5 minutes walking distance. River view from the Mahadev Tekdi. Excellent Picnic Destination. 👍`
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mt-5">
    <div className="row justify-content-center pb-4 wrapper">
          <div
            className="col-md-7 text-center heading-section aos-init aos-animate inner mb-5 mt-5"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            <h2 style={{fontFamily:"monospace"}}>Our Happy Guests</h2>
            <span>----------</span> <FaCanadianMapleLeaf style={{fontSize:"40px",color:"rgb(141, 196, 63)"}}/> <span>----------</span>
          </div>
        </div>
    
      <div className="row" style={{justifyContent:"center"}}>
        <div className="col-md-8 col-md-offset-2">
          <Slider {...settings}>
            {testimonialData.map((testimonial, index) => (
              <div key={index} className="item">
                <div className="profile-circle" style={{justifyContent:"center", display:"flex"}}><img className="img-responsive" src={testimonial.imageUrl} alt="" /></div>
                <blockquote className="mt-5">
                  <p dangerouslySetInnerHTML={{ __html: testimonial.text }} className="TestPara" style={{textAlign:"justify", fontSize:"22px"}}></p>
                </blockquote>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Testimonial;




