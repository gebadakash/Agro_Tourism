import React, { Suspense } from "react"
const Timeline = React.lazy(()=> import("../Components/PackagePageComponents/Timeline/Timeline"));


const Packages = () => {
  return (
    <>
      <Suspense>
        <Timeline/>
      </Suspense>
    </>
  )
}

export default Packages
