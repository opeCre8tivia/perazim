import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Perazim Security </title>
        <meta name="description" content="Offering Security Services around kampala and uganda as a whole" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-green-500 font-bold">
          PERAZIM OFFICIAL
        </h1>

       

       

         
      </main>
      <footer className={styles.footer}>
          &copy 2021 perazim security
      </footer>
    </div>
  )
}

export default Home
