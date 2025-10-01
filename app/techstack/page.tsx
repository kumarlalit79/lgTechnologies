import { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Tech Stack | Free Next.js Template",
  description: "Showcasing all technologies we work with.",
};

const techStacks = [
  {
    title: "Frontend Development",
    items: [
      "HTML5",
      "CSS3",
      "SASS / SCSS",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Angular",
      "jQuery",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Ant Design",
      "Redux",
      "Zustand",
      "Recoil",
      "Framer Motion",
      "Three.js",
      "Stencil.js",
    ],
  },
  {
    title: "Backend Development",
    items: [
      ".NET Core",
      ".NET Framework",
      "MVC",
      "Node.js",
      "Express.js",
      "Django",
      "Flask",
      "FastAPI",
      "Tornado",
      "Spring Boot",
      "Micronaut",
      "Quarkus",
      "Golang",
      "PHP",
      "Laravel",
      "CodeIgniter",
      "Symfony",
    ],
  },
  {
    title: "CMS & E-commerce",
    items: [
      "WordPress",
      "Magento",
      "Drupal",
      "BigCommerce",
      "Shopify",
      "WooCommerce",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS Lambda",
      "Azure Functions",
      "Google Cloud Functions",
      "Tomcat",
      "WildFly",
      "IIS",
      "WebSockets",
      "RabbitMQ",
      "Kafka",
    ],
  },
];

const TechStack = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Tech Stack"
        description="The technologies and frameworks we leverage to build modern applications."
      />

      <section className="pb-[120px] pt-[120px] bg-gray-50 dark:bg-[#0f1620] transition-colors duration-300">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-4">
            {techStacks.map((stack, index) => (
              <div
                key={index}
                className="rounded-xl p-6 shadow-md flex flex-col bg-white dark:bg-[#121723] transition-colors duration-300"
              >
                <h3 className="mb-4 text-xl font-bold flex items-center gap-2 text-gray-900 dark:text-white">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 012-2h8a2 2 0 012 2v14l-6-3-6 3V3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {stack.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full border border-cyan-500 text-cyan-600 dark:text-cyan-300 text-sm flex items-center gap-1 transition-colors duration-300"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414L8.414 15 4.293 10.879a1 1 0 111.414-1.414L8.414 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStack;
