import React, { useRef } from 'react'
import { CiCoffeeCup } from "react-icons/ci";
import emailjs from '@emailjs/browser'
const Contacet = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gkluxnz', 'template_hrl3cer', form.current, 'FTGPUQvpnDlYQeoZh')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div id='coontacet'>
    <div className='max-w-container mx-auto py-0 md:py-24'>
    <div className='flex justify-center'>
        <h1 className='text-center font-inter text-4xl font-bold leading-9 ' >CONTACT ME</h1>
        <CiCoffeeCup className='text-4xl mt-1 ml-2  text-orange-400'/>
        </div>
        <div  className='w-[300px] h-[3px] bg-gray-400 mx-auto mt-2 rounded-xl' ></div>
    <div className='md:flex py-4'>
        <div className='w-full md:w-2/4 text-center mt-2 md:mt-[180px]'>
            <p className='font-lato md:text-xl font-bold ot-italic leading-6 text-gray-700 '>
            I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.
            </p>
        </div>
        <div className='w-full md:w-2/4  text-center bg-comon rounded-2xl md:ml-3 pb-2'>
        <form ref={form} onSubmit={sendEmail}>
      <div className='p-4 '>
      <p className='font-inter text-xl font-black   '>Name  </p>
      <input type="text" name="user_name" className='w-[300px] md:w-[400px] h-[40px] px-14 py-4 border-2 border-gray-700 rounded-xl' />
      </div>
     <div>
     <p className='font-inter text-xl font-black  '>Email  </p>
      <input  type="email" name="user_email" className='w-[300px] md:w-[400px] h-[40px] px-14 py-4 border-2 border-gray-700 rounded-xl' />
     </div>
      <div className='mt-2'>
      <p className='font-inter text-xl font-black  '>Message</p>
      <textarea name="message"  className=' w-[300px] md:w-[400px] h-[130px] px-14 py-4 border-2 border-gray-700 rounded-xl'/>
      </div>
      <input className='bg-orange-400 p-4 w-[150px] rounded-lg font-bold text-1xl' type="submit" value="Send"  />
    </form>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Contacet