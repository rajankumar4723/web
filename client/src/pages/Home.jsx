import React from 'react';
import F from './F';

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-200 to-purple-200 min-h-screen flex flex-col items-center">
      

        <section className="flex flex-col md:flex-row items-center w-10/12 md:w-8/12 lg:w-6/12 mt-20 text-center md:text-left">
          <div className="md:flex-1 md:pr-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Hey, I'm <span className="text-purple-700">Frontend Developer</span></h2>
            {/* <h3 className="text-3xl font-semibold mb-4 text-gray-800">Frontend Developer</h3> */}
            <p className="text-lg mb-6">
              I'm a frontend developer based in India. I'll help you build beautiful websites your users will love.
            </p>
            <div className="space-x-4">
              <button className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800">Get in Touch</button>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300">Browse Projects</button>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <img 
              src="https://cdn.pixabay.com/photo/2023/11/18/19/06/futuristic-home-8397004_960_720.jpg"
              alt="Profile" 
              className="w-48 h-48 rounded-full mx-auto md:mx-0 md:w-64 md:h-64"
            />
          </div>
        </section>

       
      </div>
      <F/>
    </>
  );
};

export default Home;
