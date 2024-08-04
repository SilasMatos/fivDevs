import React from 'react'

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#090E34] p-10 flex items-center flex-col justify-center relative">
      <div className="container mx-auto flex gap-6">
        <div className="bg-[#1D2144] p-6 w-full rounded-md">
          <h1 className="text-white font-bold text-2xl">
            Entre em Contato Conosco
          </h1>
          <p className="font-medium text-gray-400 mb-4">
            Nossa equipe responderá a você o mais rápido possível via e-mail.
          </p>
          <div className="flex justify-between gap-2">
            <div className="w-1/2">
              <label htmlFor="" className="text-gray-200 text-sm">
                Seu Nome
              </label>
              <input
                className="bg-[#242B51] rounded-md shadow-xl outline-none p-2 w-full text-gray-50"
                type="text"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="" className="text-gray-200 text-sm">
                Seu E-mail
              </label>
              <input
                className="bg-[#242B51] rounded-md shadow-xl outline-none p-2 w-full text-gray-50"
                type="email"
              />
            </div>
          </div>
          <div className="w-full mt-4">
            <label htmlFor="" className="text-gray-200 text-sm">
              Sua Mensagem
            </label>
            <textarea
              className="bg-[#242B51] rounded-md shadow-xl outline-none p-2 w-full text-gray-50"
              rows={8}
            />
          </div>
          <button className="rounded-md mt-4 py-2 px-6 bg-blue-600 shadow-xl font-semibold text-white">
            Enviar
          </button>
        </div>
      </div>
    </section>
  )
}
