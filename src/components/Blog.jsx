import React from 'react'

const posts = [
  { title: 'Building playful 3D UIs with R3F', date: '2025-03-10', href: '#' },
  { title: 'Lighting for real-time web scenes', date: '2025-02-01', href: '#' },
  { title: 'Optimizing GLTF for the web', date: '2025-01-18', href: '#' },
]

export default function Blog() {
  return (
    <section id="blog" aria-label="Blog" className="bg-[#0b0f13] py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Notes & Writing</h2>
        <ul className="mt-6 space-y-4">
          {posts.map((p) => (
            <li key={p.title} className="rounded-xl border border-slate-700 bg-[#0f1720] p-4">
              <a href={p.href} className="block">
                <div className="text-sm text-slate-400">{new Date(p.date).toLocaleDateString()}</div>
                <div className="text-lg font-semibold text-slate-100">{p.title}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
