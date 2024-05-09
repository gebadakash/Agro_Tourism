import "./choose.css";
import { FaMotorcycle } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { SiLegacygames } from "react-icons/si";

const ChooseUsSection = () => {
  const ChooseData = [
    {
      id: 1,
      title: "Fun Activities",
      icon:<FaMotorcycle style={{fontSize:"50px", color:"rgb(141, 196, 63)"}}/>,
      subTitle: `Experience the Thrill of Adventure!
                 Discover Exciting Outdoor Activities!`,
      paragraph: `Embark on adrenaline-fueled adventures with exciting activities like zip-lining, rock climbing, and ATV rides. Or opt for more laid-back options such as nature walks and birdwatching.`,
    },
  
    {
      id: 2,
      title: "Traditional Food",
      icon:<IoFastFood style={{fontSize:"50px", color:"rgb(141, 196, 63)"}}/>,
      subTitle: `Savor Authentic Maharashtrian Cuisine!
                 Indulge in Delicious Local Delicacies!`,
      paragraph: `Indulge in the rich flavors of traditional Maharashtrian dishes prepared with locally sourced ingredients. From spicy Misal Pav to savory Puran Poli, our culinary delights will tantalize your taste buds.`,
    },
  
    {
      id: 3,
      title: "Outdoor Games",
      icon:<SiLegacygames style={{fontSize:"50px", color:"rgb(141, 196, 63)"}}/>,
      subTitle: `Unleash Your Competitive Spirit!
                 Have Fun with Family and Friends!`,
      paragraph: `Engage in friendly competition with a variety of outdoor games and sports. Challenge your friends and family to games like cricket, volleyball, and badminton amidst the picturesque surroundings of Saguna Baug.`,
    },
  ];
  

  return (
    <div className="chooseus choosePad set-bg-choose mt-5 mb-5">
      <div className="d-flex bd-highlight">
        {ChooseData.map((choose, index) => (
          <div className="p-2 flex-fill bd-highlight" key={index}>
            <div className="fbox-content card" style={{ padding: "40px" }} data-aos="zoom-in" data-aos-duration="200">
              <div className="fbox-body">
                <div className="d-flex iconTitle">
                  {choose.icon}
                  <h4
                    style={{ color: "#000000", fontFamily: "monospace" }}
                    className="mx-4 mt-2"
                  >
                    {choose.title}
                  </h4>
                </div>
              </div>
              <div>
              <h6 className="mt-2 chooseTitle" style={{fontFamily:"monospace", textAlign:"justify"}}>
                  {choose.subTitle}
              </h6>
              <p className="description choosePara" style={{ fontSize: "18px" }}>
                {choose.paragraph}
              </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUsSection;
