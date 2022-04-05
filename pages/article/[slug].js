import ArticleDetail from "../../components/ArticleDetial";
import getArticles from "../../services/article";

export const config = { amp: true };

const ArticleDetailPage = ({ article }) => {
  return (
    <>
      <ArticleDetail article={article}></ArticleDetail>
    </>
  );
};

export async function getStaticProps({ params }) {
  const articles = getArticles() || [];
  const article = articles?.find((item, index) => item.title === params?.slug);
  return {
    props: {
      article,
    },
  };
}
export async function getStaticPaths() {
  const posts = getArticles() || [];
  console.log(posts);
  return {
    paths: posts?.map((post, index) => ({ params: { slug: post?.title } })),
    fallback: true,
  };
}

export default ArticleDetailPage;
