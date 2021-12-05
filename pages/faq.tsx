import Layout from "../components/Layout/Layout";
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import styles from './Main.module.scss';
import { prefix } from '../utils';

function About() {
    return (
        <Layout>
             <section>
                <Stack direction="row" justifyContent="center" >
                    <Stack className={styles.halfPageBlock}>
                        <Stack  className={styles.textBlock}>
                            <h1 className={styles.title}>FAQ</h1>
                            <p>
                                This landing was created with NEXT.js. And served as static pages from github-pages. 
                                Next.js benefits are:
                            </p>
                            <List>
                                <ListItem>1. SEO optimization. The pages is mored friendly with web crawlers.</ListItem>
                                <ListItem>2. It`s fast. Could load init pages 1-2 sec.</ListItem>
                                <ListItem>3. Build in routing. The structure into pages this is your routing.</ListItem>
                                <ListItem>4. You could deploy as static pages or sevrve with node.js server ( last preferable )</ListItem>
                            </List>
                        </Stack> 
                    </Stack>                       
                </Stack>
            </section>
        </Layout>
    );
}

export default About;