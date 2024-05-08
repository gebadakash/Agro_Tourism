import React, {useContext, useReducer } from "react";
import reducer from "./reducer";
import activityHeaderImage from "../assets/images/ActivityHeader.jpg"
import aboutHeaderImage from "../assets/images/chooseus1.jpg";
import HeaderImage from "../assets/images/prayer-64x64xc.png";
import ActivityImage from "../assets/images/ActivityHeader.png";
import GalleryHeaderImage from "../assets/images/GalleryHeader.jpg";
import BlogHeaderImage from "../assets/images/BlogHeaderImage.png";

const AppContext = React.createContext();


const initialState = {

    title:"",
    subTitle:"",
    PageIcon:"",
    imagePageHeader:"",
}


const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const updateAboutUs = () => {

        return dispatch({
            type:"ABOUT_PAGE",
            payload:{
                title:"Mahuli Agro welcomes you",
                subTitle:"Home",
                PageIcon:`${HeaderImage}`,
                imagePageHeader:`${aboutHeaderImage}`
            }
        })
    }

    const updateActivity = () => {

        return dispatch({
            type:"ACTIVITY_PAGE",
            payload:{
                title:"Things to do",
                subTitle:"Home",
                PageIcon:`${ActivityImage}`,
                imagePageHeader:`${activityHeaderImage}`
            }
        })
    }


    const updateGallery = () => {

        return dispatch({
            type:"GALLERY_PAGE",
            payload:{
                title:"Our Gallery",
                subTitle:"Home",
                PageIcon:`${ActivityImage}`,
                imagePageHeader:`${GalleryHeaderImage}`
            }
        })
    }


    const updateBlog = () => {

        return dispatch({
            type:"BLOG_PAGE",
            payload:{
                title:"Blog Details",
                subTitle:"Home",
                PageIcon:`${BlogHeaderImage}`,
                imagePageHeader:`${GalleryHeaderImage}`
            }
        })
    }

    return (
        <AppContext.Provider
        value={{...state, updateAboutUs,updateActivity,updateGallery,updateBlog}}>

        {children}
            
        </AppContext.Provider>
    )
};


const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
// eslint-disable-next-line react-refresh/only-export-components
  export { AppContext, AppProvider, useGlobalContext };
