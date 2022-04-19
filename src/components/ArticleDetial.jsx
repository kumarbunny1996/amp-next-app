const ArticleDetail = ({ article }) => {
  return (
    <>
      <section className="article-section">
        <div className="text-22">
          <h1>{article?.title}</h1>
          <p>{article?.desc}</p>
          <p>by {article?.author}</p>
        </div>
        <div className="mb-20">
          <amp-social-share
            type="twitter"
            width="45"
            height="33"
          ></amp-social-share>
          <amp-social-share
            type="pinterest"
            width="45"
            height="33"
          ></amp-social-share>
          <amp-social-share
            type="facebook"
            width="45"
            height="33"
          ></amp-social-share>
          <amp-social-share
            type="email"
            width="45"
            height="33"
          ></amp-social-share>
        </div>
        <div>
          <amp-img
            src={article?.img || "/images/ezgif.com-gif-maker(1).jpg"}
            layout="responsive"
            height="500px"
            width="900px"
          ></amp-img>
        </div>
        <div className="text-22">
          <p>{article?.content}</p>
        </div>
        <div>
          <a href="https://www.amp.dev">
            <amp-img
              width="300"
              height="250"
              alt="Learn amp"
              layout="responsive"
              src="/images/ezgif.com-gif-maker(1).jpg"
            ></amp-img>
          </a>
          <amp-pixel src="https://www.amp.dev/tracker/foo"></amp-pixel>
        </div>
      </section>
      <style jsx>
        {`
          .article-section {
            text-align: center;
            margin: 60px 20%;
          }
          .text-22 {
            font-size: 22px;
          }
          .mb-20 {
            margin-bottom: 20px;
          }
        `}
      </style>
    </>
  );
};

export default ArticleDetail;
