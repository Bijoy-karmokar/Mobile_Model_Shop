import React from "react";
import { SiLaunchpad } from "react-icons/si";


const About = () => {
  const data = [
    { 
      id:1,
      icon: <SiLaunchpad></SiLaunchpad>,
      title: "Launchpad",
      description:
        "Accelerate your projects with our innovative startup tools and resources.",
    },
    {
      id:2,
      icon: "🛡️",
      title: "Security Shield",
      description:
        "Protect your data with advanced encryption and real-time threat detection.",
    },
    {
      id:3,
      icon: "📊",
      title: "Analytics Hub",
      description:
        "Gain insights from your data with powerful visualization and reporting features.",
    },
    {
      id:4,
      icon: "🤖",
      title: "AI Assistant",
      description:
        "Let our intelligent bot handle routine tasks and boost your productivity.",
    },
    {
      id:5,
      icon: "🌐",
      title: "Global Connect",
      description:
        "Expand your reach worldwide with seamless international collaboration tools.",
    },
    {
      id:6,
      icon: "💡",
      title: "Idea Generator",
      description:
        "Spark creativity with brainstorming sessions and innovative idea prompts.",
    },
  ];
  return (
    <div className="py-30">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((about) => (
          <div className="border p-10 rounded-lg space-y-3" key={about.id}>
            <SiLaunchpad size={30}></SiLaunchpad>
            <h2 className="text-lg font-medium">{about.title}</h2>
            <p>{about.description}</p>
          </div>
        ))}
      </div>
        <button className="relative inline-block text-lg group mt-10">
    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span className="relative">Learn More</span>
    </span>
    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</button>
    </div>
  );
};

export default About;
