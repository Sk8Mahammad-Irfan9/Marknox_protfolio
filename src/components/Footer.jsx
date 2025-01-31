import React from "react";

import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

const Footer = ({
  name,
  email,
  gitHub,
  linkedIn,
  medium,
  youtube,
  instagram,
  devdotto,
  twitter,
}) => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {email && (
              <a
                href={`mailto:${email}`}
                className="hover:text-gray-300 transition duration-300"
              >
                <img src={envelopeIcon} alt="Email" className="w-8 h-8" />
              </a>
            )}
            {gitHub && (
              <a
                href={`https://github.com/${gitHub}`}
                className="hover:text-gray-300 transition duration-300"
              >
                <img src={gitHubIcon} alt="GitHub" className="w-8 h-8" />
              </a>
            )}
            {linkedIn && (
              <a
                href={`https://www.linkedin.com/in/${linkedIn}`}
                className="hover:text-gray-300 transition duration-300"
              >
                <img src={linkedInIcon} alt="LinkedIn" className="w-8 h-8" />
              </a>
            )}
            {medium && (
              <a
                href={medium}
                className="hover:text-gray-300 transition duration-300"
              >
                <img src={mediumIcon} alt="Medium" className="w-8 h-8" />
              </a>
            )}
            {youtube && (
              <a
                href={youtube}
                className="hover:text-gray-300 transition duration-300"
              >
                <img src={youTubeIcon} alt="YouTube" className="w-8 h-8" />
              </a>
            )}
            {instagram && (
              <a
                href={instagram}
                className="hover:text-gray-300 transition duration-300"
              >
                <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
              </a>
            )}
            {devdotto && (
              <a
                href={devdotto}
                className="hover:text-gray-300 transition duration-300"
              >
                <img src={devDotToIcon} alt="devDotTo" className="w-8 h-8" />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                className="hover:text-gray-300 transition duration-300"
              >
                <img src={twitterIcon} alt="twitter" className="w-8 h-8" />
              </a>
            )}
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          <p>&copy; 2025 {name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
