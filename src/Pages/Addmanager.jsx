import Sidebar from '../Components/Sidebar';
import React from 'react';
import { Link } from 'react-router-dom';

function Addmanager() {
  return (
    <>
      <div className='flex flex-row'>
        <Sidebar />
      </div>
      <div className='flex justify-center mt-8'>
        <section className="bg-white p-8 rounded-lg max-w-xl">
          <div className='flex flex-row'>
            <div className='flex flex-col mr-8'>
              <label className='text-black mb-3'>Enter manager email</label>
              <input type='text' className='mb-4 py-[5px] px-[10px] text-lg border-gray-200 border-2 rounded-md text-white'></input>
            </div>
            <div className='flex flex-col'>
              <label className='text-black mb-3'>Enter manager Password</label>
              <input type='text' className='mb-4 py-[5px] px-[10px] text-lg border-gray-200 border-2 rounded-md text-white'></input>
            </div>
          </div>
          <div className='flex flex-col'>
            <label className='text-black mb-3'>Subject</label>
            <input type='text' className='mb-4 py-[5px] px-[10px] text-lg border-gray-200 border-2 rounded-md text-white'></input>
            <label className='text-black mb-3'>Message</label>
            <textarea rows={6} placeholder='Type your message here' className='mb-4 py-[5px] px-[10px] text-lg border-gray-200 border-2 rounded-md text-white' />
           <Link to="/admin/viewmanager"> <button className='btn text-white border-2 p-4 rounded-md bg-red-500'>Submit</button></Link>
          </div>
        </section>
      </div>
    </>
  );
}
export default Addmanager;
