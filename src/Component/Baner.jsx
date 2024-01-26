import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import pdf from '../assets/Rhs.pdf';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-scroll";

const Baner = () => {
  return (
    <div>
        <div className='max-w-container mx-auto  py-24'>
       <p className='text-4xl font-normal text-[#00CF5D] font-lato mt-24'>Hello! I am</p>
       <h1 className='font-lato text-6xl font-semibold not-italic leading-10 mt-8'>Rezaul Hossen Sunny</h1>
     <div className='font-lato mt-4  text-1xl font-semibold'>

     {/* type animation */}
    <TypeAnimation className='text-[#00CF5D] mt-4 '
  sequence={[
    // Same substring at the start will only be typed once, initially
    'And I Am Computer Engineer',
   
    1000,
    'And I Am MERN  Stack Developer',
    1000,
    'And I Am  Programmer',
    1000,
  ]}
  speed={50}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/>
</div>
{/* button */}
<div className='flex mt-12'>
<a className='py-4 px-5 bg-comon text-white font-bold text-loto text-sm rounded-lg items-center' href={pdf} download={pdf}>Get RESUME</a>


<Link className='mt-4 ' smooth spy to="about">
<a className='py-4 px-5  border border-comon font-bold text-loto text-sm rounded-lg items-center ml-8'>About Me</a>
</Link>
</div>

{/* icon */}

 <div className='flex  mt-12'>
 <a href='https://github.com/RezaualHossenSunny' > <FaGithub className='text-4xl' /></a>
 <a href='https://www.linkedin.com/in/rezaulhossensunny'> <FaLinkedin className='text-4xl ml-3' /></a>
 <a href='https://www.facebook.com/Rezaualsunny'> <FaFacebookSquare className='text-4xl ml-3' /></a>

 </div>      
        </div>
    </div>
  )
}

export default Baner