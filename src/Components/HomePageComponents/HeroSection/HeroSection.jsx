import React, { useState, useEffect } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import "./heroSection.css";
import slide1 from "../../../assets/images/64.jpg"
import slide2 from "../../../assets/images/61.jpeg";
import slide3 from "../../../assets/images/62.jpg";

const HeroSection = () => {
  const slides = [
    {
      backgroundImage: slide1,
      title: 'Mahuli Agro Tourism Welcomes You! ',
      content: 'शुद्ध वातावरण आणि निर्सग सौदर्याचा आनंद फक्त महुली एग्रो टूरिज्म सोबत.',
    },
    {
      backgroundImage: slide2,
      title: 'Explore Mahuli Agro-Tourism Adventures',
      content: 'गावरान, मेजवानीचा आनंद घ्या फक्त महुली एग्रो टूरिज्म सोबत.',
    },
    {
      backgroundImage: slide3,
      title: 'Your Gateway to Mahuli Agro-Tourism Delights',
      content: 'ग्रामीण, संस्कृतीचा आनंद परिवारा सोबत फक्त महुली एग्रो टूरिज्म सोबत.',
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      setCurrentSlide(nextSlide);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, slides]);

  useEffect(() => {
    setTitle('');
    setContent('');
  }, [currentSlide]);



  return (
    <section id="hero">
      <div className="hero-container">
        <div id="heroCarousel" className="carousel slide carousel-fade">
          <ol className="carousel-indicators" id="hero-carousel-indicators">
            {slides.map((slide, index) => (
              <li key={index} data-bs-target="#heroCarousel" data-bs-slide-to={index} className={index === currentSlide ? 'active' : ''}></li>
            ))}
          </ol>
          <div className="carousel-inner" role="listbox">
            {slides.map((slide, index) => (
              <div key={index} className={`carousel-item ${index === currentSlide ? 'active' : ''}`} 
              style={{backgroundImage: `url(${slide.backgroundImage})`}}>
                <div className="carousel-container fade-right">
                  <div className="carousel-content">
                    <h2 className="animate__animated animate__fadeInDown" style={{color:"rgb(141, 196, 63)", fontFamily:"monospace"}}>{slide.title}</h2>
                    <h5 className="animate__animated animate__fadeInUp" style={{color:"white"}}>{slide.content}</h5>
                    <div>
                      <NavLink to="/contact" className="btn-get-started">Contact us</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev" onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}>
            <BiChevronLeft className="carousel-control-prev-icon" />
          </a>
          <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next" onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}>
            <BiChevronRight className="carousel-control-next-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
