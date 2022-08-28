import type { NextPage } from 'next'
import Head from 'next/head'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="hero h-[85vh] flex items-center">
        <div className="flex flex-col">
          <h1 className="text-5xl font-extrabold leading-[65px]">I’m Susheel — a collaborative and <br/> solution-driven full-stack developer <br/> with over 7+ years of experience.</h1>
          <div className="my-[50px]">
            <button className="btn bg-[#111] px-10 py-5 rounded-full text-white hover:bg-[#161616] font-semibold"><GitHubIcon/> Visit LinkedIn</button>
            <button className="btn bg-[#fff] px-10 py-5 rounded-full text-black mx-5 hover:bg-[#e8e8e8] font-semibold"><LinkedInIcon/> Visit LinkedIn</button>
          </div>
        </div>
      </section>
      
      <section>
        <p className="font-light">Work Projects</p>
        <div className="flex flex-col">
          <div className="flex flex-row my-[50px]">
            <div className="pr-10">
              <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif'/>
              <h3 className="py-8">Pfizer</h3>
            </div>

            <div className="pl-10">
              <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif'/>
              <h3 className="py-8">Pfizer</h3>
            </div>
          </div>

          
          <div className="flex flex-row  my-[50px]">
            <div className="pr-10">
              <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif'/>
              <h3 className="py-8">Pfizer</h3>
            </div>

            <div className="pl-10">
              <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif'/>
              <h3 className="py-8">Pfizer</h3>
            </div>
          </div>

          <div className="flex flex-row  my-[50px]">
            <div className="pr-10">
              <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif'/>
              <h3 className="py-8">Pfizer</h3>
            </div>

            <div className="pl-10">
              <img src='https://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder-800x423.gif'/>
              <h3 className="py-8">Pfizer</h3>
            </div>
          </div>


        </div>
      </section>

    </>
  )
}

export default Home
