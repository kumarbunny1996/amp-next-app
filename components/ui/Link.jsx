import NextLink from "next/link";

const Link = ({ href, children, ...props }) => {
  return (
    <>
      <NextLink href={href}>
        <a {...props}>{children}</a>
      </NextLink>
      <style jsx>
        {`
          a {
            text-decoration: none;
            color: #000;
          }
        `}
      </style>
    </>
  );
};

export default Link;
