import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Grid from '../components/Grid'
import Music from '../components/Music'
import Final from '../components/Final'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        {/* Open Graph on Facebook */}
        <meta property="og:url" content="https://lazymonster.vercel.app/" />
        <meta property="og:type" content="Personal portfolio" />
        <meta property="og:title" content="lazymonster" />
        <meta property="og:description" content="This is my unofficial portfolio" />
        <meta property="og:image" content="/assets/rose_by_joarosa.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="lazymonster.vercel.app" />
        <meta property="twitter:url" content="https://lazymonster.vercel.app/" />
        <meta name="twitter:title" content="lazymonster" />
        <meta name="twitter:description" content="This is my unofficial portfolio" />
        <meta name="twitter:image" content="/assets/rose_by_joarosa.jpg" />

        {/* Normal Meta Tag */}
        <meta name="description" content="This is my unofficial portfolio" />
        <title>lazymonster</title>
      </Head>
      <Navbar />
      <Hero />
      <Intro />
      <Grid />
      <Music />
      <Final />
      <Footer />
    </>
  )
}
