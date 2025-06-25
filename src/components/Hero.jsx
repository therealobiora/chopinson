"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, margin: "-100px" });

  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]">
      {/* Background Image */}
      <Image
        src="/images/Hero-bg.jpeg"
        alt="Restaurant Ambiance"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay with blur and dark background */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />

      {/* Content */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-center text-center z-20"
      >
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 max-w-[95%] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-white text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
          >
            Chopinson <span className="text-[#ea8f2b]">Bar</span> & Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-200 text-base font-semibold md:text-lg mb-4 sm:mb-6"
          >
            Experience dining, events, and entertainment like never before.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              href="#contact"
              className="inline-block font-semibold bg-[#ea8f2b] hover:bg-opacity-90 text-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-md transition-colors"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
