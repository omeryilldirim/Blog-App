import { useParams } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import CommentCard from "../components/blog/CommentCard";
import { useEffect, useState } from "react";
import CommentForm from "../components/blog/CommentForm";
import { useSelector } from "react-redux";
import useAxios from "../hooks/useAxios";
import { toastErrorNotify } from "../helper/ToastNotify";

const Detail = () => {
  const [showComments, setShowComments] = useState(false);
  const [blog, setBlog] = useState("");
  const { userID } = useSelector((state) => state.auth);
  const { axiosWithToken } = useAxios();
  const { currentUser } = useSelector((state) => state.auth);
  const {
    id,
    image,
    title,
    content,
    author,
    publish_date,
    likes,
    likes_n,
    comments,
    comment_count,
    post_views,
  } = blog;
  const { id: blog_id } = useParams();

  const liked = likes_n?.some((like) => like.user_id === userID);

  const hitLikeButton = async () => {
    try {
      await axiosWithToken.post(
        `http://32253.fullstack.clarusway.com/api/likes/${id}/`
      );
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  useEffect(() => {
    axiosWithToken(`http://32253.fullstack.clarusway.com/api/blogs/${blog_id}/`)
      .then((res) => setBlog(res.data))
      .catch((err) => toastErrorNotify(err.message));
  });

  return (
    <div className="min-h-[85vh]  flex justify-center shadow-2xl pt-5">
      <div className="max-w-[1000px]">
        <div className="flex justify-center">
          <img
            className="max-w-[1000px] max-h-[500px]"
            src={image || ""}
            alt="blog"
          />
        </div>
        <div className="p-6">
          <h5 className="text-center mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {title || ""}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {content || ""}
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
                {author || ""}
              </p>
              <p className="text-base text-neutral-600 dark:text-neutral-200">
                {new Date(publish_date || null).getDate() +
                  "/" +
                  (new Date(publish_date || null).getMonth() + 1) +
                  "/" +
                  new Date(publish_date || null).getFullYear() +
                  ", " +
                  new Date(publish_date || null).getHours() +
                  ":" +
                  new Date(publish_date || null).getMinutes()}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-2 mb-3">
            <div
              className="flex items-center rounded-3xl hover:bg-slate-200 hover:cursor-pointer p-1 "
              onClick={hitLikeButton}
            >
              <AiFillHeart
                className="inline-block text-neutral-500 mr-1"
                size={"30px"}
                fill={liked ? "red" : "gray"}
              />
              <span className="text-neutral-500 text-xl ">{likes}</span>
            </div>
            <div
              className="flex items-center rounded-3xl hover:bg-slate-200 hover:cursor-pointer p-1 "
              onClick={() => setShowComments(!showComments)}
            >
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
          {currentUser === author && (
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
          )}

          {showComments && (
            <div>
              {comments?.map((comment) => (
                <CommentCard key={comment.id} {...comment} />
              ))}
            </div>
          )}

          {showComments && <CommentForm id={id} />}
        </div>
      </div>
    </div>
  );
};

export default Detail;
