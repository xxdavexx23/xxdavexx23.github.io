'use client';

import React from 'react';
import styles from './NavBar.module.css';
import Link from 'next/link';
import Logo from './Logo';
import styles2 from './Logo.module.css';
import { usePathname } from 'next/navigation';
import { TwitterIcon, LinkedInIcon } from './Icons';

interface CustomLinkProps {
    href: string;
    title: string;
    className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, title, className = "" }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={className + (isActive ? ' active' : '')}>
            {title}
            <span className={isActive ? styles.span : styles.span_absent}> &nbsp;</span>
        </Link>
    );
};

const NavBar: React.FC = () => {
    return (
        <header className={styles.navbar}>
            <nav>
                <CustomLink href="/" title="Home" />
                <CustomLink href="/about" title="About" />
                <CustomLink href="/projects" title="Projects" />
                <CustomLink href="/articles" title="Articles" />
            </nav>
            <nav> <TwitterIcon />
                <LinkedInIcon />
            </nav>
            <div className={styles2.logo}><Logo /></div>
        </header>
    )
}

export default NavBar;
