'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { LuMenuSquare } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import Image from 'next/image';
import LOGO from "../../assets/Logo.png"
import modeStore from '@/stores/modeStore';
import LOGOLIGHT from "../../assets/Footer_logo.png"
import DarkModeToggle from '../Common/DarkModeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { mode } = modeStore((state) => ({ mode: state.mode }));

  return (
    <nav className={`shadow-md ${mode === 'dark' ? 'bg-black' : 'bg-white'}`}>
    <div className="container mx-auto px-4 py-2 flex justify-between items-center">
      <div className="flex items-center">
        {
          mode === 'dark' ?
            <Image src={LOGOLIGHT} alt='logo' height={20} /> :
            <Image src={LOGO} alt='logo' height={20} />
        }
      </div>
      <div className="hidden md:flex space-x-6">
        <Link href="/" className={`${mode === 'dark' ? "text-gray-300 hover:text-gray-100" : "text-gray-700 hover:text-gray-900"}`}>
          Home
        </Link>
        <Link href="/service" className={`${mode === 'dark' ? "text-gray-300 hover:text-gray-100" : "text-gray-700 hover:text-gray-900"}`}>
          Service
        </Link>
        <Link href="/feature" className={`${mode === 'dark' ? "text-gray-300 hover:text-gray-100" : "text-gray-700 hover:text-gray-900"}`}>
          Feature
        </Link>
        <Link href="/product" className={`${mode === 'dark' ? "text-gray-300 hover:text-gray-100" : "text-gray-700 hover:text-gray-900"}`}>
          Product
        </Link>
        <Link href="/testimonial" className={`${mode === 'dark' ? "text-gray-300 hover:text-gray-100" : "text-gray-700 hover:text-gray-900"}`}>
          Testimonial
        </Link>
        <Link href="/faq" className={`${mode === 'dark' ? "text-gray-300 hover:text-gray-100" : "text-gray-700 hover:text-gray-900"}`}>
          FAQ
        </Link>
      </div>
      <div className="hidden md:flex space-x-4">
        <Link href="/login">
          <Button variant={'link'}>Login</Button>
        </Link>
        <Link href="/signup">
          <Button>Sign up</Button>
        </Link>
        <div>
          <DarkModeToggle />
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <button
          className="text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <RxCross2 className="h-6 w-6" />
          ) : (
            <LuMenuSquare className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
    {isMenuOpen && (
      <div className={`md:hidden bg-white shadow-lg ${mode === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <ul className={`space-y-4 px-4 py-2 ${mode === 'dark' ? 'bg-black' : 'bg-white'}`}>
          <li>
            <Link href="/" className={`${mode === 'dark' ? "text-gray-300 hover:text-gray-100" : "text-gray-700 hover:text-gray-900"}`} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/service" className={`${mode === 'dark' ? "text-gray-300 hover:text-gray-100" : "text-gray-700 hover:text-gray-900"}`} onClick={() => setIsMenuOpen(false)}>
              Service
            </Link>
          </li>
          <li>
            <Link href="/feature" className={`${mode === 'dark' ? "text-gray-300 hover:text-gray-100" : "text-gray-700 hover:text-gray-900"}`} onClick={() => setIsMenuOpen(false)}>
              Feature
            </Link>
          </li>
          <li>
            <Link href="/product" className={`${mode === 'dark' ? "text-gray-300 hover:text-gray-100" : "text-gray-700 hover:text-gray-900"}`} onClick={() => setIsMenuOpen(false)}>
              Product
            </Link>
          </li>
          <li>
            <Link href="/testimonial" className={`${mode === 'dark' ? "text-gray-300 hover:text-gray-100" : "text-gray-700 hover:text-gray-900"}`} onClick={() => setIsMenuOpen(false)}>
              Testimonial
            </Link>
          </li>
          <li>
            <Link href="/faq" className={`${mode === 'dark' ? "text-gray-300 hover:text-gray-100" : "text-gray-700 hover:text-gray-900"}`} onClick={() => setIsMenuOpen(false)}>
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/login" className={`${mode === 'dark' ? "text-gray-300 hover:text-gray-100" : "text-gray-700 hover:text-gray-900"}`} onClick={() => setIsMenuOpen(false)}>
              <Button variant={'link'}>Login</Button>
            </Link>
          </li>
          <li>
            <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
              <Button>Sign up</Button>
            </Link>
          </li>
          <li>
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    )}
  </nav>
  );
};

export default Navbar;