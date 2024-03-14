import React from "react";
import { motion } from "framer-motion";
import { BeakerIcon } from "@heroicons/react/24/solid";

type Props = {};

function ContactMe({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-{#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>
        <div>
          <BeakerIcon className="flex items-center space-x-5" />
          <p>...</p>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactMe;
