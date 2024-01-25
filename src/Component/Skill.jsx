import React from 'react'
import { FaFire } from "react-icons/fa";
import js from '../assets/js.svg'
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import figma from '../assets/figma.svg'
import talwind from '../assets/talwind.svg'
import recet from '../assets/react.svg'
import redux from '..//assets/redux.svg'
import firebase from '../assets/firebase.svg'
import express from '../assets/exprees.png'
import node from '../assets/node.png'
import api from '../assets/api.svg'
import next from '../assets/next.svg'
import mui from '../assets/mui.svg'
import ri from '../assets/intrei.svg'
import botstarp from '../assets/b.jpg'
const Skill = () => {
  return (
    <div id='skill'>
        <div className='max-w-container mx-auto py-24'>

        <div className='flex justify-center'>
        <h1 className='text-center font-inter text-4xl font-bold leading-9 ' >Skills  </h1>
        <FaFire className='text-4xl mt-1 ml-2  text-orange-400'/>
        </div>
        <div  className='w-[200px] h-[3px] bg-gray-500 mx-auto mt-2 rounded-xl' ></div>
 

      {/* content */}
    <div className='mt-10  flex justify-center'>
     <div className='w-1/5   '>
        <img src={html} className='rounded-full p-4   border-8 border-comon w-[150px]' />
     </div>
     <div className='w-1/5   '>
        <img src={css} className='rounded-full p-4   border-8 border-comon w-[150px]' />
     </div>
     <div className='w-1/5   '>
        <img src={js} className='rounded-full p-4  border-8 border-comon w-[150px]' />
     </div>
     <div className='w-1/5   '>
        <img src={figma} className='rounded-full p-4  border-8 border-comon w-[150px]' />
     </div>
     <div className='w-1/5   '>
        <img src={talwind} className='rounded-full p-4  border-8 border-comon w-[150px]' />
     </div>
    </div>
  {/* second */}
    <div className='mt-14  flex justify-center'>
     <div className='w-1/5   '>
        <img src={recet} className='rounded-full p-6   border-8 border-comon w-[150px]' />
     </div>
     <div className='w-1/5   '>
        <img src={redux} className='rounded-full p-6  border-8 border-comon w-[150px]' />
     </div>
     <div className='w-1/5   '>
        <img src={firebase} className='rounded-full p-4  border-8 border-comon w-[150px]' />
     </div>
     <div className='w-1/5   '>
        <img src={express} className='rounded-full p-4  border-8 border-comon w-[150px]' />
     </div>
     <div className='w-1/5   '>
        <img src={node} className='rounded-full p-6  border-8 border-comon w-[150px]' />
     </div>
    </div>
 {/* thrid */}
    <div className='mt-14  flex justify-center'>
     <div className='w-1/5   '>
        <img src={api} className='rounded-full p-4   border-8 border-comon w-[150px]' />
     </div>
     <div className='w-1/5   '>
        <img src={next} className='rounded-full p-4   border-8 border-comon w-[150px]' />
     </div>
     <div className='w-1/5   '>
        <img src={ri} className='rounded-full p-4   border-8 border-comon w-[150px]' />
     </div>
     <div className='w-1/5   '>
        <img src={mui} className='rounded-full p-4   border-8 border-comon w-[150px]' />
     </div>
     <div className='w-1/5   '>
        <img src={botstarp} className='rounded-full p-8   border-8 border-comon w-[150px]' />
     </div>
    </div>



        </div>
    </div>
  )
}

export default Skill