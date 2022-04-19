import Head from "next/head";
import Story from "../../components/Story";
import getPosts from "../../services";

export const config = { amp: true };

const PostDetail = ({ posts }) => {
  return (
    <>
      <Head>
        <script
          async
          key="amp-story"
          custom-element="amp-story"
          src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
        />
      </Head>
      <Story posts={posts}></Story>
    </>
  );
};

// export async function getStaticProps() {
//   const posts = getPosts() || [];
//   return {
//     props: {
//       posts,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const posts = getPosts() || [];
//   return {
//     paths: posts?.map((post) => ({ params: { slug: post?.title } })),
//     fallback: true,
//   };
// }

export async function getServerSideProps(ctx) {
  // console.log(ctx);
  const posts = getPosts() || [];
  return {
    props: {
      posts,
    },
  };
}

export default PostDetail;
