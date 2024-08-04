'use client'
import React, { useRef, useState, useEffect } from 'react'
import team1 from '../assets/team/silas.jpg'

const teamMembers = [
  {
    name: 'João Silva',
    role: 'Frontend Developer',
    image: team1,
    description: 'Especialista em React e UI/UX design.'
  },
  {
    name: 'Maria Souza',
    role: 'Backend Developer',
    image: team1,
    description: 'Experiência em Node.js e banco de dados.'
  },
  {
    name: 'Pedro Santos',
    role: 'Full Stack Developer',
    image: team1,
    description: 'Desenvolvedor com conhecimentos em frontend e backend.'
  },
  {
    name: 'Ana Lima',
    role: 'DevOps Engineer',
    image: team1,
    description: 'Responsável por CI/CD e automação de infraestrutura.'
  },
  {
    name: 'Lucas Pereira',
    role: 'Mobile Developer',
    image: team1,
    description: 'Especialista em desenvolvimento de aplicativos móveis.'
  }
]

export default function MyTeam() {
  const containerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const startDrag = e => {
    setIsDragging(true)
    setStartX(e.pageX || e.touches[0].pageX)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const stopDrag = () => {
    setIsDragging(false)
  }

  const onDrag = e => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX || e.touches[0].pageX
    const walk = (x - startX) * 2 // Ajustar a velocidade de deslocamento
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  useEffect(() => {
    const autoScroll = () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += 1
      }
    }

    const intervalId = setInterval(autoScroll, 20) // Ajuste a velocidade conforme necessário

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="min-h-screen bg-[#090E34] p-10 flex items-center flex-col justify-center relative">
      <div
        className="container mx-auto flex gap-6 overflow-hidden"
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
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-[#1D2144] rounded-lg shadow-lg p-6 m-4 transform transition-transform duration-200"
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
              <p className="text-gray-100 mt-2">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
