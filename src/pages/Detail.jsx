import { useLocation } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import CommentCard from "../components/blog/CommentCard";
import { useState } from "react";

const Detail = () => {
  const [showComments, setShowComments] = useState(true)
  const location = useLocation();
  const {
    id,
    title,
    content,
    image,
    publish_date,
    author,
    comments,
    category_name,
    likes,
    post_views,
    comment_count,
  } = location.state.blog;

  return (
    <div className="min-h-[85vh] flex justify-center shadow-2xl pt-5">
      <div>
        <div className="flex justify-center">
          <img
            className="max-w-[1000px] max-h-[500px]"
            src={image}
            alt="blog"
          />
        </div>
        <div className="p-6">
          <h5 className="text-center mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {title}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {content}
          </p>
          <div className="flex items-center justify-start gap-2 mb-4">
            <img
              src="https://toppng.com/uploads/preview/app-icon-set-login-icon-comments-avatar-icon-11553436380yill0nchdm.png"
              className="w-12 shadow-xl rounded-3xl"
              alt="avatar"
              loading="lazy"
            />
            <div className="">
              <p className="text-base text-neutral-600 dark:text-neutral-200">
                {author}
              </p>
              <p className="text-base text-neutral-600 dark:text-neutral-200">
                {new Date(publish_date).getDate() +
                  "/" +
                  (new Date(publish_date).getMonth() + 1) +
                  "/" +
                  new Date(publish_date).getFullYear() +
                  ", " +
                  new Date(publish_date).getHours() +
                  ":" +
                  new Date(publish_date).getMinutes()}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-2">
            <div className="flex items-center rounded-3xl hover:bg-slate-200 hover:cursor-pointer p-1 ">
              <AiFillHeart
                className="inline-block text-neutral-500 mr-1"
                size={"30px"}
              />
              <span className="text-neutral-500 text-xl ">{likes}</span>
            </div>
            <div className="flex items-center rounded-3xl hover:bg-slate-200 hover:cursor-pointer p-1">
              <BiCommentDetail
                className="inline-block  text-neutral-500 mr-1"
                size={"30px"}
              />
              <span className="text-neutral-500 text-lg">{comment_count}</span>
            </div>
            <div className="flex items-center rounded-3xl hover:bg-slate-200 hover:cursor-pointer p-1">
              <AiOutlineEye
                className="inline-block  text-neutral-500"
                size={"30px"}
              />
              <span className="text-neutral-500 text-lg">{post_views}</span>
            </div>
          </div>
          <div className="flex justify-center space-x-2">
            <button
              type="button"
              className="inline-block rounded bg-success px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]"
            >
              Update Blog
            </button>
            <button
              type="button"
              className="inline-block rounded bg-danger px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]"
            >
              Delete Blog
            </button>
          </div>
          <div>
            {comments.map((comment) => <CommentCard key={comment.id} {...comments} />)}
          </div>

          <form className="flex justify-center w-full m-2">
            <div
              className="relative m-3 w-full flex flex-col gap-2 items-center"
              data-te-input-wrapper-init
            >
              <textarea
                className="peer block min-h-[auto] w-full border-2 border-slate-300 rounded py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="comment"
                rows={3}
                placeholder="Your message"
                defaultValue={""}
              />
              <label
                htmlFor="comment"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >
                Comment
              </label>
              <button
                type="submit"
                className="inline-block rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              >
                Add Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Detail;
