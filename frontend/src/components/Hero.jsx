import React, { useEffect, useState } from "react";

const Hero = () => {
  const roles = ['_web developer', '_front end developer', '_full stack developer'];
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + currentRole[charIndex]);
        setCharIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setText('');
      setCharIndex(0);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex, roles]);

  return (
    <div className=" graph-bg w-full pt-10 pb-5">
      <div className="px-4 sm:px-8 md:px-16 text-center">
        <p className="text-white text-lg sm:text-xl">// HI, I'M SOUMYA , A...</p>
        
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] font-pixel text-white pt-6 sm:pt-10 leading-tight">
          {"{"}"
          <span className="text-[#9796fa] px-2  ">{text}</span>
          "
          
          {"}"}
        </p>

        <p className="text-white text-sm sm:text-lg px-2 sm:px-5 max-w-3xl mx-auto mt-6 leading-relaxed">
          I specialize in HTML, CSS, JavaScript, React, Express, MongoDB, and Next.js—building full-stack apps with clean UI and smooth backend logic.
        </p>
      </div>

      {/* Down Arrow */}
      <div className="flex justify-center text-white pt-5">
        <span className="text-2xl rotate-90 animate-pulse">=={">"}</span>
      </div>
    </div>
  );
};

export default Hero;
