import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import article3 from "../../public/images/articles/What is higher order component in React.jpg";
import article4 from "../../public/images/articles/smooth scrolling in reactjs.png";
import article5 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article6 from "../../public/images/articles/What is Redux with easy explanation.png";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffects from "@/components/TransitionEffects";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-64 h-auto hidden absolute rounded-lg"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport="once"
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 
        sm:flex-col sm:items-start dark:bg-dc1"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary dark:bg-dark dark:text-light font-bold pl-4 sm:self-end sm:pl-0 sm:mt-2">{date}</span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative lg:col-span-2 sm:col-span-1 
        sm:flex sm:flex-col sm:items-start dark:bg-dark dark:border-dc1">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-auto h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768 px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline dark:text-dc1">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 dark:text-light">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Articles Page</title>
      </Head>
      <TransitionEffects />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Learning Continues!" className="mb-16 text-left lg:!text-7xl sm:!text-6xl xs:!text-4xl sb:mb-8" />
          <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/"
              img={article1}
            />

            <FeaturedArticle
              title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
              summary="Learn how to create stunning loading screens in React with 3 different methods. 
            Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
            Improve the user experience."
              time="10 min read"
              link="https://devdreaming.com/blogs/create-3-different-types-of-loading-screens-in-react"
              img={article2}
            />
          </ul>
          <br/>
          <br/>
          <br/>
          <AnimatedText text="A few more Articles to read..." className="mb-16 text-left lg:!text-5xl sm:!text-4xl xs:!text-4xl sb:mb-8" />
          <ul className="w-full">
            <Article
              title=" Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="March 22, 2023"
              link="https://devdreaming.com/blogs/react-form-validation-custom-hook"
              img={article3}
            />

            <Article
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              date="March 25, 2023"
              link="https://devdreaming.com/blogs/smooth-scrolling-in-react-js"
              img={article4}
            />

            <Article
              title="Using Hooks And Portals Build A Fabulous Todo List App With React, Redux And Framer-Motion"
              date="March 25, 2023"
              link="https://devdreaming.com/blogs/build-react-redux-framer-motion-todo-app"
              img={article5}
            />

            <Article
              title="Redux Simplified: A Beginner's Guide For Web Developers"
              date="March 25, 2023"
              link="https://devdreaming.com/blogs/redux-simply-explained"
              img={article6}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
