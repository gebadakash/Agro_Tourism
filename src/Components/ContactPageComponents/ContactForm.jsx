import ContactFormImage from "../../assets/images/contactBg.jpg";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "./contactForm.css";
import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

const contactItems = [
  {
    icon: <FaMapMarkerAlt style={{ color: "white" }} />,
    label: "Address:",
    value: "Kala Fata Road, Taluka, Parshivni, Maharashtra 441105",
  },
  {
    icon: <FaPhoneAlt style={{ color: "white" }} />,
    label: "Phone:",
    value: "+91 8668440938",
  },
  {
    icon: <FaEnvelope style={{ color: "white" }} />,
    label: "Email:",
    value: "info@yoursite.com",
  },
];

const ContactForm = () => {

  const [Contact, setContact] = useState({

    username:"",
    contact:"",
    subject:"",
    message:""

  });

  const handleInput = (e) => {

    const name = e.target.name;

    const value = e.target.value;

    setContact({
      ...Contact,
      [name]: value,
      
    });


  }


  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!e.target.checkValidity()) {
      toast.warning("Please fill in all required fields.");
      return;
    }


    const { username, contact, subject, message } = Contact;
  
    try {
      const result = await axios.post('https://agro-tourism.onrender.com/save', { username, contact, subject, message });
      console.log(result);
      toast.success("Thanks for choosing us! Our team will contact you soon.");
      setContact({
        username: "",
        contact: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.log(error);
    }
  }

  return (
    <section className="mt-5">
      <div className="container" data-aos="fade-up" data-aos-duration="500">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section" style={{ fontFamily: "monospace" }}>
              Contact Us
            </h2>
            <h4>
              Please call us to confirm your booking. We do welcome walk-ins for
              day picnic packages as well.
            </h4>
          </div>
        </div>
        <div className="row mb-5" style={{ justifyContent: "center" }}>
          {contactItems.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="dbox w-100 text-center">
                <div
                  className="icon d-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    margin: "0 auto",
                    marginBottom: "20px",
                    backgroundColor: "rgb(141, 196, 63)",
                  }}
                >
                  {item.icon}
                </div>
                <div className="text" style={{ fontSize: "22px" }}>
                  <p>
                    <span style={{ color: "black" }}>{item.value}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10">
            <div
              className="wrapper img"
              style={{
                backgroundImage: `url(${ContactFormImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="row">
                <div className="col-md-9 col-lg-7">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h2 className="mb-4">Get in touch with us</h2>
                    <form
                      onSubmit={handleSubmit}
                      id="contactForm"
                      name="contactForm"
                      className="contactForm"
                      method="post"
                      noValidate
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="label"
                              htmlFor="username"
                              style={{ fontSize: "18px", color: "black" }}
                            >
                              Full Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="username"
                              id="username"
                              placeholder="Name"
                              value={Contact.username} 
                              onChange={handleInput} 
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label
                              className="label"
                              htmlFor="contact"
                              style={{ fontSize: "18px", color: "black" }}
                            >
                              Contact number
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              name="contact"
                              id="contact"
                              placeholder="Contact"
                              value={Contact.contact} 
                              onChange={handleInput} 
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label
                              className="label"
                              htmlFor="subject"
                              style={{ fontSize: "18px", color: "black" }}
                            >
                              Subject
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                              value={Contact.subject} 
                              onChange={handleInput} 
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label
                              className="label"
                              htmlFor="#"
                              style={{ fontSize: "18px", color: "black" }}
                            >
                              Message
                            </label>
                            <textarea
                              name="message"
                              className="form-control"
                              id="message"
                              cols="30"
                              rows="4"
                              placeholder="Message"
                              value={Contact.message} 
                              onChange={handleInput} 
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div className="btnDiv" style={{justifyContent: "center", display: "flex"}}>
                             <button className="btn-get-started" type="submit"  style={{textDecoration: "none"}}>Send Message</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
