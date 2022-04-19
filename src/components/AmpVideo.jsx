import Link from "./ui/Link";

const AmpVideo = ({ article }) => {
  return (
    <>
      <Link href={article.link}>
        <div className="flex">
          <amp-video
            width="150px"
            height="90px"
            layout="responsive"
            poster="/images/goprojects.png"
            controls
            autoplay
          >
            <source src="/kitten-playing.webm" type="video/webm" />
          </amp-video>
          <p className="">{article.title}</p>
        </div>
      </Link>
      <style jsx>
        {`
          .flex {
            padding-bottom: 10px;
            padding-left: 10px;
            padding-right: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          p {
            font-size: 14px;
          }
        `}
      </style>
    </>
  );
};

export default AmpVideo;
