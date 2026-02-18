"use client";

import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-4"
          >
            Get In Touch
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400">
            Have a story idea? Let&apos;s turn it into a masterpiece.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:border-indigo-600 dark:focus:border-indigo-400 outline-none transition-all dark:text-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:border-indigo-600 dark:focus:border-indigo-400 outline-none transition-all dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                Contact Number
              </label>
              <input
                type="tel"
                className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:border-indigo-600 dark:focus:border-indigo-400 outline-none transition-all dark:text-white"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:border-indigo-600 dark:focus:border-indigo-400 outline-none transition-all dark:text-white"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
              Subject
            </label>
            <input
              type="text"
              className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:border-indigo-600 dark:focus:border-indigo-400 outline-none transition-all dark:text-white"
            />
          </div>

          {/* Row 4: Message */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="w-full px-5 py-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:border-indigo-600 dark:focus:border-indigo-400 outline-none transition-all dark:text-white resize-none"
            />
          </div>

          <div className="pt-4 md:flex md:justify-center">
            <motion.button
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              className="group relative w-full md:w-max px-28 py-4 overflow-hidden rounded-full border-2 border-indigo-600 dark:border-indigo-400 font-bold transition-all duration-300 bg-white dark:bg-indigo-600"
            >
              <motion.span
                variants={{
                  initial: { y: "105%" },
                  hover: { y: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 z-0 bg-indigo-600 dark:bg-white"
              />
              <span
                className="relative z-10 transition-colors duration-300 
                text-indigo-600 dark:text-white 
                group-hover:text-white dark:group-hover:text-indigo-600"
              >
                Send Message
              </span>
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
