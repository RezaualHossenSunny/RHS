import React from 'react'
import { IoDesktopOutline } from "react-icons/io5";
import { FcRight } from "react-icons/fc";
const Whatido = () => {
  return (
    <div id='whatido'>
        <div className='max-w-container mx-auto mt-6 py-14 md:py-28' >
            <div  className='flex justify-center'>
            <h1 className='text-center font-inter text-4xl font-bold leading-9 ' >What I Do-? </h1>
            <IoDesktopOutline className='text-4xl mt-1 ml-2 text-comon' />
            </div>
            {/* broder */}
            <div  className='w-[300px] h-[3px] bg-gray-500 mx-auto mt-2 rounded-xl' ></div>

            {/* content */}

       <div className='bg-[#F5F7FA] mt-12  text-center '>
       <div className=' sm:flex justify-between'>
                <div className=' w-full md:w-1/4  border-2 border-gray-400 rounded-xl flex hover:bg-comon mt-2 md:mt-o'>
                  <FcRight  className='text-xl mt-1 hover:text-gray-500 ml-1 md:mt-4 lg:mt-0'/>
                 <p className='font-lato text-base md:text-sm lg:text-xl text-black ml-1 not-italic font-normal hover:text-white md:mt-4 lg:mt-0'>Prepare variety of different designs, layouts and websites</p>
                </div>
                <div className=' w-full md:w-1/4 border-2 border-gray-400 rounded-xl flex hover:bg-comon  mt-2 md:mt-o' >
                  <FcRight  className='text-xl mt-1 hover:text-gray-500 ml-1 md:mt-4 lg:mt-0'/>
                 <p className='font-lato  text-base md:tex-sm lg:text-xl text-black ml-1 not-italic font-normal hover:text-white md:mt-3 lg:mt-0'>i provide any web application with MERN Stack Development</p>
                </div>
                <div className='w-full md:w-1/4 border-2 border-gray-400 rounded-xl flex hover:bg-comon  mt-2 md:mt-o'>
                  <FcRight  className='text-xl mt-1 hover:text-gray-500 ml-1 md:mt-4 lg:mt-0'/>
                 <p className='font-lato  text-base md:text-sm lg:text-xl text-black ml-1 not-italic font-normal hover:text-white md:mt-4 lg:mt-0'>i provede mobile application for your business model</p>
                </div>
               
                
            </div>

            <div className=' sm:flex justify-between mt-0 md:mt-24 lg:mt-6'>

                <div className='w-full md:w-1/4  border-2 border-gray-400 rounded-xl flex hover:bg-gray-500 mt-2 md:mt-0 h-full md:h-[90px] lg:h-[110px]'>
                  <FcRight  className='text-xl mt-1 hover:text-comon ml-1 md:mt-4 lg:mt-0'/>
                 <p className='font-lato text-base md:text-sm lg:text-xl text-black ml-1 not-italic font-normal hover:text-white md:mt-4 lg:mt-0'>Convert graphic designs to usable web images using React JS</p>
                </div>

                <div className=' w-full md:w-1/4  border-2 border-gray-400 rounded-xl flex hover:bg-gray-500 mt-2 md:mt-0 h-full md:h-[90px] lg:h-[110px]'>
                  <FcRight  className='text-xl mt-1 hover:text-comon ml-1 md:mt-4 lg:mt-0'/>
                 <p className='font-lato text-base md:text-sm lg:text-xl text-black ml-1 not-italic font-normal hover:text-white md:mt-4 lg:mt-0'>Awesome ui provide for web application mobile application</p>
                </div>

                <div className='w-full md:w-[260px] lg:w-1/4  border-2 border-gray-400 rounded-xl flex hover:bg-gray-500 mt-2 md:mt-0 h-full md:h-[90px] lg:h-[110px] '>
                  <FcRight  className='text-xl mt-1 hover:text-comon ml-1 md:mt-4 lg:mt-0'/>
                 <p className='font-lato text-base md:text-sm lg:text-lg text-black ml-1 not-italic font-normal hover:text-white md:mt-4 lg:mt-0'>Actively listen to customers' requests, confirming full understanding before addressing concerns</p>
                </div>
            
               
                
            </div>
       </div>



        </div>
    </div>
  )
}

export default Whatido