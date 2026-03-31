import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

import leetcodeIcon from "/images/leetcode.svg";

const ContactMe = () => {
  return (
    <section id="contact-me" className="py-12 px-6 bg-transparent">
      <h2 className="text-4xl font-bold text-black mb-6 inline-block px-2 py-2 transition duration-300 hover:bg-[linear-gradient(transparent_60%,#f7bbe2_60%)]">
        Contact Me
      </h2>

      <div className="flex items-center gap-6 text-black leading-none pl-2">
        
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/umme-fatema-052876198"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition cursor-pointer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="text-[32px]" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/ummeFA"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition cursor-pointer"
        >
          <FontAwesomeIcon icon={faGithub} className="text-[32px]" />
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/Umme_Fatema/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition cursor-pointer"
        >
          <img src={leetcodeIcon} className="w-8 h-8 block" />
        </a>
      </div>
    </section>
  );
};

export default ContactMe;