import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";
import { IoMenu,IoLogoGithub,  } from "react-icons/io5"
import Ahmad from "./img/ahmad.jpg"
Import { FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Experience, Projects, SocialLinks } from "./data";



function App() {

  const [isActive, setisActive] = useState(false);
  const [accounts, setAccount] = useState([]);

  async function connect() {
    if(window.ethereum) {
      const account = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      setAccount(account);
    }
  }
  useEffect(() => {
    connect();
  },[]);


  return (
    <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
      {/* navbar*/}
      <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
        <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
          <p className="text-lg text-slate-200 font-medium">Ahmad auwal</p>

          <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
            <a href="#home" className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Home</a>
            <a href="#about" className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">About</a>
            <a href="#projects" className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Projects</a>
            <a href="#contact" className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Contact</a>
            <a href="#mint" className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Mint</a>
            <a href="#home" className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out">Connect Wallet</a>
          </div>
          <motion.div whileTap={{scale: 0.5}} className="block md:hidden ml-auto cursor-pointer" onClick={()=> setisActive(!isActive)}>
            <IoMenu className="text-2xl text-textBase" />
          </motion.div>

          {isActive && (
            <div className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6">
              <a href="#home" onClick={() => setisActive(false)} className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Home</a>
              <a href="#about" onClick={() => setisActive(false)} className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">About</a>
              <a href="#projects" onClick={() => setisActive(false)} className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Projects</a>
              <a href="#contact" onClick={() => setisActive(false)} className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Contact</a>
              <a href="#mint" onClick={() => setisActive(false)} className="text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Mint</a>
              <a href="#home" onClick={() => setisActive(false)} className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out">Connect Wallet</a>

            </div>
          )}
        </div>
      </nav>

      {/* home*/}
      <div className="relative" id="home">
        <Spline scene="https://draft.spline.design/1SIsKQFH-TVtEI-0/scene.spline" />

        <div className="absolute bottom-10 w-full justify-center items-center flex">
          <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl">
            <p className="text-textBase">Press and Drag to Orbit</p>
          </div>
        </div>
      </div>
      {/* main section*/}
      <main className="w-[80%] relative mt-5">
        {/* about section*/}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24" id="about">
          {/* img box*/}
          <div className="w-full h-420 flex items-center justify-center">
            <div className="w-275 h-340 bg-emerald-200 relative rounded-md">
              <img className="w-full h-full absolute object-cover shadow-md -right-4 top-4 rounded-lg" src={Ahmad} alt="" />
            </div>
          </div>

          {/* content */}
          <div className="w-full h-420 flex flex-col items-center justify-center">
            <p className="text-lg text-textBase text-center">
                Hi there,
                I`m Ahmad Auwal Abubakar,
                Certified Blockchain, Node Js, and also a self-thought Javascript Developer,
                With 3 years of Experience, I started my coding journey almost 6 years back at school,
                then as a kid, I was writing Java codes. I use Frameworks like React Js, Next Js, Openzeppelin, Ethers 
                and so much more. Coding is my Hobby,
                const i = coffee
                 !drink i.
            </p>
            <motion.button whileTap={{scale: 0.7}} class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
                <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Download
                </span>
            </motion.button>
          </div>
        </section>
        {/* timelin */}
        <section className="w-full  flex items-center  justify-center " >
          <VerticalTimeline>
            {
              Experience && Experience.map(n => (
                <VerticalTimelineElement
                key={n.id}
               className="vertical-timeline-element--work"
               contentStyle={{ background: 'rgb(21,24,31)', color: '#888' }}
               contentArrowStyle={{ borderRight: '7px solid  rgb(21,24,31)' }}
               date={n.date}
               iconStyle={{ background: 'rgb(21,24,31)', color: '#888' }}
               icon={n.iconsSrc}
             >
               <h3 className="vertical-timeline-element-title">{n.title}</h3>
               <h4 className="vertical-timeline-element-subtitle">{n.location}</h4>
               <p>
                 {n.description}
               </p>
             </VerticalTimelineElement>
              ))
            }
            
          </VerticalTimeline> 
        </section> 
        {/* Project section */}
        <section className=" w-full inset-x-0 flex flex-wrap items-center justify-evenly my-24 gap-4" id="projects">
          {Projects && Projects.map(n => (
          <div key={n.id} className="border border-zinc-800 rounded-md p-2 min-w-[300px] h-360 md:max-w-[300px] relative hover:border-zinc-600 duration-100 ease-in-out">
            <p className="text-lg text-textBase font-medium uppercase">{n.name}</p>
            <img src={n.imageSrc} alt="" className="w-full h-340 object-cover rounded-md my-4"/>
            <div className="flex flex-col-1 items-center justify-between">
              <p className="text-lg text-gray-300">Technologies <span className="block text-sm text-gray-500">{n.tech}</span></p>
              <div className="flex flex-col-1 items-center justify-between">
                <a href={n.github}>
                  <motion.div whileTap={{scale: 0.5}} className="">
                    <IoLogoGithub className="text-textBase text-3xl cursor-pointer"/>
                  </motion.div>
                </a>
                <a href={n.projectUrl}>
                  <motion.div whileTap={{scale: 0.5}} className="">
                    <FiExternalLink className="text-textBase text-3xl cursor-pointer"/>
                  </motion.div>
                </a>
              </div>
            </div>
          </div>
          ))}
          
        </section>
        {/* contact section */}
        <section id="contact" className="flex flex-col items-center justify-center w-full my-24">
          <p className="text-2xl text-gray-400 capitalize">Follow me on</p>
          <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
            {SocialLinks && SocialLinks.map(n => (
            <motion.a whileTap={{scale: 0.6}} key={n.id} href={n.link} className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3" >
              {n.iconSrc}
              <p className="text-lg text-textBase">{n.name}</p>
            </motion.a>
            ))}
          </div>
        </section>
        {/* contact section */}
        <section id="mint" className="w-full my-24 flex flex-col items-center justify-center">
          
        </section>
      </main> 
    </div>
  );
} 

export default App;
