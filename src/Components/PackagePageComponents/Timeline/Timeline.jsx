import "./timeline.css";
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import img1 from "../../../assets/images/Package1.jpg";
import img2 from "../../../assets/images/Package2.jpg";
import img3 from "../../../assets/images/Package3.jpg";
import img4 from "../../../assets/images/family1.png";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";


const leftData = [
  {
    index: 1,
    title: "Child (5 to 9 yrs)",
    images: [img1],
    details: [
      "Rs.600/- Per person",
      "Timing : 10.00am to 6.00pm",
      "Morning Tea & Breakfast",
      "Afternoon Lunch",
      "Evening Tea & Snacks",
      "Farm Tour",
      "Sunset View",
      "Bullock-cart Ride"
    ]
  },
  {
    index: 2,
    title: "School Students (No Age Limit)",
    images: [img3],
    details: [
      "Rs.600/-Per person",
      "Timing : 10.00am to 6.00pm",
      "Morning Tea & Breakfast",
      "Afternoon Lunch",
      "Evening Tea & Snacks",
      "Farm Tour",
      "Sunset View",
      "Bullock-cart Ride"
    ]
  }
];

const rightData = [
  {
    index: 1,
    title: "Olders (No Age Limit)",
    images: [img2],
    details: [
      "Rs.800/-Per person",
      "Timing : 10.00am to 6.00pm",
      "Morning Tea & Breakfast",
      "Afternoon Lunch",
      "Evening Tea & Snacks",
      "Farm Tour",
      "Sunset View",
      "Bullock-cart Ride"
    ]
  },
  {
    index: 2,
    title: "Family 3 to 4 Families Required for (1 Day 1 Night) ",
    images: [img4],
    details: [
      "Rs.800/- Per person",
      "Timing : 10.00am to 6.00pm",
      "Morning Tea & Breakfast",
      "Afternoon Lunch",
      "Evening Tea & Snacks",
      "Farm Tour",
      "Sunset View",
      "Bullock-cart Ride"
    ]
  }
];

const Timeline = () => {


  return (
    <>
    <section className="history mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title history-title">
              <h5>Our Packages</h5>
              <h2 style={{ fontFamily: "monospace" }}>Explore Our Agro-Tourism Packages</h2>
              <span>----------</span> <FaCanadianMapleLeaf style={{ fontSize: "40px", color: "rgb(141, 196, 63)" }} /><span>----------</span>
            </div>
          </div>
        </div>
        <div className="history__content">
          <div className="row">
            <div className="col-lg-5 col-md-5" data-aos="fade-right" data-aos-duration="200">
              {leftData.map((data, index) => (
                <div key={index} className="history__item left__item">
                  <div className="history__date"></div>
                  <h1>{data.title}</h1>
                    <img src={data.images[0]} className="img" alt="Package" />
                 
                  <ul className="mt-4" style={{ textAlign: "start", fontSize: "25px", color: "black" }}>
                    {data.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
                
              ))}
            </div>
            <div className="col-lg-5 offset-lg-2 col-md-5 offset-md-2" data-aos="fade-left" data-aos-duration="200">
              {rightData.map((data, index) => (
                <div key={index} className="history__item right__first__item">
                  <div className="history__date"></div>
                  <h1>{data.title}</h1>
                    <img src={data.images[0]} className="img" alt="Package" />
               
                  <ul className="mt-4" style={{ textAlign: "start", fontSize: "25px", color: "black" }}>
                    {data.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Timeline;
