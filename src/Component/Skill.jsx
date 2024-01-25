import React from 'react'
import { FaFire } from "react-icons/fa";
const Skill = () => {
  return (
    <>
        <div className='max-w-container mx-auto py-10'>

        <div className='flex justify-center'>
        <h1 className='text-center font-inter text-4xl font-bold leading-9 ' >Skills  </h1>
        <FaFire className='text-4xl mt-1 ml-2  text-orange-400'/>
        </div>
        <div  className='w-[200px] h-[3px] bg-gray-500 mx-auto mt-2 rounded-xl' ></div>
 

      {/* content */}
    <div className='mt-10  flex justify-center'>
     <div className='w-1/5'></div>
    </div>



        </div>
    </>
  )
}

export default Skill