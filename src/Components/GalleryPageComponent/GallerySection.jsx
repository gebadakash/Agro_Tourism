import React, { useState } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import "./gallerySection.css";
import image1 from "../../assets/images/g0.jpg";
import image2 from "../../assets/images/g1.jpeg";
import image3 from "../../assets/images/g2.jpg";
import image4 from "../../assets/images/g4.jpg";
import image5 from "../../assets/images/g5.jpg";
import image6 from "../../assets/images/g6.jpg";
import image7 from "../../assets/images/g7.jpg";
import image8 from "../../assets/images/g8.jpg";
import image9 from "../../assets/images/g9.jpg";
import image10 from "../../assets/images/g10.jpg";
import image11 from "../../assets/images/g11.jpg";
import image12 from "../../assets/images/g12.jpg";

const images = [
    { id: 1, path: image1 },
    { id: 2, path: image2 },
    { id: 3, path: image3 },
    { id: 4, path: image4 },
    { id: 5, path: image5 },
    { id: 6, path: image6 },
    { id: 7, path: image7 },
    { id: 8, path: image8 },
    { id: 9, path: image9 },
    { id: 10, path: image10 },
    { id: 11, path: image11 },
    { id: 12, path: image12 },
];

const GallerySection = () => {
    const [popupImage, setPopupImage] = useState(null);
    const [displayedImages, setDisplayedImages] = useState(6);

    const openPopup = (imagePath) => {
      console.log("Opening popup for image:", imagePath);
      setPopupImage(imagePath);
    };

    const closePopup = () => {
      console.log("Closing popup");
      setPopupImage(null);
    };

    const handleViewMore = () => {
      setDisplayedImages(displayedImages + 6);
    };

    return (
        <div className="gallery-area mt-5">
          <div className="container">
            <div className="row">
              {images.slice(0, displayedImages).map((image, index) => (
                <div key={index} className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                  <div className="gallery-item mb-4">
                    <img src={image.path} alt={`Image ${image.id}`} className="img-fluid" />
                    <div className="galleryimg-overlay">
                      <Link to="#" className="image-popups" onClick={() => openPopup(image.path)}>
                        <IoMdAddCircleOutline className="camera-icon"/>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <center className="mb-5 mt-5">
            {images.length > displayedImages && ( 
              <button className="tp-btn-ab navlink" onClick={handleViewMore}>View More</button>
            )}
          </center>
      
          {/* Popup */}
          {popupImage && (
            <div className="popup" onClick={closePopup}>
              <div className="popup-inner">
                <img src={popupImage} alt="Popup Image" />
                <button className="close-btn" onClick={closePopup}>Close</button>
              </div>
            </div>
          )}
        </div>
      );
};

export default GallerySection;
