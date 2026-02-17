import React, { lazy, Suspense } from "react";

const HomeHero = lazy(() => import("../../sections/HomeHero"));
const Brandcarousal = lazy(() => import("./components/BrandCarousal"));
const IntroOne = lazy(() => import("./components/IntroOne"));
const IntroTwo = lazy(() => import("./components/IntroTwo"));
const OurProcess = lazy(() => import("@/src/sections/OurProcess"));
const RecentProjects = lazy(() => import("@/src/components/RecentProjects"));
const WritingServices = lazy(() => import("@/src/sections/WritingServices"));
const ContactForm = lazy(() => import("@/src/sections/ContactForm"));
import { Search, PenTool, CheckCircle, Layout, Send } from "lucide-react";

const processes = [
  {
    title: "Research and Expert Outlining",
    description:
      "With Ebilify, you can trust that we will dedicate ourselves to conducting extensive research and crafting a carefully outlined draft.",
    icon: <Search className="w-8 h-8" />,
  },
  {
    title: "Authentic Content Writing",
    description:
      "Ebilify takes immense pride in offering authentic content writing services with our team of experienced ghostwriters.",
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
  <div className="h-24 w-full flex items-center justify-center bg-slate-50 dark:bg-slate-950">
    <div className="flex items-center gap-3">
      <div className="flex gap-1">
        <span className="w-2 h-2 rounded-full bg-blue-400 dark:bg-blue-500 animate-bounce [animation-delay:0ms]" />
        <span className="w-2 h-2 rounded-full bg-purple-400 dark:bg-purple-500 animate-bounce [animation-delay:150ms]" />
        <span className="w-2 h-2 rounded-full bg-blue-400 dark:bg-blue-500 animate-bounce [animation-delay:300ms]" />
      </div>
      <span className="text-slate-400 dark:text-slate-500 text-sm font-medium tracking-wide">
        Loading...
      </span>
    </div>
  </div>
);

const HomeScreen = () => {
  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <HomeHero />
        <Brandcarousal />
        <IntroOne />
        <IntroTwo />
        <OurProcess processes={processes} />
        <RecentProjects />
        <WritingServices />
        <ContactForm />
      </Suspense>
    </>
  );
};

export default HomeScreen;
