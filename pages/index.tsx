import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Carousel from '../src/Components/Carousel'
import MenuBar from '../src/Components/MenuBar'
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
       {/* modern responsive dynamic menu bar */}
        <MenuBar/>

        {/* carousel section */}
        <Carousel />

        <div style={{width:"100%",height:"900px"}}>

        </div>

       

       

         
      </main>
      <footer className={styles.footer}>
          &copy 2021 perazim security
      </footer>
    </div>
  )
}

export default Home
