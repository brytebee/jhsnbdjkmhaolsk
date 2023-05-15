import Head from 'next/head';
// import Layout from '../../components/Layout';

export default function Home() {
  return (
    <>
      {/* <Layout> */}
      <Head>
        <title>Home Page</title>
      </Head>
      <h1 className="text-3xl font-bold underline">
        Hello, this is home page !
      </h1>
      {/* </Layout> */}
    </>
  );
}
