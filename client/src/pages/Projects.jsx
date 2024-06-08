import React from 'react';
import F from './F';

const Projects = () => {
  const projectList = [
    {
      title: 'To Do Application',
      description: 'User Can Add task, Update, Delete.',
      link: 'https://todo-j7zepaw6k-rajans-projects-1c89cf90.vercel.app',
      image: 'https://imageio.forbes.com/specials-images/dam/imageserve/1092571024/960x0.jpg?height=474&width=711&fit=bounds', // Example image URL
    },
    {
      title: 'huddle-landing-page-with-single-introductory-section-master',
      description: 'Desktop and Mobile View.',
      link: 'https://www.frontendmentor.io/solutions/huddlelandingpagewithsingleintroductorysectionmaster-b1mjvz_PX8',
      image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/tzbiduzd51yhbdfjgjoi.jpg',
    },
    {
      title: 'Ecommerce website',
      description: 'User Seen Product and add to Cart and buy.',
      link: 'https://github.com/rajankumar4723/Ecmmerce-Website',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyFDX1BFIp8OhhWyvjP-QpWZlt3U5XCAIJA&s',
    },
    {
      title: 'Landing Page',
      description: 'fylo-landing-page_using HTML CSS',
      link: 'https://www.frontendmentor.io/solutions/fylolandingpageusing-html-css-ERtOFBwq08',
      image: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_475/Screenshots/h6isc5cmyeeeh2yrfvwt.jpg',
    },
    {
      title: 'Register Page',
      description: 'Backend development in Build a Register Page in node js',
      link: 'https://github.com/rajankumar4723/Registration',
      image: 'https://media.geeksforgeeks.org/wp-content/uploads/Registrationform-e1546156722767.jpg',
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen p-8">
        <div className="max-w-7xl mx-auto py-12">
          <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectList.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-block text-cyan-600 hover:text-cyan-800 font-semibold transition-colors duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <F />
    </>
  );
};

export default Projects;
