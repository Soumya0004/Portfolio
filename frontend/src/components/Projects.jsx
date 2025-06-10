import React, { useState } from "react";
import img from "../assets/bookstore.png";
import img2 from "../assets/bookstore-tablet.png";
import img3 from "../assets/booksstore-phone.png";
import genAi from "../assets/genAi.png";
import genAi2 from "../assets/genAi-tablet.png";
import genAi3 from "../assets/genAi-phone.png";


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
    <div className="bg-[#1a1a1b] py-10 px-4 sm:px-8 md:px-12">
      {/* Header */}
      <div className="text-3xl text-[#9190ee] text-center">
        <span>{"{"}</span>
        <span>/</span>
        <span>{"}"}</span>
      </div>

      {/* Title */}
      <div className="flex items-center justify-center text-center">
        <p className="text-4xl sm:text-6xl lg:text-[8rem] font-pixel text-white pt-10">
          <span>{"<"}</span>
          <span className="text-[#9796fa] px-3">project</span>
          <span>{">"}</span>
        </p>
      </div>

      {/* Short intro */}
      <p className="text-white text-base sm:text-lg px-5 max-w-2xl mx-auto text-center leading-relaxed">
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

          <p className="text-white text-base sm:text-lg px-5 max-w-2xl mx-auto text-justify leading-relaxed pt-5">
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

          <p className="text-white text-base sm:text-lg px-5 max-w-2xl mx-auto text-justify leading-relaxed pt-5">
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
      </div>
    </div>
  );
};

export default Projects;
