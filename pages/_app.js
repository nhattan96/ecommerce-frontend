import CartContextProvider from "@/components/CartContext";
import "@/styles/globals.css";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *:before,s
  *:after {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background: #F1EFEC;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My new cool app</title>
        <meta
          name="description"
          content="Khám phá thế giới PlayStation: PS5, PS4, PSVR2, game độc quyền, tay cầm DualSense, phụ kiện gaming chính hãng. Giao nhanh, giá tốt!"
        />
        <meta
          name="keywords"
          content="PlayStation, PS5, PS4, mua PS5, PSVR2, tay cầm DualSense, game PlayStation, máy chơi game Sony"
        />

        {/* Open Graph (SEO trên Facebook, Zalo)  */}
        <meta
          property="og:title"
          content="Mua PlayStation Chính Hãng - PS5, PS4, Game, Phụ Kiện | XYZ Gaming"
        />
        <meta
          property="og:description"
          content="PlayStation - Đỉnh cao gaming với PS5, PS4, game độc quyền, phụ kiện chính hãng. Mua ngay giá tốt, bảo hành chính hãng!"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/playstation-banner.jpg"
        />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card (SEO trên Twitter)  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mua PlayStation Chính Hãng - PS5, PS4, Game, Phụ Kiện"
        />
        <meta
          name="twitter:description"
          content="PS5, PS4, tay cầm DualSense, PSVR2, game PlayStation - Giá tốt, giao nhanh, bảo hành chính hãng!"
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/images/playstation-banner.jpg"
        />
      </Head>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
