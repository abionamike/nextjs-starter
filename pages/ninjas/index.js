import Head from "next/head";
import styles from '../../styles/Ninjas.module.css';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const ninjas = await res.json();

  return {
    props: { ninjas }
  }
}

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List</title>
        <meta name="keywords" content="ninjas list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Ninjas page</h1>
      {ninjas.map(ninja => (
        <div key={ninja.id}>
          <a className={styles.single}>
            <h3>{ ninja.name }</h3>
          </a>
        </div>
      ))}
    </>
  );
}
 
export default Ninjas;