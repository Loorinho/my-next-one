import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header className='flex justify-between items-center px-4 py-3 border-b border-gray-1'>
        <p><Link href={'/'}>My<span className='text-blue-500'>Next</span>One</Link></p>

        <nav>
            <ul className='flex gap-2'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/about'}>About</Link></li>
                <li><Link href={'/contact-us'}>Contact Us</Link></li>
                <li><Link href={'/services'}>Services</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar