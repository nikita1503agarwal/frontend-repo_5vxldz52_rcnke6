import React, { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

function useScrollToHash() {
  useEffect(() => {
    const onLoad = () => {
      if (window.location.hash) {
        const el = document.querySelector(window.location.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])
}

export default function App() {
  useScrollToHash()

  return (
    <div className="min-h-screen bg-[#0b0f13] text-slate-100">
      <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[#0f1720] focus:px-3 focus:py-2 focus:text-white">Skip to content</a>
      <header role="banner" className="sticky top-0 z-40 border-b border-slate-800/80 bg-gradient-to-b from-[#0b0f13]/80 to-transparent backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-8">
          <a href="#home" className="font-semibold tracking-tight text-white">AR</a>
          <nav aria-label="Main navigation" className="flex items-center gap-4 text-sm text-slate-300">
            <a href="#about" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400">About</a>
            <a href="#projects" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400">Projects</a>
            <a href="#blog" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400">Blog</a>
            <a href="#contact" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400">Contact</a>
          </nav>
        </div>
      </header>

      <main id="content" role="main">
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>

      <Footer />

      {/* SEO & Analytics */}
      <Seo />
      <Analytics />
    </div>
  )
}

function Seo() {
  useEffect(() => {
    const title = 'Alex Rivera — Creative Developer'
    const description = 'Portfolio showcasing interactive 3D web experiences, WebGL experiments, and engineering notes.'
    document.title = title

    const metaTags = [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/og.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ]

    metaTags.forEach((attrs) => {
      const el = document.createElement('meta')
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
      document.head.appendChild(el)
    })

    // JSON-LD Schema
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Alex Rivera',
      url: window.location.origin,
      sameAs: [
        'https://github.com/',
        'https://linkedin.com/',
        'https://twitter.com/',
        'https://instagram.com/',
        'https://www.artstation.com/',
        'https://sketchfab.com/',
      ],
      jobTitle: 'Creative Developer',
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.innerHTML = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      // Cleanup tags on unmount
      metaTags.forEach((attrs) => {
        const selector = Object.entries(attrs)
          .map(([k, v]) => `[${k}="${v}"]`)
          .join('')
        const found = document.head.querySelector(`meta${selector}`)
        if (found) document.head.removeChild(found)
      })
      if (script) document.head.removeChild(script)
    }
  }, [])
  return null
}

function Analytics() {
  useEffect(() => {
    const id = import.meta.env.VITE_PLAUSIBLE_DOMAIN
    if (!id) return
    const s = document.createElement('script')
    s.defer = true
    s.setAttribute('data-domain', id)
    s.src = 'https://plausible.io/js/script.js'
    document.head.appendChild(s)
    return () => { if (s) document.head.removeChild(s) }
  }, [])
  return null
}
