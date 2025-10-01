import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Event Management System for College",
    paragraph:
      "A platform for students and faculty to manage and register for college events and workshops.",
    image: "/images/blog/Event.png",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["Education"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Solar Company",
    paragraph:
      "Custom ERP for solar panel company including Ecommerce, project tracking, and client management.",
    image: "/images/blog/Solar.png",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Energy"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Expense Management System",
    paragraph:
      "A full-featured system to manage company expenses, with real-time reports and approval workflows.",
    image: "/images/blog/Expense.png",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Finance"],
    publishDate: "2024-25",
  },
  {
    id: 4,
    title: "Dairy Management System",
    paragraph:
      "Automated milk collection and payment tracking system for farmers and vendors.",
    image: "/images/blog/Dairy.png",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["AgriTech"],
    publishDate: "2025",
  },
  {
    id: 5,
    title: "Electricity Bill Tracking System",
    paragraph:
      "A smart solution to track and analyze electricity usage and bills for residential societies.",
    image: "/images/blog/Meter.png",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Utilities"],
    publishDate: "2025",
  },
  {
    id: 6,
    title: "E-commerce Platform",
    paragraph:
      "E-commerce solution with product management, order tracking,and payments. ",
    image: "/images/blog/Ecom.png",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["E-commerce"],
    publishDate: "2025",
  },
];
export default blogData;
