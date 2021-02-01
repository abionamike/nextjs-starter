import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo rem doloremque, fugiat ad, magnam deserunt error commodi mollitia consequuntur hic laboriosam. Velit, dignissimos nulla eaque quis odio magni minus.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse explicabo rem doloremque, fugiat ad, magnam deserunt error commodi mollitia consequuntur hic laboriosam. Velit, dignissimos nulla eaque quis odio magni minus.</p>
      
      <Link href="/ninjas">
        See Ninja Listing
      </Link>
    </div>
  )
}
