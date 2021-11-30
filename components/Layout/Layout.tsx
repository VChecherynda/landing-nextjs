import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from './Layout.module.scss'

function Layout({ children }) {
    return (
        <div className={styles.wrapper}>
            <Navbar />
                <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;