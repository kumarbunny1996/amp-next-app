import Story from "../../components/Story";
import getPosts from "../../services";

export const config = { amp: true };

const PostDetail = ({ posts }) => {
  return <Story posts={posts}></Story>;
};

export async function getStaticProps() {
  const posts = getPosts() || [];
  return {
    props: {
      posts,
    },
  };
}

export async function getStaticPaths() {
  const posts = getPosts() || [];
  return {
    paths: posts?.map((post) => ({ params: { slug: post?.title } })),
    fallback: true,
  };
}

export default PostDetail;
