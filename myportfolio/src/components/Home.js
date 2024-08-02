import React from 'react'
import { GoDotFill } from "react-icons/go";
import "../home.css";
import profile from "../media/profile.jpg"
const Home = () => {
  return (
    <div>
      <div className='flex justify-between items-center px-5 h-16 '>
        <div className='text-3xl mx-10 '><div className='bubble'></div><div className='relative z-10 cursor-pointer hover:text-secondary duration-100'>PANKAJ</div></div>
        <div className='text-base'>
            <ul className='flex justify-around w-auto items-center px-9 mx-10'>
                <li className="text-gray-200">Developer</li>
                <div className='mx-10 w-100 border rounded-full h-10 align-middle justify-between flex items-center cursor-pointer px-4 overflow-hidden shadow-button_shadow'><div className='text-green-500 mx-1 '><GoDotFill/></div>Avialable for Work</div>
            </ul>
        </div>
      </div>
      <div className='px-36 flex justify-between' >
        {/* Image Sec */}
        <div className='h-1/2 w-1/2 mt-5 border overflow-hidden rounded shadow-lg'>
            <img className="w-full h-full" src={profile} alt="" />
        </div>

        {/* text Sec */}
        <div className='mt-5 border rounded flex-col items-center w-1/2 bg-pink-50'>
            <p>FULLSTACK WEB & ML DEVELOPER</p>
        </div>
      </div>

    </div>
  )
}

export default Home
