import { useParams } from "react-router-dom";
import { AiFillHeart,AiOutlineEye  } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import {FaChevronCircleDown, FaChevronCircleUp} from "react-icons/fa";
import CommentCard from "../components/blog/CommentCard";
import { useEffect, useState } from "react";
import CommentForm from "../components/blog/CommentForm";
import { useSelector } from "react-redux";
import useAxios from "../hooks/useAxios";
import { toastErrorNotify } from "../helper/ToastNotify";
import UpdateModal from "../components/blog/UpdateModal";
import DeleteModal from "../components/blog/DeleteModal";

const Detail = () => {
  const [showComments, setShowComments] = useState(true);
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

  const updateBlogInfo = async (id) => {
    await axiosWithToken(`https://32253.fullstack.clarusway.com/api/blogs/${id}/`)
      .then((res) => {
        console.log(res.data);
        setBlog(res.data)})
      .catch((err) => toastErrorNotify(err.message));
  };

  const hitLikeButton = async () => {
    try {
      await axiosWithToken.post(
        `https://32253.fullstack.clarusway.com/api/likes/${id}/`
      );
      updateBlogInfo(blog_id);
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };

  useEffect(() => {
    updateBlogInfo(blog_id);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="min-h-[calc(100vh-136px)]  flex justify-center shadow-2xl pt-5 dark:bg-slate-500">
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
              className="flex items-center  "
              onClick={hitLikeButton}
            >
              <AiFillHeart
                className="inline-block mr-1 px-0.5 rounded-3xl hover:bg-slate-200 hover:cursor-pointer"
                size={"33px"}
                fill={liked ? "red" : "gray"}
              />
              <span className="text-neutral-500 dark:text-neutral-200 hover:text-black text-xl">{likes}</span>
            </div>
            <div
              className="flex items-center "
              onClick={() => setShowComments(!showComments)}
            >
              <BiCommentDetail
                className="inline-block dark:text-neutral-400 text-neutral-500 mr-1"
                size={"28px"}
              />
              <span className="text-neutral-500 dark:text-neutral-200 text-lg">{comment_count}</span>
            </div>
            <div className="flex items-center">
              <AiOutlineEye
                className="inline-block text-neutral-500 dark:text-neutral-400"
                size={"30px"}
              />
              <span className="text-neutral-500 dark:text-neutral-200 text-lg">{post_views}</span>
            </div>
            <div className="text-blue-400">
              <button className="flex items-center gap-1 p-1 rounded-3xl hover:bg-slate-200" onClick={()=>setShowComments(!showComments)}>
                Comments {showComments ? <FaChevronCircleUp/> :<FaChevronCircleDown/>}
              </button>
            </div>
          </div>

          <div className="max-w-[500px] m-auto">
            {showComments && (
              <div>
                {comments?.map((comment) => (
                  <CommentCard key={comment.id} {...comment} />
                ))}
              </div>
            )}

            {showComments && <CommentForm id={id} updateBlogInfo={updateBlogInfo} />}
          </div>
          {currentUser === author && (
            <div className="flex justify-center space-x-2 mt-5">
              <UpdateModal blog={blog} setBlog={setBlog} updateBlogInfo={updateBlogInfo}/>
              <DeleteModal id={id} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
