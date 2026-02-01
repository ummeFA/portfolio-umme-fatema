import React, { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

const Experience = () => {
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);

  useEffect(() => {
    const annotation1 = annotate(cardRef1.current, {
      type: "box",
      color: "black",
      strokeWidth: 2,
      padding: 10,
      iterations: 2,
      animate: true,
    });
    const annotation2 = annotate(cardRef2.current, {
      type: "box",
      color: "black",
      strokeWidth: 2,
      padding: 10,
      iterations: 2,
      animate: true,
    });
    annotation1.show();
    annotation2.show();
  }, []);

  return (
    <div className="py-12 px-6" id="experience">
      <h2 className="text-4xl font-bold text-center text-black mb-12 inline-block px-2 py-2 transition duration-300 hover:bg-[linear-gradient(transparent_60%,#f7bbe2_60%)]">
        Experience
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-start gap-12">
        {/* Card 1 */}
        <div
          ref={cardRef1}
          className="w-full md:w-1/2 p-6 bg-transparent shadow-md rounded-md text-black"
        >
          <h3 className="text-3xl font-bold mb-2">株式会社 Ariake</h3>
          <h4 className="text-xl font-semibold mb-2">Kumamoto, Japan</h4>
          <h5 className="text-sm text-black mb-2">February 2024 – Present</h5>
          <p className="text-base">
            Engineer, Surveying Division - Public Surveying Group
          </p>
        </div>

        {/* Card 2 */}
        <div
          ref={cardRef2}
          className="w-full md:w-1/2 p-6 bg-transparent shadow-md rounded-md text-black"
        >
          <h3 className="text-3xl font-bold mb-2">
            Lankabangla Finance Limited
          </h3>
          <h4 className="text-xl font-semibold mb-2">Dhaka, Bangladesh</h4>
          <h5 className="text-sm text-black mb-2">
            December 2021 – March 2023
          </h5>
          <p className="text-base">
            Business Support Officer, Credit Risk Management
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
