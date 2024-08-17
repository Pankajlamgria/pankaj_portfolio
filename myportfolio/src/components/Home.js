import React from 'react';
import { GoDotFill } from "react-icons/go";
import "../home.css";
// import profile from "../media/profile.jpg"
import profile from "../media/second2.jpg";
import Typewriter from "./Typewriter";
import linkedin from "../media/linkedin.png";
// import linkedin from "../media/2142574_circle_colored_gradient_linkedin_media_icon.png";
import github from "../media/github.png";
// import github from "../media/6214513_github_logo_icon.png";
import instagram from "../media/2142569_circle_colored_gradient_instagram_media_icon.png";
import mail from "../media/7089163_gmail_google_icon.png";
// import mail from "../media/287692_mail_icon.png";
const Home = () => {
  const text = 'KNOW|MORE|'; 
  const characters = text.split('');
  const handleResumeDownload=()=>{
    window.open('https://drive.google.com/file/d/1dowxNbxjKQjwHuD-rW8CLhSydji7ZrgD/view?usp=sharing', '_blank');
  }
  const handleMoreToAbout=()=>{

  }
  const handleMail=()=>{
    const mailtoLink = `mailto:pankajlamgria@gmail.com?subject=Hire You &body=`;
    window.location.href = mailtoLink;
  }
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
      <div className='px-36 mt-10  ml-8 mr-2 rounded-1xl flex justify-between h-imgHeight'>
        {/* text Sec */}
        <div className='mt-10 h-full rounded pt-14 w-3/5 flex-col items-center '>
            <h1 className='text-4xl font-medium mb-1'>Hi!</h1>
            <h1 className='text-5xl font-medium mb-8'>I'm <span className='text-5xl font-semibold text-blue-100'>Pankaj Singh Lamgria</span></h1>
            <span className='text-2xl'>I'm a <Typewriter className='bg-slate-300'/></span>

            <div>
              <button className='h-11 w-40 mt-8 text-white bg-button flex  items-center justify-center text-xl font-bold border rounded-lg shadow-button_shadow hover:shadow-hover_shadow duration-700' onClick={handleResumeDownload}>Resume</button>
            </div>

        </div>

        {/* Image Sec */} 
        <div className='w-2/5 mt-5 flex justify-center items-center' >
            <img className="w-full h-full rounded-full shadow-img_shadow scale-90" src={profile} alt="" />
        </div>
      </div>
      <div className='ml-4 absolute top-32 left-8 z-10'>
        <div className='h-96 flex flex-col justify-around'>
          <button className='h-11 w-11 hover:shadow-hover_shadow hover:border hover:scale-125 duration-200 rounded-full p-1'><img onClick={handleMail} src={mail}/></button>
          <button className='h-11 w-11 hover:shadow-hover_shadow hover:border hover:scale-125 duration-200   rounded-full'><img onClick={()=>{window.open('https://www.linkedin.com/in/pankaj-singh-lamgria-97114b24b/', '_blank')}} src={linkedin}/></button>
          <button className='h-11 w-11 hover:shadow-hover_shadow hover:border hover:scale-125 duration-200 rounded-full'><img onClick={()=>{window.open('https://github.com/Pankajlamgria', '_blank')}} src={github}/></button>
          <button className='h-11a w-11 hover:shadow-hover_shadow hover:border hover:scale-125 duration-200 rounded-full' onClick={()=>{window.open('https://www.instagram.com/pankaj_lamgria_01/', '_blank');}}><img  src={instagram}/></button>
        </div>
      </div>
      <div className='bottom-8 absolute right-14 knowmoreCover cursor-pointer' onClick={handleMoreToAbout}>
          <div className="circle-container">
          <div className="circle">
            {characters.map((char, index) => (
              <span key={index} style={{ transform: `rotate(${index * (360 / characters.length)}deg)` }}>
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className='h-96'></div>
    </div>
  )
}

export default Home
