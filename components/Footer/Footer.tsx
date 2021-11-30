import * as React from 'react';
import Box from '@mui/material/Box';
import styles from './Footer.module.scss'

function Footer() {
    return (
        <footer className={styles.footer}>
            <Box
                sx={{
                    p: 1,
                    display: 'grid',
                    bgcolor: 'primary.main',
                    color: 'white',
                }}
            >
                {"Footer"}
            </Box>
        </footer>
    );
}

export default Footer;