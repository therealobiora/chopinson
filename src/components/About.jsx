"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const About = () => {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={aboutRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      id="about"
      className="relative py-8 sm:py-10 md:py-12 bg-black"
      style={{
        backgroundImage: "url(/section-bg.avif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-4 sm:mb-6"
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[15px] font-medium sm:text-base md:text-lg text-white text-center max-w-prose mx-auto"
        >
          Chopinson Bar & Events is your premier destination for exquisite
          dining and unforgettable events. From cozy restaurant experiences to
          large-scale event planning, we cater to all your needs with passion
          and excellence.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;
