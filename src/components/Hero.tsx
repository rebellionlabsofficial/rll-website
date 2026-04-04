"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20 bg-gradient-to-br from-[#1A1A1A] via-[#2A1215] to-[#1A1A1A]">
      {/* Decorative gradient blur orbs */}
      <div className="gradient-blur -top-32 -left-32 h-[500px] w-[500px] bg-[#8B1A1A] opacity-15" />
      <div className="gradient-blur -bottom-24 -right-24 h-[400px] w-[400px] bg-[#D4856A] opacity-10" />
      <div className="gradient-blur top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 bg-[#6B1414] opacity-10" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading text-5xl font-bold leading-tight text-white md:text-7xl"
        >
          Apps Built for the Players,{" "}
          <span className="text-[#E8A0A0]">by a Player</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl"
        >
          We build sports apps that match the passion of the people who play
          them. No more settling for tools that don&apos;t understand the game.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-10"
        >
          <Link
            href="/products"
            className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#8B1A1A] transition-all duration-300 hover:scale-105 hover:bg-white/90"
          >
            Explore Our Apps
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto h-10 w-6 rounded-full border-2 border-white/30"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto mt-2 h-2 w-1 rounded-full bg-white/40"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
