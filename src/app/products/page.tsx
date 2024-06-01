import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import product1 from "@/components/products/product1"

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products Page |  Evanta Analytics and Consulting",
  description: "This page lists the customisable and AI enabled products built by Evanta Analytics and Consulting. #Customer Relationship Management #Intelligent Systems",
  // other metadata
};

const ProductsPage = () => {
  return (
    <>
    <br></br>
      <Breadcrumb
        pageName="Products"
        description="Evanta Analytics & Consulting believes in delivering user friendly intuitive products. Our range of products consists of various such amazing software."
      />
      <product1 />
      
    </>
  );
};

export default ProductsPage;
