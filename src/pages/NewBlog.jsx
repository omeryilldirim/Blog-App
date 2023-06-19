import { ErrorMessage, Formik } from "formik";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { object, string } from "yup";
import useBlogCall from "../hooks/useBlogCall";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const { categories } = useSelector((state) => state.blog);
  const { getCategories, postBlog } = useBlogCall();
  const navigate = useNavigate();
  const postBlogScheme = object().shape({
    title: string().required().max(50),
    content: string().max(400).required(),
    image: string().url().required(),
    category: string().required(),
    status: string().required(),
  });

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line 
  }, []);

  return (
    <section className="min-h-[calc(100vh-136px)] flex items-center justify-center">
      <div className="container h-full ">
        <div className="flex h-full flex-wrap items-start justify-center ">
          <div className="md:w-8/12 lg:w-5/12">
            <Formik
              initialValues={{
                title: "",
                content: "",
                image: "",
                category: "",
                status: "",
              }}
              validationSchema={postBlogScheme}
              onSubmit={(values, actions) => {
                postBlog({ ...values, category: parseInt(values.category) });
                actions.resetForm();
                actions.setSubmitting(false);
                navigate("/");
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form className="p-4" onSubmit={handleSubmit}>
                  <div className="flex flex-row items-center justify-center">
                    <p className="m-5 font-semibold text-3xl">New Blog</p>
                  </div>
                  {/* title input */}
                  <div className="relative mb-6" >
                  <label
                      htmlFor="title"
                      className="pointer-events-none p-1 max-w-[90%] text-primary dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-blue-100 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="title"
                      name="title"
                      value={values?.title || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />


                    <ErrorMessage
                      component="p"
                      className="text-red-500 text-xs italic ml-3"
                      name="title"
                    />
                  </div>
                  {/* content input */}
                  <div className="relative mb-6" >
                  <label
                      htmlFor="content"
                      className="pointer-events-none p-1 max-w-[90%] text-primary dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >
                      Content
                    </label>
                    <textarea rows={3}
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-blue-100 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="content"
                      name="content"
                      value={values?.content || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    <ErrorMessage
                      component="p"
                      className="text-red-500 text-xs italic ml-3"
                      name="content"
                    />
                  </div>
                  {/* Image input */}
                  <div className="relative mb-6" >
                  <label data-te-select-label-ref
                      htmlFor="image"
                      className="pointer-events-none p-1 max-w-[90%] text-primary dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >
                      Image URL
                    </label>
                    <input
                      type="url"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-blue-100 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="image"
                      name="image"
                      value={values?.image || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />


                    <ErrorMessage
                      component="p"
                      className="text-red-500 text-xs italic ml-3"
                      name="image"
                    />
                  </div>
                  {/* category input */}
                  <div className="relative mb-6" >
                  <label data-te-select-label-ref
                      htmlFor="category"
                      className="pointer-events-none p-1 max-w-[90%] text-primary dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >
                      Category
                    </label>
                    <select data-te-select-init
                      className="peer block min-h-[auto] w-full rounded border-0 bg-blue-100 py-[0.7rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="category"
                      name="category"
                      value={values?.category || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    >
                      <option value="" disabled></option>
                      {categories?.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>


                  </div>
                  {/* status input */}
                  <div className="relative mb-6" >
                  <label
                      htmlFor="status"
                      className="pointer-events-none p-1 max-w-[90%] text-primary dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >
                      Status
                    </label>
                    <select data-te-select-init
                      data-te-select-size="lg"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-blue-100 py-[0.7rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="status"
                      name="status"
                      value={values?.status || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="" disabled></option>
                      <option value="d">Draft</option>
                      <option value="p">Published</option>
                    </select>

                    <ErrorMessage
                      component="p"
                      className="text-red-500 text-xs italic ml-3"
                      name="status"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="inline-block w-full rounded bg-primary px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    disabled={isSubmitting}
                  >
                    Add Blog
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewBlog;
