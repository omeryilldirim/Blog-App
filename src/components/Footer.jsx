import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
        © {new Date().getFullYear()} Copyright <span className="text-red-700 dark:text-neutral-200 italic font-bold">mryldrm</span>
      </div>
    </footer>
  );
};

export default Footer;
