"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Crown, Rocket } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Starter Package",
    price: "$199",
    description: "Perfect for authors who have their manuscript ready.",
    icon: <Zap className="w-6 h-6 text-indigo-500" />,
    features: ["Cover Design", "Formatting", "Basic Proofreading"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Business Package",
    price: "$699",
    description: "Our most popular choice for professional entrepreneurs.",
    icon: <Rocket className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />,
    features: [
      "10k words writing",
      "Cover design",
      "Formatting",
      "SEO description",
    ],
    cta: "Best Value",
    popular: true,
  },
  {
    name: "Premium Authority",
    price: "$1,499+",
    description: "End-to-end solution for high-impact authority books.",
    icon: <Crown className="w-6 h-6 text-amber-500" />,
    features: [
      "20k words writing",
      "Premium cover",
      "Full editing",
      "Marketing strategy",
      "Amazon publishing support",
    ],
    cta: "Go Premium",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
      {/* Background Decor - Only visible in dark mode for that 'glow' effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/5 dark:bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4"
          >
            Transparent <span className="text-indigo-600">Pricing</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Choose the perfect plan to bring your literary vision to life. No
            hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] border transition-all duration-300 ${
                plan.popular
                  ? "bg-white dark:bg-slate-900 border-indigo-500 shadow-2xl shadow-indigo-200 dark:shadow-indigo-500/20 scale-105 z-20 py-12"
                  : "bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-black px-5 py-1.5 rounded-full tracking-[0.2em] uppercase">
                  Most Popular
                </div>
              )}

              <div className="mb-8 text-center md:text-left">
                <div className="mb-4 inline-flex p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center md:justify-start gap-1 mb-4">
                  <span className="text-4xl font-black text-indigo-600 dark:text-white">
                    {plan.price}
                  </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 active:scale-95 ${
                  plan.popular
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-600/30"
                    : "bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white hover:border-indigo-500"
                }`}
              >
                <Link href={"/#contact-us"}>{plan.cta}</Link>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
