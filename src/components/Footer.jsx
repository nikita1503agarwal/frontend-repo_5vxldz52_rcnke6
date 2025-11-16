import React from 'react'

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-[#0b0f13] py-10 text-slate-400">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8">
        <p>© {new Date().getFullYear()} Alex Rivera. All rights reserved.</p>
        <nav aria-label="Footer navigation" className="flex items-center gap-4">
          <a href="#home" className="hover:text-slate-200">Home</a>
          <a href="#projects" className="hover:text-slate-200">Projects</a>
          <a href="#blog" className="hover:text-slate-200">Blog</a>
          <a href="#contact" className="hover:text-slate-200">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
