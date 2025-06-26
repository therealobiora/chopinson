"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Snooker = () => {
  const snookerRef = useRef(null);
  const isInView = useInView(snookerRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={snookerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      id="snooker"
      className="py-5 sm:py-10 md:py-12 bg-white"
    >
      <div className="container mx-auto max-w-[95%] h-[50vh] md:h-[50vh] bg-[#f5f5f5] rounded-md justify-center px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/images/snooker.jpeg"
            alt="Catering Services"
            width={560}
            height={300}
            className="rounded-lg shadow-md object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 md:mb-4 mb-2 sm:mb-6">
            Snooker
          </h2>
          <p className="text-sm sm:text-base font-medium md:text-lg text-gray-600">
            Snooker is a popular game that can be enjoyed by anyone. It is a
            game of skill and strategy that requires a lot of concentration.
            Enjoy the game and have fun!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Snooker;
