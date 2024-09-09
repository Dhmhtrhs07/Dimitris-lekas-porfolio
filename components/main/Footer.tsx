import React from "react";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-transparent text-gray-200 shadow-lg p-[15px] relative z-50">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* About Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[25px]">About</div>
            <p className="flex flex-row items-center my-[15px]">
              <span className="text-[15px] ml-[6px]">Patra, Greece</span>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[25px]">Social Media</div>
            <a
              href="https://www.linkedin.com/in/dimitris-lekas-aa56171b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer text-gray-300 hover:text-gray-100"
            >
              <RxLinkedinLogo className="text-[20px]" />
              <span className="text-[15px] ml-[6px]">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/dhmhtrhs.lekas/?hl=el"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer text-gray-300 hover:text-gray-100"
            >
              <RxInstagramLogo className="text-[20px]" />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a
              href="https://github.com/Dhmhtrhs07"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer text-gray-300 hover:text-gray-100"
            >
              <RxGithubLogo className="text-[20px]" />
              <span className="text-[15px] ml-[6px]">GitHub</span>
            </a>
          </div>

          {/* Contact Me Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[25px]">Contact Me</div>
            <a
              href="mailto:lekasdimitris23@gmail.com"
              className="flex flex-row items-center my-[15px] cursor-pointer text-gray-300 hover:text-gray-100"
            >
              <span className="text-[15px] ml-[6px]">Learning About Me</span>
            </a>
            <p className="text-[15px] my-[15px]">
              lekasdimitris23@gmail.com
            </p>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="mb-[20px] text-[15px] text-center">
          &copy; Dimitrios Lekas 2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
