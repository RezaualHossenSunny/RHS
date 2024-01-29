import React from 'react';
import pdf from '../assets/Rhs.pdf'
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className='w-full fixed bg-slate-200'>
        <div className='max-w-container static  mx-auto py-6 ' >
       
       <nav className="bg-slate-200 navbar">
  <div className="container mx-auto lg:navbar-container relative">
  <h1 className='font-loto text-2xl  font-black text-comon ml-1 '>RHS</h1>
      <label
        for="toggle-btn"
        className="toggle-btn-responsive lg:toggle-btn "
      >
        &#8801;
      </label>
      <input id="toggle-btn" type="checkbox" hidden />
      <div className="navbar-responsive lg:navbar-desktop">
        <ul>
          <li
            tabIndex={0}
            className="dropdown-container-mobile lg:dropdown-container-dekstop"
          >
             <Link smooth spy to="about">
      <p className='  text-center font-semibold  hover:font-bold hover:text-slate-700'>ABOUT</p>
      </Link>
            
          </li>
          <li>
          <Link smooth spy to="whatido">
         <p className='pl-4  text-center font-semibold   hover:font-bold  hover:text-slate-700'>WHAT I Do?</p>
         </Link>
          </li>
          <li>
          <Link smooth spy to="skill">
         <p className='pl-4 text-center font-semibold  hover:font-bold hover:text-slate-700'>SKILL</p>

         </Link>
          </li>
          <li>
          <Link smooth spy to="portfolio">
          <p className='pl-4  text-center font-semibold   hover:font-bold hover:text-slate-700 '>PORTFOLIO</p>
          </Link>
          </li>
          <li>
          <Link smooth spy to="coontacet">
          <p className='pl-4 text-center font-semibold hover:text-slate-700  hover:font-bold'>CONTACT</p>
          </Link>
          </li>
        </ul>
        <div className=' mt-4 md:mt-0  ml-32  md:ml-0 '>
         
          <a className='py-2.5 px-5 text-center bg-comon text-white font-bold text-loto text-sm rounded-lg  ' href={pdf} download={pdf}>RESUME</a>
        </div>
      </div>
  </div>
</nav>
        </div>
 
    </div>
  )
}

export default Navbar