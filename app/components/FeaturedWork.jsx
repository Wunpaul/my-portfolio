'use client'; 

import { useState } from 'react'; 
import Link from "next/link";
import Image from "next/image";

const FeaturedWork = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="work" className="py-20 px-6 max-w-5xl mx-auto scroll-mt-24">
      
      {/* 01 is now Blue to match the new unified numbering theme */}
      <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center">
        <span className="text-blue-600 mr-2">01.</span> Some Things I've Built
        <span className="ml-4 h-px bg-slate-300 flex-grow max-w-xs"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 items-center">
        
        {/* Left Side: The Image */}
        <div 
            className="md:col-span-7 relative h-80 rounded-xl overflow-hidden border border-slate-200 shadow-lg group cursor-pointer"
            onClick={() => setIsModalOpen(true)}
        >
          <Image
            src="/smart-chama-demo.png"
            alt="Smart Chama Dashboard"
            width={800}
            height={500}
            className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Overlay & Button */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition duration-300">
             <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-lg transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                View Fullscreen
             </button>
          </div>
        </div>

        {/* Right Side: The Content */}
        <div className="md:col-span-5 flex flex-col md:items-end md:text-right z-10">
          <p className="text-blue-600 font-medium text-sm mb-2">Featured Project</p>
          
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Smart-Chama</h3>

          <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 text-slate-700 text-sm leading-relaxed mb-4">
            A fintech platform designed to digitize local <strong>Table Banking</strong> and <strong>Merry-Go-Round</strong> groups.
            It automates contributions, calculates interest for loans, and integrates <strong>M-Pesa</strong> for real-time transactions.
          </div>

          <ul className="flex flex-wrap gap-3 text-xs font-medium text-slate-500 mb-6 md:justify-end">
            <li>Next.js</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>M-Pesa API</li>
          </ul>

          <div className="flex gap-4">
            <Link href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </Link>
            <Link href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </Link>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)} 
        >
            <div className="relative max-w-5xl w-full h-auto max-h-[90vh]">
                <Image
                    src="/smart-chama-demo.png"
                    alt="Smart Chama Fullscreen"
                    width={1200}
                    height={800}
                    className="object-contain w-full h-full rounded-md shadow-2xl"
                />
                <p className="text-white text-center mt-4 text-sm font-light">Click anywhere to close</p>
            </div>
        </div>
      )}

    </section>
  );
};

export default FeaturedWork;