"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Web Developer , ELEKS",
    description1:
      "Developed a Robust UI, using React.js and Redux-State Management for 15+ Web-Pages",
    description2:
      "Designed RESTful API in Backend Models.Increased database efficiency with MongoDB and Nodejs by 14 percent",
    description3:
      "Created Node.js routing models for MongoDB and integrated axios, Nodemailer for 7+ custom mailings",
    techstack: "MERN FullStack, React.js, Redux Express.js, Node.js, MongoDB",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        Web Developer , ELEKS
        <br /> June 2018 - June 2021
      </div>
    ),
  },
  {
    title: "Web&Mobile Engineer , Trinetix",
    description1:
      "Led the development of 14+ Claim Attainment Forms (in Java and JS) for CIG using executeServerEvent",
    description2:
      "Implemented Validation and mapped data with Java 17.0 and Event Handling using cutom js in Eclipse",
    description3:
      "Handled upto 250+ process docs in Newgen Omniapp with User Rights Management and Process Handling",
    techstack: "Java, JavaScript, OOPS, CSS, Eclipse IDE",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Web&Mobile Engineer , Trinetix
        <br /> September 2021 - December 2023
      </div>
    ),
  },
  {
    title: "Senior Frontend Dev, Spotline",
    description1:
      "Developed a UI Interface Design in 3 weeks, with sub-page routing and Frontend Animation.",
    description2:
      "Integrated Lazy Loading and Shimmer UI which helped improve Website Performance by 148ms",
    description3:
      "Gained hands-on experience in real-world software development and created 10+ sub react based Web Pages.",
    techstack: " React.js, Axios, Redux Tailwind, github",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Frontend Dev Intern, Spotline
        <br /> January 24 - Present
      </div>
    ),
  },
];

function WorkEx() {
  return (
    <div className="p-10">
      <h1 className="mt-20 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Work Experience
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}

export default WorkEx;
