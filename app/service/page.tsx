import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import TechStack from "../techstack/page";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "L&G Technologies | Innovative Web Solutions",
  description: "L&G Technologies provides custom web apps, Softwares, Websites , and startup SaaS solutions.",

};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="What We Offer"
        description="Tailored IT solutions to simplify and grow your business."
      />

      {/* <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                    ...
                  </span>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      <section className="pb-[120px] pt-[120px] bg-white dark:bg-[#0f1620]">
  <div className="container">
    <div className="grid gap-8 justify-center md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Custom Development",
          items: [
            "Custom Web Applications",
            "Custom Software Development",
            "Cross-Platform App Development",
            "SaaS Product Development",
            "Legacy Application Modernization",
          ],
        },
        {
          title: "Business Solutions",
          items: [
            "CRM Development",
            "ERP Systems",
            "Booking & Appointment Systems",
            "Management Systems (HRM, School, Hospital, Gym, Library, etc.)",
          ],
        },
        {
          title: "E-Commerce Solutions",
          items: [
            "Full-Stack E-commerce Development",
            "Online Stores & Marketplaces",
            "Product Management, Order Tracking & Payment Gateways",
          ],
        },
        {
          title: "API & Integrations",
          items: [
            "REST API Development",
            "Third-Party API Integrations",
            "Microservices Architecture Solutions",
          ],
        },
        {
          title: "Data & Reporting",
          items: [
            "Dashboard & Reporting Solutions",
            "Data Visualization & Analytics",
            "BI Tools (Power BI, SSRS Integration)",
          ],
        },
        {
          title: "Cloud & Maintenance",
          items: [
            "Cloud-Based Solutions (Azure / AWS Deployment)",
            "Serverless Functions & Cloud Storage",
            "Support, Bug Fixes & Security Patches",
          ],
        },
      ].map((service, index) => (
        <div key={index} className="flex">
          <div
            className="rounded-xl p-6 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full w-full 
                       bg-gray-100 dark:bg-gradient-to-br dark:from-[#121723] dark:to-[#1b2540]"
          >
            <h3 className="mb-4 text-xl font-bold text-blue-600 dark:text-blue-400">
              {service.title}
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-800 dark:text-white">
              {service.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <TechStack/>

    </>
  );
};

export default Blog;
