import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import avatar from '..//../assets/avatar.jpg'
import { notFound } from 'next/navigation'


async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/post/${id}`,  { cache: 'no-store' })
 
  if (!res.ok) {
    return notFound()
  }
 
  return res.json();
}



export async function generateMetadata({ params }) {

  const post = await getData(params.id)
  return{
    title: post.title,
    description: post.desc,
  }
}


const BlogPost = async ({params}) => {

  const data = await getData(params.id)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.tittle}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              className={styles.avatar}
              src={data.img}
              alt=''
              width={40}
              height={40}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div  className={styles.imgContainer}>
          <Image
           className={styles.image}
           src={data.img}
           alt=''
           width={500}
           height={300}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          {data.content}
        </p>
      </div>
    </div>
  )
}

export default BlogPost
