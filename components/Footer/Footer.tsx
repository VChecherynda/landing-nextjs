import * as React from 'react';
import Stack from '@mui/material/Stack';
import AppleIcon from '@mui/icons-material/Apple';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import styles from './Footer.module.scss'

function Footer() {
    return (
        <footer className={styles.footer}>
            <Stack direction="row" justifyContent="space-between">
                <Stack direction="row">
                    © {new Date().getFullYear()}
                </Stack>

                <Stack direction="row" >
                    <AppleIcon className={styles.icon}/>
                    <TwitterIcon className={styles.icon}/>
                    <InstagramIcon className={styles.icon}/>
                </Stack>
            </Stack>
        </footer>
    );
}

export default Footer;