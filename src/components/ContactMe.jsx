import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import leetcodeIcon from "../../public/images/leetcode.svg";

const ContactMe = () => {
  return (
    <section id="contact-me" className="py-12 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-6 inline-block px-2 py-2 transition duration-300 hover:bg-[linear-gradient(transparent_60%,#f7bbe2_60%)]">
          Contact Me
        </h2>

        <div className="flex items-center gap-6 text-black leading-none pl-3">
          <a className="hover:scale-125 transition">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-[32px]" />
          </a>
          <a className="hover:scale-125 transition">
            <FontAwesomeIcon icon={faGithub} className="text-[32px]" />
          </a>
          <a className="hover:scale-125 transition">
            <img src={leetcodeIcon} className="w-8 h-8 block" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
