import { useParams } from "react-router-dom";
import "../Components/HomePageComponents/Blogs/blogDetails.css";
import { blogData } from "../Data/blogData";
import { useGlobalContext } from "../context/context";
import React, { Suspense, useEffect } from "react";
const WebsiteHeader = React.lazy(() =>
  import("../Components/WebsiteHeader/WebsiteHeader")
);

const BlogDetails = () => {
  const params = useParams();
  const { updateBlog } = useGlobalContext();
  useEffect(() => updateBlog(), []);
  const BlogData = blogData[params.id];

  return (
    <Suspense>
      <WebsiteHeader />
      <section id="main" className="site-main">
        <section id="main-container" className="site-main container mainright">
          <div className="row" style={{ justifyContent: "center" }}>
            <div
              id="main-content"
              className="main-content col-sm-12 col-lg-9 col-md-9"
            >
              <main id="primary" className="content content-area">
                <style>
                  {`.owl-pagination {top:5px!important} 
                      .owl-controls .owl-buttons .owl-next {top: 40%!important}
                      .owl-controls .owl-buttons .owl-prev {top: 40%!important}`}
                </style>
                <div className="single-opalactivity-container">
                  <article
                    id="post-11754"
                    itemScope=""
                    className="post-11754 opal_activity type-opal_activity status-publish has-post-thumbnail hentry opalactivity_category_activity-home"
                  >
                    <style>{`#opal-breadscrumb {display:none!important} 
                        #main-container {margin-top:50px}`}</style>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="entry-content">
                          <h2 className="activity-title mb-4">
                            {BlogData.title}
                          </h2>
                          <h4>Date: {BlogData.date}</h4>
                          <div className="activity-image">
                            <img
                              width="1280"
                              height="960"
                              src={BlogData.image}
                              className="attachment-full size-full wp-post-image"
                              alt=""
                              decoding="async"
                              fetchPriority="high"
                              srcSet={`${BlogData.image} 1280w, ${BlogData.image}-300x225.jpg 300w, ${BlogData.image}-768x576.jpg 768w, ${BlogData.image}-1024x768.jpg 1024w`}
                              sizes="(max-width: 1280px) 100vw, 1280px"
                            />
                          </div>
                          <div className="activity-content opalactivity-box clearfix">
                            <div className="activity-description">
                              <h4 className="box-heading">Description</h4>
                              <p style={{ textAlign: "justify" }}>
                                <span style={{ fontWeight: 400 }}>
                                  {BlogData.description}
                                </span>
                              </p>
                            </div>
                            <div className="activity-description">
                              <h4 className="box-heading">
                                {BlogData.subTitle1}
                              </h4>
                              <p style={{ textAlign: "justify" }}>
                                <span style={{ fontWeight: 400 }}>
                                  {BlogData.content1}
                                </span>
                              </p>
                              <p style={{ textAlign: "justify" }}>
                                <span style={{ fontWeight: 400 }}>
                                  {BlogData.content2}
                                </span>
                              </p>
                              <p style={{ textAlign: "justify" }}>
                                <span style={{ fontWeight: 400 }}>
                                  {BlogData.content3}
                                </span>
                              </p>
                            </div>
                            <div className="activity-description">
                              <h4 className="box-heading">
                                {BlogData.subTitle2}
                              </h4>
                              <p style={{ textAlign: "justify" }}>
                                <span style={{ fontWeight: 400 }}>
                                  {BlogData.DescriptionSubTitle2}
                                </span>
                              </p>
                              <p style={{ textAlign: "justify" }}>
                                <span style={{ fontWeight: 400 }}>
                                  {BlogData.content4}
                                </span>
                              </p>
                              <p style={{ textAlign: "justify" }}>
                                <span style={{ fontWeight: 400 }}>
                                  {BlogData.content5}
                                </span>
                              </p>
                              <p style={{ textAlign: "justify" }}>
                                <span style={{ fontWeight: 400 }}>
                                  {BlogData.content6}
                                </span>
                              </p>
                            </div>
                            <div className="activity-description">
                              <h4 className="box-heading">
                                {BlogData.subTitle3}
                              </h4>
                              <p style={{ textAlign: "justify" }}>
                                <span style={{ fontWeight: 400 }}>
                                  {BlogData.content7}
                                </span>
                              </p>
                              <p style={{ textAlign: "justify" }}>
                                <span style={{ fontWeight: 400 }}>
                                  {BlogData.content8}
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="opalactivity-box">
                            <div className="activity-gallery">
                              <h4 className="box-heading">Photo Gallery</h4>
                              <div
                                className="owl-carousel-play"
                                data-ride="carousel"
                              >
                                <div className="owl-carousel-wrapper">
                                  <div
                                    id="sync1"
                                    className="owl-carousel owl-theme"
                                    data-slide="5"
                                    data-singleitem="true"
                                    data-navigation="true"
                                    data-pagination="false"
                                    style={{ opacity: 1, display: "block" }}
                                  >
                                    <div
                                      className="owl-wrapper-outer autoHeight"
                                      style={{ height: "112.5px" }}
                                    >
                                      <div
                                        className="owl-wrapper"
                                        style={{
                                          width: "640px",
                                          left: "0px",
                                          display: "flex",
                                          transition: "all 0ms ease 0s",
                                          transform:"translate3d(0px, 0px, 0px)",
                                        }}
                                      >
                                        <div
                                          className="owl-item me-4"
                                          style={{ width: "160px" }}
                                        >
                                          <a
                                            className="zoom-img"
                                            href={BlogData.image}
                                          >
                                            <img
                                              width="1280"
                                              height="960"
                                              src={BlogData.image}
                                              className="attachment-full size-full wp-post-image"
                                              alt=""
                                              decoding="async"
                                              srcSet={`${BlogData.image} 1280w, ${BlogData.image}-300x225.jpg 300w, ${BlogData.image}-768x576.jpg 768w, ${BlogData.image}-1024x768.jpg 1024w`}
                                              sizes="(max-width: 1280px) 100vw, 1280px"
                                            />
                                          </a>
                                        </div>
                                        <div
                                          className="owl-item"
                                          style={{ width: "160px" }}
                                        >
                                          <a
                                            className="zoom-img"
                                            href={BlogData.PhotoGallery}
                                          >
                                            <img
                                              src={BlogData.PhotoGallery}
                                              alt="gallery"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </main>
            </div>
          </div>
        </section>
      </section>
    </Suspense>
  );
};

export default BlogDetails;
