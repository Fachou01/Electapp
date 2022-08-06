import { useFormik } from "formik";
import React from "react";
import { validationSchema } from "./schema/register-schema";

const AdminRegister = () => {
  //Initial values of formik
  const initialValues = {
    email: "",
    name: "",
    password: "",
    repeatPassword: "",
  };
  //on Submit form
  const onSubmit = (values) => {
    console.log("formik error", formik.errors);
    console.log("formik values", values);
  };
  // formik hook
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });
  return (
    <>
      <div className="min-h-full flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Create your account
              </h2>
            </div>

            <div className="mt-8">
              <div className="w-full border-t border-gray-300" />

              <div className="mt-6">
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="email"
                        className={
                          formik.errors.email && formik.touched.email
                            ? "appearance-none block w-full px-3 py-2 border border-red-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                            : "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      />
                      {formik.errors.email && formik.touched.email ? (
                        <p className="text-red-500 text-sm">
                          {formik.errors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={
                          formik.errors.name && formik.touched.name
                            ? "appearance-none block w-full px-3 py-2 border border-red-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                            : "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      />
                      {formik.errors.name && formik.touched.name ? (
                        <p className="text-red-500 text-sm">
                          {formik.errors.name}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="password"
                        className={
                          formik.errors.password && formik.touched.password
                            ? "appearance-none block w-full px-3 py-2 border border-red-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                            : "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      />
                      {formik.errors.password && formik.touched.password ? (
                        <p className="text-red-500 text-sm">
                          {formik.errors.password}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="repeatPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Repeat password
                    </label>
                    <div className="mt-1">
                      <input
                        id="repeatPassword"
                        name="repeatPassword"
                        type="password"
                        value={formik.values.repeatPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="repeatPassword"
                        className={
                          formik.errors.repeatPassword &&
                          formik.touched.repeatPassword
                            ? "appearance-none block w-full px-3 py-2 border border-red-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                            : "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        }
                      />
                      {formik.errors.repeatPassword &&
                      formik.touched.repeatPassword ? (
                        <p className="text-red-500 text-sm">
                          {formik.errors.repeatPassword}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Already have an account?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default AdminRegister;
