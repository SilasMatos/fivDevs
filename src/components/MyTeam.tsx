'use client'
import React, { useRef, useState, useEffect } from 'react'
import silas from '../assets/team/foto1.jpg'
import yan from '../assets/team/yan.png'
import rafa from '../assets/team/rafa.png'
import joao from '../assets/team/joao.png'
import gui from '../assets/team/gui.png'

const teamMembers = [
  {
    name: 'Silas Matos',
    role: 'Frontend Developer',
    image: silas,
    description: 'Especialista em React e UI/UX design.'
  },
  {
    name: 'Yan',
    role: 'Backend Developer',
    image: yan,
    description: 'Experiência em Node.js e banco de dados.'
  },
  {
    name: 'Rafael',
    role: 'Full Stack Developer',
    image: rafa,
    description: 'Desenvolvedor com conhecimentos em frontend e backend.'
  },
  {
    name: 'Guilherme',
    role: 'Backend Developer',
    image: gui,
    description: 'Responsável por CI/CD e automação de infraestrutura.'
  },
  {
    name: 'João Dias',
    role: 'Backend/RPA Developer',
    image: joao,
    description: 'Especialista em desenvolvimento de aplicativos móveis.'
  }
]

export default function MyTeam() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true)
    setStartX(
      (e as React.MouseEvent).pageX || (e as React.TouchEvent).touches[0].pageX
    )
    setScrollLeft(containerRef.current!.scrollLeft)
  }

  const stopDrag = () => {
    setIsDragging(false)
  }

  const onDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x =
      (e as React.MouseEvent).pageX || (e as React.TouchEvent).touches[0].pageX
    const walk = (x - startX) * 2
    containerRef.current!.scrollLeft = scrollLeft - walk
  }

  useEffect(() => {
    const container = containerRef.current

    const autoScroll = () => {
      if (container) {
        container.scrollLeft += 1
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0
        }
      }
    }

    const intervalId = setInterval(autoScroll, 20)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section
      className="min-h-screen bg-[#090E34] p-10 flex items-center flex-col justify-center relative overflow-hidden bg-image"
      id="equipe"
    >
      <div className="text-center mb-10 z-10 relative">
        <h1 className="text-white text-4xl">Conheça nossa equipe</h1>
        <p className="text-lg font-medium text-gray-300">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>
      <div
        className="container mx-auto flex gap-6 overflow-hidden z-10 relative"
        ref={containerRef}
        onMouseDown={startDrag}
        onMouseLeave={stopDrag}
        onMouseUp={stopDrag}
        onMouseMove={onDrag}
        onTouchStart={startDrag}
        onTouchEnd={stopDrag}
        onTouchMove={onDrag}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div className="flex">
          {[...teamMembers, ...teamMembers].map((member, index) => (
            <div
              key={index}
              className="min-w-[280px] bg-[#1D2144] rounded-lg shadow-lg p-4 m-4 transform transition-transform duration-200"
              style={{ transform: isDragging ? 'scale(0.95)' : 'scale(1)' }}
            >
              <img
                src={member.image.src}
                alt={member.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-white">{member.name}</h2>
                <p className="text-white">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
