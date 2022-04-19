import AmpVideo from "../../components/AmpVideo";
import NewsComponent from "../../components/NewsComponent";
import Link from "../../components/ui/Link";
import getNews from "../../services/news";

export const config = { amp: true };

export default function NewsSection({ news }) {
  return (
    <>
      <section>
        <h1 className="news-head">The News Of India</h1>
        <div className="news-section">
          <div className="basis">
            <div>
              <amp-img
                src="/images/ezgif.com-gif-maker(1).jpg"
                width="auto"
                height="300px"
                layout="fixed-height"
              ></amp-img>
            </div>
            <div className="news-section1">
              {/* {news.map((item, index) => (
                <NewsComponent key={index} article={item} />
              ))} */}
            </div>
          </div>
          <div className="news-section2">
            {/* {news.slice(0, 4).map((item, index) => (
              <AmpVideo key={index} article={item} />
            ))} */}
          </div>
          <div className="news-section3">
            {/* {news.map((item, index) => (
              <Link key={index} href={item.link}>
                <p className="border">{item.title}</p>
              </Link>
            ))} */}
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .news-head {
            text-align: center;
            margin-top: 40px;
          }
          .news-section {
            display: flex;
            justify-content: center;
            margin-top: 40px;
            align-items: center;
          }
          .news-section1 {
            flex-basis: 40%;
            display: grid;
            grid-template-columns: 50% 50%;
            grid-gap: 10px;
          }
          .news-section2 {
            flex-basis: 15%;
            align-self: flex-start;
            border-right: 1px dotted grey;
          }
          .news-section3 {
            flex-basis: 25%;
            align-self: flex-start;
            padding-left: 25px;
          }
          .basis {
            flex-basis: 40%;
            border-right: 1px dotted grey;
            padding-right: 20px;
          }
          .border {
            padding-bottom: 5px;
            border-bottom: 1px solid grey;
          }
        `}
      </style>
    </>
  );
}

export function getServerSideProps() {
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Host": "google-news1.p.rapidapi.com",
  //     "X-RapidAPI-Key": "1dc796db76mshc5a9a61199baed6p15783djsn5ae7882b30d7",
  //   },
  // };

  // const response = await fetch(
  //   "https://google-news1.p.rapidapi.com/topic-headlines?topic=WORLD&country=US&lang=en&limit=50",
  //   options
  // );
  const news = getNews() || [];
   if (!news) {
     return {
       notFound: true,
     };
   }

  return {
    props: {
      news,
    },
  };
}
