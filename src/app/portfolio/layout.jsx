import React from 'react'
import styles from './page.module.css'

const Layout = ({children}) => {
  return (
    <div>
      <h1 className={styles.mainTittle}>Our Works</h1>
      {children}
    </div>
  )
}

export default Layout
