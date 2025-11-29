export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      <div className="container max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center z-10">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6">
          <span className="text-sm uppercase tracking-widest">Hello</span>

          <h1 className="text-4xl md:text-5xl font-bold">
            I'm <span className="text-primary">Mahesh Babu</span>
          </h1>

          <p className="text-lg leading-relaxed">
            Full‑stack Developer specializing in React, Node.js, REST APIs, and
            scalable web platforms. Building high‑performance applications with
            clean engineering practices.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/mahesh_babu_resume.pdf"
              download
              class="px-6 py-3 rounded-xl border border-primary text-primary font-medium transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-primary text-white font-medium transition-colors duration-300 hover:bg-[hsl(120,60%,35%)]"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Side - Profile */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-neutral-300 dark:border-neutral-700 shadow-xl shadow-green-900/20 bg-neutral-100 dark:bg-neutral-800">
            <img
              src="https://pbs.twimg.com/profile_images/762675494374387712/3Z3xYzle.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// export const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-center px-4"
//     >
//       <div className="container max-w-4xl mx-auto text-center z-10">
//         <div>
//           <div className="flex flex-col justify-between">
//             <div>
//               <span>Hello!</span>
//               <h2>
//                 I&apos;m <span>Anish</span>
//               </h2>
//               <p>
//                 UI/UX Designer, Front-End Developer & Thinker.
//                 <br /> Based in India.
//               </p>
//               <div>
//                 <button>Download CV</button>
//                 <button>Get In Touch</button>
//               </div>
//             </div>
//             <div className="border border-red-500">{/* image of the person */}
//               <p>image of the person</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
