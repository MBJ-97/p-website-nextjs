import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
import Script from "next/script";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Mahdi Beldjoudi</title>
      </Head>
      <Script
        id="GA-scripts"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="GA-script" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <div className="flex min-h-screen flex-col dark:bg-gray dark:text-white">
        <Navbar />
        <div className="container mx-auto mt-10 md:mt-20 w-full max-w-5xl px-3">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
