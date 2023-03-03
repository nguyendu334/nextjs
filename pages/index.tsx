import type { NextPage } from 'next';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>NextJs</title>
                <meta name="description" content="NextJs + TypeScripts" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Home;
