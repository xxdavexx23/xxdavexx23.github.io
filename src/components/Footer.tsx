import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span>Copyright © 2024 </span>
        <span className={styles.underline}>David Cohen</span>
        <span>. All Rights Reserved.</span>
      </div>
    </footer>
  );
};