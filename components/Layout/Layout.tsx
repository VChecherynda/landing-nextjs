import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Divider from '@mui/material/Divider';
import styles from './Layout.module.scss'

function Layout({ children }) {
    return (
        <div className={styles.wrapper}>
            <Navbar />
            <Divider />
            <main className={styles.main}>{children}</main>
            <Divider />
            <Footer />
        </div>
    );
}

export default Layout;