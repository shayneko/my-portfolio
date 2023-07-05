import React from "react";


export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm <span className="text-purple-400">Chris</span>.
            <br className="hidden lg:inline-block" />I am a Web Developer and coding kat.
          </h1>
          <p className="mb-8 leading-relaxed">
          I am experienced technical support specialist transitioning to a software engineering role. I specialize in front-end development, utilizing my skills in HTML, CSS, and JavaScript to bring designs to life and deliver seamless user experiences. 
          With a strong foundation in back-end technologies such as Python and Node.js, I am proficient in building scalable and robust web applications.
          <br /><br />
          I am constantly staying updated with the latest industry trends and best practices. I am eager to apply my knowledge to solve complex problems and optimize performance.
          I am a quick learner, adaptable to new technologies, and enjoy tackling challenges head-on.
          <br /><br />
          When I am not learning or working on code I enjoy playing video games, reading, watching one of my shows, or spending time with my partner and our pets. 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
              Contact
            </a>
            <a 
              href="./chrisbailey.pdf"
              className="ml-4 inline-flex text-white bg-indigo-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" target="_blank">
                Download Resume
              </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-300 bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 hover:text-white rounded text-lg">
            Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding2.svg"
          />
        </div>
      </div>
    </section>
  );
}