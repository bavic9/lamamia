import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'


async function getData() {
  const res = await fetch("http://localhost:3000/api/post", { cache: 'no-store' })
 
 // if (!res.ok) {
  //   throw new Error('Failed to fetch data');
  // } 

  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}

const Blog = async () => {

  const data = await getData()

  return (
    <div className={styles.mainContainer}>
      {data.map(item=>(
        <Link href='/blog/testId' className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg' 
              width={400}
              height={250}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.tittle}>{item.title}</h1>
            <p className={styles.desc}>Desc</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog
 