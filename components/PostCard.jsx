import React from "react";

// eslint-disable-next-line react/display-name
const PostCard = React.forwardRef(({ href, onClick, post }, ref) => {
  return (
    <>
      <a href={href} onClick={onClick} ref={ref} className="carousal-slide">
        <div className="crousal-slide-image">
          <amp-img
            src={post.img}
            height="450px"
            width="300px"
            layout="fixed"
          ></amp-img>
        </div>
        <h1 className="link-header">{post.title}</h1>
      </a>
      <style jsx>
        {`
          .link-header {
            text-align: center;
            font-size: 22px;
            cursor: pointer;
            font-bold: 600;
          }
          .carousal-slide:first-child {
            margin-left: 20%;
          }
          .carousal-slide {
            margin-left: 85px;
          }
          .crousal-slide-image {
            overflow: hidden;
            border-radius: 10px;
            margin-top: 20px;
            box-shadow: 0 25px 60px 0 rgb(0 0 0 / 10%);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .crousal-slide-image:hover {
            transform: translateY(-2px);
            box-shadow: 0 25px 60px 0 rgb(0 0 0 / 10%);
          }
        `}
      </style>
    </>
  );
});

export default PostCard;
