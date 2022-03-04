import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import { FaAngleDoubleDown } from "react-icons/fa";

function About() {
  return (
    <div className="max-w-4xl mx-auto  mt-10">
      <p className="text-2xl font-bold text-black text-center md:text-4xl">
        Hey 👋
      </p>
      <p className="text-base mt-5  text-gray-700 text-center md:text-lg">
        The href attribute requires a valid value to be accessible. Provide a
        valid, navigable address as the href value. If you cannot provide a
        valid href, but still need the element to resemble a link, use a button
        and change it with appropriate styles
      </p>

      <ScrollIntoView selector="#tech">
        <button className="mdl-button mdl-js-button mdl-button--raised mx-auto flex mt-5">
          <FaAngleDoubleDown className="animate-bounce text-3xl mt-5 text-blue-500  mx-auto" />
        </button>
      </ScrollIntoView>
    </div>
  );
}

export default About;
