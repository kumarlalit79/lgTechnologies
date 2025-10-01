import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Get in Touch"
        description="We’d love to hear from you! Whether you have questions, feedback, or want to discuss a project, feel free to reach out. Our team is here to help and will get back to you as soon as possible."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
