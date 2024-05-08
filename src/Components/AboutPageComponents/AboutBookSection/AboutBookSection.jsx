import { useEffect } from "react";
import "./aboutBook.css";
import { NavLink } from "react-router-dom";

const AboutBookSection = () => {

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
    <section className="ftco-intro ftco-no-pt ftco-no-pb img" style={{ backgroundImage: `url(images/bg_1.jpg)`,top: "-20px", position: "relative" }}>
      <div className="overlay"></div>
      <div className="container-xl py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
              <div className="col-md-8 d-flex align-items-center">
                <div>
                  <span className="subheading">Explore the Serenity of Mahuli Agro Tourism</span>
                  <h1 className="mb-md-0 mb-4">Find the Best Place in Your Next Vacation</h1>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center">
                <p className="mb-0"><NavLink to="/contact" className="btn bookButton py-md-4 py-3 px-md-5 px-4 navlink" style={{fontSize:"22px"}}>Conatct us now</NavLink></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBookSection;
