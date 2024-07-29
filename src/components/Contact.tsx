import React from 'react'
import type { StaticImageData } from 'next/image'
import bg from '../assets/shapes/shapebg.png'
import team from '../assets/img/team.jpg'

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#090E34] p-10 flex items-center flex-col justify-center relative">
      <div className="container mx-auto flex  gap-6  ">
        <div className="bg-[#1D2144] p-6 w-full">
          <h1 className="text-white font-bold text-2xl">
            Need Help? Open a Ticket
          </h1>
          <p className="font-medium text-gray-400 mb-4">
            Our support team will get back to you ASAP via email.
          </p>
          <div className="flex justify-between gap-2  ">
            <div className="w-1/2">
              <label htmlFor="" className="text-gray-200 text-sm">
                Your Name
              </label>
              <input
                className="bg-[#242B51] rounded-md shadow-xl outline-none p-2 w-full text-gray-50"
                type="text"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="" className="text-gray-200 text-sm">
                Your Name
              </label>
              <input
                className="bg-[#242B51] rounded-md shadow-xl outline-none p-2 w-full text-gray-50"
                type="text"
              />
            </div>
          </div>
          <div className="w-full mt-4">
            <label htmlFor="" className="text-gray-200 text-sm">
              Your Name
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
        <div className="bg-[#0F1747]  p-4 ">
          <h1 className="text-xl text-white ">
            Subscribe to receive future updates
          </h1>
        </div>
      </div>
    </section>
  )
}
