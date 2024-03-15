import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {};

export default function Header({}: Props) {
  const { push } = useRouter();
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://facebook.com"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://freepik.com"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://youtube.com"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://freepik.com"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com"
          fgColor="grey"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        className="cursor-pointer"
        onClick={() => {
          push("#contact");
        }}
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <SocialIcon
          className="flex flex-row items-center text-gray-300 cursor-pointer"
          network="email"
          fgColor="grey"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}
