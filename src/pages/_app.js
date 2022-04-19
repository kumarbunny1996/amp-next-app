import { useRouter } from "next/router";
import "../styles/globals.css";
import News from "./news/news";

export const config = { amp: "hybrid" };

function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />
}

export default MyApp;
