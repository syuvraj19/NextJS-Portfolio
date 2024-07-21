import React from "react";
import { motion } from "framer-motion";
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-center">
          &copy; {new Date().getFullYear()} All Rights Reserved |{" "}
          <a href="mailto:syuvraj1900@gmail.com" className="text-white">
            syuvraj1900@gmail.com
          </a>
        </p>
        <nav className="flex items-center justify-center flex-wrap mt-2">
          <motion.a
            href="https://github.com/syuvraj19"
            target="_blank"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/yuvraj-singh-s29/"
            target="_blank"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/yuvrxj.17/"
            target="_blank"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <InstagramIcon />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/profile.php?id=100011399805579"
            target="_blank"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <FacebookIcon />
          </motion.a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
