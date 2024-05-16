import Sidebar from '../Components/Sidebar'
import React from 'react'


function Contact() {
  return (
    <><div className='flex flex-row'>
      <Sidebar/>
      </div>
      <div>
      <section className=" mx-auto w-[50%] ml-[20%] bg-white">
        
        
        <div className='bg-white flex flex-col py-5 px-4 max-w-[600px]'>
          <label className='text-black mb-3'>Your name</label>
          <input type='text' className='mb-4 py-[5px] px-[10px] text-lg  border-gray-200 border-2 rounded-md text-white'></input>
          <label className='text-black mb-3' >Enter Email</label>
          <input type='text' className='mb-4 py-[5px] px-[10px] text-lg border-gray-200 border-2 rounded-md text-white'></input>
          <label className='text-black mb-3'> Subject</label>
          <input type='text' className='mb-4 py-[5px] px-[10px] text-lg border-gray-200 border-2 rounded-md text-white'></input>
          <label className='text-black mb-3'> Message</label>
          <textarea rows={6}  placeholder='Type your message here' className='mb-4 py-[5px] px-[10px] text-lg border-gray-200 border-2  rounded-md  text-white'/>

          <button className='btn text-white border-2 p-4 rounded-md bg-red-500'>Submit</button>
          


        </div>
      </section>
    </div>
  
    </>

  )
}

export default Contact
