import "./special.css";
import aboutImage from "../../../assets/images/AboutUs.png";
import founderImage from "../../../assets/images/Founder.png";

const Specialization = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <div className="row" style={{ justifyContent: "space-evenly" }}>
            <div className="col-lg-3">
              <div className="section-title mt-4">
                <div
                  className="marathi-background"
                  style={{ backgroundImage: `url(${aboutImage})` }}
                >
                  <h5>महुलीच्या स्पर्शाने, नवं जीवन जगा !</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about__text">
                <h2>Make Memories that Last at Mahuli Agro Tourism!</h2>
                <p style={{ fontSize: "18px", textAlign: "justify" }}>
                  At Mahuli Agro Tourism, make memorable moments with the people
                  you love! Enjoy our authentic Maharashtrian cuisine, discover
                  lively orange plantations, and take in breathtaking sunsets
                  that will provide the perfect atmosphere for your family's
                  journey. Enjoy a relaxing trip in a bullock cart while
                  remembering simpler times. Take a guided farm tour to discover
                  sustainable farming methods while admiring the abundance of
                  nature. A refreshing break for the body, mind, and soul is
                  provided by us. Mahuli Agro Tourism provides an exciting
                  family vacation!
                </p>
              </div>
              <div className="author-info mt-20 d-flex">
                <img src={founderImage} alt="" style={{maxWidth:"100px", maxHeight:"70px", marginRight:"20px"}}/>
                <div className="author-content">
                  <h5>Mr.Avinash Nanasaheb Khalatkar</h5>
                  <span>Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialization;
