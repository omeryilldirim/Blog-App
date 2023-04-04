import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuthCall from "../hooks/useAuthCall";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  const {login} = useAuthCall()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <section className="h-[90vh] flex items-center justify-center">
      <div className="h-full px-12 text-neutral-800 dark:text-neutral-200">
        <div className="g-6 px-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="login"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values, actions) => {
                login({email,password});
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
                <Form >
                  <div className="flex flex-row items-center justify-center">
                    <p className="m-5 font-semibold text-3xl">LOGIN</p>
                  </div>

                  <div className="relative mb-6" >
                    <label
                      htmlFor="email"
                      className="pointer-events-none p-1 max-w-[90%] text-primary dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >
                      Email
                    </label>
                    <Field
                      type="email"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-blue-100 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      onBlur={handleBlur}
                      required
                    />
                  </div>

                  <div className="relative mb-6" >
                    <label
                      htmlFor="password"
                      className="pointer-events-none p-1 max-w-[90%] text-primary dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >
                      Password
                    </label>
                    <Field
                      type="password"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-blue-100 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                      onBlur={handleBlur}
                      required
                    />
                  </div>

                  <div className="text-center ">
                    <button
                      type="submit"
                      className="inline-block w-full rounded bg-primary px-8 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      disabled={isSubmitting}
                    >
                      Login
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="text-center ">
              <p className="mt-2 mb-0 pt-1 text-sm font-semibold">
                Don't have an account?&nbsp;
                <Link
                  to="/register"
                  className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
