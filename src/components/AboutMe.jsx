import React from "react";
import myImage from "/images/self-image.jpg";

const AboutMe = () => {
  return (
    // min-h-full bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:20px_20px] bg-[#f9f9f7]

    // relative px-2 py-1 transition duration-300 hover:bg-[linear-gradient(transparent_60%,#bbf7d0_60%)]
    <section
      id="about-me"
      className="py-36 px-6 bg-transparent animate-fade-in-up"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="flex-1 space-y-4 p-6 transition-all duration-500 bg-no-repeat bg-cover bg-left hover:bg-[url('/images/bg.png')]">
          <h1 className="text-5xl font-bold text-black animate-fade-in-up">
            <span className="block">Hello,</span>
            <span className="block text-3xl mt-1 ">I'm Umme Fatema</span>
          </h1>

          <h2 className="text-2xl font-semibold text-black">
            Engineer || Data Science || Machine Learning || Fullstack Web
            Development
          </h2>
          <p className="text-base text-black">
            Passionate about Fullstack Web Development, Data Science, and
            Machine Learning. I enjoy problem-solving and constantly learning
            new things.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={myImage}
            alt="Profile"
            className="w-80 h-80 object-cover rounded-md shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
