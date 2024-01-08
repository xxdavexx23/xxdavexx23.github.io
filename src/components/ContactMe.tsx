import React from 'react';
import styles from './ContactMe.module.css';

export const ContactMe = () => {
  return (
    <div className={styles.contactSection}>
      <div className={styles.leftColumn}>
        <h1 className={styles.header}>Let&apos;s Talk</h1>
        <p className={styles.paragraph}>
          I enjoy discussing new projects and design challenges. Please share as much info, as
          possible so we can get the most out of our first catch-up.
        </p>
        <div className={styles.contactInfo}>
          <h2>Email:</h2>
          <p>david.coh19@gmail.com</p>
          <div className={styles.socialIcons}>
            <span className={`${styles.socialIcon} ${styles.gitHubIcon}`}></span>
            <span className={`${styles.socialIcon} ${styles.linkedInIcon}`}></span>
            <span className={`${styles.socialIcon} ${styles.twitterIcon}`}></span>
          </div>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <h2 className={styles.header}>Estimate your Project?</h2>
        <form className={styles.contactForm}>
          <input type="text" placeholder="What is Your Name:" className={styles.inputField} />
          <input type="email" placeholder="Your Email Address:" className={styles.inputField} />
          <textarea placeholder="How can I Help you?:" className={styles.textAreaField}></textarea>
          <button type="submit" className={`${styles.sendButton} ${styles.hoverEffect}`}>Send</button>
        </form>
      </div>
    </div>
  );
};