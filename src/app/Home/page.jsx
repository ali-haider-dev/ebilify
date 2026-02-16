import React, { lazy, Suspense } from "react";

const HomeHero = lazy(() => import("../../sections/HomeHero"));
const Brandcarousal = lazy(() => import("./components/BrandCarousal"));
const IntroOne = lazy(() => import("./components/IntroOne"));
const IntroTwo = lazy(() => import("./components/IntroTwo"));
const OurProcess = lazy(() => import("@/src/sections/OurProcess"));
import { Search, PenTool, CheckCircle, Layout, Send } from "lucide-react"; // Lucide icons for a modern look

const processes = [
  {
    title: "Research and Expert Outlining",
    description:
      "With Ghost Writing Galaxy, you can trust that we will dedicate ourselves to conducting extensive research and crafting a carefully outlined draft.",
    icon: <Search className="w-8 h-8" />,
  },
  {
    title: "Authentic Content Writing",
    description:
      "Ghost Writing Galaxy takes immense pride in offering authentic content writing services with our team of experienced ghostwriters.",
    icon: <PenTool className="w-8 h-8" />,
  },
  {
    title: "Evaluative Review & Editing",
    description:
      "We understand the power of captivating content. That's why we pay meticulous attention to the smallest details during proofreading.",
    icon: <CheckCircle className="w-8 h-8" />,
  },
  {
    title: "Impeccable Presentation",
    description:
      "Typesetting is an art, and our experienced typesetters possess the expertise to create a seamless and professional reading experience.",
    icon: <Layout className="w-8 h-8" />,
  },
  {
    title: "Complete Publishing Solutions",
    description:
      "We provide a holistic approach to publishing, branding, and promotions, guiding you through the entire journey to success.",
    icon: <Send className="w-8 h-8" />,
  },
];
const LoadingFallback = () => (
  <div className="h-20 w-full flex items-center justify-center bg-white dark:bg-slate-950">
    <div className="animate-pulse text-indigo-600 font-medium">Loading...</div>
  </div>
);

const HomeScreen = () => {
  return (
    <>
      {/* Suspense wrapper is required for lazy components */}
      <Suspense fallback={<LoadingFallback />}>
        <HomeHero />
        <Brandcarousal />
        <IntroOne />
        <IntroTwo />
        <OurProcess processes={processes} />
      </Suspense>
    </>
  );
};

export default HomeScreen;
