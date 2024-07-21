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
      className={`w-full text-white py-4 fixed top-0 transition-colors duration-300 ${
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
            <Link href="#about" legacyBehavior>
              <a className="hover:text-blue-300">Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="#services" legacyBehavior>
              <a className="hover:text-blue-300">Serviços</a>
            </Link>
          </li>
          <li>
            <Link href="#pricing" legacyBehavior>
              <a className="hover:text-blue-300">Preços</a>
            </Link>
          </li>
          <li>
            <Link href="#support" legacyBehavior>
              <a className="hover:text-blue-300">Suporte</a>
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          {/* <Link href="#signin" legacyBehavior>
            <a className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded">
              Entrar
            </a>
          </Link>
          <Link href="#signup" legacyBehavior>
            <a className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Cadastrar
            </a>
          </Link> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
