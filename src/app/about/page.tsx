import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page |  Evanta Analytics and Consulting",
  description: "This is about page for Evanta Analytics and Consulting",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
    <br></br>
      <Breadcrumb
        pageName="About"
        description="Evanta Analytics & Consulting  is an Analytics and Tech Consulting company which offers enterprise grade solutions and analytics services on cloud and on prem with Industry Standard SDLC processes."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
