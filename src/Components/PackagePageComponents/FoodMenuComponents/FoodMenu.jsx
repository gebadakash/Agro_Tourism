import { useState, useEffect } from "react";
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import food1 from "../../../assets/images/poha.jpg";
import food2 from "../../../assets/images/Chai.jpg";
import food3 from "../../../assets/images/coffe.jpg";
import food4 from "../../../assets/images/Bhakri.jpeg";
import food5 from "../../../assets/images/Zunka.jpg";
import food6 from "../../../assets/images/chapati.jpg";
import food7 from "../../../assets/images/Yellow-Dal.jpg"
import food8 from "../../../assets/images/basmati-rice.jpg";
import food9 from "../../../assets/images/aloo.jpg";
import food10 from "../../../assets/images/Mild-Chicken-Curry.jpg";
import food11 from "../../../assets/images/Jalebi.jpg";
import food12 from "../../../assets/images/ChaiPakoda.jpg";

import "./foodMenu.css";

const FoodMenu = () => {
  const [filter, setFilter] = useState("*");

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

  const projects = [
    { category: ['c1'], title: 'Poha', image: food1 },
    { category: ['c1'], title: 'Chai-Buscuit', image: food2 },
    { category: ['c1', 'c3'], title: 'Coffee', image: food3 },
    { category: ['c2'], title: 'Bhakri', image: food4 },
    { category: ['c2'], title: 'Zunka', image: food5 },
    { category: ['c2'], title: 'Chapati', image: food6 },
    { category: ['c2'], title: 'Dal', image: food7 },
    { category: ['c2'], title: 'Rice', image: food8 },
    { category: ['c2'], title: 'Aloo Wange', image: food9 },
    { category: ['c2'], title: 'Chicken curry', image: food10 },
    { category: ['c2'], title: 'Jalebi', image: food11 },
    { category: ['c3'], title: 'Chai-Buscuit & Pakode/Bhaje', image: food12 },
  ];

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const filteredProjects = filter === "*" ? projects : projects.filter(project => project.category.includes(filter));
  const firstLineProjects = filteredProjects.slice(0, 3); // Get only the first 3 items for the first line

  return (
    <div className="project-area mt-120 mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title history-title">
              <h2 style={{ fontFamily: "monospace" }}>Food Menu</h2>
              <span>----------</span> <FaCanadianMapleLeaf style={{ fontSize: "40px", color: "rgb(141, 196, 63)" }} /><span>----------</span>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="project-menu filter-button-group mb-40">
              <button className={filter === "*" ? "active" : ""} onClick={() => handleFilter("*")}>All Food Menu</button>
              <button className={filter === "c1" ? "active" : ""} onClick={() => handleFilter("c1")}>Morning Breakfast</button>
              <button className={filter === "c2" ? "active" : ""} onClick={() => handleFilter("c2")}>Lunch</button>
              <button className={filter === "c3" ? "active" : ""} onClick={() => handleFilter("c3")}>Evening Breakfast</button>
            </div>
          </div>
        </div>
        <div className="row grid">
          {firstLineProjects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-12">
              <div className="project-img mb-70">
                <div className="inner-img"><img src={project.image} alt="" className="fluid" /></div>
                <div className="project-img-content">
                  <h4 className="project-sm-title">{project.title}</h4>
                </div>
              </div>
            </div>
          ))}
          {filteredProjects.slice(3).map((project, index) => (
            <div key={index} className="col-lg-4 col-md-12">
              <div className="project-img mb-70">
                <div className="inner-img"><img src={project.image} alt="" className="fluid" /></div>
                <div className="project-img-content">
                  <h4 className="project-sm-title">{project.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <center className="mb-5"> <NavLink to="/contact" className="tp-btn-ab navlink">Enquire Now</NavLink></center>
    </div>
  );
};

export default FoodMenu;
