import React from "react";
import { useSelector } from "react-redux";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-start shadow-2xl pt-6">
      <div className="flex flex-col items-center justify-start gap-3 p-6 shadow-2xl rounded-xl bg-blue-100">
        <img
          src="https://www.loppy.ro/wp-content/uploads/2022/10/avatar.png"
          alt="profile"
        />
        <h2 className="text-xl text-center text-red-700">mryldrm</h2>
        <div className="flex justify-center gap-2">
          <Link className="hover:cursor-pointer">
            <FaLinkedin
              size="30px"
              className=" fill-slate-500 hover:fill-blue-600"
            />
          </Link>
          <Link className="hover:cursor-pointer">
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
