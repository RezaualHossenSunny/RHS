import React from 'react'
import { GoProjectRoadmap } from "react-icons/go";

import react from '../assets/recetproject.png'
import telwind from '../assets/talwindprojecr.png'
import js from '../assets/game.png'


const Portfolio = () => {
  return (
    <div id='portfolio'>
        <div className='max-w-container mx-auto py-32'>

        <div className='flex justify-center'>
        <h1 className='text-center font-inter text-4xl font-bold leading-9 ' >PORTFOLIO</h1>
        <GoProjectRoadmap className='text-4xl mt-1 ml-2  text-comon'/>
        </div>
        <div  className='w-[300px] h-[3px] bg-gray-400 mx-auto mt-2 rounded-xl' ></div>

        {/* content */}
        <div className='mt-14 flex  justify-between'> 
        <div className='w-3/12'>
            <div className='border-2 border-gray-400 rounded-xl pb-3'>
             <img src={react} className='w-[300px] h-[250px]'  />
             <h1 className='font-lato text-center text-3xl font-semibold'>Chating App</h1>
             <h2 className='font-inter text-center text-1xl font-semibold'>Category:react Project</h2>
             <p className='font-inter text-center mt-4 text-lg font-normal ot-italic leading-6 text-[#717171]'>Technology :React js, tailwind css, Redux toolkit, Jwt,Firebase</p>
            
            <div className='flex justify-center mt-4'>
                <button href=''  className='p-4 bg-comon rounded-xl text-white font-inter font-bold w-[200px]'>Vew More</button>
            </div>
            </div>
        </div>

        <div className='w-3/12'>
            <div className='border-2 border-gray-400 rounded-xl pb-3'>
             <img src={telwind} className='w-[300px] h-[200px]'  />
             <h1 className='font-lato text-center text-3xl font-semibold mt-8'>Pettroial</h1>
             <h2 className='font-inter text-center text-1xl font-semibold'>Category: talwind Project</h2>
             <p className='font-inter text-center mt-4 text-lg font-normal ot-italic leading-6 text-[#717171]'>Technology :React js, tailwind css, figma</p>
            
            <div className='flex justify-center mt-8'>
                <button href=''  className='p-4 bg-comon rounded-xl text-white font-inter font-bold w-[200px]'>Vew More</button>
            </div>
            </div>
        </div>
        <div className='w-3/12'>
            <div className='border-2 border-gray-400 rounded-xl pb-3'>
             <img src={js} className='w-[300px] h-[200px]'  />
             <h1 className='font-lato text-center text-3xl font-semibold mt-8'>Game</h1>
             <h2 className='font-inter text-center text-1xl font-semibold'>Category: Javascript Project</h2>
             <p className='font-inter text-center mt-4 text-lg font-normal ot-italic leading-6 text-[#717171]'>Technology :JavaScript,  css, figma,html.css</p>
            
            <div className='flex justify-center mt-8'>
                <button href=''  className='p-4 bg-comon rounded-xl text-white font-inter font-bold w-[200px]'>Vew More</button>
            </div>
            </div>
        </div>
        </div>

{/* vewmore */}
<div className='flex justify-center mt-10'>
<button href='https://github.com/RezaualHossenSunny'  className='p-4 bg-gray-500 rounded-xl text-white font-inter font-bold w-[200px]  hover:bg-comon'>Vew More</button>
</div>
        
        </div>
    </div>
  )
}

export default Portfolio