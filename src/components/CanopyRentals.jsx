"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const CanopyRentals = () => {
  const canopyRef = useRef(null);
  const isInView = useInView(canopyRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={canopyRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      id="canopy"
      className="py-5 sm:py-10 md:py-12 bg-white"
    >
      <div className="container mx-auto max-w-[95%] h-[52vh] md:h-[50vh] bg-[#f5f5f5] rounded-md justify-center px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 md:mb-4 mb-2 sm:mb-6">
            Canopy Rentals
          </h2>
          <p className="text-sm sm:text-base font-medium md:text-lg text-gray-600">
            We offer a wide range of canopy rentals for various events and
            occasions, including weddings, birthdays, corporate events, and
            more. Our canopies are designed to provide a secure and stylish
            space for your event, ensuring a memorable experience for all
            guests.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/images/canp.jpeg"
            alt="Catering Services"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CanopyRentals;
