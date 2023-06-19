import { ErrorMessage, Formik } from "formik";
import React, { useEffect } from "react";
import useBlogCall from "../../hooks/useBlogCall";
import { useSelector } from "react-redux";
import { object, string } from "yup";

const UpdateModal = ({blog, setBlog, updateBlogInfo}) => {
  const { id, content, title, image, category, status } = blog
  const { getCategories, updateBlog } = useBlogCall();
  const { categories } = useSelector((state) => state.blog);
  const updateBlogScheme = object().shape({
    title: string().required().max(50),
    content: string().max(1000).required(),
    image: string().url().required(),
    category: string().required(),
    status: string().required(),
  });

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div className="space-y-1">
        <button
          type="button"
          className="inline-block rounded bg-success px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]"
          data-te-toggle="modal"
          data-te-target="#updateBlog"
          data-te-ripple-init
          data-te-ripple-color="light"
          
        >
          Update Blog
        </button>
      </div>
      <div
        data-te-modal-init
        className="fixed top-[50px] left-0 z-[1055] hidden  w-full  outline-none"
        id="updateBlog"
        tabIndex={-1}
        aria-labelledby="updateBlogModal"
        aria-modal="true"
        role="dialog"
      >
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
        >
          <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 px-4 py-2 dark:border-opacity-50">
              <h5
                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalScrollableLabel"
              >
                Update Blog
              </h5>
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="relative ">
              <Formik
                initialValues={{
                  title,
                  content,
                  image,
                  category,
                  status,
                }}
                validationSchema={updateBlogScheme}
                onSubmit={async (values, actions) => {
                  await updateBlog(id, values);
                  await updateBlogInfo(id)
                  setBlog({...blog, ...values})
                  actions.resetForm();
                  actions.setSubmitting(false);
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
                    {/* title input */}
                    <div className="relative mb-6">
                      <label
                        htmlFor="title"
                        className="pointer-events-none p-1 max-w-[90%] text-primary dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-blue-100 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
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
                    <div className="relative mb-6">
                      <label
                        htmlFor="content"
                        className="pointer-events-none p-1 max-w-[90%] text-primary dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                      >
                        Content
                      </label>
                      <textarea
                        rows={3}
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-blue-100 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
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
                    <div className="relative mb-6">
                      <label
                        data-te-select-label-ref
                        htmlFor="image"
                        className="pointer-events-none p-1 max-w-[90%] text-primary dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                      >
                        Image URL
                      </label>
                      <input
                        type="url"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-blue-100 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
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
                    <div className="relative mb-6">
                      <label
                        data-te-select-label-ref
                        htmlFor="category"
                        className="pointer-events-none p-1 max-w-[90%] text-primary dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                      >
                        Category
                      </label>
                      <select
                        data-te-select-init
                        className="peer block min-h-[auto] w-full rounded border-0 bg-blue-100 py-[0.7rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
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
                    <div className="relative mb-3">
                      <label
                        htmlFor="status"
                        className="pointer-events-none p-1 max-w-[90%] text-primary dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                      >
                        Status
                      </label>
                      <select
                        data-te-select-init
                        data-te-select-size="lg"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-blue-100 py-[0.7rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
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

                    <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 py-2 dark:border-opacity-50">
                      <button
                        type="button"
                        className="inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                        data-te-modal-dismiss
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="ml-1 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                        data-te-modal-dismiss
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        disabled={isSubmitting}
                      >
                        Save changes
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
