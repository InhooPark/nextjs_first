import Context from "@/context/Context";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <Context>
      <Component {...pageProps} />
    </Context>
  );
}
