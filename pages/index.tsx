import type { NextPage } from 'next'
import Head from 'next/head'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const Home: NextPage = () => {
  return (
    <>
    <div>
      <Head>
        <title>Susheel Kumar | Mern Stack Developer with 7+ years of experience</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,400&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero Section */}
      <section className="hero h-[90vh] w-full xl:h-[85vh] md:h-[50vh] flex items-center">
        <div className="flex flex-col">
          <h1 className=" lg:text-7xl md:text-4xl sm:text-3xl text-3xl font-bold text-center xl:text-left md:text-center w-full leading-10 xl:leading-[80px] md:leading-[60px]">I’m Susheel — a collaborative and <br/> solution-driven full-stack developer <br/> with over 7+ years of experience.</h1>
          <div className="my-[50px] text-center xl:text-left md:text-center">
            <button className="btn bg-[#111] w-full xl:w-auto md:w-auto px-10 py-5 my-2 rounded-full text-white hover:bg-[#161616] font-semibold"><GitHubIcon/> Visit LinkedIn</button>
            <button className="btn bg-[#fff] w-full xl:w-auto md:w-auto mx-0 xl:mx-5 md:mx-0 px-10 py-5 my-2 rounded-full text-black mx-0 hover:bg-[#e8e8e8] font-semibold mt-5 xl:mt-0 md:mt-0"><LinkedInIcon/> Visit LinkedIn</button>
          </div>
        </div>
      </section>
      {/* Hero Section */}
      
      {/* Work Projects */}
      <section className="w-full">
        <p className="font-light">Work Projects</p>
        <div className="flex flex-col w-full">
         
          <div className="flex flex-col xl:flex-row md:flex-col mt-10 my-[0px] w-full">
            <div className="pr-0 xl:pr-5 md:pr-0 w-full xl:w-1/2 md:xl:w-1/2">
              <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif' className="w-full"/>
              <h3 className="py-3">Pfizer</h3>
            </div>

            <div className="pl-0 xl:pl-5 md:pl-0 w-full xl:w-1/2 md:xl:w-1/2 mt-[30px] xl:mt-[0px] md:mt-[0px] mb-[30px] xl:mb-[0px] md:mb-[0px]">
              <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif' className="w-full"/>
              <h3 className="py-3">Pfizer</h3>
            </div>
          </div>

          
          <div className="flex flex-col xl:flex-row md:flex-col my-[0px] xl:my-[50px] w-full">
            <div className="pr-0 xl:pr-5 md:pr-0 w-full xl:w-1/2 md:xl:w-1/2">
              <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif' className="w-full"/>
              <h3 className="py-3">Pfizer</h3>
            </div>

            <div className="pl-0 xl:pl-5 md:pl-0 w-full xl:w-1/2 md:xl:w-1/2 mt-[30px] xl:mt-[0px] md:mt-[0px] mb-[30px] xl:mb-[0px] md:mb-[0px]">
              <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif' className="w-full"/>
              <h3 className="py-3">Pfizer</h3>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row md:flex-col my-[0px] xl:my-[50px] w-full">
          <div className="pr-0 xl:pr-5 md:pr-0 w-full xl:w-1/2 md:xl:w-1/2">
              <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif' className="w-full"/>
              <h3 className="py-3">Pfizer</h3>
            </div>

            <div className="pl-0 xl:pl-5 md:pl-0 w-full xl:w-1/2 md:xl:w-1/2 mt-[30px] xl:mt-[0px] md:mt-[0px] mb-[30px] xl:mb-[0px] md:mb-[0px]">
              <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif' className="w-full"/>
              <h3 className="py-3">Pfizer</h3>
            </div>
          </div>

        </div>
      </section>
      {/* Work Projects */}

      {/* About Me */}
      <section>
        <div className="w-screen h-[.3px] bg-[#242424] mt-[20px] xl:mt-[150px] md:mt-[100px]"></div>
        <div className="pt-[50px] xl:pt-[150px] md:pt-[100px] pb-[50px] xl:pb-[150px] md:pb-[100px] flex flex-col xl:flex-row md:flex-row sm:flex-col">
        <div className="w-full xl:w-1/2 md:xl:w-1/2">
            <p className="font-light">About Me</p>
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
      {/* About Me */}


      {/* Skills */}
        <section>
      <div className="w-screen h-[.3px] bg-[#242424] mt-[20px] xl:mt-[0px] md:mt-[0px]"></div>
      <div className="pt-[50px] xl:pt-[150px] md:pt-[100px] pb-[50px] xl:pb-[150px] md:pb-[100px] flex flex-col xl:flex-row md:flex-row sm:flex-col">
      <div className="w-full xl:w-1/2 md:xl:w-1/2">
          <p className="font-light">Capabilities</p>
        </div>
        <div className="w-full xl:w-1/2 md:xl:w-1/2 mt-10 xl:mt-0 md:mt-10">
          <p className="">I am a collaborative and solution-driven technology manager with over 7 years of experience working with designers, developers,  and, programmers.</p>
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
      {/* Skills */}

      {/* Skills */}
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
        {/* Skills */}

      {/* Connect */}
      <section>
        <div className="w-screen h-[.3px] bg-[#242424] mt-[20px] xl:mt-[0px] md:mt-[0px]"></div>
        <div className="pt-[50px] xl:pt-[100px] md:pt-[100px] sm:pt-[150px] pb-[50px] xl:pb-[100px] md:pb-[100px] sm:pb-[150px] flex flex-col items-center">
            <p className="font-light">Let's Connect</p>
            <h1 className="text-2xl xl:text-5xl md:text-4xl sm:text-3xl font-extrabold text-white mt-5">developer.susheel@gmail.com</h1>
        </div>
        </section>
        {/* Connect */}

      {/* Connect */}
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
      {/* Connect */}

    </div>
    <div className="w-full h-[10px] bg-white"></div>
    </>
  )
}

export default Home
