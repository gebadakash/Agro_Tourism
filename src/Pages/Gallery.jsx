import React, { useEffect } from "react";
import { useGlobalContext } from "../context/context"
const GallerySection = React.lazy(()=> import("../Components/GalleryPageComponent/GallerySection"));
const WebsiteHeader = React.lazy(()=> import("../Components/WebsiteHeader/WebsiteHeader"));

const Gallery = () => {

  const {updateGallery} = useGlobalContext();

  useEffect(()=> updateGallery(), []);

  return (
    <>
      <WebsiteHeader/>
      <GallerySection/>
    </>
  )
}

export default Gallery
