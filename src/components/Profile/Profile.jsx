import React from "react";

import styles from "./Profile.module.css";
import { getImageUrl } from "../../utils";

export const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, this is Gianne</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 1 year of experience in Javascript, PHP, Codeigniter, MYSQL, feel free to contact me for more information!
        </p>
        <button className={styles.contactBtn}>
        <span><a href="mailto:giannejuson16@gmail.com" className={styles.anchorCbtn}>Send a Message</a></span>
        </button>
        
      </div>
      <img src={getImageUrl("profile/profileImage.png")} alt="Gianne profile image" className={styles.heroImg}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};