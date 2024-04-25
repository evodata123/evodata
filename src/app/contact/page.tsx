import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is Contact Page for EvoData Analytics and Consulting Group",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="Our Contact Details:-"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
