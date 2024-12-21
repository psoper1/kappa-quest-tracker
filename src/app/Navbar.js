'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li className='nav-bar-items'>
          <Link href="/">Home</Link>
        </li>
        <li className='nav-bar-items'>
        <Link href="/lightkeeper">Lightkeeper Tracker</Link>
        </li>
      </ul>
    </nav>
  );
}