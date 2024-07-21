import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/pythondsa.png";
import project2 from "../../public/images/projects/webdev.jpg";
import project3 from "../../public/images/projects/crypto.jpg";
import blog1 from "../../public/images/projects/blogweb.png";
import { motion } from "framer-motion";
import TransitionEffects from "@/components/TransitionEffects";

const FramerImage = motion(Image);

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col md:flex-row items-center justify-between relative rounded-br-2xl rounded-3xl 
    border border-solid border-dark bg-light shadow-2xl p-6 md:p-12 dark:bg-dark dark:border-dc1"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]
       bg-dark dark:bg-dc1 rounded-br-3xl"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full md:w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full md:w-1/2 flex flex-col items-start justify-between pl-0 md:pl-6 mt-4 md:mt-0">
        <span className="text-primary font-bold text-2xl md:text-3xl dark:text-SecondryColor1">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl md:text-4xl font-bold font-apple dark:text-dc1">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark text-sm md:text-base dark:text-dc1">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-8 md:w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-4 md:px-6 text-sm md:text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = ({ type, title, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-between justify-center rounded-2xl 
    border border-solid border-dark bg-light p-6 relative shadow-2xl dark:bg-dark dark:border-dc1 "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-dc1 rounded-br-3xl " />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto dark:text-dc1"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-lg md:text-xl dark:text-SecondryColor1">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl md:text-3xl font-bold dark:text-dc1">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-sm md:text-lg font-semibold hover:underline dark:text-light "
          >
            Visit Project
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-10">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffects />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Projects!"
            className="mb-16 flex-auto text-4xl md:text-5xl "
          />
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 lg:gap-12 dark:text-dc1">
            <div className="col-span-2 md:col-span-2">
              <FeaturedProjects
                type="Featured Project"
                title="Blog Posting Website - coming soon!!!"
                summary="Work with Client Sessions and data persistence using 
                MongoDB to add user registration and Login/Logout functionality 
                & tracking (logging)."
                img={blog1}
                link="https://github.com/syuvraj19/Blog-Posting-Website"
                github="https://github.com/syuvraj19/YuvrajSingh"
              />
            </div>

            <div className="col-span-1">
              <Projects
                type="Project 1"
                title="Data Structures and Algorithms"
                summary="Explore the core components of efficient programming with this in-depth look at classical data structures and algorithms. This course covers the implementation and theoretical basis of these building blocks, providing a strong foundation in computational theory and programming efficiency."
                img={project1}
                link="https://github.com/syuvraj19/DSA-Assignments"
                github="https://github.com/syuvraj19/YuvrajSingh"
              />
            </div>

            <div className="col-span-1">
              <Projects
                type="Project 2"
                title="Web Programming Courses Portfolio"
                img={project2}
                link="https://github.com/syuvraj19/WEB-Assignment"
                github="https://github.com/syuvraj19/YuvrajSingh"
              />
            </div>

            <div className="col-span-2 md:col-span-2">
              <FeaturedProjects
                type="Featured Project"
                title="Crypto Screener Application - coming soon!!!"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API,
                React Router and Recharts. It shows detail regarding almost all the cryptocurrency. 
                You can easily convert the price in your local currency."
                img={project3}
                link="/"
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
