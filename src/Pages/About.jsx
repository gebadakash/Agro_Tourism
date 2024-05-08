import React, { Suspense, useEffect } from "react"
import { useGlobalContext } from "../context/context"
const WebsiteHeader = React.lazy(()=> import("../Components/WebsiteHeader/WebsiteHeader"));
const Specialization = React.lazy(()=> import("../Components/AboutPageComponents/Specialization/Specialization"));
const AboutBookSection = React.lazy(()=> import("../Components/AboutPageComponents/AboutBookSection/AboutBookSection"));
const AboutSection = React.lazy(()=> import("../Components/AboutPageComponents/About/AboutSection"));
const RoomSection = React.lazy(()=> import ("../Components/HomePageComponents/RoomSection/RoomSection"));

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
      <Specialization/>
    </Suspense>
    </>
  )
}

export default About
