"use client";
import React from "react";
import styles from "./WhatIdo.module.css";
import WebDesignSVG from "../assets/web-design.svg";

export const WhatIdo = () => {
  return (
    <section className={styles.whatIdoSection}>
      <div className={styles.whatIdoHeader}>
        <h2 className={styles.whatIdoSubHeading}>What I do</h2>
        <h2 className={styles.whatIdoHeading}>
          How I can help your next project
        </h2>
      </div>
      <div className={styles.servicesGrid}>
        {/* Repeat this block for each service */}
        <div className={styles.serviceItem}>
          <div className={styles.serviceIcon}>
            <svg
              fill="#f5df4e"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 496"
              width="80"
              height="80"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M456,80h-48V68.688L339.312,0H88v80H40C17.944,80,0,97.944,0,120v288c0,22.056,17.944,40,40,40h104v32h-32v16h272v-16
				h-32v-32h104c22.056,0,40-17.944,40-40V120C496,97.944,478.056,80,456,80z M344,27.312L380.688,64H344V27.312z M360,80v112H136
				V48h192v32H360z M104,16h224v16H120v176h256V80h16v272H104V16z M336,480H160v-32h176V480z M480,408c0,13.232-10.768,24-24,24H40
				c-13.232,0-24-10.768-24-24v-8h464V408z M480,384H16V120c0-13.232,10.768-24,24-24h48v272h320V96h48c13.232,0,24,10.768,24,24
				V384z"
                    />
                    <path
                      d="M248,64c-30.872,0-56,25.12-56,56s25.128,56,56,56s56-25.12,56-56S278.872,64,248,64z M248,160
				c-22.056,0-40-17.944-40-40c0-22.056,17.944-40,40-40c22.056,0,40,17.944,40,40C288,142.056,270.056,160,248,160z"
                    />
                    <rect x="120" y="224" width="256" height="16" />
                    <rect x="120" y="256" width="256" height="16" />
                    <rect x="120" y="288" width="120" height="16" />
                    <rect x="256" y="288" width="120" height="16" />
                    <rect x="120" y="320" width="120" height="16" />
                    <rect x="256" y="320" width="120" height="16" />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <h3 className={styles.serviceTitle}>Web Desgin</h3>
          <p className={styles.serviceDescription}>
            I create visually appealing and user-friendly websites that meet the
            latest design trends and standards.
          </p>
        </div>
        <div className={styles.serviceItem}>
          <div className={styles.serviceIcon}>
            <svg
              fill="#f5df4e"
              version="1.1"
              id="Layer_1"
              width="80"
              height="80"
              viewBox="0 0 210 256"
              enable-background="new 0 0 210 256"
            >
              <path
                d="M174.55,144.5L174.55,144.5c-1.4-4-5-6.5-9.2-6.5H159V23c0-11.708-9.292-21-21-21H25C12.57,2,2,12.57,2,25v183
	c0,11.9,10.95,22,22.75,22l114.213,0c1.207,0,2.27,0.984,2.18,2.188c-0.095,1.266-1.153,1.812-2.393,1.812h-45.5L128,254h80
	L174.55,144.5z M82.05,220.2c-3.199,0-5.599-2.399-5.6-5.598c-0.001-3.045,2.557-5.602,5.602-5.602
	c3.199,0.001,5.598,2.401,5.598,5.6C87.55,217.8,85.25,220.2,82.05,220.2z M144,138h-19.65c-5.3,0-9.8,4.7-9.8,10l0,0
	c0,5.3,4.5,10,9.8,10h19.8v42H18V31h126V138z M99.8,65.278c0-4.814,3.935-8.749,8.749-8.749s8.749,3.935,8.749,8.749
	s-3.859,8.749-8.749,8.749C103.697,74.027,99.8,70.092,99.8,65.278z M129.905,43.616v86L32.1,129.578V43.616H129.905z
	 M124.06,49.576H38.098v63.191l26.285-50.011l17.918,36.677l17.804-11.729l23.955,22.732V49.576z"
              />
            </svg>
          </div>
          <h3 className={styles.serviceTitle}>App Development</h3>
          <p className={styles.serviceDescription}>
            I develop both mobile and web applications tailored to your business
            needs, ensuring high performance and user satisfaction.
          </p>
        </div>
        <div className={styles.serviceItem}>
          <div className={styles.serviceIcon}>
            <svg
              width="80"
              height="80"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              stroke-width="3"
              stroke="#f5df4e"
              fill="none"
            >
              <circle cx="34.52" cy="11.43" r="5.82" />
              <circle cx="53.63" cy="31.6" r="5.82" />
              <circle cx="34.52" cy="50.57" r="5.82" />
              <circle cx="15.16" cy="42.03" r="5.82" />
              <circle cx="15.16" cy="19.27" r="5.82" />
              <circle cx="34.51" cy="29.27" r="4.7" />
              <line x1="20.17" y1="16.3" x2="28.9" y2="12.93" />
              <line x1="38.6" y1="15.59" x2="49.48" y2="27.52" />
              <line x1="50.07" y1="36.2" x2="38.67" y2="46.49" />
              <line x1="18.36" y1="24.13" x2="30.91" y2="46.01" />
              <line x1="20.31" y1="44.74" x2="28.7" y2="48.63" />
              <line x1="17.34" y1="36.63" x2="31.37" y2="16.32" />
              <line x1="20.52" y1="21.55" x2="30.34" y2="27.1" />
              <line x1="39.22" y1="29.8" x2="47.81" y2="30.45" />
              <line x1="34.51" y1="33.98" x2="34.52" y2="44.74" />
            </svg>
          </div>
          <h3 className={styles.serviceTitle}>AI Model Integration and Deployment</h3>
          <p className={styles.serviceDescription}>
            I deploy AI models into production, ensuring they are scalable,
            robust, and secure.
          </p>
        </div>
      </div>
    </section>
  );
};
