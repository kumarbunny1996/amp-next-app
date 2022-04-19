import Link from "./ui/Link";
import { useRouter } from "next/router";
import ArticlesNews from "./ArticleNews";

const Articles = ({ articles }) => {
  const router = useRouter();
  return (
    <>
      <section>
        <div className="art-head">Today news</div>
        <div className="art-section">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={{
                pathname: `/article/${article.title}`,
                // query: { slug: article.title },
              }}
            >
              <ArticlesNews article={article}></ArticlesNews>
            </Link>
          ))}
        </div>
      </section>
      <style jsx>
        {`
          .art-head {
            text-align: center;
            margin-top: 20px;
            font-weight: 900;
            font-size: 32px;
          }
          .art-section {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 2rem;
            margin: 40px;
          }
        `}
      </style>
    </>
  );
};

export default Articles;
