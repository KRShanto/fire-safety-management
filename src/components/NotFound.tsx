"use client";

import Link from "next/link";
import { IoHammerOutline } from "react-icons/io5";
import { CiHome } from "react-icons/ci";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="fixed inset-0 z-40 flex h-screen w-screen flex-col items-center justify-center bg-red-100 px-4">
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
          Page Not Found
        </motion.h1>
        <p className="mb-4 text-gray-700">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
        >
          <CiHome className="mr-2 h-5 w-5" />
          Go to Home
        </Link>
      </motion.div>
    </div>
  );
}
