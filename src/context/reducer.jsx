const reducer = (state,action)=> {

    if(action.type === "ABOUT_PAGE"){
        return {
            ...state,
            title:action.payload.title,
            subTitle:action.payload.subTitle,
            PageIcon:action.payload.PageIcon,
            imagePageHeader:action.payload.imagePageHeader,
        }
    }

    if(action.type === "ACTIVITY_PAGE"){
        return {
            ...state,
            title:action.payload.title,
            subTitle:action.payload.subTitle,
            PageIcon:action.payload.PageIcon,
            imagePageHeader:action.payload.imagePageHeader,
        }
    }

    if(action.type === "GALLERY_PAGE"){
        return {
            ...state,
            title:action.payload.title,
            subTitle:action.payload.subTitle,
            PageIcon:action.payload.PageIcon,
            imagePageHeader:action.payload.imagePageHeader,
        }
    }



    if(action.type === "CONTACT_PAGE"){
        return {
            ...state,
            title:action.payload.title,
            subTitle:action.payload.subTitle,
            imagePageHeader:action.payload.imagePageHeader,
        }
    }

    if(action.type === "BLOG_PAGE"){
        return {
            ...state,
            title:action.payload.title,
            subTitle:action.payload.subTitle,
            PageIcon:action.payload.PageIcon,
            imagePageHeader:action.payload.imagePageHeader,
        }
    }
  

}

export default reducer
