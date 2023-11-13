import Image from 'next/image'
import styles from './page.module.css'
import hero from '../assets/hero.png'
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.tittle}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url='/portfolio' text='See Our works'/>
      </div>
      <Image src={hero} alt='' className={styles.img}/>
    </div>
  )
}
