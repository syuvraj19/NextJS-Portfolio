import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/pic1.jpeg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffects from "@/components/TransitionEffects";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffects />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="About Me!"
            className="mb-16 m-7 lg:!text-7xl sm:!text-6xl xs:!text-4xl sb:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-dc1">
                Introduction
              </h2>
              <p className="font-medium text-justify dark:text-white">
                Hello, I'm Yuvraj, based in New Delhi, India. My passion lies in
                the realm of information technology, where I specialize in
                application development, quality assurance, and system analysis.
              </p>

              <p className="font-medium text-justify my-4 dark:text-white">
                Outside of my professional pursuits, I am actively involved in
                volunteer work, particularly in child welfare initiatives, where
                I engage with underprivileged children through educational
                activities and events. My diverse experiences have shaped me
                into a versatile individual with a deep commitment to making a
                positive impact both professionally and within my community.
              </p>

              <p className="font-medium text-justify dark:text-white">
                I believe that design is about more than just making things look
                pretty it's about solving problems and creating intuitive,
                enjoyable experiences for users. Whether I'm working on a
                website, mobile app, or other digital product, I bring my
                commitment to design excellence and user-centered thinking to
                every project I work on.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light xl:col-span-4 md:order-1 md:col-span-8 "
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                className="w-full h-auto rounded-2xl "
                priority
                sizes="(max-width:768 px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-start xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center">
                <h2 className="text-4xl font-medium capitalize text-dark/75 dark:text-dc1 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients :
                </h2>
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl dark:text-dc1">
                  <AnimatedNumbers value={30} />+
                </span>
              </div>
              <br />
              <div className="flex flex-col items-end justify-center">
                <h2 className="text-4xl font-medium capitalize text-dark/75 dark:text-dc1 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed :
                </h2>
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl dark:text-dc1">
                  <AnimatedNumbers value={15} />+
                </span>
              </div>
              <br />
              <div className="flex flex-col items-end justify-center">
                <h2 className="text-4xl font-medium capitalize text-dark/75 dark:text-dc1 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of Experience :
                </h2>
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl dark:text-dc1">
                  <AnimatedNumbers value={2} />+
                </span>
              </div>
            </div>
          </div>

          <Education />
          <Experience />
        </Layout>
      </main>
    </>
  );
};
export default about;
