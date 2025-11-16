import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useReducedMotion } from 'framer-motion'

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="home" aria-label="Hero" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0f13] text-white">
      {/* 3D Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0f13] via-transparent to-[#0b0f13]/60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_70%_30%,rgba(20,184,166,0.15),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start px-6 py-28 sm:px-8 md:py-36">
        <motion.span
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-[#0f1720]/60 px-3 py-1 text-xs text-teal-300 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-teal-400" /> Available for freelance
        </motion.span>

        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl"
        >
          Alex Rivera
        </motion.h1>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-3 text-lg text-slate-300 sm:text-xl"
        >
          Creative Developer · WebGL/Three.js · Frontend Engineer
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="rounded-md bg-teal-500 px-5 py-2.5 text-sm font-semibold text-[#0b0f13] transition hover:bg-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400" aria-label="View projects">
            View Projects
          </a>
          <a href="#contact" className="rounded-md border border-amber-500/50 bg-[#0f1720] px-5 py-2.5 text-sm font-semibold text-amber-300 transition hover:bg-[#111827] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400" aria-label="Contact me">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}
