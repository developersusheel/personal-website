import React from 'react'

const Awards = () => {
  return (
    <>
      <section>
        <div className="w-screen h-[.3px] bg-[#242424] mt-[20px] xl:mt-[0px] md:mt-[0px]"></div>
        <div className="pt-[50px] xl:pt-[150px] md:pt-[100px] pb-[50px] xl:pb-[150px] md:pb-[100px] flex flex-col xl:flex-row md:flex-row sm:flex-col">
          <div className="w-full xl:w-1/2 md:xl:w-1/2">
            <p className="font-light">Awards</p>
          </div>
          <div className="w-full xl:w-1/2 md:xl:w-1/2 mt-10 xl:mt-0 md:mt-10">
            <p>I am a collaborative and solution-driven technology manager with over 7 years of experience working with designers, developers,  and, programmers.</p>
            <p className="pt-10 pb-10">I apply my technical skills to develop applications and systems along with contributing to the team in a way that positively impacts the organisation and clients.</p>

            <h3 className="font-bold text-white">Key Expertise</h3>
            <ul className="mt-3 list-disc	pl-3 space-y-1">
              <li>Build Scalable Design Team And Collaborative Processes</li>
              <li>Quick User Research & Testing</li>
              <li>Conversion-Oriented Digital User Experiences </li>
              <li>Large Design Systems, Documenting Interfaces</li>
              <li>Deep development understanding</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Awards