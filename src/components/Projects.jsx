import React, { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function LowPolyPlaceholder({ color = '#14b8a6' }) {
  return (
    <mesh>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={color} flatShading />
    </mesh>
  )
}

function Model({ url }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} />
}

function Preview({ url }) {
  const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 1.5) : 1
  return (
    <Canvas dpr={dpr} camera={{ position: [2, 1.5, 2.5], fov: 50 }} className="h-40 w-full">
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 3, 2]} intensity={0.8} />
      <Suspense fallback={<LowPolyPlaceholder />}>
        <Model url={url} />
      </Suspense>
      <OrbitControls enablePan={false} autoRotate autoRotateSpeed={0.8} enableDamping makeDefault />
    </Canvas>
  )
}

const projectsData = [
  {
    title: 'Sculpt Studio',
    description: 'A WebGL sculpting tool with GPU-accelerated brushes.',
    tech: ['React', 'Three.js', 'WebGPU'],
    model: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/ghost/model.gltf',
    link: '#'
  },
  {
    title: 'Visualizer',
    description: 'Audio-reactive 3D scenes with shader-driven particles.',
    tech: ['R3F', 'Zustand', 'GLSL'],
    model: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/facecap/model.gltf',
    link: '#'
  },
  {
    title: 'Configurator',
    description: 'Product configurator with AR preview and real-time shadows.',
    tech: ['Next.js', 'Three.js', 'Drei'],
    model: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/car/model.gltf',
    link: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="bg-[#0b0f13] py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Selected Projects</h2>
        <p className="mt-2 text-slate-300">A snapshot of things Ive enjoyed building recently.</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((p, i) => (
            <article key={i} className="group relative overflow-hidden rounded-xl border border-slate-700 bg-[#0f1720] focus-within:ring-2 focus-within:ring-teal-400">
              <div className="relative">
                <Preview url={p.model} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[#0f1720] opacity-70" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md border border-teal-500/30 bg-[#0b0f13] px-2 py-1 text-xs text-teal-300">{t}</span>
                  ))}
                </div>
                <a href={p.link} className="mt-4 inline-flex items-center text-amber-300 hover:text-amber-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400" aria-label={`Open case study for ${p.title}`}>
                  Read case study →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/ghost/model.gltf')
useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/facecap/model.gltf')
useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/car/model.gltf')
