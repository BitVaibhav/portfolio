import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[200px] md:w-[700px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Work Experience
          </h2>
          <div className="space-y-10 text-gray-300">
            <div>
              <h4 className="font-bold">
                {" "}
                IG GROUP - Associate Full Stack Developer (Sept 2024 - Present){" "}
              </h4>
              <p>
                Developed and maintained microservices for cloud-based
                applications.
              </p>
            </div>
            <div>
              <h4 className="font-bold">
                {" "}
                IG GROUP - Graduate Trainee (Sept 2023 - August 2024){" "}
              </h4>
              <p>
                Developed and maintained microservices for cloud-based
                applications.
              </p>
            </div>

            <div>
              <h4 className="font-bold">
                {" "}
                HACKEREARTH - Community Lead - Remote (May 2021 - October 2021){" "}
              </h4>
              <p>
                ◦ Testing Coding Questions: Competitive Coding questions testing for various testcases in different languages.<br />
                ◦ Moderating Tests: Moderating Ongoing Live Tests (inter-college and college tests).<br />
                ◦ Framing Questions: Preparing coding problems on various topics related Data Structures and Algorithms.
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
