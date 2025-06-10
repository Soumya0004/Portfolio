import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
     <footer className="bg-[#1a1a1a] text-[#a291fb] py-6 px-4 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center ">

        {/* Left - Navigation Links */}
       

        {/* Center - Social Icons */}
        <div className="flex space-x-4 text-2xl text-[#a291fb]">
          <Link to={"https://github.com/Soumya0004"}  className="hover:text-white"><FaGithub />
</Link>
          <Link to={"https:www.linkedin.com/in/soumya-ranjan-mishra-848a662b9"} className="hover:text-white"><FaLinkedin />
</Link>
         
        </div>

        {/* Right - Copyright */}
        <div className=" text-white text-center md:text-right  text-lg">
          Copyright © 2025 Soumya Ranjan Mishra
        </div>
      </div>
    </footer>
  )
}

export default Footer


