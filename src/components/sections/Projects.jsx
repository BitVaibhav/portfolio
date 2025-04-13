import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">CryptoAsk - React / API / JS</h3>
              <p className="text-gray-400 mb-4">
                CryptoAsk is a cryptocurrency information platform that fetches real-time data on popular cryptocurrencies. It provides users with up-to-date details like prices, market cap, volume, and more—all in one place.


              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "API Integration", "Axios"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://ckkhqs.csb.app/ "
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Portfolio - React : You are here</h3>
              <p className="text-gray-400 mb-4">
                This Responsive Portfolio App showcases your projects, skills, and experience through a clean and modern design. Built with responsiveness in mind, it delivers a seamless experience across all devices, from desktops to mobiles.


              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "CSS", "HTML", "Vite"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://gm74m5-5173.csb.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"

                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">InstaNotes - Flutter / SQFlite DB </h3>
              <p className="text-gray-400 mb-4">
                InstaNotes is a Flutter-based note-taking app that lets users create, edit, and delete notes with ease. Notes are stored locally, ensuring quick access and offline functionality through a seamless and responsive UI.


              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Flutter", "Dart", "Andriod", "ios"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/BitVaibhav/InstaNotes"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">TechFest Registration Portal - DBMS</h3>
              <p className="text-gray-400 mb-4">
                TechFest Registration Portal is a user-friendly platform designed to manage event registrations efficiently. It allows participants to sign up for various tech events, track their entries, and receive updates—all in one place.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "PHP"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/BitVaibhav/TechFest_Registration"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                    target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all"
            >
              <h3 className="text-xl font-bold mb-2">WallPy - Flutter / API</h3>
              <p className="text-gray-400 mb-4">
                Wallpy is a Flutter-based wallpaper app that fetches high-quality images from an external API. Users can browse, view, and download a wide range of wallpapers with a smooth and visually appealing interface.


              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Flutter", "Dart", "API", "Android", "ios"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/BitVaibhav/WallPy"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
