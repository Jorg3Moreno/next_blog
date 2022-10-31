import Head from "next/head"

import Header from "../components/header"
import Footer from "../components/footer"

export default function format({ children }) {
  return(
    <>
      <Head>
        <title>ShellPunk: Blog</title>
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}