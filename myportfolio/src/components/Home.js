import {React,useRef} from "react";
import {useInView} from  'react-intersection-observer';
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
import node from "../media/Node.png";
import music1 from "../media/music1.png";
import redirect from "../media/redirect2.png";
import openai from "../media/OpenAPI.png";
import vidsim from "../media/simVid.mp4";
import vidJTD from "../media/jtd.mp4";

import chatterverse from "../media/chaterverse.png";
import carrental1 from "../media/carrental1.png";
import Icode from "../media/icode1.png";
import fracture from "../media/fracture.png";
import chatbot from "../media/chatbot.png";
import socket from "../media/Socket.io.png";
import appwrite from "../media/Appwrite.png";
import rapid from "../media/rapid.png";
import scikit from "../media/scikit.png";
import django from "../media/Django.png";
import leetcode from "../media/leetcode2.png";
import codeforces from "../media/codeforces.png";
import codechef from "../media/codechef.png";
import phone from "../media/phone.png";


const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const text = "KNOW|MORE|";
  const characters = text.split("");
  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1wgGH1M_tYxn7pSGIsRvDZUO-uPtEAwv7/view?usp=drive_link",
      "_blank"
    );
  };
  const handleMoreToAbout = () => {
    const element = document.getElementById('AboutSec');
    element.scrollIntoView({ behavior: 'smooth' });
  };
  const handleMail = () => {
    const mailtoLink = `mailto:pankajlamgria@gmail.com?subject=Hire You &body=`;
    window.location.href = mailtoLink;
  };
  return (
    <div>
      <div className="relative flex justify-between items-center px-5 h-16 ">
        <div className="lg:text-3xl md:text-2xl mx-10 ">
          <div className="bubble"></div>
          <div className="relative z-10 cursor-text font-semibold tracking-wide hover:text-secondary duration-100">
            PANKAJ SINGH
          </div>
        </div>
        <div className="text-base">
          <ul className="flex justify-around w-auto items-center lg:px-9 md:px-4 lg:mx-10 md:mx-2">
            <li className="text-gray-200">Developer</li>
            <div className="mx-10 w-48 border rounded-full h-10 align-middle justify-between flex items-center cursor-pointer px-4  shadow-button_shadow overflow-hidden" onClick={()=>{
              window.open("https://www.linkedin.com/in/pankaj-singh-lamgria-97114b24b/");
            }}>
              <div className="text-green-500 mx-1 ">
                <GoDotFill />
              </div>
              <div className="animate-movetop relative w-96 text-md h-6 leading-10"><h2> Avialable for Work  Avialable for Work Avialable for Work Avialable for Work</h2></div> 
            </div>
          </ul>
        </div>
      </div>
      <div className="lg:px-36 md:px-20 mt-20  ml-8 mr-2 rounded-1xl flex justify-between lg:h-imgHeight md:h-96">
        {/* text Sec */}
        <div className="mt-10 h-full rounded pt-14 w-3/5 flex-col items-center ">
          <h1 className="lg:text-4xl md:text-3xl font-medium mb-1">Hi!</h1>
          <h1 className="lg:text-5xl md:text-3xl font-medium mb-8">
            I'm{" "}
            <span className="lg:text-5xl md:text-3xl font-semibold  text-white">
              Pankaj Singh Lamgria
            </span>
          </h1>
          <span className="text-2xl">
            I'm a <Typewriter className="bg-slate-300" />
          </span>

          <div>
            <button
              className="lg:h-11 lg:w-40 md:w-32 md:h-9 mt-8 text-white bg-button flex  items-center justify-center lg:text-xl md:text-lg font-bold border rounded-lg shadow-button_shadow hover:shadow-hover_shadow duration-700"
              onClick={handleResumeDownload}
            >
              Resume
            </button>
          </div>
        </div>

        {/* Image Sec */}
        <div className="lg:w-2/5 md:w-2/3 mt-5 flex justify-center items-center">
          <img
            className="w-full max-h-full rounded-full shadow-img_shadow scale-90"
            src={profile}
            alt=""
          />
        </div>
      </div>
      <div className="ml-4 absolute top-44 left-8 z-10">
        <div className="h-96 flex flex-col justify-around">
          <button className="lg:h-11 lg:w-11 md:h-9 md:w-9 md:border md:shadow-hover_shadow lg:border-none lg:shadow-none hover:shadow-hover_shadow hover:border hover:scale-125 duration-200 rounded-full p-1">
            <img onClick={handleMail} src={mail} alt="mail.png" />
          </button>
          <button className="lg:h-11 lg:w-11 md:h-9 md:w-9 md:border md:shadow-hover_shadow lg:border-none lg:shadow-none hover:shadow-hover_shadow hover:border hover:scale-125 duration-200   rounded-full">
            <img
              alt="linkedin"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/pankaj-singh-lamgria-97114b24b/",
                  "_blank"
                );
              }}
              src={linkedin}
            />
          </button>
          <button className="lg:h-11 lg:w-11 md:h-9 md:w-9 md:border md:shadow-hover_shadow lg:border-none lg:shadow-none hover:shadow-hover_shadow hover:border hover:scale-125 duration-200 rounded-full">
            <img
              alt="github.png"
              onClick={() => {
                window.open("https://github.com/Pankajlamgria", "_blank");
              }}
              src={github}
            />
          </button>
          <button
            className="lg:h-11 lg:w-11 md:h-9 md:w-9 md:border md:shadow-hover_shadow lg:border-none lg:shadow-none hover:shadow-hover_shadow hover:border hover:scale-125 duration-200 rounded-full"
            onClick={() => {
              window.open(
                "https://www.instagram.com/pankaj_lamgria_01/",
                "_blank"
              );
            }}
          >
            <img alt="something" src={instagram} />
          </button>
        </div>
      </div>
      <div
        className="relative  lg:left-[92vw] bottom-8 md:left-[87vw]  knowmoreCover cursor-pointer"
        onClick={handleMoreToAbout}
      >
        <div className="circle-container" >
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
      <div className="h-auto mt-36 lg:mx-32 md:mx-10 flex mb-32" id="AboutSec">
        <div className="TextArea w-2/3 lg:p-5 lg:pr-10 md:p-3 mb-40">
          <span className="lg:text-5xl md:text-4xl drop-shadow-3xl cursor-pointer hover:underline duration-200">
            My Journey
          </span>
          <h2 className="lg:text-lg md:text-md mt-24 text-left text-gray-300">
            I am a 20-year-old student pursuing a Bachelor of Technology in
            Computer Science and Engineering at Graphic Era Hill University,
            Dehradun. With a strong passion for{" "}
            <b className="text-white">web development</b>,{" "}
            <b className="text-white">machine learning</b>, and{" "}
            <b className="text-white">competitive programming</b>, I'm always
            exploring new ways to create impactful solutions.
          </h2>

          <h2 className="lg:text-lg md:text-md mt-5 text-left text-gray-300">
            Some of my key projects include a web application for the Joining
            the Dots Foundation, aimed at streamlining online class management
            for girls, and a full-stack music app that allows users to stream
            and manage their music. Additionally, I've built an 8085
            Microprocessor Simulator and a chatbot for my university, both of
            which deepened my understanding of software development.
          </h2>

          <h2 className="lg:text-lg md:text-md mt-5 text-left text-gray-300">
            I had the privilege of being part of{" "}
            <b className="text-white">JP Morgan's Code for Good 2024</b>, where
            I worked on a social good project. In competitive programming,{" "}
            <b className="text-white">
              I've secured a global rank of 245 in a Leetcode contest and
              achieved strong ratings on various platforms
            </b>
            .
          </h2>
          <h2 className="lg:text-lg md:text-md mt-5 text-left text-gray-300">
            With expertise in languages like C/C++, Python, Java, and frameworks
            like React and Node.js, I’m excited to continue growing as a
            software developer and contributing to real-world projects.
          </h2>
        </div>
        <div className="animation w-1/3 mt-12 mb-24  h-auto relative z-1">
          <div className="VerticalLine">
            <div className="w-2 h-full bg-white absolute lg:left-8 md:left-2"></div>
            <div className="group">
              <div className={`absolute flex border rounded-md lg:p-4 md:p-2 justify-around lg:left-28 md:left-10 top-16 opacity-0 scale-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-100 ${inView ? 'animate-slide_in' : 'opacity-0'}`}>

                {/* Born status */}

                <div className="imgSec w-1/3 rounded-md overflow-hidden">
                  <img alt="something" src={kidimg} className="w-full h-full" />
                </div>
                <div className="w-2/3">

                  <p className={`lg:text-xl md:text-md ml-2 shadow-sm drop-shadow-3xl `}>
                    Born in <b>19 Aug 2004</b> in Dehradun
                  </p>
                </div>
              </div>
              <div className="h-7 w-7 bg-background lg:left-6 md:left-0 z-2 absolute   top-1/4 rounded-full flex justify-center items-center">
                <button className="h-5 w-5 bg-white shadow-xl hover:shadow-gray-50 rounded-full"></button>
              </div>
            </div>

            <div className="group">
              <div  className={`absolute lg:w-96 md:90 flex border rounded-md lg:p-4 md:p-2 justify-around lg:left-28 md:left-10 lg:top-48 md:top-1/3 opacity-0 scale-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-100 ${inView ? 'animate-slide_in' : 'opacity-0'}`}>
                {/* Born status */}
                <div className="imgSec w-1/3  md:flex md:justify-center md:items-center rounded-md overflow-hidden">
                  <img
                    slt="schoolKid"
                    src={schoolKid}
                    className="w-full lg:h-full md:h-40 md:rounded-md scale-125 scale-x-150"
                  />
                </div>
                <div className="w-2/3">
                  <p className="lg:text-lg md:text-sm ml-2 shadow-sm drop-shadow-3xl ">
                    I completed my schooling at Kendriya Vidyalaya Birpur,
                    Dehradun, in <i>2022</i>, where I was first introduced to{" "}
                    <i>programming </i>through <b>Python</b> in the 11th grade.
                  </p>
                </div>
              </div>
              <div className="h-7 w-7 bg-background lg:left-6 md:left-0 z-2 absolute  top-2/4 rounded-full flex justify-center items-center">
                <button className="h-5 w-5 bg-white shadow-xl hover:shadow-gray-50 rounded-full"></button>
              </div>
            </div>

            <div className="group">
              <div className="absolute lg:w-96 md:w-90 flex border rounded-md lg:p-4 md:p-1 justify-around lg:left-24 md:left-8 lg:top-80 md:top-2/3 opacity-0 scale-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-100">
                {/* Born status */}
                <div className="imgSec w-1/3 rounded-md overflow-hidden">
                  <img alt="something" src={coder} className="w-full h-full" />
                </div>
                <div className="w-2/3">
                  <p className="lg:text-lg md:text-sm ml-2 shadow-sm drop-shadow-3xl ">
                    I started my BTech in CSE at Graphic Era Hill University in
                    2022 and I'm currently in my 5th semester with a CGPA of
                    9.21. I've gained knowledge in software engineering and
                    explored web development, AI, and competitive programming.
                  </p>
                </div>
              </div>
              <div className="h-7 w-7 bg-background lg:left-6 md:left-0 z-2 absolute  top-3/4 rounded-full flex justify-center items-center">
                <button className="h-5 w-5 bg-white shadow-xl hover:shadow-gray-50 rounded-full"></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}

      <div className="lg:mx-32 md:mx-10 mb-32 relative">
        <div className="bubble2"></div>
        <span className="lg:text-5xl md:text-4xl  mb-16 drop-shadow-3xl cursor-pointer hover:underline duration-200 ">
          Frameworks
        </span>

        <div className="h-auto flex w-full flex-wrap justify-between mt-16">
          <div className="Lang flex flex-col mx-4 items-center justify-around h-40 w-40 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-16 w-16">
              <img alt="something" src={c} />
            </div>
            <span className="text-xl bold">C</span>
          </div>
          <div className="Lang flex flex-col mx-4 items-center justify-around h-40 w-40 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-16 w-16">
              <img alt="something" src={cplusplus} />
            </div>
            <span className="text-xl bold">C++</span>
          </div>
          <div className="Lang flex flex-col mx-4 items-center justify-around h-40 w-40 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-16 w-16">
              <img alt="something" src={python} />
            </div>
            <span className="text-xl bold">Python</span>
          </div>

          <div className="Lang flex flex-col mx-4 items-center justify-around relative z-40 h-40 w-40 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400 ">
            <div className="imgCover h-16 w-16">
              <img alt="something" src={javascript} />
            </div>
            <span className="text-xl bold">JavaScript</span>
          </div>

          <div className="Lang flex flex-col mx-4 items-center justify-around h-40 w-40 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-16 w-16">
              <img alt="something" src={react} />
            </div>
            <span className="text-xl bold">React</span>
          </div>
          <div className="Lang flex flex-col mx-4 items-center justify-around h-40 w-40 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-16 w-16">
              <img alt="something" src={node} />
            </div>
            <span className="text-xl bold">Node.js</span>
          </div>

          <div className="Lang flex flex-col mx-4 items-center justify-around h-40 w-40 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-16 w-16">
              <img alt="something" src={css} />
            </div>
            <span className="text-xl bold">CSS</span>
          </div>

          <div className="Lang flex flex-col mx-4 items-center justify-around h-40 w-40 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-16 w-16">
              <img alt="something" src={tailwind} />
            </div>
            <span className="text-xl bold">Tailwind</span>
          </div>

          <div className="Lang flex flex-col mx-4 items-center justify-around h-40 w-40 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-16 w-16">
              <img alt="something" src={firebase} />
            </div>
            <span className="text-xl bold">Firebase</span>
          </div>

          <div className="Lang flex flex-col mx-4 items-center justify-around h-40 w-40 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-16 w-16">
              <img alt="something" src={mysql} />
            </div>
            <span className="text-xl bold">MySQL</span>
          </div>

          <div className="Lang flex flex-col mx-4 items-center justify-around h-40 w-40 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-16 w-16">
              <img alt="something" src={mongodb} />
            </div>
            <span className="text-xl bold">MongoDB</span>
          </div>

          <div className="Lang flex flex-col mx-4 items-center justify-around h-40 w-40 bg-gray-600 rounded-lg  border-2 cursor-pointer mb-10   hover:border-blue-400">
            <div className="imgCover h-16 w-16">
              <img alt="something" src={tensorflow} />
            </div>
            <span className="text-xl bold">TensorFlow</span>
          </div>
        </div>
      </div>

            
      {/* Services */}

      <div className="lg:mx-32 md:mx-10 mb-32 relative">
        <span className="lg:text-5xl md:text-4xl  drop-shadow-3xl cursor-pointer hover:underline duration-200">
          Services
        </span>
        <div className="flex flex-wrap justify-around items-center mt-14">
          <div className="group h-80 mt-8">
            <div className="cotainer1 shadow-hover_shadow z-1 cursor-pointer rounded-lg border shadow-xl-100 lg:h-80 md:h-72 lg:w-96 md:w-72 flex items-center pb-8 justify-center bg-gradient-to-tr from-blue-400 via-purple-500 to-gray-200 hover:opacity-50 transition-opacity duration-200 ">
              <h2 className="absolute lg:text-4xl md:text-3xl text-shadowText font-bold text-center hover:animate-jumpdown">
                Web Development
              </h2>
              <h2 className="relative lg:text-4xl md:text-3xl font-bold text-center hover:animate-jumpdown">
                Web Development
              </h2>
            </div>
            <div className="relative border  bg-gray-700 p-5 -top-36 lg:w-96 md:w-72 z-2 rounded-lg opacity-0 h-36 group-hover:opacity-100 transition-opacity duration-500">
              <p className="lg:text-md  md:text-sm">
                "I build frontend and backend solutions to help people
                digitalize their businesses efficiently."
              </p>
              <p className="float-right mt-8">💻🚀✨📈</p>
            </div>
          </div>
          <div className="group h-80 mt-8">
            <div className="cotainer1 shadow-hover_shadow z-1 cursor-pointer rounded-lg border shadow-xl-100 lg:h-80 md:h-72 lg:w-96 md:w-72 flex items-center pb-8 justify-center bg-gradient-to-t from-blue-400 via-primary to-gray-200 hover:opacity-50 transition-opacity duration-200 ">
              <h2 className="absolute lg:text-4xl md:text-3xl text-shadowText font-bold text-center hover:animate-jumpdown">
                Machine learning
              </h2>
              <h2 className="relative lg:text-4xl md:text-3xl font-bold text-center hover:animate-jumpdown">
                Machine learning
              </h2>
            </div>
            <div className="relative border  bg-gray-700 p-5 -top-36 lg:w-96 md:w-72 z-2 rounded-lg opacity-0 h-36 group-hover:opacity-100 transition-opacity duration-500">
              <p className="lg:text-md  md:text-sm">
                "I work in data analysis and computer vision, leveraging
                technology to drive insights and build impactful solutions."
              </p>
              <p className="float-right mt-4">💻🔍📊👁️</p>
            </div>
          </div>
          <div className="group h-80 mt-8">
            <div className="cotainer1 shadow-hover_shadow z-1 cursor-pointer rounded-lg border shadow-xl-100 lg:h-80 md:h-72 lg:w-96 md:w-72 flex items-center pb-8 justify-center bg-gradient-to-tl from-blue-400 via-purple-500 to-gray-200 hover:opacity-50 transition-opacity duration-200 ">
              <h2 className="absolute lg:text-4xl md:text-3xl text-shadowText font-bold text-center hover:animate-jumpdown">
                Tutoring
              </h2>
              <h2 className="relative lg:text-4xl md:text-3xl font-bold text-center hover:animate-jumpdown">
                Tutoring
              </h2>
            </div>
            <div className="relative border  bg-gray-700 p-5 -top-36 lg:w-96 md:w-72 z-2 rounded-lg opacity-0 h-36 group-hover:opacity-100 transition-opacity duration-500">
              <p className="lg:text-md md:text-sm">
                "Offering personalized tutoring in Data Structures and
                Algorithms to help you master complex concepts and improve
                problem-solving skills."
              </p>
              <p className="float-right mb-1">📚🧠💡</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Sec */}
      <div className="lg:mx-32 md:mx-10 mb-24 relative ">
        <div className="flex justify-center">
          <span className="lg:text-5xl md:text-4xl drop-shadow-3xl cursor-pointer hover:underline duration-200">
            Projects
          </span>
        </div>
        <div className="bubble"></div>
        <div className="ProjectContainer mt-20 relative z-20 flex flex-wrap justify-around">
          {/* first Project*/}
          <div className="lg:w-80 md:w-96 h-1/2 border rounded-lg relative lg:m-4 md:my-4">
            <div className="h-56 lg:w-80 md:w-96 p-2 group">
              <video
                className="h-full w-full rounded-lg cursor-pointer group-hover:opacity-50 transition-opacity duration-100"
                autoPlay
                muted
                loop
              >
                <source src={vidJTD} type="video/mp4" />
              </video>
              <div className="absolute h-64 hidden lg:w-80 md:w-96 top-0  justify-center items-center opacity-0 group-hover:flex group-hover:opacity-100 duration-200">
                <img
                  className=" cursor-pointer h-14 w-14 rounded-full border p-2 shadow-2xl shadow-white"
                  alt="redirect"
                  onClick={() => {
                    window.open("https://github.com/Pankajlamgria", "_blank");
                  }}
                  src={redirect}
                />
              </div>
            </div>
            <div className="lg:w-80 md:w-96 p-2 px-3">
              <p className="w-full h-full text-mg">
                A full-stack website for <b> Joining the Dots Foundation </b> to
                manage girls' online classes with attendance, grievance
                handling, and test features.
              </p>
            </div>
            <div className="stackSec flex my-7  md:ml-14 lg:ml-0">
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-64 z-30"
                src={mongodb}
              />
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-48 z-40"
                src={node}
              />
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-32 z-40"
                src={tailwind}
              />
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-16 z-40"
                src={react}
              />
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-1 z-40"
                src={openai}
              />
            </div>
          </div>

          {/* second PROJECT */}
          <div className="lg:w-80 md:w-96 h-1/2 border rounded-lg relative m-4">
            <div className="h-64 lg:w-80 md:w-96 p-2 group">
              <img
                alt="music1"
                className="h-full w-full rounded-lg cursor-pointer group-hover:opacity-50 transition-opacity duration-100"
                src={music1}
              />
              <div className="absolute h-64 hidden lg:w-80 md:w-96   top-0  justify-center items-center opacity-0 group-hover:flex group-hover:opacity-100 duration-200">
                <img
                  className=" cursor-pointer h-14 w-14 rounded-full border p-2 shadow-2xl shadow-white"
                  alt="redirect"
                  onClick={() => {
                    window.open("https://melody-music.netlify.app/", "_blank");
                  }}
                  src={redirect}
                />
              </div>
            </div>
            <div className="lg:w-80 md:w-96 p-2 px-3">
              <p className="w-full h-full text-mg">
                <b>MelodyMusic</b> is a full stack music application in which
                users can listen music in real time.And admit can upload music
                in it.
              </p>
            </div>
            <div className="stackSec flex mb-5 md:ml-14 lg:ml-0">
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-64 z-30"
                src={mongodb}
              />
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-48 z-40"
                src={node}
              />
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-32 z-40"
                src={firebase}
              />
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-16 z-40"
                src={react}
              />
            </div>
          </div>
          {/* third PROJECT */}
          <div className="lg:w-80 md:w-96 h-1/2 border rounded-lg relative m-4">
            <div className="h-64 lg:w-80 md:w-96 p-2 group">
              <img
                alt="music1"
                className="h-full w-full rounded-lg cursor-pointer group-hover:opacity-50 transition-opacity duration-100"
                src={chatterverse}
              />
              <div className="absolute h-64 hidden lg:w-80 md:w-96 top-0  justify-center items-center opacity-0 group-hover:flex group-hover:opacity-100 duration-200">
                <img
                  className=" cursor-pointer h-14 w-14 rounded-full border p-2 shadow-2xl shadow-white"
                  alt="redirect"
                  onClick={() => {
                    window.open("https://chaterverse.netlify.app/", "_blank");
                  }}
                  src={redirect}
                />
              </div>
            </div>
            <div className="lg:w-80 md:w-96 p-2 px-3">
              <p className="w-full h-full text-mg">
                <b>Chaterverse</b> is a website that allows users to create and
                securely chat in their own personal chatrooms.
              </p>
            </div>
            <div className="stackSec flex my-6 md:ml-14 lg:ml-0">
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-64 z-30"
                src={mongodb}
              />
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-48 z-40"
                src={node}
              />
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-32 z-40"
                src={socket}
              />
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-16 z-40"
                src={react}
              />
            </div>
          </div>
          {/* fourth PROJECT */}
          <div className="lg:w-80 md:w-96 h-1/2 border rounded-lg relative m-4">
            <div className="h-64 lg:w-80 md:w-96 p-2 group">
              <img
                alt="music1"
                className="h-full w-full rounded-lg cursor-pointer group-hover:opacity-50 transition-opacity duration-100"
                src={carrental1}
              />
              <div className="absolute h-64 hidden lg:w-80 md:w-96 top-0  justify-center items-center opacity-0 group-hover:flex group-hover:opacity-100 duration-200">
                <img
                  className=" cursor-pointer h-14 w-14 rounded-full border p-2 shadow-2xl shadow-white"
                  alt="redirect"
                  onClick={() => {
                    window.open(
                      "https://github.com/Pankajlamgria/car-rental",
                      "_blank"
                    );
                  }}
                  src={redirect}
                />
              </div>
            </div>
            <div className="lg:w-80 md:w-96 p-2 px-3">
              <p className="w-full h-full text-mg">
                <b>CarRental</b>
                is a full-stack website where people can list their rental
                shops, and users can rent cars and motorcycles from them.
              </p>
            </div>
            <div className="stackSec flex mb-5 md:ml-14 lg:ml-0">
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-64 z-30"
                src={appwrite}
              />
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-48 z-40"
                src={node}
              />
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-32 z-40"
                src={css}
              />
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-16 z-40"
                src={react}
              />
            </div>
          </div>
          {/* five PROJECT */}
          <div className="lg:w-80 md:w-96 h-1/2 border rounded-lg relative m-4">
            <div className="h-64 lg:w-80 md:w-96 p-2 group">
              <img
                alt="music1"
                className="h-full w-full rounded-lg cursor-pointer group-hover:opacity-50 transition-opacity duration-100"
                src={Icode}
              />
              <div className="absolute h-64 hidden lg:w-80 md:w-96 top-0  justify-center items-center opacity-0 group-hover:flex group-hover:opacity-100 duration-200">
                <img
                  className=" cursor-pointer h-14 w-14 rounded-full border p-2 shadow-2xl shadow-white"
                  alt="redirect"
                  onClick={() => {
                    window.open(
                      "https://github.com/Pankajlamgria/Icode",
                      "_blank"
                    );
                  }}
                  src={redirect}
                />
              </div>
            </div>
            <div className="lg:w-80 md:w-96 p-2 px-3">
              <p className="w-full h-full text-mg">
                <b>Icode</b> is an online code editor that allows users to write
                code in different languages like Python, C++, and C using a REST
                API.
              </p>
            </div>
            <div className="stackSec flex my-5 md:ml-14 lg:ml-0">
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-64 z-30"
                src={css}
              />
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-48 z-40"
                src={node}
              />
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-32 z-40"
                src={rapid}
              />
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-16 z-40"
                src={react}
              />
            </div>
          </div>

          {/* six PROJECT */}
          <div className="lg:w-80 md:w-96 h-1/2 border rounded-lg relative m-4">
            <div className="h-64 lg:w-80 md:w-96 p-2 group">
              <img
                alt="music1"
                className="h-full w-full rounded-lg cursor-pointer group-hover:opacity-50 transition-opacity duration-100"
                src={chatbot}
              />
              <div className="absolute h-64 hidden lg:w-80 md:w-96 top-0  justify-center items-center opacity-0 group-hover:flex group-hover:opacity-100 duration-200">
                <img
                  className=" cursor-pointer h-14 w-14 rounded-full border p-2 shadow-2xl shadow-white"
                  alt="redirect"
                  onClick={() => {
                    window.open(
                      "https://github.com/Pankajlamgria/gehu-chatbot",
                      "_blank"
                    );
                  }}
                  src={redirect}
                />
              </div>
            </div>
            <div className="lg:w-80 md:w-96 p-2 px-3">
              <p className="w-full h-full text-mg">
                <b>EraGuid</b> is a chatbot, written in Python, that answers all
                queries related to Graphic Era Hill University.
              </p>
            </div>
            <div className="stackSec flex my-5 md:ml-14 lg:ml-0">
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-64 z-30"
                src={scikit}
              />
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-48 z-40"
                src={python}
              />
            </div>
          </div>

          {/* seventh PROJECT */}
          <div className="lg:w-80 md:w-96 h-1/2 border rounded-lg relative m-4">
            <div className="h-56 lg:w-80 md:w-96 p-2 group">
              <video
                className="h-full w-full rounded-lg cursor-pointer group-hover:opacity-50 transition-opacity duration-100"
                autoPlay
                muted
                loop
              >
                <source src={vidsim} type="video/mp4" />
              </video>
              <div className="absolute h-64 hidden lg:w-80 md:w-96 top-0  justify-center items-center opacity-0 group-hover:flex group-hover:opacity-100 duration-200">
                <img
                  className=" cursor-pointer h-14 w-14 rounded-full border p-2 shadow-2xl shadow-white"
                  alt="redirect"
                  onClick={() => {
                    window.open(
                      "https://github.com/Pankajlamgria/8085-simulator",
                      "_blank"
                    );
                  }}
                  src={redirect}
                />
              </div>
            </div>
            <div className="lg:w-80 md:w-96 p-2 px-3">
              <p className="w-full h-full text-mg">
                The <b>8085 Simulator</b> is a Python-based application with a
                GUI that allows users to write and execute assembly-level
                programs.
              </p>
            </div>
            <div className="stackSec flex mb-5 md:ml-14 lg:ml-0">
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-64 z-30"
                src={python}
              />
            </div>
          </div>

          {/* Eight Project */}

          <div className="lg:w-80 md:w-96 h-1/2 border rounded-lg relative m-4">
            <div className="h-64 lg:w-80 md:w-96 p-2 group">
              <img
                alt="music1"
                className="h-full w-full rounded-lg cursor-pointer group-hover:opacity-50 transition-opacity duration-100"
                src={fracture}
              />
              <div className="absolute h-64 hidden lg:w-80 md:w-96 top-0  justify-center items-center opacity-0 group-hover:flex group-hover:opacity-100 duration-200">
                <img
                  className=" cursor-pointer h-14 w-14 rounded-full border p-2 shadow-2xl shadow-white"
                  alt="redirect"
                  onClick={() => {
                    window.open(
                      "https://github.com/Pankajlamgria/Fracture-image-Classifier",
                      "_blank"
                    );
                  }}
                  src={redirect}
                />
              </div>
            </div>
            <div className="lg:w-80 md:w-96 p-2 px-3">
              <p className="w-full h-full text-mg">
                A web-based <b>deep learning </b> model for fracture
                classification using Flask as the backend.
              </p>
            </div>
            <div className="stackSec flex mb-5 md:ml-14 lg:ml-0">
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-64 z-30"
                src={react}
              />
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-48 z-40"
                src={django}
              />
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-32 z-40"
                src={tensorflow}
              />
              <img
                alt="firebaseImg"
                className="cursor-pointer hover:scale-110 duration-200  shadow-green-300 shadow-sm w-9 h-9 border rounded-full p-1 bg-gray-600 relative left-16 z-40"
                src={python}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Coding Profile */}
      <div className="codingsec lg:mx-32 md:mx-10">
        <div className="flex flex-wrap justify-center">
          <span className="drop-shadow-3xl cursor-pointer hover:underline duration-200 lg:text-5xl md:text-4xl">
          Coding Profiles
          </span>
        </div>

        <div className="m-16 mt-24 flex md:flex-wrap lg:flex-nowrap justify-around">
                {/* Leetcode */}
          <div className="lg:w-1/3 md:w-90 h-72 border rounded-lg flex justify-around overflow-hidden relative z-10 group mx-4 md:my-4">
            <div className="imgSec w-full h-full p-2 overflow-hidden">
              <img
                alt="leetcode"
                className="h-full w-full rounded-lg"
                src={leetcode}
              />
            </div>
            <div
              className="TextArea absolute bg-gray-800 h-56 top-72 group-hover:top-16 duration-200 p-4 border rounded-lg cursor-pointer"
              onClick={() => {
                window.open("https://leetcode.com/u/Pankaj_lamgria/", "_blank");
              }}
            >
              <p className="text-2xl text-center hover:scale-110 duration-150">
                Leetcode
              </p>
              <p className="text-lg text-center mt-8">
                ⚔️ Knight on LeetCode with a maximum rating exceeding 2000,
                having solved over 900 problems. 💡
              </p>
            </div>
          </div>


              {/* Codeforces */}
          <div className="lg:w-1/3 md:w-90 h-72 border rounded-lg flex justify-around overflow-hidden relative z-10 group mx-4 md:my-4">
            <div className="imgSec w-full h-full p-2 overflow-hidden">
              <img
                alt="leetcode"
                className="h-full w-full rounded-lg"
                src={codeforces}
              />
            </div>
            <div
              className="TextArea absolute bg-gray-800 h-56 top-72 group-hover:top-16 duration-200 p-4 border rounded-lg cursor-pointer"
              onClick={() => {
                window.open("https://codeforces.com/profile/Pankaj_lamgria", "_blank");
              }}
            >
              <p className="text-2xl text-center hover:scale-110 duration-150 text-shadow-xl">
                Codeforces
              </p>
              <p className="text-lg text-center mt-8">
              🧠 Pupil on Codeforces with a maximum rating of 1295. 🌟
              </p>
            </div>
          </div>

              {/* codechef */}
          <div className=" md:w-90 lg:w-1/3 h-72 border rounded-lg flex justify-around overflow-hidden relative z-10 group lg:mx-4 md:mx-8 md:my-4">
            <div className="imgSec w-full h-full p-2 overflow-hidden">
              <img
                alt="leetcode"
                className="h-full w-full rounded-lg"
                src={codechef}
              />
            </div>
            <div
              className="TextArea absolute bg-gray-800 h-56 top-72 group-hover:top-16 duration-200 p-4 border rounded-lg cursor-pointer"
              onClick={() => {
                window.open("https://www.codechef.com/users/pankajlamgria", "_blank");
              }}
            >
              <p className="text-2xl text-center hover:scale-110 duration-150">
                Codechef
              </p>
              <p className="text-lg text-center mt-8">
              🌟 3-star coder on CodeChef with a maximum rating of 1653. 🍴
              </p>
            </div>
          </div>
        </div>
      </div>


              {/* Contact Sec */}
      <div className="contact m-32 lg:mx-32 md:mx-10  mb-14">
        <div className=" relative  flex justify-center items-center flex-col">
          <div className="bubble"></div>
          <span className="drop-shadow-3xl cursor-pointer text-center hover:underline duration-200 lg:text-5xl md:text-4xl">
            Contact Me
          </span>
              {/* <div className="bubble2"></div> */}
          <div className="w-[80%] h-52 border mt-16 bg-gray-700 shadow-xl shadow-black rounded-md ring-2 relative z-50 flex flex-col items-center lg:p-8 md:p-0 justify-evenly">
              <div className="flex items-center justify-between w-[60%]"><img className="h-11 w-11 shadow-md" src={phone}/> <p className="text-2xl drop-shadow-3xl cursor-pointer hover:scale-125 duration-200">91+ 9258340781</p></div>
              <div className="flex items-center justify-between w-[60%]"><img className="h-11 w-11 shadow-md" src={mail}/> <p className="text-2xl drop-shadow-3xl cursor-pointer hover:scale-125 duration-200" onClick={handleMail}>pankajlamgria@gmail.com</p></div>
          </div>
        </div>
      
      
      </div>
        
        {/* copyright */}
        <div className="mt-0 bottom-0 h-16 bg-gray-950 flex justify-center items-center"><p className="text-md">Copyright <span>&copy;</span> 2024 | Developed & Designed by Pankaj Singh</p></div>
    </div>
  );
};

export default Home;
