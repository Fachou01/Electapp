import { ClipLoader } from "react-spinners";
import PageLayout from "../../components/PageLayout/PageLayout";
import useResetPassword from "./logic/useResetPassword";

const ResetPassword = () => {

  const { loading, formik, error, navigate } = useResetPassword();

  return (
    <PageLayout>
      <div className="flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-full h-full">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <img
            className="h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Reset Password
          </h2>

          <div className="mt-6">
            <div className="mt-2">
              <p className="pb-2">Please enter your new password</p>
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div>
                  <input
                    id="resetPassword"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className={
                      formik.errors.password && formik.touched.password
                        ? "appearance-none block w-full mt-1 px-3 py-2 border border-red-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        : "appearance-none block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    }
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <p className="text-red-500 text-sm">
                      {formik.errors.password}
                    </p>
                  ) : null}
                </div>

                <div>
                  <input
                    id="resetConfirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    className={
                      formik.errors.confirmPassword && formik.touched.confirmPassword
                        ? "appearance-none block w-full mt-1 px-3 py-2 border border-red-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        : "appearance-none block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    }
                  />
                  {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                    <p className="text-red-500 text-sm">
                      {formik.errors.confirmPassword}
                    </p>
                  ) : null}
                </div>
                <div className="flex justify-end items-center gap-2">
                  <button
                    type="submit"
                    className={
                      formik.isSubmitting
                        ? "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 opacity-60"
                        : "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    }
                  >
                    <ClipLoader
                      color={"4A90E2"}
                      loading={loading}
                      size={20}
                    />
                    {formik.isSubmitting ? null : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}


export default ResetPassword;