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
        <meta name="description" content="This is my webapp made in NextJS and TailwindCSS" />
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
