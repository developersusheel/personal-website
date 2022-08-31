import React from 'react'

const Awards = () => {
  return (
    <>
      <section>
        <div className="w-screen h-[.3px] bg-[#242424] mt-[20px] xl:mt-[0px] md:mt-[0px]"></div>
        <div className="pt-[50px] xl:pt-[150px] md:pt-[100px] pb-[50px] xl:pb-[150px] md:pb-[100px] flex flex-col xl:flex-row md:flex-row sm:flex-col">
          <div className="w-full xl:w-1/2 md:xl:w-1/2">
            <p className="font-light">Awards & Certifications</p>
          </div>
          <div className="w-full xl:w-1/2 md:xl:w-1/2 mt-10 xl:mt-0 md:mt-10">
            <h3 className="font-bold text-white">Awards</h3>
            <p>2021 | Gold | Best Campaign in Not-For-Profit | Pratigya</p>
            <p>2021 | Gold | Best Digital Campaigns | BMGF</p>
            <p>2020 | Gold | Best Digital Campaign Targeting Millennials | Spectra</p>

            <h3 className="font-bold text-white mt-20">Certifications</h3>
            <p>2021 | Foundations of Project Management | Google</p>
            <p>2021 | Foundations of User Experience (UX)Design | Google</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Awards