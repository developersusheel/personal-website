import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Hero() {
  return (
    <>
     <section className="hero h-[90vh] w-full xl:h-[85vh] md:h-[50vh] flex items-center">
        <div className="flex flex-col">
          <h1 className=" lg:text-6xl md:text-4xl sm:text-3xl text-3xl font-bold text-center xl:text-left md:text-center w-full leading-10 xl:leading-[80px] md:leading-[60px]">I’m Susheel — a collaborative and <br/> solution-driven full-stack developer <br/> with over 7+ years of experience.</h1>
          <div className="my-[50px] text-center xl:text-left md:text-center">
            <a href="https://github.com/developersusheel" target="_blank"><button className="btn bg-[#111] w-full xl:w-auto md:w-auto px-10 py-5 my-2 rounded-full text-white hover:bg-[#161616] font-semibold"><GitHubIcon/> Visit LinkedIn</button></a>
            <a href="https://www.linkedin.com/in/sueheeelkumar/" target="_blank"><button className="btn bg-[#fff] w-full xl:w-auto md:w-auto mx-0 xl:mx-5 md:mx-0 px-10 py-5 my-2 rounded-full text-black mx-0 hover:bg-[#e8e8e8] font-semibold mt-5 xl:mt-0 md:mt-0"><LinkedInIcon/> Visit LinkedIn</button></a>
          </div>
        </div>
      </section> 
    </>
  )
}

export default Hero
