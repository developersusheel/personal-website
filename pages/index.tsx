import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from './home/Hero';
import Projects from './home/Projects';
import AboutMe from './home/About';
import Skills from './home/Capabilities';
import Awards from './home/Awards';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
  <>
  <div>
    <Head>
      <title>Susheel Kumar | Mern Stack Developer with 7+ years of experience</title>
      <link rel="icon" href="/favicon.png" />
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,400&display=swap" rel="stylesheet" />
    </Head>

      <Hero/>
      <Projects/>
      <AboutMe/>
      <Skills/>
      <Awards/>
      <Footer/>
    </div>
  </>
  )
}

export default Home
