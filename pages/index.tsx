import Layout from "../components/Layout/Layout";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AlbumIcon from '@mui/icons-material/Album';
import AppleIcon from '@mui/icons-material/Apple';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Link from 'next/link'
import styles from './Main.module.scss'

function App() {
    return (
        <Layout>
            <section>
                <Box className={styles.halfPageBlock}>
                    <Stack>
                        <Stack  className={styles.textBlock}>
                            <h1 className={styles.title}>A Lot of What</h1> 
                            <p className={styles.text}>
                                Jailbreaks and riots in support of alleged pirates 
                                were common throughout the British Empire during 
                                the late seventeenth century. Local political 
                                leaders openly protected men who committed acts of 
                                piracy against powers that were nominally allied or 
                                at peace with England. In large part, these leaders 
                                were protecting their own hides: Colonists wanted to prevent 
                                depositions proving that they had harbored pirates or 
                                purchased their goods. Some of the instigators were 
                                fathers-in-law of pirates.
                            </p>
                        </Stack>
                        <Stack direction="row" className={styles.buttonBlock}>
                            <Link href="/about">
                                <Button variant="contained" >
                                    About
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                </Box>
            </section>

            <section>
                <Stack direction="row" justifyContent="center" spacing={2}>
                    <Stack direction="column" alignItems="center" className={styles.card}>
                        <AlbumIcon />
                        <h2>Music</h2>
                        <p>Some random text.You should not read it. But I leave as it is.</p>
                    </Stack>
                    <Stack direction="column" alignItems="center" className={styles.card}>
                        <AppleIcon />
                        <h2>Apple</h2>
                        <p>Some random text.You should not read it. But I leave as it is.</p>
                    </Stack>
                    <Stack  direction="column" alignItems="center" className={styles.card}>
                        <AlternateEmailIcon />
                        <h2>Net</h2>
                        <p>Some random text.You should not read it. But I leave as it is.</p>
                    </Stack>
                </Stack>
            </section>
        </Layout>
    );
}

export default App;