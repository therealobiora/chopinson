"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const meals = Array.from({ length: 20 }, (_, i) => `/images/meal${i + 1}.jpeg`);

const Meals = () => {
  const mealsRef = useRef(null);
  const isInView = useInView(mealsRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={mealsRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-8 sm:py-10 md:py-12 bg-gray-50"
    >
      <div className="container mx-auto max-w-[95%] px-1 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black text-center mb-2">
          Our Delicious Meals
        </h2>
        <p className="text-sm sm:font-normal font-medium sm:text-[15px] md:text-lg mb-7 text-center">
          Our meal catalog includes a wide range of delicious options. Savour
          it!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {meals.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={src}
                alt={`Meal ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Meals;
