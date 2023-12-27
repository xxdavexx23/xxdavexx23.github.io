
'use client'
import React from 'react'
import styles from './Logo.module.css'
import Link from 'next/link'
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const hoverColors = [
    "#333333",
    "#e63946", // Bright red
    "#f1faee", // Off-white
    "#a8dadc", // Light blue
    "#457b9d", // Medium blue
    "#1d3557", // Dark blue
    "#2a9d8f", // Teal
    "#e9c46a", // Yellow
    "#f4a261", // Orange
    "#e76f51", // Reddish orange
    "#264653"  // Dark cyan
];

const Logo = () => {
    return (
        <div>
            <MotionLink href="/" whileHover={{
                backgroundColor: hoverColors,
                transition: { duration: 1, repeat: Infinity }
            }} > DC </MotionLink>
        </div>
    )
}

export default Logo