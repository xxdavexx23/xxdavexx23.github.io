'use client';
import React, { useState, useEffect, useRef } from 'react';
import { SquareAvatar } from '@/components/Avatar';
import styles from './Home.module.css';

export default function Home() {
  const [title, setTitle] = useState('');
  const titles = ['THINKER',  'DESIGNER', 'ENGINEER'];

  const currentTitleIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    const typeTitle = () => {
      const currentTitle = titles[currentTitleIndex.current];
      const updateSpeed = isDeleting.current ? 100 : 200; // Speed of typing or deleting

      if (isDeleting.current) {
        setTitle(currentTitle.substring(0, charIndex.current--));
      } else {
        setTitle(currentTitle.substring(0, charIndex.current++));
      }

      if (!isDeleting.current && charIndex.current === currentTitle.length) {
        // Pause before start deleting
        setTimeout(() => { isDeleting.current = true; }, 1500);
      } else if (isDeleting.current && charIndex.current === 0) {
        isDeleting.current = false;
        currentTitleIndex.current = (currentTitleIndex.current + 1) % titles.length;
        // Pause before start typing next title
        setTimeout(typeTitle, 1500);
        return;
      }

      setTimeout(typeTitle, updateSpeed);
    };

    const typingTimer = setTimeout(typeTitle, 200); // Initial delay for typing effect

    // Clean up function to clear the timeout
    return () => clearTimeout(typingTimer);
  }, []);

  return (
    <main className={styles.container}>
      <section className={styles.introSection}>
        <div className="flex flex-col justify-center">
          <h1 className={styles.title}>HI THERE, I AM DAVID! <br/> <span className={styles.typing}>{title}</span></h1>
          <p className={styles.subtitle}>
            based in Orlando, FL
          </p>
          <button className={styles.contactButton}>Contact Me</button>
        </div>
        <div className={styles.avatar}>
          <SquareAvatar />
        </div>
      </section>
    </main>
  );
}
