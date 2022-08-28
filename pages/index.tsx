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
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="hero h-[85vh] flex items-center">
        <div className="flex flex-col">
          <h1 className="text-5xl font-extrabold leading-[65px]">I’m Susheel — a collaborative and <br/> solution-driven full-stack developer <br/> with over 7+ years of experience.</h1>
          <div className="my-[50px]">
            <button className="btn bg-[#111] px-10 py-5 rounded-full text-white hover:bg-[#161616] font-semibold"><GitHubIcon/> Visit LinkedIn</button>
            <button className="btn bg-[#fff] px-10 py-5 rounded-full text-black mx-5 hover:bg-[#e8e8e8] font-semibold"><LinkedInIcon/> Visit LinkedIn</button>
          </div>
        </div>
      </section>
      {/* Hero Section */}
      
      {/* Work Projects */}
      <section>
        <p className="font-light">Work Projects</p>
        <div className="flex flex-col">
          <div className="flex flex-row my-[50px]">
            <div className="pr-10">
              <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif'/>
              <h3 className="py-5">Pfizer</h3>
            </div>

            <div className="pl-10">
              <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif'/>
              <h3 className="py-5">Pfizer</h3>
            </div>
          </div>

          
          <div className="flex flex-row  my-[50px]">
            <div className="pr-10">
              <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif'/>
              <h3 className="py-5">Pfizer</h3>
            </div>

            <div className="pl-10">
              <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif'/>
              <h3 className="py-5">Pfizer</h3>
            </div>
          </div>

          <div className="flex flex-row  my-[50px]">
            <div className="pr-10">
              <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif'/>
              <h3 className="py-5">Pfizer</h3>
            </div>

            <div className="pl-10">
              <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif'/>
              <h3 className="py-5">Pfizer</h3>
            </div>
          </div>

        </div>
      </section>
      {/* Work Projects */}

      {/* About Me */}
      <section>
        <div className="w-screen h-[.3px] bg-[#242424] mt-[150px]"></div>
        <div className="pt-[150px] flex flex-row">
          <div className="w-1/2">
            <p className="font-light">About Me</p>
          </div>
          <div className="w-1/2">
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
      <div className="w-screen h-[.3px] bg-[#242424] mt-[150px]"></div>
      <div className="pt-[150px] pb-[150px] flex flex-row">
        <div className="w-1/2">
          <p className="font-light">Capabilities</p>
        </div>
        <div className="w-1/2">
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

      {/* Skills */}
      <section>
        <div className="w-screen h-[.3px] bg-[#242424] mt-[150px]"></div>
        <div className="pt-[150px] pb-[150px] flex flex-row">
          <div className="w-1/2">
            <p className="font-light">Awards</p>
          </div>
          <div className="w-1/2">
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
        <div className="w-screen h-[.3px] bg-[#242424] mt-[150px]"></div>
        <div className="pt-[150px] pb-[150px] flex flex-col items-center">
            <p className="font-light">Let's Connect</p>
            <h1 className="text-5xl font-extrabold text-white mt-5">developer.susheel@gmail.com</h1>
        </div>
        </section>
        {/* Connect */}

      {/* Connect */}
      <section>
        <div className="w-screen h-[.3px] bg-[#242424] mt-[80px]"></div>
        <div className="pt-[150px] pb-[150px] flex flex-row justify-between">
            <p className="font-bold text-white">@Susheel Kumar</p>
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
