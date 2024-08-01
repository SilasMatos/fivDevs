import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#0C133E] py-8">
      <div className="container mx-auto text-white">
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-bold">Startup</h2>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              lobortis.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="flex space-x-8">
            <div>
              <h3 className="text-sm font-semibold mb-4">Links Úteis</h3>
              <ul>
                <li className="mb-2">
                  <a href="#">Blog</a>
                </li>
                <li className="mb-2">
                  <a href="#">Preços</a>
                </li>
                <li className="mb-2">
                  <a href="#">Sobre</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Termos</h3>
              <ul>
                <li className="mb-2">
                  <a href="#">TOS</a>
                </li>
                <li className="mb-2">
                  <a href="#">Política de Privacidade</a>
                </li>
                <li className="mb-2">
                  <a href="#">Política de Reembolso</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-4">Suporte & Ajuda</h3>
              <ul>
                <li className="mb-2">
                  <a href="#">Abrir Ticket de Suporte</a>
                </li>
                <li className="mb-2">
                  <a href="#">Termos de Uso</a>
                </li>
                <li className="mb-2">
                  <a href="#">Sobre</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">&copy; Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}
