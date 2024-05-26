import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is Contact Page for Evanta Analytics and Consulting.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
    <br></br>
      <Breadcrumb
        pageName="Contact"
        description="Our Contact Details:-"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
