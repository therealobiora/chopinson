"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Events = () => {
  const eventsRef = useRef(null);
  const isInView = useInView(eventsRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={eventsRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      id="events"
      className="py-8 sm:py-10 md:py-12 bg-white"
    >
      <div className="container bg-[#f5f5f5] rounded-md h-[48vh] md:h-[50vh] mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/images/event.jpeg"
            alt="Event Setup"
            width={600}
            height={400}
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
            Event Planning
          </h2>
          <p className="text-sm sm:text-base font-medium md:text-lg text-gray-600">
            We offer a wide range of event planning services, including
            weddings, birthdays, corporate events, and more. Our experienced
            team of professionals can help you plan and execute your event with
            the highest level of professionalism and attention to detail.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Events;
