import React, { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

const Education = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const annotation = annotate(cardRef.current, {
      type: "box",
      color: "black",
      strokeWidth: 2,
      padding: .5,
      iterations: 2,
      animate: true,
    });
    annotation.show();
  }, []);

  return (
    <div
      id="education"
      className="bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:20px_20px] bg-[#f9f9f7] py-12"
    >
      {/* Centered Heading */}
      <h2 className="text-4xl font-bold text-center text-black mb-12 inline-block px-2 py-2 transition duration-300 hover:bg-[linear-gradient(transparent_60%,#f7bbe2_60%)]">
        Education
      </h2>

      {/* Card with Rough Box */}
      <div
        ref={cardRef}
        className="w-full p-6 bg-transparent shadow-md rounded-md text-black"
      >
        <h3 className="text-3xl font-bold mb-2">Brac University</h3>
        <h4 className="text-xl font-semibold mb-2">
          Bachelor of Computer Science and Engineering
        </h4>
        <h5 className="text-sm text-black mb-2">January 2016 – January 2022</h5>
        <p className="text-base">
          Department of Computer Science and Engineering
        </p>
      </div>
    </div>
  );
};

export default Education;
