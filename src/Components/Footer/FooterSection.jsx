import { MdKeyboardArrowRight } from "react-icons/md";
import "./footerSection.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterSection = () => {
  const quickLinks = [
    { title: "Home", Link:"/" },
    { title: "About", Link:"/about" },
    { title: "Packages", Link:"/packages" },
    { title: "Contact", Link:"/contact" },
  ];

  const services = [
    { title: "Fun Games" },
    { title: "Village Life" },
    { title: "Bullock cart Ride" },
    { title: "Rain Dance" },
  ];

  return (
    <footer id="opal-footer" className="opal-footer" role="contentinfo">
      <div className="container">
        <div className="inner">
          <div className="container">
            <section className="footer-top">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <div
                    
                  >
                    <aside
                      id="ecopark_services_widget-6"
                      className="widget clearfix widget_ecopark_services_widget"
                    >
                      <div className="support-style-3">
                        <h3 className="widget-title mb-0" style={{fontFamily:"monospace"}}>Address</h3>
                        <p>
                        C54P+WM6 Mahuli, Kala Fata Road, Taluka, Parshivni, Maharashtra 441105
                        </p>
                        <ul className="list-inline">
                          <li>
                            <span>Contact us Now</span>
                            <br></br>
                            <strong>
                              <FaPhoneAlt /> +91-8668440938
                            </strong>
                          </li>
                        </ul>
                      </div>
                    </aside>
                  </div>
                  <div
                  >
                    <aside
                      id="wpopal_socials_widget-5"
                      className="widget clearfix widget_wpopal_socials_widget"
                    >
                      <ul className="social  list-inline bo-sicolor d-flex">
                        <li>
                          <a
                            href="https://www.facebook.com/SagunaBaug/"
                            className="facebook"
                            target="_blank"
                          >
                            <FaFacebook
                              className="me-4"
                              style={{ fontSize: "30px" }}
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/sagunabaug/"
                            className="instagram"
                            target="_blank"
                          >
                            <RiInstagramFill
                              className="me-4"
                              style={{ fontSize: "35px" }}
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.tripadvisor.in/Hotel_Review-g1162191-d1451771-Reviews-Saguna_Baug-Neral_Raigad_District_Maharashtra.html"
                            className="tripadvisor"
                            target="_blank"
                          >
                            <FaYoutube
                              className="me-4"
                              style={{ fontSize: "38px" }}
                            />
                          </a>
                        </li>
                      </ul>
                    </aside>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                  <div
                  >
                    <aside
                      id="ecopark_services_widget-6"
                      className="widget clearfix widget_ecopark_services_widget"
                    >
                      <div className="support-style-3">
                        <h3 className="widget-title mb-0" style={{fontFamily:"monospace"}}>Quick links</h3>
                        <ul className="list-unstyled">
                          {quickLinks.map((link, index) => (
                            <li key={index} className="mb-4">
                              <Link to={link.Link}>
                                <MdKeyboardArrowRight />
                                {link.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </aside>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                  <div
                  >
                    <aside
                      id="ecopark_services_widget-6"
                      className="widget clearfix widget_ecopark_services_widget"
                    >
                      <div className="support-style-3">
                        <h3 className="widget-title mb-0" style={{fontFamily:"monospace"}}>Location</h3>
                        <iframe
                          title="Google Map"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.5257326908854!2d79.18386841084595!3d21.408571080255513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4db387d99039b%3A0x9a238b098f78571e!2sMahuli%20Agro%20Tourism!5e0!3m2!1sen!2sin!4v1714478982554!5m2!1sen!2sin"
                          width="350"
                          height="200"
                          style={{ border: 0 }}
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </aside>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                  <div
                  >
                    <aside
                      id="ecopark_services_widget-6"
                      className="widget clearfix widget_ecopark_services_widget"
                    >
                      <div className="support-style-3">
                        <h3 className="widget-title mb-0" style={{fontFamily:"monospace"}}>Services</h3>
                        <ul className="list-unstyled">
                          {services.map((link, index) => (
                            <li key={index} className="mb-4">
                              <a>
                                <MdKeyboardArrowRight />
                                {link.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </section>
            <section className="opal-copyright clearfix">
              <div className="container">
                Copyright © 2024 Mahuli Agro - All rights reserved.
                <br />
                Made by{" "}
                <a
                  href="http://atlanticdesigns.co"
                  style={{ color: "#43b4f9" }}
                  target="_blank"
                >
                  ELIORA TECHNOLOGY PVT LTD
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
