import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import AnimatedText from "@/components/AnimatedText";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 lasy:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between  "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg dark:text-dc1">
          {position}&nbsp;
          <a href={companyLink} target="_blank" className="text-primary">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75  xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-justify dark:text-white">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-32 ">
      <h2 className="font-bold text-8xl w-full text-left">
        <AnimatedText text="Experience" className="mb-10 lg:!text-7xl sm:!text-6xl xs:!text-4xl sb:mb-8"/>
      </h2>
      <div ref={ref} className="w-[100%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[6px] h-full bg-dark origin-top dark:bg-dc1"
        />

        <ul>
          <Details
            position="Student Representative"
            company="CERN"
            companyLink="www.google.com"
            time="2022-Present"
            address="Libin, Belgium"
            work="As a liaison between students and academic leaders, I facilitated communication 
            and collaboration within the student body and the Student’s Association. Representing
            my class at Program Councils on an international scale, I contributed to discussions 
            on IT and technical development. Actively engaging fellow students both in the classroom 
            and across campus, I fostered an environment conducive to enhanced learning experiences. 
            Furthermore, I communicated innovative ideas and concepts to international teams, 
            focusing on technological advancements in AI and nuclear research. Additionally, I 
            contributed to a team tasked with developing new features for Google's search engine, 
            focusing on improving search result accuracy, relevance, and developing innovative tools 
            for data analysis and visualization."
          />
          <Details
            position="Technical Support Staff"
            company="ManpowerGroup"
            time="April 2022 - June 2022"
            address="Etobicoke, Canada"
            work="I efficiently managed incoming shipments, ensuring accuracy and quality through 
            meticulous inspection and documentation. Utilizing warehouse management software, I 
            tracked inventory levels, monitored stock movement, and generated comprehensive reports. 
            Regular cycle counts were conducted to maintain inventory accuracy, and I collaborated 
            with cross-functional teams to coordinate stock replenishment. By implementing streamlined 
            picking, packing, and shipping processes, I reduced order processing time and enhanced 
            customer satisfaction. Actively contributing to continuous improvement initiatives, I 
            provided valuable suggestions for process enhancements and efficiency gains. Additionally, 
            I played a pivotal role in training new warehouse associates on technical systems, equipment
             operation, and warehouse processes."
          />

          <Details
            position="Customer Service Representative"
            company="Farm Boy"
            time="Jul 2022 - Nov 2022"
            address="Toronto, Canada"
            work="I possess a demonstrated track record of providing exceptional customer service, 
            adeptly resolving inquiries and complaints to ensure customer satisfaction. My communication 
            skills, both verbal and written, are excellent, enabling clear and effective interaction 
            with customers and colleagues alike. With proficiency in operating point-of-sale (POS) systems,
             I handle cash transactions accurately and efficiently. Furthermore, I have a solid 
             understanding of food safety regulations and compliance standards. I thrive in fast-paced, 
             team-oriented environments, where I can leverage my skills to contribute positively to the 
             team's success."
          />

          <Details
            position="Application Programmer Analyst"
            company="Ministry Of Education - Ontario"
            time="January 2023 - October 2023"
            address="Toronto, Canada"
            work="I developed comprehensive test plans, cases, and scripts aligned with project requirements, 
            user stories, and acceptance criteria. Executed various testing types including functional, regression,
             performance, and usability testing. Utilized defect tracking tools to identify and manage defects, 
             collaborating with developers for timely resolution. Contributed to test automation frameworks, enhancing
              testing efficiency. Collaborated with teams and stakeholders for clear communication and understanding 
              of project requirements. Presented test summary and defect reports for insights on software quality and 
              release readiness. Continuously improved testing processes and methodologies by incorporating industry 
              best practices and emerging technologies."
          />

          <Details
            position="Student Representative & Content Creator"
            company="Seneca Polytechnic"
            time="October 2023 - Januray 2024"
            address="Toronto, Canada"
            work="In my role as a Student Representative, I act as a vital link between the student body and academic 
            leadership, ensuring that student concerns, needs, and perspectives are effectively communicated and addressed. 
            This involves actively engaging with students to understand their feedback, concerns, and suggestions, and 
            then representing these interests in meetings and discussions with faculty, staff, and other decision-makers. 
            Additionally, I organize events, workshops, and initiatives aimed at fostering student engagement, promoting a 
            sense of community, and advocating for student welfare within the institution.

            Simultaneously, as a Content Creator, I play a crucial role in developing and disseminating engaging and informative 
            content across various platforms, including social media, websites, and newsletters. This content aims to inform, 
            educate, and engage the student body by providing relevant and timely information about events, opportunities, and 
            resources available to them. Through written articles, blog posts, social media updates, and multimedia content such 
            as videos and infographics, I strive to enhance student awareness, participation, and satisfaction within the academic
            community."
          />
        </ul>
      </div>
    </div>
  );
};
export default Experience;
