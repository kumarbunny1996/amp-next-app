const Story = ({ posts }) => {
  return (
    <>
      { posts?.length>0 && (
        <amp-story
          standalone=""
          title="Stories in AMP"
          publisher="AMP project"
          publisher-logo-src="/vercel.svg"
          poster-portrait-src="/images/ezgif.com-gif-maker.jpg"
        >
          {/* {posts?.map((post, index) => (
            <amp-story-page id={index + 1} key={index}>
              <amp-story-grid-layer template="vertical">
                <amp-img
                  src={post?.img}
                  height="555px"
                  width="300px"
                  layout="fill"
                ></amp-img>
              </amp-story-grid-layer>
              <amp-story-grid-layer template="vertical">
                <h1>{post?.title}</h1>
              </amp-story-grid-layer>
            </amp-story-page>
          ))} */}
  
          {posts?.length === 0 ? (
            <amp-story-page id="1">
              <amp-story-grid-layer template="vertical">
                <amp-img
                  src="/images/ezgif.com-gif-maker (3).jpg"
                  height="555px"
                  width="300px"
                  layout="fill"
                ></amp-img>
              </amp-story-grid-layer>
              <amp-story-grid-layer template="vertical">
                <h1>xxxx</h1>
              </amp-story-grid-layer>
            </amp-story-page>
          ) : (
            posts?.map((post, index) => (
              <amp-story-page id={index + 1} key={index}>
                <amp-story-grid-layer template="vertical">
                  <amp-img
                    src={post?.img}
                    height="555px"
                    width="300px"
                    layout="fill"
                  ></amp-img>
                </amp-story-grid-layer>
                <amp-story-grid-layer template="vertical">
                  <h1>{post?.title}</h1>
                </amp-story-grid-layer>
              </amp-story-page>
            ))
          )}
        </amp-story>
      )}
  </>
  );
};

export default Story;
