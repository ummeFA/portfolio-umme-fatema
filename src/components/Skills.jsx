import React, { useEffect, useRef, useState } from "react";
import rough from "roughjs/bin/rough";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faJs,
  faPython,
  faHtml5,
  faCss3Alt,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import tailwindIcon from "../../public/images/tailwind.svg";

const skills = [
  { name: "Java", icon: faJava },
  { name: "JavaScript", icon: faJs },
  { name: "Python", icon: faPython },
  { name: "HTML", icon: faHtml5 },
  { name: "CSS", icon: faCss3Alt },
  { name: "ReactJS", icon: faReact },
  { name: "TailwindCSS", img: tailwindIcon },
];

const languageSkills = [
  { name: "Bangla", level: "Native", percent: 100 },
  { name: "English", level: "Business", percent: 90 },
  { name: "Japanese", level: "Conversational", percent: 60 },
  { name: "French", level: "Basic", percent: 40 },
];

const Skills = () => {
  const canvasRefs = useRef([]);
  const [hovered, setHovered] = useState(null);

  const drawBox = (canvas, hover = false) => {
    if (!canvas) return;
    const rc = rough.canvas(canvas);
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const w = canvas.width;
    const h = canvas.height;
    rc.rectangle(
      hover ? 2 : 0,
      hover ? 2 : 0,
      w - (hover ? 4 : 0),
      h - (hover ? 4 : 0),
      {
        roughness: 2.5,
        stroke: "black",
        strokeWidth: 2,
        fill: "transparent",
      }
    );
  };

  useEffect(() => {
    canvasRefs.current.forEach((canvas) => {
      if (canvas) drawBox(canvas);
    });
  }, []);

  useEffect(() => {
    if (hovered !== null && canvasRefs.current[hovered]) {
      drawBox(canvasRefs.current[hovered], true);
    }
  }, [hovered]);

  return (
    <section id="skills" className="py-12 px-6 bg-transparent">
      <h2 className="text-4xl font-bold text-center text-black mb-12 inline-block px-2 py-2 transition duration-300 hover:bg-[linear-gradient(transparent_60%,#f7bbe2_60%)]">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative w-48 h-52 mx-auto"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => {
              setHovered(null);
              drawBox(canvasRefs.current[index]); // reset border
            }}
          >
            <canvas
              ref={(el) => (canvasRefs.current[index] = el)}
              width={180}
              height={200}
              className="absolute top-0 left-0 z-0"
            />
            <div className="flex flex-col items-center justify-center w-full h-full p-4 z-10 relative">
              {skill.icon ? (
                <FontAwesomeIcon
                  icon={skill.icon}
                  className="text-6xl mb-2 text-black"
                />
              ) : (
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-20 h-20 mb-2"
                />
              )}
              <span className="text-lg font-medium text-black text-center">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Language Skills */}
      <h3 className="text-2xl font-bold text-center text-black mt-16 mb-12 inline-block px-2 py-2 transition duration-300 hover:bg-[linear-gradient(transparent_60%,#f7bbe2_60%)]">
        Language Skills
      </h3>
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {languageSkills.map((lang, index) => (
          <div
            key={index}
            className="w-full sm:w-full md:w-[45%] lg:w-[30%] xl:w-[22%] min-w-[240px]"
          >
            <div className="flex justify-between mb-1">
              <span className="font-semibold text-black">{lang.name}</span>
            </div>
            <progress
              className="progress progress-neutral w-full"
              value={lang.percent}
              max="100"
            ></progress>
            <span className="text-sm text-gray-600 flex justify-end">
              {lang.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
