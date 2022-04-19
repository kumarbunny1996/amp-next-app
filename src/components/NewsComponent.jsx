import Link from "./ui/Link";

const NewsComponent = ({ article }) => {
  return (
    <>
      <Link href={article.link}>
        <div className="flex">
          <amp-img
            className="img"
            src="/images/ezgif.com-gif-maker.jpg"
            layout="fixed-height"
            height="45px"
            width="auto"
          ></amp-img>
          <p className="news-section1-content">{article.title}</p>
        </div>
      </Link>
      <style jsx>
        {`
          .flex {
            display: flex;
            align-items: center;
            padding: 5px;
            height: 90px;
            border-bottom: 1px solid grey;
          }
          .news-section1-content {
            flex-basis: 70%;
            margin-left: 5%;
            font-size: 14px;
          }
          .img {
            flex-basis: 25%;
          }
        `}
      </style>
    </>
  );
};

export default NewsComponent;
