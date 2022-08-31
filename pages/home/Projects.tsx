import React from 'react'

const Projects = () => {
  return (
    <>
      <section className="w-full">
        <p className="font-light text-[14px]">Work Projects</p>
        <div className="flex flex-col w-full hero">
         
          <div className="flex flex-col xl:flex-row md:flex-col mt-10 my-[0px] w-full">
            <div className="pr-0 xl:pr-10 md:pr-0 w-full xl:w-1/2 md:xl:w-1/2">
              <a href="/mtp-provider">
                <img src='./assets/organic.png' className="w-full border rounded-[20px]"/>
                <h3 className="py-10 text-[20px]">Organic</h3>
              </a>
            </div>

            <div className="pl-0 xl:pl-10 md:pl-0 w-full xl:w-1/2 md:xl:w-1/2 mt-[30px] xl:mt-[0px] md:mt-[0px] mb-[30px] xl:mb-[0px] md:mb-[0px]">
              <a href="/mtp-provider">
              <img src='./assets/pfizer.png' className="w-full border rounded-[20px]"/>
                <h3 className="py-10 text-[20px]">Pfizer</h3>  
               </a>
            </div>
          </div>

          
          <div className="flex flex-col xl:flex-row md:flex-col my-[0px] xl:my-[50px] w-full">
            <div className="pr-0 xl:pr-10 md:pr-0 w-full xl:w-1/2 md:xl:w-1/2">
              <a href="/mtp-provider">
              <img src='./assets/cryamerica.png' className="w-full border rounded-[20px]"/>
                <h3 className="py-10 text-[20px]">CRY America</h3>  
               </a>
            </div>

            <div className="pl-0 xl:pl-10 md:pl-0 w-full xl:w-1/2 md:xl:w-1/2 mt-[30px] xl:mt-[0px] md:mt-[0px] mb-[30px] xl:mb-[0px] md:mb-[0px]">
              <a href="/mtp-provider">
              <img src='./assets/mtp-provider.png' className="w-full border rounded-[20px]"/>
              <h3 className="py-10 text-[20px]">MTP Provider</h3>  
               </a>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row md:flex-col my-[0px] xl:my-[50px] w-full">
          <div className="pr-0 xl:pr-5 md:pr-0 w-full xl:w-1/2 md:xl:w-1/2">
            <a href="/mtp-provider">
                <img src='./assets/upes-tinder-cards.png' className="w-full border rounded-[20px]"/>
                <h3 className="py-10 text-[20px]">UPES - Tinder Cards</h3>  
              </a>
            </div>

            <div className="pl-0 xl:pl-5 md:pl-0 w-full xl:w-1/2 md:xl:w-1/2 mt-[30px] xl:mt-[0px] md:mt-[0px] mb-[30px] xl:mb-[0px] md:mb-[0px]">
              <a href="/mtp-provider">
              <img src='./assets/tpt.png' className="w-full border rounded-[20px]"/>
              <h3 className="py-10 text-[20px]">Time Passion Trail</h3>  
               </a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Projects