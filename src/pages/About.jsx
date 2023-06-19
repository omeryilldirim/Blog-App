import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-[calc(100vh-136px)] dark:bg-slate-500 flex flex-col items-center justify-start shadow-2xl pt-6">
      <div className="flex flex-col items-center justify-start gap-3 p-6 shadow-2xl rounded-xl bg-blue-100 dark:bg-blue-300">
        <img
          src="https://www.loppy.ro/wp-content/uploads/2022/10/avatar.png"
          alt="profile"
        />
        <h2 className="text-xl text-center text-red-700">mryldrm</h2>
        <div className="flex justify-center gap-2">
          <Link className="hover:cursor-pointer" to="https://www.linkedin.com/in/omer-yilldirim/" target="_blank">
            <FaLinkedin
              size="30px"
              className=" fill-slate-500 hover:fill-blue-600"
            />
          </Link>
          <Link className="hover:cursor-pointer" to="https://github.com/omeryilldirim" target="_blank">
            <FaGithub
              size="30px"
              className=" fill-slate-500 hover:fill-amber-600"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
