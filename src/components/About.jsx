import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function About() {
  const prefersReducedMotion = useReducedMotion()
  return (
    <section id="about" aria-label="About" className="relative w-full bg-[#0b0f13] py-20 text-slate-200">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 sm:px-8 md:grid-cols-2">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: -16 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="aspect-square overflow-hidden rounded-xl border border-slate-700 bg-[#0f1720]"
          aria-hidden
        >
          {/* Placeholder avatar block. Replace with photo or 3D avatar later. */}
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(400px_200px_at_50%_50%,rgba(245,158,11,0.15),transparent)]">
            <div className="h-40 w-40 rounded-full bg-gradient-to-tr from-teal-400 to-amber-300 opacity-70" />
          </div>
        </motion.div>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, x: 16 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl">About Me</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            I craft immersive, performant web experiences. My work blends strong UI engineering
            with WebGL and creative coding. I love building tools and interfaces that feel alive.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-300">
            <li className="rounded-md border border-slate-700 bg-[#0f1720] px-3 py-2">React / Next.js</li>
            <li className="rounded-md border border-slate-700 bg-[#0f1720] px-3 py-2">Three.js / R3F</li>
            <li className="rounded-md border border-slate-700 bg-[#0f1720] px-3 py-2">TypeScript</li>
            <li className="rounded-md border border-slate-700 bg-[#0f1720] px-3 py-2">Framer Motion</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
