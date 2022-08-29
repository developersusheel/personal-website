import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer';

const Projects: NextPage = () => {
  return (
  <>
  <div>
    <Head>
      <title>Projects | Mern Stack Developer with 7+ years of experience</title>
      <link rel="icon" href="/favicon.png" />
      <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,400&display=swap" rel="stylesheet" />
    </Head>

    <div className="pt-40 pb-10 xl:pb-30 md:pb-20 max-w-[600px] xl:max-w-[1200px] md:max-w-[800px] mx-auto">
      <p className="font-light mb-2">Work Projects</p>
      <h1 className="font-bold text-2xl xl:text-5xl md:text-3xl text-white leading-[40px] xl:leading-[65px] md:leading-[50px] max-w-[600px]">Lorem ipsum doler sit amet doler lipsum</h1>
    </div>

    <div className="pr-2 xl:pr-0 md:pr-2 sm:pr-2 max-w-[600px] xl:max-w-[1200px] md:max-w-[800px] mx-auto">
      <div>
        <a href="/mtp-provider">
          <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif' className="w-full"/>
          <h1 className="mt-5 text-3xl font-bold text-white">Lorem Ipsum Doler Sit Amet</h1>
          <p className="text-[18px] mt-2 font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </a>
      </div>

      <div className="mt-20">
        <a href="/mtp-provider">
          <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif' className="w-full"/>
          <h1 className="mt-5 text-3xl font-bold text-white">Lorem Ipsum Doler Sit Amet</h1>
          <p className="text-[18px] mt-2 font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </a>
      </div>

      <div className="mt-20">
        <a href="/mtp-provider">
          <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif' className="w-full"/>
          <h1 className="mt-5 text-3xl font-bold text-white">Lorem Ipsum Doler Sit Amet</h1>
          <p className="text-[18px] mt-2 font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </a>
      </div>

      <div className="mt-20">
        <a href="/mtp-provider">
          <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif' className="w-full"/>
          <h1 className="mt-5 text-3xl font-bold text-white">Lorem Ipsum Doler Sit Amet</h1>
          <p className="text-[18px] mt-2 font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </a>
      </div>

      <div className="mt-20">
        <a href="/mtp-provider">
          <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif' className="w-full"/>
          <h1 className="mt-5 text-3xl font-bold text-white">Lorem Ipsum Doler Sit Amet</h1>
          <p className="text-[18px] mt-2 font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </a>
      </div>

      <div className="mt-20 pb-[100px]">
        <a href="/mtp-provider">
          <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif' className="w-full"/>
          <h1 className="mt-5 text-3xl font-bold text-white">Lorem Ipsum Doler Sit Amet</h1>
          <p className="text-[18px] mt-2 font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </a>
      </div>
    </div>

    <Footer/>
    </div>
  </>
  )
}

export default Projects
