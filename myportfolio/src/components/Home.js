import React from 'react';
import { GoDotFill } from "react-icons/go";
import "../home.css";
// import profile from "../media/profile.jpg"
import profile from "../media/second2.jpg";
import Typewriter from "./Typewriter";
const Home = () => {
  const words = [
    "Web Developer",
    "Machine Learning Enthusiast",
    "Competitive Programmer",
  ];    
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
      <div className='px-36 mt-10 flex justify-between h-imgHeight'>
        {/* text Sec */}
        <div className='mt-10 h-full border rounded pt-20 w-3/5 flex-col items-center '>
            <h1 className='text-5xl font-medium mb-8'>Hi, I am <span className='text-6xl font-bold'>Pankaj Singh Lamgria</span></h1>
            <h4 className='text-1xl'>a passionate <Typewriter words={words} speed={250} deleteSpeed={100} pauseTime={1000} /></h4>
        </div>

        {/* Image Sec */}
        <div className='w-2/5  mt-5 flex justify-center items-center'>
            <img className="w-4/5 h-4/5 rounded-full shadow-img_shadow" src={profile} alt="" />
        </div>

      </div>

    </div>
  )
}

export default Home
