import Head from 'next/head';
import LandingPage from 'components/landingPage/LandingPage';
import Layout from '../components/Layout';

export function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Home Page</title>
        </Head>

        <div style={{ backGround: 'red', marginTop: '20px' }}>
          <LandingPage />
        </div>
      </Layout>
    </>
  );
}

export default Home;
