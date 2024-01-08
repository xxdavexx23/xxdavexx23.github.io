"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./AboutmeSection.module.css";



export const AboutMeSection = () => {
    return (
        <section className={styles.aboutSection}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutHeader}>
            <h2 className={styles.aboutSubHeading}>About Me</h2>
            <h2 className={styles.aboutHeading}>Know Me More</h2>
          </div>
          <div className={styles.aboutBody}>
            <div className={styles.aboutMe}>
              <h1 className={styles.aboutTitle}>
                Hi, I&apos;m{" "}
                <span className={styles.nameHighlight}>David Cohen</span>
              </h1>
              <p className={styles.aboutText}>
                <br />
                I&apos;m a dedicated software engineer at Northrop, specializing in
                Full Stack Development and Software Testing and Engineering. My
                journey includes obtaining a master&apos;s degree in Electrical
                Engineering from UCF, equipping me with a wealth of knowledge
                and expertise. I am committed to developing innovative solutions
                and delivering high-quality software that not only meets but
                exceeds client expectations. Let&apos;s collaborate and bring your
                ideas to life together.
              </p>
            </div>
            <div className={styles.experience}>
              <span className={styles.experienceNumber}>02</span>
              <span className={styles.experienceText}>Years of Experience</span>
            </div>
          </div>

          <div className={styles.aboutDetails}>
            <div className={styles.detailItem}>
              <span className={styles.detailTitle}>Name:</span>
              <br />
              <span className={styles.detail}>David Cohen</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailTitle}>Email:</span>
              <br />
              <span className={styles.detail}>david.coh19@gmail.com</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailTitle}>From:</span>
              <br />
              <span className={styles.detail}>Fort Lauderdale, USA.</span>
            </div>
          </div>
        </div>
      </section>
    );
}

