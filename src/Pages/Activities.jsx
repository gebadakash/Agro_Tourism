import React, { Suspense, useEffect } from "react"
import { useGlobalContext } from "../context/context"
const ActivityPage = React.lazy(()=> import("../Components/ActivityPageComponent/ActivityPage"));
const WebsiteHeader = React.lazy(()=> import("../Components/WebsiteHeader/WebsiteHeader"));

const Activities = () => {

  const {updateActivity} = useGlobalContext();

  useEffect(()=> updateActivity(), []);

  return (
    <>
    <Suspense>
      <WebsiteHeader/>
      <ActivityPage/>
    </Suspense>
    </>
  )
}

export default Activities
