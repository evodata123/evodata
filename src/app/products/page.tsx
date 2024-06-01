import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import product from "@/components/products/product"
import React from 'react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products Page |  Evanta Analytics and Consulting",
  description: "This page lists the customisable and AI enabled products built by Evanta Analytics and Consulting. #Customer Relationship Management #Intelligent Systems",
  // other metadata
};

const ProductPage: React.FC = () => {
    return (
      <div>
        <product
          heading="Advanced Analytics Tool"
          description="Our Advanced Analytics Tool provides deep insights into your data, enabling you to make informed decisions and optimize your business performance."
          videoUrl="https://www.youtube.com/embed/your-video-id"
        />
      </div>
    );
  };
  
  export default ProductPage;