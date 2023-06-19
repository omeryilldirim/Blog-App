import { Formik, Field, Form, ErrorMessage } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { object, string } from "yup";
import useAuthCall from "../hooks/useAuthCall";

const Register = () => {
  const { register } = useAuthCall();
  const registerScheme = object().shape({
    username: string().required().max(20),
    bio: string().max(150),
    email: string().email().required(),
    image: string().url(),
    password: string()
      .required()
      .min(8)
      .max(20)
      .matches(/\d+/, "Password must include a number")
      .matches(/[a-z]/, "Password must include a small letter")
      .matches(/[A-Z]/, "Password must include a big letter")
      .matches(
        /[!,?{}><%&$#£+-.*]+/,
        "Password must include a special character"
      ),
  });
  return (
    <section className="min-h-[calc(100vh-136px)] flex items-center justify-center dark:bg-slate-500">
      <div className="container h-full px-6 py-12 ">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className=" md:mb-0 xs:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone-lock"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12">
            <Formik
              initialValues={{
                username: "",
                email: "",
                image: "",
                password: "",
                bio: "",
              }}
              validationSchema={registerScheme}
              onSubmit={(values, actions) => {
                register({ ...values, password2: values.password });
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
                <Form onSubmit={handleSubmit}>
                  <div className="flex flex-row items-center justify-center">
                    <p className="m-5 font-semibold text-3xl">REGISTER</p>
                  </div>
                  {/* Username input */}
                  <div className="relative mb-6" >
                    <label
                      htmlFor="username"
                      className="pointer-events-none p-1 max-w-[90%] text-primary dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >
                      Username
                    </label>
                    <Field
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-blue-100 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="username"
                      name="username"
                      value={values?.username || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    <ErrorMessage
                      component="p"
                      className="text-red-500 text-xs italic ml-3"
                      name="username"
                    />
                  </div>
                  {/* Email input */}
                  <div className="relative mb-6" >
                  <label
                      htmlFor="email"
                      className="pointer-events-none p-1 max-w-[90%] text-primary dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-blue-100 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="email"
                      name="email"
                      value={values?.email || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    <ErrorMessage
                      component="p"
                      className="text-red-500 text-xs italic ml-3"
                      name="email"
                    />
                  </div>
                  {/* Image input */}
                  <div className="relative mb-6" >
                  <label
                      htmlFor="image"
                      className="pointer-events-none p-1 max-w-[90%] text-primary dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >
                      Image
                    </label>
                    <Field
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
                  {/* Bio input */}
                  <div className="relative mb-6" >
                  <label
                      htmlFor="bio"
                      className="pointer-events-none p-1 max-w-[90%] text-primary dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >
                      Bio
                    </label>
                    <Field
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-blue-100 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="bio"
                      name="bio"
                      value={values?.bio || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />


                  </div>
                  {/* Password input */}
                  <div className="relative mb-6" >
                  <label
                      htmlFor="password"
                      className="pointer-events-none p-1 max-w-[90%] text-primary dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >
                      Password
                    </label>
                    <Field
                      type="password"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-blue-100 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="password"
                      name="password"
                      value={values?.password || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    <ErrorMessage
                      component="p"
                      className="text-red-500 text-xs italic ml-3"
                      name="password"
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
                    Sign up
                  </button>
                </Form>
              )}
            </Formik>
            <div className="text-center ">
              <p className="mt-2 mb-0 pt-1 text-sm font-semibold">
                Do you have an account? &nbsp;
                <Link
                  to="/login"
                  className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
