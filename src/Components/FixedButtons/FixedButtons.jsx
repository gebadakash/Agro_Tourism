import { BsWhatsapp } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import "./FixedButtons.css"; 
import { useEffect, useState } from "react";


const FixedButtons = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const listenToScroll = () => {
      const heightToHidden = 250;
      const winScroll = window.scrollY;

      if (winScroll > heightToHidden) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", listenToScroll);

    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);


  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send?phone=+919307027399&text=Hello");
  };

  const handleCallClick = () => {
    window.location.href = "tel: +91 9307027399";
  };

  return (
    <div>
      {isVisible && (<button className="fixed-btn whatsapp-btn" onClick={handleWhatsAppClick}>
        <BsWhatsapp />
      </button>)}
      
      {isVisible &&  (
        <button className="fixed-btn call-btn" onClick={handleCallClick}>
        <BiSolidPhoneCall />
      </button>
      )}
      
    </div>
  );
};

export default FixedButtons;
