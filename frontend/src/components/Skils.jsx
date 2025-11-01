import React, { useState } from "react";

const Skils = () => {
  const [showFullText, setShowFullText] = useState(false);

  const fullText = `Skilled in HTML, CSS, JavaScript, and React, with a strong grasp of responsive design, UI/UX principles, component-based architecture, state management, and modern frontend development best practices`;

  const getFirstWords = (text, wordCount) => {
    return text.split(" ").slice(0, wordCount).join(" ");
  };

  const skills = [
    {
      title: "_css & html",
      level: "70%",
      icon: "{/}",
      desc: "Proficient in HTML and CSS with 70% expertise, capable of building responsive layouts, semantic structures, and styled components.",
    },
    {
      title: "_javaScript",
      level: "60%",
      icon: "{#}",
      desc: "With 60% proficiency in JavaScript, I can handle DOM manipulation, ES6+ features, and integrate JS with HTML/CSS and React.",
    },
    {
      title: "_react",
      level: "80%",
      icon: "{/}",
      desc: "With 80% proficiency in React.js, I build component-based UIs, manage state using hooks, and integrate APIs cleanly.",
    },
    {
      title: "_Express",
      level: "60%",
      icon: "{#}",
      desc: "With 60% proficiency in Express.js, I set up routes, handle middleware, manage REST APIs, and connect to databases.",
    },
    {
      title: "_MongoDB",
      level: "70%",
      icon: "{/}",
      desc: "With 70% proficiency in MongoDB, I design schemas, perform CRUD operations, and use Mongoose for scalable NoSQL data handling.",
    },
    {
      title: "_Next.js",
      level: "60%",
      icon: "{#}",
      desc: "With 60% proficiency in Next.js, I build full-stack apps with server-side rendering, routing, and backend API support.",
    },
  ];

  return (
    <div className="py-10 graph-bg px-4 sm:px-8 md:px-16">
      <div className="text-3xl text-[#9190ee] text-center">
        <span>{"{"}</span><span>/</span><span>{"}"}</span>
      </div>

      <div className="flex items-center justify-center">
        <p className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-pixel text-white pt-10 text-center leading-none">
          <span>{"<"}</span>
          <span className="text-[#9796fa] px-2 sm:px-3">skills</span>
          <span>{">"}</span>
        </p>
      </div>

      <p className="text-white text-base sm:text-lg px-2 sm:px-5 max-w-3xl mx-auto text-center leading-relaxed mt-6">
        {showFullText ? fullText : getFirstWords(fullText, 20) + "... "}
        <span
          onClick={() => setShowFullText(!showFullText)}
          className="text-[#9190ee] cursor-pointer"
        >
          {showFullText ? "Read Less" : "Read More"}
        </span>
      </p>

      {/* Skills Grid */}
      <div className="px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto mt-10 gap-6 border-t border-[#9190ee] text-lg sm:text-xl">
       {skills.map((skill, index) => (
  <div
    key={index}
    className={`text-white py-6 ${index % 2 === 0 ? 'sm:border-r sm:border-[#9190ee]' : ''}`}
  >
    <div className="text-2xl text-[#9190ee] pb-4">
      {skill.icon}
    </div>
    <p className="text-2xl">{skill.title}</p>
    <p className="pt-4 text-white">{skill.desc}</p>
  </div>
))}

      </div>
    </div>
  );
};

export default Skils;
