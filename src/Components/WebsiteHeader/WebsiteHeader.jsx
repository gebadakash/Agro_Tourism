import { NavLink } from 'react-router-dom';
import "./websiteHeader.css";
import { useGlobalContext } from '../../context/context';




const WebsiteHeader = () => {

  const {title, subTitle, imagePageHeader,PageIcon} = useGlobalContext();

  return (
    <div className="breadcrumb-option set-bg" style={{backgroundImage: `url(${imagePageHeader})`}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="breadcrumb__text" data-aos="zoom-in" data-aos-duration="500"> 
            <img src={PageIcon}/>
              <h2 style={{fontFamily:"monospace"}} className='text-white'>{title}</h2>
              <div className="breadcrumb__links">
                <NavLink to="/" style={{textDecoration:"none"}}>{subTitle}</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteHeader;
