import React from "react";
import profile from "../images/image.696643fe.jpg";
import { FaEnvelope, FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";

function Card() {
  return (
    <div className="w-full">
      <div className="bg-white flex flex-col mx-auto p-5 justify-center rounded-xl max-w-xs shadow-xl ">
        <div className="">
          <img
            className="mx-auto w-32 shadow-lg rounded-full drop-shadow-lg"
            src={profile}
            alt="profile face"
          />
        </div>

        <div className="text-center mt-2  ">
          <p className="text-[25px] md:text-4xl pt-3 font-bold">Purushoth.J</p>
          <p className="text-xs sm:text-base  pt-3 pb-5 inline-block w-auto border-b-2 border-neutral-200  text-zinc-700">
            Front-End-Developer
          </p>
          <div className="flex align-center justify-center mt-2">
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2  text-gray-500 shadow-md  rounded-full"
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
        </div>
      </div>
    </div>
  );
}
export default Card;
