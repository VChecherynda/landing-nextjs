import * as React from 'react';
import Box from '@mui/material/Box';
import styles from './Navbar.module.scss'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Box
                sx={{
                    p: 1,
                    display: 'grid',
                    bgcolor: 'primary.main',
                    color: 'white',
                }}
            >
                {"Header"}
            </Box>
        </nav>
    );
}

export default Navbar;