import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rouunded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] objext-cover object-center"
        src="https://na.cx/i/HAUZRsE.jpg"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Doctor</h4>
        <p className="font-bold text-2xl mt-1">You better see doctor</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://na.cx/i/V0G14T9.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://na.cx/i/V0G14T9.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://na.cx/i/V0G14T9.png"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">start...end</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
        </ul>
      </div>
    </article>
  );
}
