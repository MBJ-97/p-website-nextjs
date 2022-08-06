import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Mahdi Beldjoudi</title>
      </Head>
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
