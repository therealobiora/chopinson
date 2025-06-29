"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Restaurant = () => {
  const restaurantRef = useRef(null);
  const isInView = useInView(restaurantRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={restaurantRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      id="restaurant"
      className="py-8 sm:py-10 md:py-12 bg-white"
    >
      <div className="container mx-auto max-w-[95%] h-[43vh] md:h-[50vh] bg-[#f5f5f5] rounded-md justify-center px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/images/restaurant.jpeg"
            alt="Restaurant Interior"
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
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4 sm:mb-6">
            Our Restaurant
          </h2>
          <p className="text-sm sm:text-base font-medium md:text-lg text-gray-600">
            Savor a variety of culinary delights in our stylish restaurant,
            perfect for casual dining or special occasions.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Restaurant;
