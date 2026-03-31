import React, { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

const Certificates = () => {
  const cert1Ref = useRef(null);
  const cert2Ref = useRef(null);

  useEffect(() => {
    annotate(cert1Ref.current, {
      type: "underline",
      color: "#f7bbe2",
      strokeWidth: 3,
      animate: true,
    }).show();

    annotate(cert2Ref.current, {
      type: "underline",
      color: "#f7bbe2",
      strokeWidth: 3,
      animate: true,
    }).show();
  }, []);

  return (
    <section className="py-12 px-6">
      <h2 className="text-4xl font-bold text-black mb-6 inline-block px-2 py-2 transition duration-300 hover:bg-[linear-gradient(transparent_60%,#f7bbe2_60%)]">
        Certificates
      </h2>

      <ul className="space-y-4 ml-2 text-black">
        <li>
          <a
            ref={cert1Ref}
            href="https://coursera.org/share/6fc97ac82ed58ec6a12d5536c94fd96f"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 font-medium hover:text-blue-600"
          >
            Developing Back-End Apps with Node.js and Express
          </a>
        </li>

        <li>
          <a
            ref={cert2Ref}
            href="https://coursera.org/share/8df7c01231d20b1e763a7a8692b26eab"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 font-medium hover:text-blue-600"
          >
            Python for Data Science, AI & Development
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Certificates;
