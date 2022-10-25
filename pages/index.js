import Head from "next/head";
import Image from "next/image";
import Article from "../components/Article";
import { server } from "../config";
// import styles from "../styles/Home.module.css";

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>new project</title>
      </Head>
      <h1>Hello from next app</h1>
      <Article articles={articles} />
    </div>
  );
}

// Data fetching
// getStatic
// getServerSide
// getStaticPath

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/Articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
