import Link from "next/link";
import PostCard from "./PostCard";

const Posts = ({ posts }) => {
  return (
    <>
      <section className="container">
        <div
          style={{
            padding: "32px",
            fontBold: "700px",
            fontSize: "32px",
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          Web Stories in Amp
        </div>
        <div style={{width:"100%"}}>
          <amp-carousel
            height="555px"
            type="carousel"
            layout="fixed-height"
            aria-label="basic crousel"
            role="region"
          >
            {posts.map((post, index) => (
              <Link
                key={index}
                href={{
                  pathname: `post/${post?.title}`,
                  // query: { slug: post.title },
                }}
                passHref
              >
                <PostCard post={post}></PostCard>
              </Link>
            ))}
          </amp-carousel>
        </div>
      </section>
      <style jsx>
        {`
          .container {
            padding: 30px;
            width: 100%;
          }
          amp-carousel.amp-flex{
            display:flex;
            justify-content:space-around;
            width:100%;
          }
        `}
      </style>
    </>
  );
};

export default Posts;
