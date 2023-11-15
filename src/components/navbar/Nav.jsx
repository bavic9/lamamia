'use client'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'


const links = [
    {
        id: 1,
        tittle: 'Home',
        url: '/',
    },
    {
        id: 2,
        tittle: 'Portfolio',
        url: '/portfolio',
    },
    {
        id: 3,
        tittle: 'Blog',
        url: '/blog',
    },
    {
        id: 4,
        tittle: 'About',
        url: '/about',
    },
    {
        id: 5,
        tittle: 'Contact',
        url: '/contact',
    },
    {
        id: 6,
        tittle: 'Dashboard',
        url: '/dashboard',
    },
]


const Nav = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href='/'>lamamia</Link>
      <div className={styles.links}>
        <DarkModeToggle/>
        {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>
                {link.tittle}
            </Link>
        ))}
        <button className={styles.logout} onClick={() => {console.log('logged out')}}>Logout</button>
      </div>
    </div>
  )
}

export default Nav