import React from "react";

const skillsList = [
  "Web design",
  "User experience",
  "Mobile user interfaces",
  "Full-stack web",
];

const description =
  "Recent BCA graduate with a strong self-taught background in full stack web development, dedicated to creating and managing websites and web applications that drive product success.";

const About = () => {
  return (
    <div id="about" className="about-section relative bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      {/* Black overlay */}

      {/* Content */}
      <div className="relative z-10 text-center py-16 px-8 sm:px-12 md:px-16">
        <h2 className="text-5xl font-semibold text-white mb-8 drop-shadow-lg">
          About Myself
        </h2>
        <p className="text-2xl text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-lg">
          {description}
        </p>

        {/* Skills list */}
        <ul className="columns-2 text-left text-xl gap-6 mx-auto text-gray-200 max-w-2xl">
          {skillsList.map((skill) => (
            <li
              key={skill}
              className="hover:text-indigo-400 transition-all duration-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
