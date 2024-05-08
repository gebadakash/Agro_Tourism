import React, { Suspense } from "react"
const HeroSection = React.lazy(()=> import("../Components/HomePageComponents/HeroSection/HeroSection"));
const ActivitySection = React.lazy(()=> import("../Components/HomePageComponents/Activities/ActivitiesSection"));
const ChooseUsSection = React.lazy(()=> import("../Components/HomePageComponents/ChooseUs/ChooseUsSection"));
const Testimonial = React.lazy(()=> import ("../Components/HomePageComponents/Testimonial/Testimonial"));
const GallerySection = React.lazy(()=> import("../Components/HomePageComponents/Gallery/GallerySection"));
const RestaurantMenu = React.lazy(()=> import("../Components/HomePageComponents/RestaurantSection/RestaurantMenu"));
const BlogSection = React.lazy(()=> import("../Components/HomePageComponents/Blogs/BlogSection"));

const Home = () => {
  return (
    <>
    <Suspense>
      <HeroSection/>
      <ActivitySection/>
      <ChooseUsSection/>
      <RestaurantMenu/>
      <Testimonial/>
      <BlogSection/>
      <GallerySection/>
    </Suspense>
    </>
  )
}

export default Home
