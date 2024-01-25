import React from 'react';
import pdf from '../assets/Rhs.pdf'
const Navbar = () => {
  return (
    <>
        <div className='max-w-container  bg-[#F5F7FA] mx-auto py-7' >
       <div className='flex'>
        <div className='w-1/4 flex'>
          
            <h1 className='font-loto text-2xl  font-black text-comon ml-1 '>RHS</h1>
        </div>
        <div className='w-2/4 flex font-loto text-1xl not-italic font-medium  ml-[150px]'>
           <p className='  text-center '>ABOUT</p>
           <p className='pl-11 text-center'>SKILL</p>
           <p className='pl-11  text-center'>PORTFOLIO</p>
           <p className='pl-11 text-center'>CONTACT</p>
        </div>
        <div className='w-1/4 pl-11 '>
             <a href={pdf} download={pdf}>RESUME</a>
        </div>
       </div>
        </div>
    </>
  )
}

export default Navbar