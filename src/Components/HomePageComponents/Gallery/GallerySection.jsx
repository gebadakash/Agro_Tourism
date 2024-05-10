import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallerySection.css";
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import gallery1 from "../../../assets/images/gallery-1.jpg";
import gallery2 from "../../../assets/images/gallery-2.jpg";
import gallery3 from "../../../assets/images/gallery-3.jpg";
import gallery4 from "../../../assets/images/gallery-4.jpg";
import gallery5 from "../../../assets/images/gallery-5.jpg";
import { NavLink } from "react-router-dom";

const GallerySection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 999);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const navLinks = document.querySelectorAll(".navlink");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleScrollToTop);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleScrollToTop);
      });
    };
  }, []);

  if (isMobile) {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <div className="container-fluid">
        <div className="row justify-content-center pb-4 wrapper">
          <div
            className="col-md-7 text-center heading-section aos-init aos-animate inner mb-5 mt-5"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            <h2 style={{ fontFamily: "monospace" }}>Our Collections</h2>
            <span>----------</span>{" "}
            <FaCanadianMapleLeaf
              style={{ fontSize: "40px", color: "rgb(141, 196, 63)" }}
            />{" "}
            <span>----------</span>
          </div>
        </div>

        <Slider {...settings}>
          <GalleryItem imageSrc={gallery1} delay={100} />
          <GalleryItem imageSrc={gallery2} delay={200} />
          <GalleryItem imageSrc={gallery3} delay={300} />
          <GalleryItem imageSrc={gallery4} delay={400} />
          <GalleryItem imageSrc={gallery5} delay={500} />
        </Slider>
      </div>
    );
  } else {
    return (
      <div className="container-fluid mt-5">
        <div
          className="text-center heading-section aos-init aos-animate inner mb-5"
          data-aos="fade-up"
          data-aos-duration="200"
        >
          <h2 style={{ fontFamily: "monospace" }}>Our Collections</h2>
          <span>----------</span>{" "}
          <FaCanadianMapleLeaf
            style={{ fontSize: "40px", color: "rgb(141, 196, 63)" }}
          />{" "}
          <span>----------</span>
        </div>

        <div className="row g-3">
          <GalleryItem imageSrc={gallery1} delay={100} />
          <GalleryItem imageSrc={gallery2} delay={200} />
          <GalleryItem imageSrc={gallery3} delay={300} />
          <GalleryItem imageSrc={gallery4} delay={400} />
          <GalleryItem imageSrc={gallery5} delay={500} />
        </div>
      </div>
    );
  }
};

const GalleryItem = ({ imageSrc, delay }) => {
  return (
    <div
      className="col-md aos-init aos-animate imageContainer mb-2"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="200"
      style={{ height: "220px" }}
    >
      <span className="gallery-wrap">
        <img
          className="gallery-wrap img galleryImage d-flex align-items-center justify-content-center glightbox"
          src={imageSrc}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          alt=""
        />
        <NavLink
          to="/gallery"
          className="view-more-btn navlink"
          style={{ textDecoration: "none" }}
        >
          View More
        </NavLink>
      </span>
    </div>
  );
};

export default GallerySection;
