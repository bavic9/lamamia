import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'

const category = ({params}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTittle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.tittle}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text='See More' url='#'/>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
            fill={true}
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default category
category