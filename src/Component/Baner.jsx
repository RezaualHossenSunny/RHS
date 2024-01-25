import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import pdf from '../assets/Rhs.pdf';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
const Baner = () => {
  return (
    <>
        <div className='max-w-container mx-auto bg-[#F5F7FA] py-24'>
       <p className='text-4xl font-normal text-[#00CF5D] font-lato'>Hello! I am</p>
       <h1 className='font-lato text-6xl font-semibold not-italic leading-10 mt-2.5'>Rezaul Hossen Sunny</h1>
     <div className='font-lato mt-4  text-1xl font-semibold'>

     {/* type animation */}
    <TypeAnimation className='text-[#00CF5D] '
  sequence={[
    // Same substring at the start will only be typed once, initially
    
    1000,
    ' Computer Engineer',
    1000,
    'MERN  Stack Developer',
    1000,
    'Programmer',
    1000,
  ]}
  speed={50}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/>
</div>
{/* button */}
<div className='flex mt-8'>
<a className='py-4 px-5 bg-comon text-white font-bold text-loto text-sm rounded-lg items-center' href={pdf} download={pdf}>Get RESUME</a>


<a className='py-4 px-5  border border-comon font-bold text-loto text-sm rounded-lg items-center ml-8'>About Me</a>
</div>

{/* icon */}

 <div className='flex  mt-6'>
 <a href='https://github.com/RezaualHossenSunny' > <FaGithub className='text-4xl' /></a>
 <a href='https://www.linkedin.com/in/rezaulhossensunny'> <FaLinkedin className='text-4xl ml-3' /></a>
 <a href='https://www.facebook.com/Rezaualsunny'> <FaFacebookSquare className='text-4xl ml-3' /></a>

 </div>      
        </div>
    </>
  )
}

export default Baner