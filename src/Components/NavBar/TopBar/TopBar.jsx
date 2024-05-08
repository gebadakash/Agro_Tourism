import "./topBar.css";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="header__top" style={{height: "35px", backgroundColor:"#8dc43f"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <ul className="header__top__widget">
              <li><FaMapMarkerAlt className='span' />  Kala Fata Road, Taluka, Parshivni, Maharashtra 441105</li>
              <li><FaPhoneAlt className='span'/>(+91) 8668440938</li>
            </ul>
          </div>
          <div className="col-lg-5">
            <div className="header__top__right"> 
              <div className="header__top__auth">
                <div className="geek1">No Alocoholic Drink Please.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar;
