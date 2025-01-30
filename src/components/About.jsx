import React from "react";
import bgAbout from "../images/motion-background.jpg";

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
    <div className="about-section relative">
      {/* Background image with dark overlay */}
      <img
        src={bgAbout}
        alt="About background"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Black overlay */}
      {/* Content */}
      <div className="relative z-10 text-center py-16 px-8 sm:px-12 md:px-16">
        <h2 className="text-4xl font-semibold text-white mb-6 drop-shadow-lg">
          About Myself
        </h2>
        <p className="text-lg text-white mb-8 max-w-3xl mx-auto drop-shadow-lg">
          {description}
        </p>

        {/* Skills list */}
        <ul className="columns-2 text-left text-lg gap-6 mx-auto text-white max-w-2xl">
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
