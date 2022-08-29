import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';


function Footer() {
  return (
    <>
    <div>
      <section>
        <div className="w-screen h-[.3px] bg-[#242424] mt-[20px] xl:mt-[0px] md:mt-[0px]"></div>
        <div className="pt-[50px] xl:pt-[100px] md:pt-[100px] sm:pt-[150px] pb-[50px] xl:pb-[100px] md:pb-[100px] sm:pb-[150px] flex flex-col items-center">
            <p className="font-light">Let's Connect</p>
            <h1 className="text-2xl xl:text-5xl md:text-4xl sm:text-3xl font-extrabold text-white mt-5">developer.susheel@gmail.com</h1>
        </div>
        </section>

      <section>
        <div className="w-screen h-[.3px] bg-[#242424] mt-[20px] xl:mt-[80px] sm:md-[50px]"></div>
        <div className="pt-[50px] xl:pt-[80px] md:pt-[100px] pb-[50px] xl:pb-[80px] md:pb-[100px] flex flex-row justify-between">
            <p className="font-bold text-white cursor-pointer">@Susheel Kumar</p>
            <ul className="flex space-x-5">
              <li className="text-white"><LinkedInIcon/></li>
              <li className="text-white"><GitHubIcon/></li>
              <li className="text-white"><InstagramIcon/></li>
            </ul>
        </div>
      </section>
    </div>
    <div className="w-full h-[10px] bg-white"></div>
    </>
  )
}

export default Footer