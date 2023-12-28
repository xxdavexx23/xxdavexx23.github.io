import React from 'react';
import { SquareAvatar } from '@/components/Avatar';
import styles from './Home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.avatar}>
          <SquareAvatar />
        </div>

        <div className={styles.header}>
          <h1 className={styles.title}>Hi! I am David!</h1>
          <p className={styles.subtitle}>
            Software Engineer at Northrop Grumman with extensive experience in both backend and frontend development.
          </p>
        </div>
      </div>
    </main>
  );
}
