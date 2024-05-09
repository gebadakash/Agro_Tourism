import "./aboutSection.css";
import founderImage from "../../../assets/images/Founder.jpg";

const AboutSection = () => {
  return (
    <section className="ftco-section abt-section ftco-about-section">
      <div className="container">
        <div className="row" style={{justifyContent:"space-evenly"}}>
        <div className="organic-meta">
                           <h1>2+</h1>
                           <span style={{fontSize:"18px", color:"black"}}>Years Of Experience</span>
                           <i className="fal fa-arrow-up"></i>
        </div>
          <div className="col-md-4" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="200">
                <div className="f-services  flex-md-column-reverse">
                  <img src={founderImage}></img>
                </div>
          </div>
          <div className="col-md-6 heading-section d-flex align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" data-aos-duration="200">
            <div className="mt-5 mt-md-0">
              <h2 className="mb-4">About Our Farm</h2>
              <p className="mb-2" style={{textAlign:"justify", fontSize:"20px"}}>Mahuli Farm is more than just a place to stay it's a celebration of sustainable living. We believe in nourishing the land that nourishes us. Learn about our composting methods, rainwater harvesting techniques, and our commitment to organic farming practices.</p>
              <p className="mb-4" style={{textAlign:"justify", fontSize:"20px"}}>Our meals are prepared with love, using the fresh seasonal ingredients harvested right from our fields. Our chefs create delicious meals that capture the essence of the local cuisine, offering a true taste of village life.</p>
              <h3>Embrace the Charm of Village Farmhouse Living</h3>
              <p className="mb-2" style={{textAlign:"justify", fontSize:"20px"}}>Mahuli Resort is dedicated to cultivating positive change. We believe in the power of the cooperative financial movement, empowering individuals and communities around the world. Cooperatives promote inclusivity and shared responsibility, ensuring everyone has a chance to thrive. By choosing Mahuli Resort, you're contributing to a movement that builds a better future for all.</p>
              <p className="mb-2" style={{textAlign:"justify", fontSize:"20px"}}>Indulge in unparalleled luxury while minimizing your environmental impact. Mahuli Resort prioritizes sustainable practices and eco-friendly initiatives, allowing you to feel good about your vacation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
