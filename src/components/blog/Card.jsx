import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { toastErrorNotify } from "../../helper/ToastNotify";
import useBlogCall from "../../hooks/useBlogCall";
import { useSelector } from "react-redux";

const Card = ({ blog }) => {
  const navigate = useNavigate();
  const { axiosWithToken } = useAxios();
  const {userID} = useSelector((state) => state.auth);
  const { getBlogs } = useBlogCall();
  const {
    id,
    title,
    content,
    image,
    publish_date,
    author,
    likes,
    likes_n,
    post_views,
    comment_count,
  } = blog;

  const hitLikeButton = async () => {
    try {
      await axiosWithToken.post(
        `https://32253.fullstack.clarusway.com/api/likes/${id}/`
      );
      getBlogs()
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };
   const liked = likes_n.some((like) => like.user_id === userID);
  
  return (
    <div className="flex justify-center shadow-2xl h-[500px] rounded-xl">
      <div className="max-w-sm w-[400px] rounded-xl bg-white shadow-xl dark:bg-neutral-700">
        <div className="flex justify-center">
          <div
            className="h-auto py-3"
            onClick={() => navigate(`/detail/${id}`, { state: { blog } })}
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img
              className="h-[100px] hover:cursor-pointer hover:scale-[1.05] transition duration-100 ease-in-out"
              src={image}
              alt="blog"
            />
          </div>
        </div>
        <div className="p-6">
          <h5 className="text-center mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {title}
          </h5>
          <p className="h-[155px] overflow-auto mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {content}
          </p>
          <p className="mb-3 text-base text-neutral-600 dark:text-neutral-200">
            {new Date(publish_date).getDate() +
              "/" +
              (new Date(publish_date).getMonth() + 1) +
              "/" +
              new Date(publish_date).getFullYear()}
          </p>
          <div className="flex items-center justify-start gap-2">
            <img
              src="https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png"
              className="w-5 shadow-xl rounded-2xl"
              alt="avatar"
              loading="lazy"
            />
            <p className="text-base text-neutral-600 dark:text-neutral-200">
              {author}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between border-t-2 border-neutral-100 py-3 px-6 dark:border-neutral-600 dark:text-neutral-50">
          <div className="flex items-center justify-center">
            <div
              className="rounded-3xl hover:bg-slate-200 hover:cursor-pointer p-1"
              onClick={hitLikeButton}
            >
              <AiFillHeart
                className="inline-block text-neutral-400"
                size={"25px"}
                fill={liked ? "red" : "gray"}
              />
              <span className="text-neutral-400 text-md">{likes}</span>
            </div>
            <div className="rounded-3xl hover:bg-slate-200 hover:cursor-pointer p-1">
              <BiCommentDetail
                className="inline-block  text-neutral-400"
                size={"25px"}
              />
              <span className="text-neutral-400 text-md">{comment_count}</span>
            </div>
            <div className="rounded-3xl hover:bg-slate-200 hover:cursor-pointer p-1">
              <AiOutlineEye
                className="inline-block  text-neutral-400"
                size={"25px"}
              />
              <span className="text-neutral-400 text-md">{post_views}</span>
            </div>
          </div>
          <button
            type="button"
            className="inline-block rounded bg-primary px-4 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={() => navigate(`/detail/${id}`, { state: { blog } })}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
