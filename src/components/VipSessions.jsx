"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const VipSessions = () => {
  const vipRef = useRef(null);
  const isInView = useInView(vipRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={vipRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      id="vip"
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
            src="/images/vip.jpeg"
            alt="VIP Setup"
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
            VIP Lounge
          </h2>
          <p className="text-sm sm:text-base font-medium md:text-lg text-gray-600">
            Experience luxury and exclusivity in our VIP Lounge, where comfort
            meets elegance. Enjoy personalized services, premium amenities, and
            a tranquil atmosphere designed for relaxation and sophistication.
            Whether you're here for business or leisure, our VIP Lounge offers
            the perfect setting to unwind and indulge in the finer things in
            life.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VipSessions;
