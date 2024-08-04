'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

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

  return (
    <nav
      className={`w-full text-white py-4 fixed top-0 transition-colors duration-300 z-50 ${
        scrolled ? 'bg-[#16215B] blur-3xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-3xl font-bold">FivDevs</div>
        </div>
        <ul className="flex space-x-8 font-medium text-lg">
          <li>
            <Link href="/" legacyBehavior>
              <a className="hover:text-blue-300">Início</a>
            </Link>
          </li>
          <li>
            <Link href="#sobre" legacyBehavior>
              <a className="hover:text-blue-300">Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="#servicos" legacyBehavior>
              <a className="hover:text-blue-300">Serviços</a>
            </Link>
          </li>
          <li>
            <Link href="#equipe" legacyBehavior>
              <a className="hover:text-blue-300">Equipe</a>
            </Link>
          </li>
          <li>
            <Link href="#contato" legacyBehavior>
              <a className="hover:text-blue-300">Contato</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
