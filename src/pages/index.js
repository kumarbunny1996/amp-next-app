import Head from "next/head";
import Link from "next/link";
import Articles from "../components/Article";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import getPosts from "../services";
import getArticles from "../services/article";

export const config = { amp: true };

export default function Home({ posts, articles }) {
  return (
    <>
      <Head>
        <title>Joy of News</title>
        <script
          async
          custom-element="amp-sidebar"
          src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"
        ></script>
        <script
          async
          custom-element="amp-carousel"
          src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"
        ></script>
      </Head>
      <Navbar></Navbar>
      <Posts posts={posts}></Posts>
      <Articles articles={articles}></Articles>
      <Link href="/news/news">
        <a>one</a>
      </Link>
      <style global jsx>
        {`
          a {
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
}

export function getServerSideProps() {
  const posts = getPosts() || [];
  const articles = getArticles() || [];
  return {
    props: {
      posts,
      articles,
    },
  };
}
