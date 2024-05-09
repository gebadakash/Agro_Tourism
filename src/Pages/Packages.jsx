import React, { Suspense } from "react"
import FoodMenu from "../Components/PackagePageComponents/FoodMenuComponents/FoodMenu";
const Timeline = React.lazy(()=> import("../Components/PackagePageComponents/Timeline/Timeline"));


const Packages = () => {
  return (
    <>
      <Suspense>
        <Timeline/>
        <FoodMenu/>
      </Suspense>
    </>
  )
}

export default Packages
