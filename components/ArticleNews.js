import React from "react";

const ArticlesNews = ({ article }) => {
  return (
    <>
      <div className="article-slide curP">
        <h3 className="article-header">{article.title}</h3>
        <div className="flex-1"></div>
        <div className="article-slide-image">
          <amp-img
            src={article.img}
            height="300px"
            width="356px"
            layout="flex-item"
          ></amp-img>
        </div>
      </div>
      <style jsx>
        {`
          .flex-1 {
            flex: 1 1 0%;
          }
          .curP {
            cursor: pointer;
          }
          .article-slide {
            height: 100%;
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
            border-radius: 10px;
            box-shadow: 0 25px 60px 0 rgb(0 0 0 / 10%);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            padding: 5px;
          }
          .article-header {
            color: #000;
            text-align: center;
            cursor: pointer;
            font-bold: 600;
            font-size: 18px;
            word-break: break-word;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 3;
            overflow-wrap: break-word;
          }
          .article-slide-image {
            overflow: hidden;
            border-radius: 10px;
            height: 300px;
          }
          .article-slide:hover {
            transform: translateY(-2px);
            box-shadow: 0 25px 60px 0 rgb(0 0 0 / 10%);
          }
        `}
      </style>
    </>
  );
};

// eslint-disable-next-line react/display-name
// const ArticlesNews = React.forwardRef(({ article, href }, ref) => {
//   return (
//     <>
//       <a href={href} ref={ref} className="article-slide">
//         <h3 className="article-header">{article.title}</h3>
//         <div className="flex-1"></div>
//         <div className="article-slide-image">
//           <amp-img
//             src={article.img}
//             height="300px"
//             width="356px"
//             layout="flex-item"
//           ></amp-img>
//         </div>
//       </a>
//       <style jsx>
//         {`
//           .flex-1 {
//             flex: 1 1 0%;
//           }
//           .curP{
//             cursor: pointer;
//           }
//           .article-slide {
//             height: 100%;
//             display: flex;
//             flex-direction: column;
//             margin-bottom: 20px;
//             border-radius: 10px;
//             box-shadow: 0 25px 60px 0 rgb(0 0 0 / 10%);
//             transition: transform 0.3s ease, box-shadow 0.3s ease;
//             padding: 5px;
//           }
//           .article-header {
//             color: #000;
//             text-align: center;
//             cursor: pointer;
//             font-bold: 600;
//             font-size: 18px;
//             word-break: break-word;
//             display: -webkit-box;
//             -webkit-box-orient: vertical;
//             overflow: hidden;
//             text-overflow: ellipsis;
//             -webkit-line-clamp: 3;
//             overflow-wrap: break-word;
//           }
//           .article-slide-image {
//             overflow: hidden;
//             border-radius: 10px;
//             height: 300px;
//           }
//           .article-slide:hover {
//             transform: translateY(-2px);
//             box-shadow: 0 25px 60px 0 rgb(0 0 0 / 10%);
//           }
//         `}
//       </style>
//     </>
//   );
// });

export default ArticlesNews;
