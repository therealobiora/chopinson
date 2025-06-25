"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const MeetingHalls = () => {
  const hallsRef = useRef(null);
  const isInView = useInView(hallsRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={hallsRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      id="halls"
      className="py-5 sm:py-10 md:py-12 bg-white"
    >
      <div className="container mx-auto max-w-[95%] h-[50vh] md:h-[60vh] bg-[#f5f5f5] rounded-md justify-center px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/images/meetinghall.jpeg"
            alt="Catering Services"
            width={580}
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
            Meeting Halls
          </h2>
          <p className="text-sm sm:text-base font-medium md:text-lg text-gray-600">
            Our meeting halls are equipped to ensure a comfortable and efficient
            experience for our clients. We offer a wide range of options to suit
            different needs and budgets.
          </p>
        </motion.div>
      </div>
    </motion.section>
    // <motion.section
    //   ref={hallsRef}
    //   initial={{ opacity: 0, y: 50 }}
    //   animate={isInView ? { opacity: 1, y: 0 } : {}}
    //   transition={{ duration: 0.6 }}
    //   id="halls"
    //   className="relative py-8 sm:py-10 md:py-12 bg-gray-800"
    //   style={{
    //     backgroundImage: "url(/images/meetinghall.jpeg)",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
    //   <div className="absolute inset-0 bg-black/50"></div>
    //   <div className="container mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8 relative z-10">
    //     <motion.h2
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={isInView ? { opacity: 1, y: 0 } : {}}
    //       transition={{ delay: 0.2, duration: 0.6 }}
    //       className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-4 sm:mb-6"
    //     >
    //       Meeting Halls
    //     </motion.h2>
    //     <motion.p
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={isInView ? { opacity: 1, y: 0 } : {}}
    //       transition={{ delay: 0.4, duration: 0.6 }}
    //       className="text-sm sm:text-base md:text-lg text-gray-200 text-center max-w-prose mx-auto"
    //     >
    //       Spacious halls for meetings, conferences, and gatherings.
    //     </motion.p>
    //   </div>
    // </motion.section>
  );
};

export default MeetingHalls;
