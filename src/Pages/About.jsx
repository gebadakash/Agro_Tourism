import React, { Suspense, useEffect } from "react"
import { useGlobalContext } from "../context/context"
const WebsiteHeader = React.lazy(()=> import("../Components/WebsiteHeader/WebsiteHeader"));
const Specialization = React.lazy(()=> import("../Components/AboutPageComponents/Specialization/Specialization"));
const AboutBookSection = React.lazy(()=> import("../Components/AboutPageComponents/AboutBookSection/AboutBookSection"));
const AboutSection = React.lazy(()=> import("../Components/AboutPageComponents/About/AboutSection"));
const RoomSection = React.lazy(()=> import ("../Components/HomePageComponents/RoomSection/RoomSection"));
const MissonVission = React.lazy(()=> import("../Components/HomePageComponents/MissionAndVission/Cards"));

const About = () => {

  const {updateAboutUs} = useGlobalContext();

  useEffect(()=> updateAboutUs(), []);

  return (
    <>
    <Suspense>
      <WebsiteHeader/>
      <AboutSection/>
      <AboutBookSection/>
      <RoomSection/> 
      <MissonVission/>
      <Specialization/>
    </Suspense>
    </>
  )
}

export default About
