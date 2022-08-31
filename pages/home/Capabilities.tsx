import React from 'react'

const Capabilities = () => {
  return (
    <>
     <section>
      <div className="w-screen h-[.3px] bg-[#242424] mt-[20px] xl:mt-[0px] md:mt-[0px]"></div>
      <div className="pt-[50px] xl:pt-[150px] md:pt-[100px] pb-[50px] xl:pb-[150px] md:pb-[100px] flex flex-col xl:flex-row md:flex-row sm:flex-col">
        <div className="w-full xl:w-1/2 md:xl:w-1/2">
            <p className="font-light">Capabilities</p>
        </div>
        <div className="w-full xl:w-1/2 md:xl:w-1/2 mt-10 xl:mt-0 md:mt-10">
          

          <h3 className="font-bold text-white">Skills</h3>
          <p>ReactJs, NodeJs, Express, JavaScript, MongoDB, GSAP, SCSS, HTML5, CSS3, Unit Testing, PHP, Shopify, Custom WordPress, AR Filters, React Native</p>

          <h3 className="font-bold text-white mt-20">Tools</h3>
          <p>Git, Gulp, Docker, Figma, Adobe Photoshop, AI, AdobeXD, Balasmiq, AR Spark</p>

          <h3 className="font-bold text-white mt-20">Methodologies</h3>
          <p>Agile, Kanban, Waterfall, Scrum</p>
        </div>
      </div>
    </section> 
    </>
  )
}

export default Capabilities
