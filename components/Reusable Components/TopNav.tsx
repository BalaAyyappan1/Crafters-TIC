"use client";
import React, { useState } from 'react'
import Link from 'next/link';

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className='flex flex-row justify-between items-center'>
        <div className='logo'>gif</div>
        <button onClick={toggleMenu} className='md:hidden'>
          {isOpen ? '✖' : '☰'}
        </button>
        <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className='flex space-x-4'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
            <li><Link href="/service">Service</Link></li>
            <li><Link href="/capabilities">Capabilities</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Get in Touch</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default TopNav
