import * as React from 'react';
import Link from 'next/link';
import AlignVerticalCenterIcon from '@mui/icons-material/AlignVerticalCenter';
import styles from './Navbar.module.scss'

function Navbar() {
    return (
        <header className={styles.header}>
            <AlignVerticalCenterIcon />

            <nav className={styles.navbar}>
                <Link href="/"><span className={styles.link} >Home</span></Link>
                <Link href="/about"><span className={styles.link} >About</span></Link>
                <Link href="/features"><span className={styles.link} >Features</span></Link>
                <Link href="/faq"><span className={styles.link} >FAQ</span></Link>
            </nav>
        </header>
    );
}

export default Navbar;