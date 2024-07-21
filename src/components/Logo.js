import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="text-gray-100 text-4xl hover:text-gray-400 transition-colors font-apple "
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
      >
        Yuvraj Singh {/* Your name here */}
      </MotionLink>
    </div>
  );
};

export default Logo;
