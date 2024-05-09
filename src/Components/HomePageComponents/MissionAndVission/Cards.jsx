import { useState } from "react";
import "./cards.css";

const Cards = () => {
  const [services] = useState([
    {
      title: "Our Mission",
      content:
        "Mahuli Agro-tourism is dedicated to providing visitors with a unique and memorable agro-tourism experience. We offer the opportunity to immerse yourself in the beauty of rural life, learn about sustainable agriculture practices, and connect with nature. Located in Maharashtra, India, our farm offers a variety of activities and comfortable accommodations for a truly unforgettable getaway. Explore our lush fields and orchards, where you can pick fresh fruits and vegetables straight from the source. Engage in hands-on workshops to discover the secrets of organic farming and traditional culinary techniques. Relax amidst the serene countryside backdrop, rejuvenating your spirit in harmony with nature.",
    },
    {
      title: "Our Vision",
      content:
        "Our greatest strength lies in fostering a collaborative environment where diverse ideas and strategies are shared freely. By combining this collective expertise, we strive to deliver the most comprehensive and effective agro-tourism experiences for our guests. We're committed to staying ahead of the curve and are always changing to accommodate new trends and consumer preferences in the agro-tourism sector. Join us in our vibrant community of passionate individuals Together we work towards continuously enhancing our offerings, ensuring every visitor leaves with cherished memories. Embrace the spirit of collaboration as we pave the way for sustainable agriculture in Maharashtra and beyond.",
    },
  ]);

  return (
    <section
      className="container-fluid py-5"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="500"
      style={{ visibility: "visible" }}
    >
      <div className="container py-5">
        <div className="row g-5 justify-content-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 wow zoomIn"
              data-wow-delay={`0.${3 * (index + 1)}s`}
              style={{
                visibility: "visible",
                animationDelay: `0.${3 * (index + 1)}s`,
                animationName: "zoomIn",
              }}
            >
              <div className="service-item shadow rounded d-flex flex-column align-items-center justify-content-center text-center">
                <h4
                  className="mb-3"
                  style={{ fontSize: "30px", fontWeight: "600", color:"#8dc43f"  }}
                >
                  {service.title}
                </h4>
                <p
                  className="m-0"
                  style={{ textAlign: "justify", wordSpacing: "-2px", color:"black"}}
                >
                  {service.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
