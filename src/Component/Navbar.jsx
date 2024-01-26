import React from 'react';
import pdf from '../assets/Rhs.pdf'
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className='w-full fixed bg-slate-200'>
        <div className='max-w-container static  mx-auto py-8 ' >
       <div className='flex'>
        <div className='w-1/4 flex'>
          
            <h1 className='font-loto text-2xl  font-black text-comon ml-1 '>RHS</h1>
        </div>
        <div className='w-2/4 flex font-loto text-1xl not-italic font-medium '>
      <Link smooth spy to="about">
      <p className='  text-center  hover:text-2xl '>ABOUT</p>
      </Link>
         <Link smooth spy to="whatido">
         <p className='pl-11  text-center  hover:text-2xl  '>WHAT I Do?</p>
         </Link>
         <Link smooth spy to="skill">
         <p className='pl-11 text-center hover:text-2xl '>SKILL</p>

         </Link>
          <Link smooth spy to="portfolio">
          <p className='pl-11  text-center  hover:text-2xl '>PORTFOLIO</p>
          </Link>
          <Link smooth spy to="coontacet">
          <p className='pl-11 text-center  hover:text-2xl'>CONTACT</p>
          </Link>
        </div>
        <div className='w-1/4 pl-14  flex justify-end '>
             <a className='py-2.5 px-5 bg-comon text-white font-bold text-loto text-sm rounded-lg items-center' href={pdf} download={pdf}>RESUME</a>
        </div>
       </div>
        </div>
    </div>
  )
}

export default Navbar