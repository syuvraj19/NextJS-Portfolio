import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import AnimatedText from "./AnimatedText";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 lasy:mb-0 w-[80%] mx-auto flex flex-col justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl text-primary">{type}</h3>
        <span className="capitalize text-dark text-xl font-bold dark:text-dc1">
          {time} | {place}
        </span>
        <p className="font-medium w-full text-justify dark:text-white">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-32 ">
      <AnimatedText
        text="Education"
        className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sb:mb-8"
      />
      <div ref={ref} className="w-[100%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[6px] h-full bg-dark origin-top dark:bg-dc1"
        />

        <ul>
          <Details
            type="High School Graduate"
            time="2016-2021"
            place="Manav Sthali School, New Delhi, India"
            info="In high school, I learned the basics of programming, including data structures and problem-solving. 
            We explored computer architecture, networking, and worked on projects to apply our knowledge. Additionally, 
            we discussed ethical considerations and got a glimpse into emerging fields like artificial intelligence and 
            machine learning."
          />
          <Details
            type="Advanced Dimploma In Computer Science"
            time="2021-2023"
            place="Seneca College, Toronto, Canada"
            info="With expertise in diverse programming languages (C/C++, JavaScript, HTML, CSS, XML, Python), operating systems 
            (Unix, Linux, Windows, MacOS), and database systems (SQL Server, Oracle, MySQL, PostgreSQL, Azure Cosmos DB, 
            MongoDB), I am adept in software development and data management. Skilled in hardware/software configuration, 
            troubleshooting, and automation scripting, I excel with tools such as Microsoft Office, Wireshark, Visual Paradigm,
            Mware, and VirtualBox. Additionally, proficiency in multimedia editing (Final Cut Pro, Filmora 9, Photoshop, 
            Vectornator) enhances my ability to create captivating content."
          />
          <Details
            type="Bachelors of Technology in Computer Science"
            time="2024-2028"
            place="University Of Delhi, New Delhi, India"
            info="I've delved into a comprehensive curriculum that blends foundational subjects like mathematics, physics, and 
            chemistry with core computer science principles. From mastering data structures and algorithms to understanding 
            computer organization, each course has broadened my understanding of technology. Through elective courses, I've 
            explored specialized areas like artificial intelligence and cybersecurity, adding depth to my knowledge. Practical 
            experiences, including projects and internships, have honed my skills and prepared me for the dynamic tech industry."
          />
        </ul>
      </div>
    </div>
  );
};
export default Education;
