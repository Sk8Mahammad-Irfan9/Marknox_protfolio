import React from "react";

import ecommerce from "../images/E-commerce.png";
import blogapp from "../images/Blog-app.png";
import gym from "../images/Gym-frontend.png";
import Ristora from "../images/Ristora.png";
import Travel from "../images/Travel-frontend.png";

const myProjects = [
  {
    title: "E Commerce",
    image: ecommerce,
    description: `I’ve developed an e-commerce website using the MERN stack, featuring a user-friendly layout that includes dynamic product showcases, secure payment processing, and personalized shopping recommendations. The responsive design ensures a seamless experience across both desktop and mobile devices.`,
    url: "https://ecommerce-app-green-mu.vercel.app/",
  },
  {
    title: "Gym website Only Frontend using React",
    image: gym,
    description:
      "I’ve created a gym website using React, showcasing my ability to design and develop a responsive, interactive site that includes a variety of features, such as class schedules, trainer profiles, and membership information.",
    url: "https://gym-frontend-97jv.onrender.com/",
  },
  {
    title: "Ristora App",
    image: Ristora,
    description:
      "I’ve developed a restaurant app using React,tailwindcss, demonstrating my ability to create a mobile application that provides users with a seamless experience for browsing menus, placing orders, and making reservations.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "Travel-frontend",
    image: Travel,
    description:
      "I’ve designed a travel webpage UI with an intuitive layout that features dynamic destination highlights, interactive booking tools, and personalized trip planning. The responsive design guarantees an optimal experience across both desktop and mobile devices.",
    url: "https://travel-with-us-e1xl.onrender.com/",
  },
  {
    title: "Blog App",
    image: blogapp,
    description:
      "I developed a blog app using the MERN stack that allows all users to read blog posts from registered users. However, only logged-in users have the ability to write their own posts. The app focuses solely on providing a seamless reading experience, with a clean and user-friendly interface. It is fully responsive and optimized for both desktop and mobile devices, ensuring that users can easily enjoy the content anytime, anywhere.",
    url: "https://travel-with-us-e1xl.onrender.com/",
  },
];

const Portfolio = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 min-h-screen p-8">
      <h1 className="text-4xl font-semibold text-white text-center mb-12">
        My Portfolio
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-lg shadow-lg overflow-hidden group"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover group-hover:opacity-75 transition-opacity duration-300"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 mt-4 inline-block text-lg hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
