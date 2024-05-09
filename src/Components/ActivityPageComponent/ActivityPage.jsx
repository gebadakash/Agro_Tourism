import "./activityPage.css";
import img1 from "../../assets/images/food_1.jpeg"
import img2 from "../../assets/images/img_5.jpg"
import img3 from "../../assets/images/img_7.jpg"
import img4 from "../../assets/images/img_10.jpg"
import img5 from "../../assets/images/img_14.jpeg"
import img6 from "../../assets/images/img_16.jpg"
import img7 from "../../assets/images/tracking.jpg"
import img8 from "../../assets/images/dance.jpg";
import img9 from "../../assets/images/Lake.jpg"




const roomData = [
  {
    images: [img1],
    title: "Traditional Indian Food",
    details: "Indulge in the rich flavors of Traditional Marathi cuisine, where every dish tells a story of heritage and authenticity.experience the culinary delights of Maharashtra's culinary legacy.",
  },
  {
    images: [img2],
    title: "A visit to an orange farm",
    details: "Experience the essence of Maharashtra's agricultural legacy with a visit to an orange farm. immersing yourself in the heart of Maharashtra's agricultural tradition. Explore vibrant citrus groves abundantly.",
  },
  {
    images: [img3],
    title: "Shiva Hill Tour",
    details: "Embark on a journey to Shiva Hill and delve into the spiritual and natural wonders it holds. Explore the serene surroundings and discover the divine essence of this sacred site.",
  },
  {
    images: [img4],
    title: "Bullock Cart Ride",
    details: "Take a nostalgic ride through time on a traditional bullock cart. Experience the rustic charm and tranquil pace of rural life, immersing yourself in the authentic heritage of a bygone era",
  },
  {
    images: [img5],
    title: "Sunset over the Pench River",
    details: "Marvel at the breathtaking beauty of a sunset over the Pench River. Witness nature's masterpiece unfold before your eyes as the sky transforms into a canvas of vibrant hues, creating an unforgettable experience.",
  },
  {
    images: [img6],
    title: "Air Rifle Shooting Game",
    details: "Experience the thrill of precision with archery and air rifle shooting. Test your aim and skill amidst the tranquil beauty of the countryside, creating unforgettable memories with each bullseye hit.",
  },


  {
    images: [img7],
    title: "Tracking",
    details: "Take a nostalgic ride through time on a traditional bullock cart. Experience the rustic charm and tranquil pace of rural life, immersing yourself in the authentic heritage of a bygone era",
  },
  {
    images: [img8],
    title: "Traditional Dance Programn",
    details: "Marvel at the breathtaking beauty of a sunset over the Pench River. Witness nature's masterpiece unfold before your eyes as the sky transforms into a canvas of vibrant hues, creating an unforgettable experience.",
  },
  {
    images: [img9],
    title: "Lake Activity",
    details: "Experience the thrill of precision with archery and air rifle shooting. Test your aim and skill amidst the tranquil beauty of the countryside, creating unforgettable memories with each bullseye hit.",
  },


];

const ActivityPage = () => {

  return (
    <div className="site-section bg-light mt-5">
      <div className="container">
        <div className="row">
          {roomData.map((room, index) => (
            <div key={index} className="col-md-6 col-lg-4 mb-5" data-aos="flip-left" data-aos-duration="200">
              <div className="hotel-room text-center shadow">
                <img src={room.images[0]} className="img-fluid" />
                <div className="hotel-room-body">
                  <h4 style={{fontFamily:"monospace"}}>{room.title}</h4>
                  <strong className="details">{room.details}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
