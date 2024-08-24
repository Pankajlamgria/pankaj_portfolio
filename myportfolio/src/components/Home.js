import React from "react";
import { GoDotFill } from "react-icons/go";
import "../home.css";
import profile from "../media/second2.jpg";
import Typewriter from "./Typewriter";
import linkedin from "../media/linkedin.png";
import github from "../media/github.png";
import instagram from "../media/2142569_circle_colored_gradient_instagram_media_icon.png";
import mail from "../media/7089163_gmail_google_icon.png";
import kidimg from "../media/kid.jpg";
import schoolKid from "../media/school.jpg";
import coder from "../media/coder.jpg";
import cplusplus from "../media/c++.png";
import c from "../media/C.png";
import python from "../media/Python.png";
import javascript from "../media/JavaScript.png";
import tailwind from "../media/Tailwind CSS.png";
import react from "../media/React.png";
import css from "../media/CSS3.png";
import mysql from "../media/MySQL.png";
import mongodb from "../media/MongoDB.png";
import firebase from "../media/Firebase.png";
import tensorflow from "../media/TensorFlow.png";
import bootstrap  from "../media/Bootstrap.png";


const Home = () => {
  const text = "KNOW|MORE|";
  const characters = text.split("");
  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1wgGH1M_tYxn7pSGIsRvDZUO-uPtEAwv7/view?usp=drive_link",
      "_blank"
    );
  };
  const handleMoreToAbout = () => {};
  const handleMail = () => {
    const mailtoLink = `mailto:pankajlamgria@gmail.com?subject=Hire You &body=`;
    window.location.href = mailtoLink;
  };
  return (
    <div>
      <div className="flex justify-between items-center px-5 h-16 ">
        <div className="text-3xl mx-10 ">
          <div className="bubble"></div>
          <div className="relative z-10 cursor-pointer hover:text-secondary duration-100">
            PANKAJ
          </div>
        </div>
        <div className="text-base">
          <ul className="flex justify-around w-auto items-center px-9 mx-10">
            <li className="text-gray-200">Developer</li>
            <div className="mx-10 w-100 border rounded-full h-10 align-middle justify-between flex items-center cursor-pointer px-4 overflow-hidden shadow-button_shadow">
              <div className="text-green-500 mx-1 ">
                <GoDotFill />
              </div>
              Avialable for Work
            </div>
          </ul>
        </div>
      </div>
      <div className="px-36 mt-20  ml-8 mr-2 rounded-1xl flex justify-between h-imgHeight">
        {/* text Sec */}
        <div className="mt-10 h-full rounded pt-14 w-3/5 flex-col items-center ">
          <h1 className="text-4xl font-medium mb-1">Hi!</h1>
          <h1 className="text-5xl font-medium mb-8">
            I'm{" "}
            <span className="text-5xl font-semibold text-blue-100">
              Pankaj Singh Lamgria
            </span>
          </h1>
          <span className="text-2xl">
            I'm a <Typewriter className="bg-slate-300" />
          </span>

          <div>
            <button
              className="h-11 w-40 mt-8 text-white bg-button flex  items-center justify-center text-xl font-bold border rounded-lg shadow-button_shadow hover:shadow-hover_shadow duration-700"
              onClick={handleResumeDownload}
            >
              Resume
            </button>
          </div>
        </div>

        {/* Image Sec */}
        <div className="w-2/5 mt-5 flex justify-center items-center">
          <img
            className="w-full max-h-full rounded-full shadow-img_shadow scale-90"
            src={profile}
            alt=""
          />
        </div>
      </div>
      <div className="ml-4 absolute top-44 left-8 z-10">
        <div className="h-96 flex flex-col justify-around">
          <button className="h-11 w-11 hover:shadow-hover_shadow hover:border hover:scale-125 duration-200 rounded-full p-1">
            <img onClick={handleMail} src={mail} />
          </button>
          <button className="h-11 w-11 hover:shadow-hover_shadow hover:border hover:scale-125 duration-200   rounded-full">
            <img
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/pankaj-singh-lamgria-97114b24b/",
                  "_blank"
                );
              }}
              src={linkedin}
            />
          </button>
          <button className="h-11 w-11 hover:shadow-hover_shadow hover:border hover:scale-125 duration-200 rounded-full">
            <img
              onClick={() => {
                window.open("https://github.com/Pankajlamgria", "_blank");
              }}
              src={github}
            />
          </button>
          <button
            className="h-11a w-11 hover:shadow-hover_shadow hover:border hover:scale-125 duration-200 rounded-full"
            onClick={() => {
              window.open(
                "https://www.instagram.com/pankaj_lamgria_01/",
                "_blank"
              );
            }}
          >
            <img src={instagram} />
          </button>
        </div>
      </div>
      <div
        className="bottom-8 absolute right-14 knowmoreCover cursor-pointer"
        onClick={handleMoreToAbout}
      >
        <div className="circle-container">
          <div className="circle">
            {characters.map((char, index) => (
              <span
                key={index}
                style={{
                  transform: `rotate(${index * (360 / characters.length)}deg)`,
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="h-auto mt-36 mx-32 flex mb-32">
        <div className="TextArea w-2/3 p-5 pr-10 mb-40">
          <span className="text-5xl  text-text drop-shadow-3xl cursor-pointer hover:underline duration-200">
            My Journey
          </span>
          <h2 className="text-lg mt-24 text-left text-gray-300">
            I am a 19-year-old student pursuing a Bachelor of Technology in
            Computer Science and Engineering at Graphic Era Hill University,
            Dehradun. With a strong passion for{" "}
            <b className="text-white">web development</b>,{" "}
            <b className="text-white">machine learning</b>, and{" "}
            <b className="text-white">competitive programming</b>, I'm always
            exploring new ways to create impactful solutions.
          </h2>

          <h2 className="text-lg mt-5 text-left text-gray-300">
            Some of my key projects include a web application for the Joining
            the Dots Foundation, aimed at streamlining online class management
            for girls, and a full-stack music app that allows users to stream
            and manage their music. Additionally, I've built an 8085
            Microprocessor Simulator and a chatbot for my university, both of
            which deepened my understanding of software development.
          </h2>

          <h2 className="text-lg mt-5 text-left text-gray-300">
            I had the privilege of being part of{" "}
            <b className="text-white">JP Morgan's Code for Good 2024</b>, where
            I worked on a social good project. In competitive programming,{" "}
            <b className="text-white">
              I've secured a global rank of 245 in a Leetcode contest and
              achieved strong ratings on various platforms
            </b>
            .
          </h2>
          <h2 className="text-lg mt-5 text-left text-gray-300">
            With expertise in languages like C/C++, Python, Java, and frameworks
            like React and Node.js, I’m excited to continue growing as a
            software developer and contributing to real-world projects.
          </h2>
        </div>
        <div className="animation w-1/3 mt-12 mb-24  h-auto relative z-1">
          <div className="VerticalLine">
            <div className="w-2 h-full bg-white absolute left-8"></div>
            <div className="group">
              <div className="absolute flex border rounded-md p-4 justify-around left-28 top-16 opacity-0 scale-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-100">
                {/* Born status */}
                <div className="imgSec w-1/3 rounded-md overflow-hidden">
                  <img src={kidimg} className="w-full h-full" />
                </div>
                <div className="w-2/3">
                  <p className="text-xl ml-2 shadow-sm drop-shadow-3xl ">
                    Born in <b>19 Aug 2004</b> in Dehradun
                  </p>
                </div>
              </div>
              <div className="h-7 w-7 bg-background left-6 z-2 absolute   top-1/4 rounded-full flex justify-center items-center">
                <button className="h-5 w-5 bg-white shadow-xl hover:shadow-gray-50 rounded-full"></button>
              </div>
            </div>

            <div className="group">
              <div className="absolute h-64 w-96 flex border rounded-md p-4 justify-around left-28 top-48 opacity-0 scale-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-100">
                {/* Born status */}
                <div className="imgSec w-1/3 rounded-md overflow-hidden">
                  <img src={schoolKid} className="w-full h-full scale-125 scale-x-150" />
                </div>
                <div className="w-2/3"> 
                  <p className="text-lg ml-2 shadow-sm drop-shadow-3xl ">
                    I completed my schooling at Kendriya Vidyalaya Birpur, Dehradun, in <i>2022</i>, where I was first introduced to <i>programming </i>through <b>Python</b> in the 11th grade.
                  </p>
                </div>
              </div>
              <div className="h-7 w-7 bg-background left-6 z-2 absolute  top-2/4 rounded-full flex justify-center items-center">
                <button className="h-5 w-5 bg-white shadow-xl hover:shadow-gray-50 rounded-full"></button>
              </div>
            </div>

            <div className="group">
              <div className="absolute w-96 flex border rounded-md p-4 justify-around left-24 top-80 opacity-0 scale-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-100">
                {/* Born status */}
                <div className="imgSec w-1/3 rounded-md overflow-hidden">
                  <img src={coder} className="w-full h-full" />
                </div>
                <div className="w-2/3">
                  <p className="text-lg ml-2 shadow-sm drop-shadow-3xl ">
                  I started my BTech in CSE at Graphic Era Hill University in 2022 and I'm currently in my 5th semester with a CGPA of 9.21. I've gained knowledge in software engineering and explored web development, AI, and competitive programming.
                  </p>
                </div>
              </div>
              <div className="h-7 w-7 bg-background left-6 z-2 absolute  top-3/4 rounded-full flex justify-center items-center">
                <button className="h-5 w-5 bg-white shadow-xl hover:shadow-gray-50 rounded-full"></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}

      <div className="mx-32 mb-32 relative">
        <div className="bubble2"></div>
        <span className="text-5xl mb-16 drop-shadow-3xl cursor-pointer hover:underline duration-200 ">Frameworks</span>

        <div className="h-auto flex w-full flex-wrap justify-between mt-16">
          
          <div className="Lang flex flex-col mx-4 items-center justify-around h-44 w-44 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-24 w-24">
              <img src={c}/>
            </div>
            <span className="text-2xl bold">C</span>
          </div>
          <div className="Lang flex flex-col mx-4 items-center justify-around h-44 w-44 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-24 w-24">
              <img src={cplusplus}/>
            </div>
            <span className="text-2xl bold">C++</span>
          </div>
          <div className="Lang flex flex-col mx-4 items-center justify-around h-44 w-44 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-24 w-24">
              <img src={python}/>
            </div>
            <span className="text-2xl bold">Python</span>
          </div>
          
          <div className="Lang flex flex-col mx-4 items-center justify-around h-44 w-44 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-24 w-24">
              <img src={javascript}/>
            </div>
            <span className="text-2xl bold">JavaScript</span>
          </div>
          
          <div className="Lang flex flex-col mx-4 items-center justify-around h-44 w-44 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-24 w-24">
              <img src={react}/>
            </div>
            <span className="text-2xl bold">React</span>
          </div>
          <div className="Lang flex flex-col mx-4 items-center justify-around h-44 w-44 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-24 w-24">
              <img src={bootstrap}/>
            </div>
            <span className="text-2xl bold">Bootstrap</span>
          </div>  
          
          <div className="Lang flex flex-col mx-4 items-center justify-around h-44 w-44 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-24 w-24">
              <img src={css}/>
            </div>
            <span className="text-2xl bold">CSS</span>
          </div>
          
          <div className="Lang flex flex-col mx-4 items-center justify-around h-44 w-44 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-24 w-24">
              <img src={tailwind}/>
            </div>
            <span className="text-2xl bold">Tailwind</span>
          </div>

          <div className="Lang flex flex-col mx-4 items-center justify-around h-44 w-44 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-24 w-24">
              <img src={firebase}/>
            </div>
            <span className="text-2xl bold">Firebase</span>
          </div>
          
          <div className="Lang flex flex-col mx-4 items-center justify-around h-44 w-44 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-24 w-24">
              <img src={mysql}/>
            </div>
            <span className="text-2xl bold">MySQL</span>
          </div>
          
          <div className="Lang flex flex-col mx-4 items-center justify-around h-44 w-44 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-24 w-24">
              <img src={mongodb}/>
            </div>
            <span className="text-2xl bold">MongoDB</span>
          </div>
          
          <div className="Lang flex flex-col mx-4 items-center justify-around h-44 w-44 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-24 w-24">
              <img src={tensorflow}/>
            </div>
            <span className="text-2xl bold">TensorFlow</span>
          </div>
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Home;
