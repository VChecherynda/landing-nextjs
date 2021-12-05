import Layout from "../components/Layout/Layout";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

import styles from './Main.module.scss';
import { prefix } from '../utils';

function About() {
    return (
        <Layout>
             <section>
                <Stack direction="row" justifyContent="center" >
                    <Stack className={styles.halfPageBlock}>
                        <Stack  className={styles.textBlock}>
                            <h1 className={styles.title}>T-Rex ( About )</h1> 
                            <p className={styles.text}>
                                Teeth from what is now documented as a Tyrannosaurus rex were 
                                found in 1874 by Arthur Lakes near Golden, Colorado. In the early 
                                1890s, John Bell Hatcher collected postcranial elements in eastern Wyoming. 
                                The fossils were believed to be from the large species Ornithomimus grandis 
                                (now Deinodon) but are now considered T. rex remains.
                            </p>
                        </Stack>
                        <Stack direction="row" className={styles.buttonBlock}>
                            <Link href="/">
                                <Button variant="contained" >
                                    Home
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                    <Stack className={styles.halfPageBlock}>
                        <img src={`${prefix}/t-rex-about.png`} width="600" height="350" alt="main picture" />
                    </Stack>
                </Stack>
            </section>
        </Layout>
    );
}

export default About;