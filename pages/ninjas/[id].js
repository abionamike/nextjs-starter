
export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const ninja = await res.json();
  
  return {
    props: { ninja }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const ninjas = await res.json();

  const paths = ninjas.map(ninja => ({
    params: { id: ninja.id.toString() }
  }));

  return {
    paths,
    fallback: false
  }
}

const Details = ({ ninja }) => {
  return (
    <h1>{ninja.name} - {ninja.id}</h1>
  );
}
 
export default Details;