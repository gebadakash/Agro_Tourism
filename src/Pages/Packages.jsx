import React, { Suspense } from "react"
const Timeline = React.lazy(()=> import("../Components/PackagePageComponents/Timeline/Timeline"));
const FoodMenu = React.lazy(()=> import("../Components/PackagePageComponents/FoodMenuComponents/FoodMenu"));


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
