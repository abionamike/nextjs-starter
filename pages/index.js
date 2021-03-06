import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo rem doloremque, fugiat ad, magnam deserunt error commodi mollitia consequuntur hic laboriosam. Velit, dignissimos nulla eaque quis odio magni minus.</p>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo rem doloremque, fugiat ad, magnam deserunt error commodi mollitia consequuntur hic laboriosam. Velit, dignissimos nulla eaque quis odio magni minus.</p>
        
        <Link href="/ninjas"><a  className={styles.btn}>See Ninja listing</a></Link>
      </div>
    </>
  )
}
