"use client";
import React from "react";
import { WavyBackground } from "../components/ui/wavy-background";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
export default function HomeHero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <WavyBackground
      backgroundFill={isDark ? "black" : "white"}
      className="max-w-4xl mx-auto  px-4 lg:px-0 pt-30"
    >
      <p className="text-2xl md:text-4xl lg:text-7xl text-black dark:text-white font-bold inter-var text-center">
        Transform Your Ideas into Captivating Books
      </p>
      <p className="text-sm md:text-lg mt-4  text-black dark:text-white font-normal inter-var text-center">
        Unlock the power of our exceptional ghostwriting services, designed to
        turn your raw concepts into fully-fledged and captivating books ready
        for publication. We offer a seamless pathway for you to achieve your
        authorial aspirations without the need to devote precious time and
        effort to writing.
      </p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={1}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-16 pt-5"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
        >
          Get Started <ArrowRight size={20} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-full font-semibold hover:bg-white/70 dark:hover:bg-slate-900 transition-colors"
        >
          Learn More
        </motion.button>
      </motion.div>
    </WavyBackground>
  );
}
