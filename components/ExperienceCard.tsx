import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article>
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
          <img className="h-10 w-10 rounded-full"src="https://na.cx/i/V0G14T9.png" alt="" />
          <img className="h-10 w-10 rounded-full"src="https://na.cx/i/V0G14T9.png" alt="" />
          <img className="h-10 w-10 rounded-full"src="https://na.cx/i/V0G14T9.png" alt="" />
        </div>
        <p>start...end</p>
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
