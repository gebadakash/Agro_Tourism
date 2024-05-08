import "./blogs.css";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import Blog1Image from "../../../assets/images/1Blog.jpg";
import Blog2Image from "../../../assets/images/2Blog.jpg";
import Blog3Image from "../../../assets/images/3Blog.jpeg";
import { useEffect } from "react";

const BlogEntry = ({ id, title, image, date }) => {


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
    <div className="col-md-6 col-lg-4 d-flex">
      <div
        className="blog-entry justify-content-end aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="300"
      >
        <NavLink
          to={`/blog/${id}`}
          className="block-20 img d-flex align-items-end navlink"
          style={{ backgroundImage: `url(${image})` }}
        ></NavLink>
        <div className="text shadow mb-5">
          <p className="meta">
            <span>Date: {date}</span>
          </p>
          <h3 className="heading mb-3">
            <span>{title}</span>
          </h3>
          <p>
          Welcome to Mahuli Agro Tourism, your haven amidst the lush greenery of nature! We understand that true luxury goes beyond plush amenities and impeccable service.
          </p>
          <NavLink
            to={`/blog/${id}`}
            className="navlink"
            style={{textDecoration: "none", color: "red"}}
          >
            Read More <FaArrowRightLong />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const blogEntries = [
    {
      id: 1,
      title: `Sustainable Practices at Mahuli Agro Tourism: How We Care for the Land.`,
      image: `${Blog1Image}`,
      date: "May. 12, 2024",
    },
    {
      id: 2,
      title: `Escape the Ordinary: Agritourism Adventures Await at Mahuli Agro Tourism!`,
      image: `${Blog2Image}`,
      date: "May. 04, 2024",
    },
    { id: 3, 
      title: `Planning the Perfect Agrotourism Trip: A Guide to Seasonality and Activities`, 
      image: `${Blog3Image}`, 
      date: "Feb. 04, 2024" 
    },
  ];

  return (
    <section className="ftco-section bg-light">
      <div className="container-xl">
        <div className="row justify-content-center pb-4 wrapper">
          <div
            className="col-md-7 text-center heading-section aos-init aos-animate inner mb-5 mt-5"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <h2 style={{ fontFamily: "monospace" }}>Latest Blogs</h2>
            <p>
              Explore Nature's Bounty: Mahuli Agro Tourism Adventures Await!
            </p>
            <span>----------</span>{" "}
            <FaCanadianMapleLeaf
              style={{ fontSize: "40px", color: "rgb(141, 196, 63)" }}
            />{" "}
            <span>----------</span>
          </div>
        </div>
        <div className="row" style={{ justifyContent: "space-evenly" }}>
          {blogEntries.map((entry, index) => (
            <BlogEntry
              key={index}
              title={entry.title}
              image={entry.image}
              date={entry.date}
              id={entry.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
