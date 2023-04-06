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
import UpdateModal from "../components/blog/UpdateModal";
import DeleteModal from "../components/blog/DeleteModal";

const Detail = () => {
  const [showComments, setShowComments] = useState(false);
  const [blog, setBlog] = useState("");
  const { userID } = useSelector((state) => state.auth);
  const { currentUser } = useSelector((state) => state.auth);
  const { axiosWithToken } = useAxios();
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
        `https://32253.fullstack.clarusway.com/api/likes/${id}/`
      );
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  useEffect(() => {
    axiosWithToken(`https://32253.fullstack.clarusway.com/api/blogs/${blog_id}/`)
      .then((res) => setBlog(res.data))
      .catch((err) => toastErrorNotify(err.message));
  });

  return (
    <div className="min-h-[85vh]  flex justify-center shadow-2xl pt-5">
      <div className=" xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <div className="flex justify-center">
          <img
            className="xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl max-h-[500px]"
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
              <UpdateModal blog={blog} setBlog={setBlog} />
              <DeleteModal id={id} />
            </div>
          )}
          <div className="max-w-[500px] m-auto">
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
    </div>
  );
};

export default Detail;
