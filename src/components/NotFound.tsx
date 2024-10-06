"use client";

import Link from "next/link";
import { IoHammerOutline } from "react-icons/io5";
import { CiHome } from "react-icons/ci";

import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="-mt-24 flex min-h-screen flex-col items-center justify-center bg-red-100 px-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
        >
          <IoHammerOutline className="mx-auto mb-4 h-12 w-12 text-red-500" />
        </motion.div>
        <motion.h1
          className="mb-2 text-4xl font-bold text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Under Construction
        </motion.h1>
        <motion.p
          className="mb-8 text-xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          We're working hard to bring you something amazing. Please check back
          later!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white transition-colors duration-300 hover:bg-red-700"
          >
            <CiHome className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
