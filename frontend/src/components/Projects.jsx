import React, { useState } from "react";
import img from "../assets/bookstore.png";
import img2 from "../assets/bookstore-tablet.png";
import img3 from "../assets/booksstore-phone.png";
import genAi from "../assets/genAi.png";
import genAi2 from "../assets/genAi-tablet.png";
import genAi3 from "../assets/genAi-phone.png";
import resumeBuilder from "../assets/AiResumeBuilder-.png";
import resumeBuilderTablet from "../assets/AiResumeBuilder-tablet.png";
import resumeBuilderPhone from "../assets/AiResumeBuilder-phone.png";

const projectLinks = {
  bookstore: "https://booksiclub.netlify.app/",
  resumeBuilder: "https://ai-resume-builder-five-opal.vercel.app/",
};

const LiveDemoButton = ({ href }) => (
  <div className="text-center pt-5">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded border border-[#9190ee] px-5 py-2 text-sm text-[#9190ee] transition-colors hover:bg-[#9190ee] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9190ee]"
    >
      Live Demo
    </a>
  </div>
);

const Projects = () => {
  const [showFullText, setShowFullText] = useState(false);

  const fullText =
    "Showcasing innovative web development projects with clean code, responsive design, smooth UX, and creative solutions that bring ideas to life.";

  const bookstoreCaption =
    "Presenting “Booksi” – a sleek, user-friendly e-commerce bookshop built for seamless browsing, smooth checkout, and a delightful reading experience. Designed with clean code, responsive UI, and modern tech to make book shopping easier, faster, and more enjoyable for everyone.";

    const genAiCaption =`Built Gen Ai, a powerful AI image generator that transforms text into stunning visuals within seconds. Designed for speed, creativity, and ease—perfect for artists, marketers, and creators. Experience seamless generation and intuitive UI, powered by modern web technologies.`
  const getFirstWords = (text, wordCount) => {
    return text.split(" ").slice(0, wordCount).join(" ");
  };

  return (
    <div className=" py-10 px-4 sm:px-8 md:px-12">
      {/* Header */}
      <div className="text-3xl text-[#9190ee] text-center">
        <span>{"{"}</span>
        <span>/</span>
        <span>{"}"}</span>
      </div>

      {/* Title */}
      <div className="flex items-center justify-center text-center">
        <p className="text-4xl sm:text-6xl lg:text-[7rem] font-pixel text-white pt-10">
          <span>{"<"}</span>
          <span className="text-[#9796fa] px-3">project</span>
          <span>{">"}</span>
        </p>
      </div>

      {/* Short intro */}
      <p className="text-white text-sm sm:text-md px-5 max-w-2xl mx-auto text-center leading-relaxed font-general">
        {showFullText ? fullText : getFirstWords(fullText, 20) + "... "}
        <span
          onClick={() => setShowFullText(!showFullText)}
          className="text-[#9190ee] cursor-pointer"
        >
          {showFullText ? "Read Less" : "Read More"}
        </span>
      </p>

      {/* Project Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-[#9190ee] max-w-6xl mx-auto mt-10 pt-10 text-3xl">
        {/* Bookstore Project */}
        <div className="text-white border-b md:border-b-0 md:border-r border-[#9190ee] pb-10 md:pb-0 md:pr-6">
          <img
            src={img}
            alt="Desktop"
            className="w-full h-auto max-h-60 object-cover px-5"
          />
          <div className="flex flex-wrap justify-center gap-4 py-5">
            <img
              src={img2}
              alt="Tablet"
              className="h-48 sm:h-64 object-cover px-2"
            />
            <img
              src={img3}
              alt="Phone"
              className="h-44 sm:h-60 object-cover px-2"
            />
          </div>
          <div className="text-3xl text-[#9190ee] text-center">
        <span>{"{"}</span>
        <span>E-Commerce Bookstore</span>
        <span>{"}"}</span>
      </div>

          <p className="text-white text-sm px-5 max-w-2xl mx-auto text-justify leading-relaxed pt-5 font-general">
            {showFullText
              ? bookstoreCaption
              : getFirstWords(bookstoreCaption, 20) + "... "}
            <span
              onClick={() => setShowFullText(!showFullText)}
              className="text-[#9190ee] cursor-pointer"
            >
              {showFullText ? "Read Less" : "Read More"}
            </span>
          </p>
          <LiveDemoButton href={projectLinks.bookstore} />
        </div>

        {/* Placeholder Right Side */}
        <div className="text-[#e6c94c] py-5 px-2 text-base sm:text-lg leading-relaxed text-justify">
           <div className="text-white border-b md:border-b-0  pb-10 md:pb-0 md:pr-6">
          <img
            src={genAi}
            alt="Desktop"
            className="w-full h-auto max-h-60 object-cover px-5"
          />
          <div className="flex flex-wrap justify-center gap-4 py-5">
            <img
              src={genAi2}
              alt="Tablet"
              className="h-48 sm:h-64 object-cover px-2"
            />
            <img
              src={genAi3}
              alt="Phone"
              className="h-44 sm:h-60 object-cover px-2"
            />
          </div>
          <div className="text-3xl text-[#9190ee] text-center">
        <span>{"{"}</span>
        <span>Ai-ImageGenerator</span>
        <span>{"}"}</span>
      </div>

          <p className="text-white text-sm px-5 max-w-2xl mx-auto text-justify leading-relaxed pt-5 font-general">
            {showFullText
              ? bookstoreCaption
              : getFirstWords(genAiCaption, 20) + "... "}
            <span
              onClick={() => setShowFullText(!showFullText)}
              className="text-[#9190ee] cursor-pointer"
            >
              {showFullText ? "Read Less" : "Read More"}
            </span>
          </p>
        </div>

        </div>

        {/* AI Resume Builder Project */}
        <article className="md:col-span-2 border-b border-[#9190ee] pb-10 text-white">
          <img
            src={resumeBuilder}
            alt="AI Resume Builder desktop website screenshot"
            className="w-full max-w-xl h-60 object-contain px-5 mx-auto"
          />
          <div className="flex flex-wrap justify-center gap-4 py-5">
            <img
              src={resumeBuilderTablet}
              alt="AI Resume Builder tablet screenshot"
              className="h-48 sm:h-64 object-cover px-2"
            />
            <img
              src={resumeBuilderPhone}
              alt="AI Resume Builder phone screenshot"
              className="h-44 sm:h-60 object-cover px-2"
            />
          </div>
          <div className="text-3xl text-[#9190ee] text-center">
            <span>{"{"}</span>
            <span>AI Resume Builder</span>
            <span>{"}"}</span>
          </div>
          <p className="text-white text-sm px-5 max-w-3xl mx-auto text-center leading-relaxed pt-5 font-general">
            An AI-powered resume workspace with an ATS checker, job-description matching, keyword
            recommendations, resume writing suggestions, and professional templates to help tailor
            each application.
          </p>
          <LiveDemoButton href={projectLinks.resumeBuilder} />
        </article>
      </div>
    </div>
  );
};

export default Projects;
