import React, { useEffect, useRef, useState } from "react";
import rough from "roughjs/bin/rough";

const technicalSkills = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "TensorFlow",
  "Keras",
  "scikit-learn",
  "XGBoost",
  "CNN",
  "Transfer Learning",
  "Data Preprocessing",
  "Feature Engineering",
  "Model Evaluation",
  "Image Classification",
  "QGIS",
  "LiDAR Data Processing",
  "Point Cloud Processing",
  "Emesent Aura",
  "Geospatial Data Analysis",
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

    const ctx = canvas.getContext("2d");
    const rc = rough.canvas(canvas);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    rc.rectangle(
      hover ? 4 : 2,
      hover ? 4 : 2,
      canvas.width - (hover ? 8 : 4),
      canvas.height - (hover ? 8 : 4),
      {
        roughness: hover ? 1.5 : 2.5,
        stroke: "black",
        strokeWidth: hover ? 2.5 : 2,
        fill: "transparent",
      }
    );
  };

  useEffect(() => {
    canvasRefs.current.forEach((canvas, index) => {
      drawBox(canvas, hovered === index);
    });
  }, [hovered]);

  return (
    <section id="skills" className="py-12 px-6 bg-transparent">
      <div className="mb-12">
        <h2 className="inline-block text-4xl font-bold text-black px-2 py-2 transition duration-300 hover:bg-[linear-gradient(transparent_60%,#f7bbe2_60%)]">
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
        {technicalSkills.map((skill, index) => (
          <div
            key={skill}
            className="relative w-[192px] h-[120px] mx-auto cursor-pointer"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <canvas
              ref={(el) => (canvasRefs.current[index] = el)}
              width={192}
              height={120}
              className="absolute top-0 left-0 z-0 pointer-events-none"
            />
            <div className="relative z-10 flex items-center justify-center w-full h-full p-4 text-center">
              <span className="text-lg font-medium text-black">{skill}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 mb-12">
        <h3 className="inline-block text-2xl font-bold text-black px-2 py-2 transition duration-300 hover:bg-[linear-gradient(transparent_60%,#f7bbe2_60%)]">
          Language Skills
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {languageSkills.map((lang) => (
          <div
            key={lang.name}
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