import { WorkExperience } from "./types";

export const EXPERIENCE_DATA: Array<WorkExperience> = [
  {
    id: 0,
    title: "freelance full stack developer",
    company: "-",
    company_link: "https://briha.xyz/",
    startDate: "10/2024",
    endDate: "present",
    description: `projects that I've worked on independently`,
    projects: [
      {
        name: "instanoter",
        points: [
          "evaluated requirements and came up with solutions to make maintenance and content management easy for admins",
          "built a wordpress website using templates and custom plugins for seo and metrics",
        ],
      },
    ],
    technologies: ["wordpress", "figma"],
  },
  {
    id: 1,
    title: "full stack engineering consultant",
    company: "crecientech infosystems",
    company_link: "https://www.crecientech.com/",
    startDate: "10/2023",
    endDate: "present",
    description:
      "independently developed and managed the Node.js server, crafting numerous REST APIs and designing a robust, multi-tenant database schema. integrated government document verification and role-based API usage, and led the development of a multi-screen React Native application. built custom navigation, UI components, and data transformation functions, optimizing performance with React Hooks and Context API. designed interfaces for dynamic charts and scalable functions for onboarding via Firestore. developed an eCommerce application for customizable clothing using TypeScript, Next.js, and Fabric.js.",
    projects: [
      {
        name: "creditsutra",
        points: [
          "independently developed and managed the Node.js server, crafting over 21 REST apis to enhance server functionality and performance.",
          "designed and implemented a scalable and robust database schema, ensuring seamless support for multi-tenancy requirements.",
          "integrated government document verification API services, such as Surepass, into the server architecture.",
          "integrated role-based API usage.",
          "setup AWS S3 private and public buckets for hosting and storing sensitive files",
          "setup a t2-micro EC2 instance for testing purposes",
          "implemented controllers for admins to invite users to the platform by sending them emails via nodemailer",
          "customised the email content sent by the admin using a templating engine like hogan js",
        ],
      },
      {
        name: "prdc",
        points: [
          "single-handedly led the development of a Multi-Screen expo managed react native application, demonstrating proficiency in UI development and functionality.",
          "built and wrote custom nested navigational components, UI components, and data transformation functions",
          "optimized performance with custom hooks and context API for global state management",
          "integrated dynamic rendering for line and gauge charts with the ability to filter through data points by providing a start and end time for data",
          "maintained the performance and behavior of the application in edge cases such as null values in graphs and tables",
          "worked on features like sharing/ downloading files on to device through the application",
        ],
      },
      {
        name: "fabric ecommerce",
        points: [
          "developed an ecommerce website using next js client and server components",
          "integrated fabric js into the application to allow the user to customise their selected clothing items",
          "offered the feature for users to add text with custom fonts, dynamic font sizing, text styling (underline, bold, italic), text coloring using a color picker, and text alignment",
          "also included the feature for users to add their own custom images to the clothing item, and also provided features like color inversion, image flipping, cropping, and resizing for the images",
        ],
      },
      {
        name: "adidvara mobile",
        points: [
          "developed an expo managed react native application in a team of 2",
          "primarily worked on the backend aspects of the application and how it would interact with firebase",
          "worked on features like resume generation, resume downloading and viewing",
          "worked on complex data comparison functions which compared data from 2 adjacent screens and rendered conditional elements and options",
          "built components that would validate the input for specific content and alert the user if any invalid tokens/ terms were in it",
          "wrote backend functions that took up less than the permitted amount of memory on iOS for file uploads by using batched uploads",
        ],
      },
      {
        name: "adidvara web",
        points: [
          "planned, and led the development of a web application meant for admins who would post jobs, onboard users to the application, and manage their resumes",
          "built using next js 14 client and server components",
          "used firebase auth for admin access",
          "implemented a multi tenant architecture for role based usage in the admin as well as mobile app",
          "used firestore for data storage and querying",
          "wrote and deployed firebase functions for uploading jobs, creating and deleting users in bulk",
          "implemented functions for firebase subscriptions when it came to real time notifications",
          "used firebase storage for storing user profile pictures, generated resumes and also sensitive documents uploaded",
        ],
      },
    ],
    technologies: [
      "typescript",
      "javascript",
      "node JS",
      "express",
      "axios",
      "JWT",
      "joi",
      "mongoose",
      "AWS",
      "nodemailer",
      "expo",
      "next JS",
      "next-auth",
      "MySQL",
      "tailwindCSS",
      "firebase",
    ],
  },
  {
    id: 2,
    title: "full stack engineering intern",
    company: "aara co",
    company_link: "https://aara.co.in/html/about.html",
    startDate: "01/2023",
    endDate: "03/2023",
    description: `built 2 separate scalable, end-to-end, and user-friendly web applications using next js for admin and clients that simplifies data collection for placing, managing, and confirming orders, as well as dynamically generating PDF invoices. 
    used a combination of firebase real time db and firestore to enable data concurrency. this approach cut down the time spent waiting in lines for ordering by close to 75%`,
    projects: [
      {
        name: "aara client",
        points: [
          "planned and developed a next js application where clients/ parents could place orders and view their order history as well as obtain receipts for all their orders",
          "logged the users in via phone number and otp and used firebase functions to automatically create a record in firestore with their number as the key",
          "allowed the parent to add details of their children such as name, grade and gender and this would be saved as a snippet in their user document",
          "rendered items dynamically from firestore depending on the grade and the child's gender",
          "allowed the user to modify their submitted order before paying at kiosk",
          "upon confirming and paying for the order, we also provide the ability for the user to view previous orders and also obtain their invoices in case of invoice misplacement",
        ],
      },
      {
        name: "aara admin",
        points: [
          "developed another web application for admins where they can confirm, reject and view order statistics and also generate invoices",
          "provided inventory management services where admins can add, modify, delete items and also specify which grade the items are available to",
          "used firebase storage for images of products and contained a reference to this image in the product's document",
          "used a clever combination of firestore and real time db for concurrency management as there were multiple agents at the kiosk",
          "issued dynamic invoice numbering and generated dynamic invoices using jsPDF",
          "added interactive charts for summaries and more detailed order statistics",
        ],
      },
    ],
    technologies: ["javascript", "next JS", "firebase", "jspdf"],
  },
  {
    id: 3,
    title: "web engineering intern",
    company: "mytiro.ai",
    company_link: "https://mytiro.ai",
    startDate: "12/2021",
    endDate: "04/2022",
    description: `worked on the landing page for their showcase product, mytiro`,
    projects: [
      {
        name: "mytiro landing page",
        points: [
          "evaluated designs and came up with suggestions on how we can begin development and what tech stacks we must proceed with",
          "gained in depth knowledge on seo and performance metrics for websites",
          "developed their website using gatsby js and styled components with interactive components such as accordions",
        ],
      },
    ],
    technologies: ["javascript", "gatsby js", "styled components"],
  },
  {
    id: 4,
    title: "web engineering intern",
    company: "paint it red",
    company_link: "https://paintitred.in/",
    startDate: "11/2020",
    endDate: "01/2021",
    description: `built their redesigned dynamic landing page using wordpress`,
    projects: [
      {
        name: "paint it red landing page",
        points: [
          "evaluated requirements and came up with solutions to make maintenance and content management easy for admins",
          "built a wordpress website using templates and custom plugins for seo and metrics",
        ],
      },
    ],
    technologies: ["wordpress", "figma"],
  },
];
