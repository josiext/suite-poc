import type { AppProps } from "next/app";
import { ProductDrawer } from "ui";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ProductDrawer />
      <Component {...pageProps} />
    </>
  );
}
