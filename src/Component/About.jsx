import React from 'react'
import pdf from '../assets/Rhs.pdf';
import { FcManager } from "react-icons/fc";
import about from '../assets/About.jpg'
const About = () => {
  return (
    <div id='about'>
        <div className='max-w-container py-5 mx-auto flex'>
        <div className='w-3/5 '>
           <div className='flex'> 
           <h1 className='font-inter text-[28px] font-bold not-italic text-[#4D4D4D]'>About Me </h1>
            <FcManager className='text-4xl ml-3' />
           </div>
           <diV className="w-[200px] h-[2px] bg-slate-400"></diV>
           <div className='font-lato mt-4 text-lg font-normal ot-italic leading-6 text-[#717171]'>
            <p>I am able to solve complex logic or other tasks related to web development. I have a perfect understanding of how JavaScript, TypeScript, HTML, and CSS work. I have a lot of experience working with up-to-date technologies especially React JS. I have powerful knowledge HTML, CSS, SCSS, Bootstrap, Tailwind CSS, JavaScript ES6, TypeScript, ReactJS, NextJS, React Native, Redux, NodeJS, NPM, ExpressJS, MongoDB, PostMan, Webpack, Firebase, Figma, XD.</p>

            <p className='mt-2'>
            My favorite in this programming sector is to fix any Errors. Because in every error there is hope to learn something new. I won't quit until I can fix the error. In this programming life, I have tried to solve all kinds of problems and have succeeded. My policy is to stick with it until the problem is solved.
            </p>
           </div>
           {/* button */}
       <div className='flex mt-8'>
       <a className='py-4 px-5 bg-comon text-white font-bold text-loto text-sm rounded-lg items-center' href={pdf} download={pdf}>Get RESUME</a>


        <a className='py-4 px-5  border border-comon font-bold text-loto text-sm rounded-lg items-center ml-8 hover:bg-slate-400'>My Skill</a>
       </div>


        </div>
        <div  className='w-2/5'>
         <div className=' mt-10 ml-44 border-4  border-[#263238] rounded-xl'>
            <img src={about} />
         </div>
        </div>
        </div>
    </div>
  )
}

export default About