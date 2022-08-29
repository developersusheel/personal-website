import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer';

const MTPProvider: NextPage = () => {
  return (
  <>
  <div>
    <Head>
      <title>Projects | Mern Stack Developer with 7+ years of experience</title>
      <link rel="icon" href="/favicon.png" />
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,400&display=swap" rel="stylesheet" />
    </Head>

    <div className="pt-40 pb-10 xl:pb-30 md:pb-20 max-w-[600px] xl:max-w-[1200px] md:max-w-[800px] mx-auto flex flex-col xl:flex-row md:flex-row justify-between">
      <div>
        <p className="font-light mb-2">Name:</p>
        <h1 className="font-bold text-4xl xl:text-5xl md:text-3xl text-white leading-[40px] xl:leading-[65px] md:leading-[50px] max-w-[600px]">Lorem ipsum doler sit amet doler lipsum</h1>
      </div>
      <div className="mt-[50px] xl:mt-[0px] md:mt-[0px]">
        <div className="mb-10">
          <p className="font-light mb-0">Brand:</p>
          <h1 className="font-semibold text-[20px] xl:text-[20px] text-white leading-[28px]">FRHS, Marie Stopes International</h1>
        </div>
        
        <div className="mb-10">
          <p className="font-light mb-0">Backend:</p>
          <h1 className="font-semibold text-[20px] xl:text-[20px] text-white leading-[28px]">Headless WordPress, Express</h1>
        </div>

        <div className="mb-10">
          <p className="font-light mb-0">API:</p>
          <h1 className="font-semibold text-[20px] xl:text-[20px] text-white leading-[28px]">NodeJS</h1>
        </div>

        <div className="mb-10">
          <p className="font-light mb-0">Frontend:</p>
          <h1 className="font-semibold text-[20px] xl:text-[20px] text-white leading-[28px]">ReactJs, SCSS, GSAP</h1>
        </div>  
      </div>
    </div>

      <div className="pr-2 xl:pr-0 md:pr-2 sm:pr-2 max-w-[600px] xl:max-w-[1200px] md:max-w-[800px] mx-auto">
        <div className="pb-[150px]">
          <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif' className="w-full"/>
        </div>
      </div>
    <Footer/>
    </div>
  </>
  )
}

export default MTPProvider
