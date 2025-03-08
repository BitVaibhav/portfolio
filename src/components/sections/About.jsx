import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "HTML",
    "Vite",
    "TypeScript",
    "Flutter",

  ];

  const backendSkills = ["Node.js", "Java", "C++", "Springboot", "SQL"];
  const others = ["Nomad", "CI/CD", "Gitlab"];


  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate full-stack developer with expertise in building minimal and scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Others</h3>
                <div className="flex flex-wrap gap-2">
                  {others.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-6">
                <li>
                  <strong> Bachelor of Engineering </strong> - Nitte Meenakshi Institute of Technology, Bangalore
                  (2019-2023) -- <strong>8.91 CGPA</strong>
                </li>
                <li>
                  <strong> Class XII </strong> - Oxford English School, Patan, Gujarat
                  (2018-2019) -- <strong>84%</strong>
                </li>
                <li>
                  <strong> Class X </strong> - Oxford English School, Patan, Gujarat
                  (2016-2017) -- <strong>9.00 CGPA</strong>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Hobbies </h3>
              <div className="grid grid-cols-3 gap-5">
                <div>👨‍🍳Cooking</div>
                <div>🎤Singing</div>
                <div>🎮PC Games</div>
                <div>🕺Dancing</div>
                <div>☕Cafe Hopping</div>
                <div>✈️Travelling</div>
                <div>📚Reading</div>

              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
