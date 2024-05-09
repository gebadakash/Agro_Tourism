import "./restaurant.css";
import restaurant from  "../../../assets/images/side-img.png";
import { GiCampCookingPot } from "react-icons/gi";
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import menu1 from "../../../assets/images/marathifood.png";
import menu2 from  "../../../assets/images/nonveg.jpg";
import menu3 from "../../../assets/images/morningBreakfast.jpg";
import menu4 from "../../../assets/images/lunch.jpg";
import menu5 from "../../../assets/images/eveningTea.jpg";
import menu6 from "../../../assets/images/cofee.png";

const RestaurantMenu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Traditional Indian Veg Food",
      image: `${menu1}`
    },
    {
      id: 2,
      name: "Non Veg Thali",
      image: `${menu2}`
    },
    {
      id: 3,
      name: "Morning Tea and Breakfast",
      image: `${menu3}`
    },
    {
      id: 4,
      name: "Afternoon Lunch",
      image: `${menu4}`
    },
    {
      id: 5,
      name: "Evening Tea and Snacks",
      image: `${menu5}`
    },
    {
      id: 6,
      name: "Coffee",
      image: `${menu6}`
    },


  ];

  return (
    <section className="mt-2">
      <div className="container-fluid">
        <div className="row justify-content-center pb-4">
        <div
            className="col-md-7 text-center heading-section aos-init aos-animate inner mb-5 mt-5"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            <h2 style={{fontFamily:"monospace"}}>Food We Offer</h2>
            <span>----------</span> <FaCanadianMapleLeaf style={{fontSize:"40px",color:"rgb(141, 196, 63)"}}/> <span>----------</span>
          </div>
        </div>
        <div className="row g-md-5">
          <div className="col-md-12 col-xl-5 d-flex align-items-stretch">
            <div className="img w-100 img-cuisine aos-init aos-animate" style={{ backgroundImage: `url(${restaurant})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center" }} data-aos="fade-up" data-aos-delay="100" data-aos-duration="200">
              <div className="icon d-flex align-items-center justify-content-center"><GiCampCookingPot style={{fontSize:"50px", color:"white"}}/></div>
            </div>
          </div>
          <div className="col-md-12 col-xl-7 ps-xl-5">
            <div className="row g-md-2">
              {menuItems.map(item => (
                <div key={item.id} className="col-md-6">
                  <div className="pricing-entry shadow d-flex align-items-center aos-init aos-animate" data-aos="fade-up" data-aos-delay={100 + (100 * item.id)} data-aos-duration="200">
                    <div className="img" style={{ backgroundImage: `url(${item.image})`, backgroundSize:"cover",backgroundRepeat:"no-repeat", backgroundPosition:"center"}}></div>
                    <div className="desc ps-3">
                      <div className="text">
                        <h4><span>{item.name}</span></h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RestaurantMenu;
