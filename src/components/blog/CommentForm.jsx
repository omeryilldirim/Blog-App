import React, { useState } from "react";
import useBlogCall from "../../hooks/useBlogCall";

const CommentForm = ({ id, updateBlogInfo }) => {
  const [content, setContent] = useState("");
  const { postComment } = useBlogCall();
  return (
    <form
      className="flex justify-center w-full"
      onSubmit={(e) => {
        e.preventDefault();
        postComment(id, { post: id, content })
        updateBlogInfo(id)
        setContent("")}}
    >
      <div className="relative  w-full flex flex-col gap-2 items-center">

        <textarea
          className="peer block min-h-[auto] w-full border-2 border-slate-300 rounded py-[0.32rem] px-3 leading-[1.6] outline-none"
          id="comment"
          rows={3}
          placeholder="Your comment here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button
          type="submit"
          className="inline-block rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        >
          Add Comment
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
