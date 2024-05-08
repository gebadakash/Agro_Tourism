import React, { Suspense, useEffect } from "react";
const ContactForm = React.lazy(()=> import("../Components/ContactPageComponents/ContactForm"));

const Contact = () => {


  return (
    <>
    <Suspense>
      <ContactForm/>
    </Suspense>
    </>
  )
}

export default Contact
