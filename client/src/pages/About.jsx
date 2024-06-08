import React from 'react';
import F from './F';

const About = () => {
  return (
    <>
    
    <div className="bg-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto py-12">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img 
            src="https://cdn.pixabay.com/photo/2023/11/18/19/06/futuristic-home-8397004_960_720.jpg"
            alt="Profile"
            className="w-48 h-48 rounded-full mb-6 md:mb-0 md:mr-8 mx-auto"
          />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">Hi, I'm Rajan Modanwal</h3>
            <p className="text-lg mb-4">
              I'm a Frontend Developer with a passion for creating amazing web experiences. I specialize in building responsive and interactive web applications using the latest technologies.
            </p>
            <p className="text-lg mb-4">
              With a strong background in HTML, CSS, JavaScript, and frameworks like React, I strive to deliver high-quality and performant web applications. My goal is to provide users with an exceptional online experience through innovative and user-friendly designs.
            </p>
            <p className="text-lg">
              Take a look at some of my projects below and feel free to reach out if you want to collaborate or just say hello!
            </p>
          </div>
        </div>
      </div>
    </div>
    <F/>
    </>
  );
};

export default About;
