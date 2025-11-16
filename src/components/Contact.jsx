import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      setStatus('loading')
      // Demo: send email via mailto fallback
      window.location.href = `mailto:${payload.email}?subject=Portfolio%20Contact&body=${encodeURIComponent(payload.message)}`
      setStatus('sent')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" aria-label="Contact" className="bg-[#0b0f13] py-20">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Get in touch</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4" aria-describedby="contact-helper">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block" htmlFor="name">
              <span className="mb-1 block text-sm text-slate-300">Name</span>
              <input id="name" name="name" className="w-full rounded-md border border-slate-700 bg-[#0f1720] px-3 py-2 text-slate-100 outline-none focus:ring-2 focus:ring-teal-400" required />
            </label>
            <label className="block" htmlFor="email">
              <span className="mb-1 block text-sm text-slate-300">Email</span>
              <input id="email" name="email" type="email" className="w-full rounded-md border border-slate-700 bg-[#0f1720] px-3 py-2 text-slate-100 outline-none focus:ring-2 focus:ring-amber-400" required />
            </label>
          </div>
          <label className="block" htmlFor="message">
            <span className="mb-1 block text-sm text-slate-300">Message</span>
            <textarea id="message" name="message" rows="5" className="w-full rounded-md border border-slate-700 bg-[#0f1720] px-3 py-2 text-slate-100 outline-none focus:ring-2 focus:ring-teal-400" required />
          </label>
          <p id="contact-helper" className="text-sm text-slate-400">Your info is only used to respond to your message.</p>
          <button type="submit" disabled={status==='loading'} className="rounded-md bg-teal-500 px-5 py-2.5 font-semibold text-[#0b0f13] transition hover:bg-teal-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400">
            {status==='loading' ? 'Sending…' : 'Send message'}
          </button>
        </form>

        <div className="mt-10 flex flex-wrap items-center gap-3 text-slate-300" aria-label="Social links">
          <a className="rounded-md border border-slate-700 bg-[#0f1720] px-3 py-1.5 hover:border-teal-500/40" href="https://github.com/" target="_blank" rel="noreferrer noopener" aria-label="GitHub">GitHub</a>
          <a className="rounded-md border border-slate-700 bg-[#0f1720] px-3 py-1.5 hover:border-teal-500/40" href="https://linkedin.com/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">LinkedIn</a>
          <a className="rounded-md border border-slate-700 bg-[#0f1720] px-3 py-1.5 hover:border-teal-500/40" href="https://twitter.com/" target="_blank" rel="noreferrer noopener" aria-label="Twitter">Twitter/X</a>
          <a className="rounded-md border border-slate-700 bg-[#0f1720] px-3 py-1.5 hover:border-teal-500/40" href="https://instagram.com/" target="_blank" rel="noreferrer noopener" aria-label="Instagram">Instagram</a>
          <a className="rounded-md border border-slate-700 bg-[#0f1720] px-3 py-1.5 hover:border-teal-500/40" href="https://artstation.com/" target="_blank" rel="noreferrer noopener" aria-label="ArtStation">ArtStation</a>
          <a className="rounded-md border border-slate-700 bg-[#0f1720] px-3 py-1.5 hover:border-teal-500/40" href="https://sketchfab.com/" target="_blank" rel="noreferrer noopener" aria-label="Sketchfab">Sketchfab</a>
        </div>
      </div>
    </section>
  )
}
