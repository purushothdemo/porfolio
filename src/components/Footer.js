import React from "react";
import { FaEnvelope, FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="border-t-3/2 py-5">
      <div className="flex  justify-center mt-5">
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2  text-gray-500  shadow-md  rounded-full"
          href="www.google.com"
        >
          <FaGithub />
          <span className="sr-only">GitHub</span>
        </a>

        <a
          className="text-xl m-1 p-1 sm:m-2 text-sky-500  sm:p-2  shadow-md  rounded-full"
          href="www.google.com"
        >
          <FaTwitter />
          <span className="sr-only">twitter</span>
        </a>

        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-500 shadow-md rounded-full"
          href="www.google.com"
        >
          <FaYoutube />
          <span className="sr-only">instagram</span>
        </a>

        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-black   shadow-md rounded-full"
          href="www.google.com"
        >
          <FaEnvelope />
          <span className="sr-only">envelope</span>
        </a>
      </div>
      <div className="flex justify-center mt-5">
        <p className="text-black mb-4">
          made with
          <span className="mr-2" role="link" aria-label="heart">
            💙
          </span>
          <a className="text-blue hover:underline" href="www.google">
            PURUSHOTH J
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
