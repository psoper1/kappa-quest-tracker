'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li className='nav-bar-items'>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}