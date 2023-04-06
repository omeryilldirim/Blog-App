import React from "react";
import { Link } from "react-router-dom";
import useAuthCall from "../hooks/useAuthCall";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { logout } = useAuthCall();
  const { currentUser,image } = useSelector((state) => state.auth);
  return (
    <nav
      className="flex-no-wrap relative flex w-full items-center justify-between bg-neutral-200 py-4 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 "
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-6">
        <div
          className=" flex items-center justify-between gap-4"
          id="navbarSupportedContent1"
          data-te-collapse-item
        >
          <Link
            className=" mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
            to="/Blog-App"
          >
            <img
              src="data:image/png;base64,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"
              className="h-12 shadow-xl"
              alt="blog-app"
              loading="lazy"
            />
          </Link>
          {/* Left links */}
          <ul
            className="list-style-none mr-auto flex pl-0 gap-4"
            data-te-navbar-nav-ref
          >
            <li className="lg:pr-2" data-te-nav-item-ref>
              <Link
                className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                to="/Blog-App"
                data-te-nav-link-ref
              >
                Home
              </Link>
            </li>
            <li className="lg:pr-2" data-te-nav-item-ref>
              <Link
                className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                to="/new-blog"
                data-te-nav-link-ref
              >
                New Blog
              </Link>
            </li>
            <li className="lg:pr-2" data-te-nav-item-ref>
              <Link
                className="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                to="/about"
                data-te-nav-link-ref
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        {/* Collapsible wrapper */}
        {/* Right elements */}
        <div className="relative flex items-center">
          <div className="relative" data-te-dropdown-ref>
            <Link
              className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
              id="dropdownMenuButton2"
              role="button"
              data-te-dropdown-toggle-ref
              aria-expanded="false"
            >
              <img
                src={image ? (image):("https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png")}
                className="w-10 shadow-xl rounded-2xl"
                alt="avatar"
                loading="lazy"
              />
            </Link>
            <ul
              className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
              aria-labelledby="dropdownMenuButton2"
              data-te-dropdown-menu-ref
            >
              {currentUser ? (
                <>
                <li>
                  <Link
                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    to="/profile"
                    data-te-dropdown-item-ref
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    to="/my-blogs"
                    data-te-dropdown-item-ref
                  >
                    My blogs
                  </Link>
                </li>
                <li>
                  <Link
                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    to="/Blog-App"
                    onClick={logout}
                    data-te-dropdown-item-ref
                  >
                    Logout
                  </Link>
                </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      to="/login"
                      data-te-dropdown-item-ref
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      to="/register"
                      data-te-dropdown-item-ref
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        {/* Right elements */}
      </div>
    </nav>
  );
};

export default Navbar;
