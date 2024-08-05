'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { IoIosMenu, IoMdClose } from 'react-icons/io'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSmoothScroll = (e: any, targetId: any) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Ajuste de offset se necessário para compensar a altura da navbar
        behavior: 'smooth'
      })
      setMenuOpen(false) // Fecha o menu após clicar em um link
    }
  }

  return (
    <nav
      className={`w-full text-white py-4 fixed top-0 transition-all duration-300 z-50 ${
        scrolled ? 'bg-[#16215B] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <div className="text-3xl font-bold">FivDevs</div>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoMdClose size={30} /> : <IoIosMenu size={30} />}
          </button>
        </div>
        <ul
          className={`flex space-x-8 font-medium text-lg md:flex ${
            menuOpen ? 'block' : 'hidden'
          } md:items-center md:space-x-8`}
        >
          <li>
            <a
              href="#home"
              onClick={e => handleSmoothScroll(e, 'home')}
              className="hover:text-blue-300 cursor-pointer"
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#sobre"
              onClick={e => handleSmoothScroll(e, 'sobre')}
              className="hover:text-blue-300 cursor-pointer"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#servicos"
              onClick={e => handleSmoothScroll(e, 'servicos')}
              className="hover:text-blue-300 cursor-pointer"
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              href="#equipe"
              onClick={e => handleSmoothScroll(e, 'equipe')}
              className="hover:text-blue-300 cursor-pointer"
            >
              Equipe
            </a>
          </li>
          <li>
            <a
              href="#contato"
              onClick={e => handleSmoothScroll(e, 'contato')}
              className="hover:text-blue-300 cursor-pointer"
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
