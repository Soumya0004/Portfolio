import React from "react";
import Bannerimg from "./Bannerimg";

const About_page_2 = () => {
  return (
    <div className="bg-[#1a1a1b]">
      {/* Header */}
      <div className="flex items-center justify-center text-center px-4">
        <p className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-pixel text-white pt-10 leading-tight">
          <span>{"<"}</span>
          <span className="text-white">"</span>
          <span className="text-[#2fcbef] px-2 sm:px-3">about_me</span>
          <span className="text-white">"</span>
          <span>{">"}</span>
        </p>
      </div>

      {/* Intro Text */}
      <div className="px-4 sm:px-6 md:px-10 max-w-5xl mx-auto">
        <p className="text-xl sm:text-2xl text-[#e6c94c] text-justify mt-10">
          ...Hi, I’m Soumya Ranjan Mishra, a passionate web developer with a
          love for creating clean, responsive, and user-friendly websites and
          web applications. I specialize in front-end development with
          experience in HTML, CSS, JavaScript, and modern frameworks like React
          and Vue. I also enjoy working with back-end technologies such as
          Node.js and Express, and I’m always eager to learn new tools and
          techniques to enhance my craft.
        </p>
        <p className="text-base sm:text-lg text-white text-justify mt-6 pb-16">
          I build web solutions that are not only visually appealing but also
          optimized for performance and usability. Whether it’s designing
          intuitive user interfaces or building dynamic web features, I strive
          to write clean and maintainable code that brings ideas to life on the
          web. Let’s build something awesome together!
        </p>
      </div>

      {/* Banner */}
      <Bannerimg />

      {/* Section Header */}
      <div className="flex items-center justify-center text-center px-4">
        <p className="text-3xl sm:text-5xl md:text-6xl lg:text-[7rem] font-pixel text-white pt-10 leading-tight">
          <span>{"<"}</span>
          <span className="px-2">what drives my work</span>
          <span>{">"}</span>
        </p>
      </div>

      {/* Content Grid */}
      <div className="px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto mt-10 gap-6 border-t border-[#9190ee] text-lg sm:text-xl">
        {/* Left Column */}
        <div className="border-r border-[#9190ee] text-white py-6">
          <div className="text-2xl text-[#9190ee] pb-4">
            <span>{"{"}</span>
            <span>/</span>
            <span>{"}"}</span>
          </div>
          <p className="text-2xl text-white font-semibold">_team work</p>
          <p className="pt-4 text-[#e6c94c]">
            Collaborated with cross-functional teams to build responsive web
            apps, ensuring smooth communication, clean code, and timely project
            delivery.
          </p>
        </div>

        {/* Right Column */}
        <div className="text-white py-6">
          <div className="text-2xl text-[#9190ee] pb-4">
            <span>{"{"}</span>
            <span>#</span>
            <span>{"}"}</span>
          </div>
          <p className="text-2xl font-semibold">_hard work</p>
          <p className="pt-4 text-[#e6c94c]">
            I believe in building beyond expectations—writing clean, scalable
            code, constantly learning, and pushing boundaries daily to turn
            complex problems into elegant web solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About_page_2;
