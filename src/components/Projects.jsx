import React, { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

const Projects = () => {
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const p3Ref = useRef(null);

  useEffect(() => {
    const annotations = [
      annotate(p1Ref.current, {
        type: "underline",
        color: "#f7bbe2",
        strokeWidth: 3,
        animate: true,
      }),
      annotate(p2Ref.current, {
        type: "underline",
        color: "#f7bbe2",
        strokeWidth: 3,
        animate: true,
      }),
      annotate(p3Ref.current, {
        type: "underline",
        color: "#f7bbe2",
        strokeWidth: 3,
        animate: true,
      }),
    ];

    annotations.forEach((a) => a.show());

    return () => {
      annotations.forEach((a) => a.remove());
    };
  }, []);

  return (
    <section id="projects" className="py-12 px-6">
      <h2 className="text-4xl font-bold text-black mb-6 inline-block px-2 py-2 transition duration-300 hover:bg-[linear-gradient(transparent_60%,#f7bbe2_60%)]">
        Projects
      </h2>

      <ul className="space-y-4 ml-2 text-black">
        <li>
          <a
            ref={p1Ref}
            href="https://mental-health-nlp-rijmcyaeksukfmbzce8xc3.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 font-medium hover:text-blue-600 transition"
          >
            Mental Health Text Classifier
          </a>
          <span className="ml-2 text-sm text-gray-600">(Python)</span>
        </li>

        <li>
          <a
            ref={p2Ref}
            href="https://github.com/ummeFA/satellite-image-identifier"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 font-medium hover:text-blue-600 transition"
          >
            Satellite Image Classification
          </a>
          <span className="ml-2 text-sm text-gray-600">
            (Python, MobileNetV2 achieved 99.64% validation accuracy, Custom CNN achieved 94.49% validation accuracy)
          </span>
        </li>

        <li>
          <a
            ref={p3Ref}
            href="https://github.com/ummeFA/bank-customer-churn-prediction"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 font-medium hover:text-blue-600 transition"
          >
            Bank Customer Churn Prediction
          </a>
          <span className="ml-2 text-sm text-gray-600">
            (Python, pandas, scikit-learn, XGBoost, matplotlib)
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Projects;