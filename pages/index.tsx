import Layout from "../components/Layout/Layout";
import Link from 'next/link'

function App() {
    return (
        <Layout>
            <div>Hello this is my main pages. If you want to know about me more pleaze preceed link below</div>
            <Link href="/about">About me!</Link>
        </Layout>
    );
}

export default App;