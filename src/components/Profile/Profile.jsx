import React from 'react'

import styles from './Profile.module.css';
import { getImageUrl } from '../../utils'


export const Profile = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}> 
            <h1 className={styles.title}>Hello, this is Gianne</h1>
            <p className={styles.description}>I'm a full-stack developer with 1 year of experience using Javascript, PHP, Codeigniter, MYSQL.
                Feel free to contact me for any inquiries. </p>
            <a href="mailto:giannejuson16@gmail.com" className={styles.contactBtn}>Message Me!</a>
        </div>
        <img src={getImageUrl("profile/profileImage.png")} alt="Gianne profile image" />
            <div className={styleSheet.topBlur}></div>
            <div className={styleSheet.bottomBlur}></div>

   
    </section>
  )
}
