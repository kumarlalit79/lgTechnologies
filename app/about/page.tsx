import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="At L&G Technologies, we help businesses build modern and reliable software solutions. 
From web applications, CRM, ERP, and custom business tools to many more digital products — 
our focus is always on solving real problems with simple and effective technology.  
With the right mix of experience and creativity, we make sure our solutions are easy to use, 
scalable, and truly add value to your business.
.
"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
