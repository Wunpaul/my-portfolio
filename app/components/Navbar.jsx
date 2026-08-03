'use client';

import { useState } from 'react';
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#0B1426]/85 backdrop-blur-md text-slate-200 z-50 shadow-md border-b border-slate-800/50">
      <div className="max-w-5xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
          Johnpaul.dev
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-300 text-sm">
          <Link href="#work" className="hover:text-white transition-colors">Work</Link>
          <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>

          {/* Fixed Resume Button - No more 404 errors */}
          <a 
            href="/myResume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#FF9900] text-slate-900 font-bold rounded-lg hover:bg-orange-500 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
           <button 
             onClick={() => setIsOpen(!isOpen)} 
             className="text-slate-300 hover:text-white focus:outline-none text-2xl"
           >
            {isOpen ? "✕" : "☰"}
           </button>
        </div>

      </div>
      
      {/* Mobile Dropdown (Now matches the deep blue cover) */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0B1426] border-b border-slate-800 p-6 flex flex-col space-y-4 text-center shadow-xl z-50">
          <Link 
            href="#work" 
            onClick={() => setIsOpen(false)}
            className="text-slate-300 hover:text-white py-2 font-medium"
          >
            Work
          </Link>
          <Link 
            href="#skills" 
            onClick={() => setIsOpen(false)}
            className="text-slate-300 hover:text-white py-2 font-medium"
          >
            Skills
          </Link>
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); setIsOpen(false); }}
            className="inline-block mx-auto mt-2 px-6 py-2.5 bg-[#FF9900] text-[#0B1426] rounded-full font-bold"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;