import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex items-center justify-center pb-50"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[600px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all grid grid-cols-2 gap-4 text-center">
            <a href="mailto:vbhchaurasia001@gmail.com" className="text-xl font-bold mb-4 flex items-center justify-center">
              <img src="/assets/mailLogo.png" alt="Mail" className="mr-2 w-6 h-6" />
              Mail
            </a>
            <a href="https://github.com/BitVaibhav" target="_blank" rel="noopener noreferrer" className="text-xl font-bold mb-4 flex items-center justify-center">
              <img src="/assets/githubLogo.png" alt="Github Logo" className="mr-2 w-6 h-6" />
              Github
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-chaurasia-48536b1a1/" target="_blank" rel="noopener noreferrer" className="text-xl font-bold mb-4 flex items-center justify-center">
              <img src="/assets/linkedinLogo.png" alt="Linkedin Logo" className="mr-2 w-6 h-6" />
              Linkedin
            </a>
            <a href="tel:+91 9327020998" className="text-xl font-bold mb-4 flex items-center justify-center">
              <img src="/assets/phoneLogo.png" alt="Phone" className="mr-2 w-6 h-6" />
              +91 9327020998
            </a>
          </div>
        </div>
        <div class="text-center pt-30">Made With ❤️ By Vaibhav</div>
      </RevealOnScroll>
    </section>
  );
};
