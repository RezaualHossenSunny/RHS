import React from 'react'
import { CiCoffeeCup } from "react-icons/ci";
const Contacet = () => {
  return (
    <>
    <div className='max-w-container mx-auto py-18'>
    <div className='flex justify-center'>
        <h1 className='text-center font-inter text-4xl font-bold leading-9 ' >CONTACT ME</h1>
        <CiCoffeeCup className='text-4xl mt-1 ml-2  text-orange-400'/>
        </div>
        <div  className='w-[300px] h-[3px] bg-gray-400 mx-auto mt-2 rounded-xl' ></div>
    <div className='flex py-4'>
        <div className='w-2/4 text-center'>
            <p className='font-lato mt-4 text-xl font-bold ot-italic leading-6 text-gray-700 '>
            I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.
            </p>
        </div>
        <div className='w-2/4  text-center'>
ccc
        </div>
    </div>
    </div>
    </>
  )
}

export default Contacet