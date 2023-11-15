import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import avatar from '..//../assets/avatar.jpg'
import { notFound } from 'next/navigation'


async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,  { cache: 'no-store' })
 
  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dicta est ducimus voluptatum. Ipsa quae, 
            at corrupti optio tempore aperiam excepturi temporibus, laudantium obcaecati voluptate voluptatibus, nam delectus illum expedita?
          </p>
          <div className={styles.author}>
            <Image
              className={styles.avatar}
              src={avatar}
              alt=''
              width={40}
              height={40}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div  className={styles.imgContainer}>
          <Image
           className={styles.image}
           src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
           alt=''
           width={500}
           height={300}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eum fugit, dignissimos minima aut in quia incidunt, nihil vel non ad dolores libero. 
          Molestias quas, repellat veritatis nostrum rem sunt inventore consequatur? Dolore officiis blanditiis sint ducimus ut, temporibus possimus quaerat dolorem 
          minima sit facere in excepturi. Laborum, iure sequi.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, sit harum. At corrupti cum nobis saepe voluptatibus quaerat non nemo doloribus ipsa 
          omnis consequuntur iusto, soluta deserunt optio dicta placeat possimus fugiat sapiente unde pariatur maiores illo explicabo! Consequatur, fugiat.
          <br/>
          <br/>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, quam! Saepe ipsam impedit vel a nostrum. Inventore atque dicta deserunt, a ab natus 
          earum, unde alias maiores quam eaque officia pariatur cum ad sequi labore.
          <br/>
          <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consequuntur natus nostrum atque, fugiat modi accusantium maiores soluta asperiores 
          expedita, in corrupti voluptatem quis sapiente quaerat sunt dolorem! Harum nisi temporibus soluta alias sapiente est perferendis, reprehenderit veritatis 
          suscipit cum ex, qui ad vero voluptatibus voluptates dicta, dolores iusto quod debitis! Autem, aliquam odit! Dolore et perferendis repellendus sit dolorum.
        </p>
      </div>
    </div>
  )
}

export default BlogPost
