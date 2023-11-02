import { ClipLoader } from "react-spinners";
import PageLayout from "../../components/PageLayout/PageLayout";
import useForgotPassword from "./logic/useForgotPassword";
import Alert from "../../components/Alert/Alert";

const ForgotPassword = () => {

  const { loading, formik, error, navigate, emailSentTimer } = useForgotPassword();

  const EmailSent = () => {
    return (
      <div className="flex items-end pt-5">
        <div>
        <p>If you didn't receive an email yet !</p>
        <p>You can resend in {emailSentTimer} seconds</p>
        </div>
        {/* <ClipLoader
          color={"4A90E2"}
          loading={emailSentTimer}
          size={20}
        /> */}
      </div>
    )
  }

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
            Forgot Password
          </h2>

          <div className="mt-6">
            <div className="mt-2">
              {error && <Alert  error={error}/>}
              <p className="pb-2">Please enter your email to reset your password</p>
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={
                      formik.errors.email && formik.touched.email
                        ? "appearance-none block w-full mt-1 px-3 py-2 border border-red-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        : "appearance-none block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    }
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <p className="text-red-500 text-sm">
                      {formik.errors.email}
                    </p>
                  ) : null}
                </div>
                <div className="flex justify-end items-center gap-2">

                  <button
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-light-100 bg-light-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-500"
                    onClick={() => navigate("/")}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading || emailSentTimer}
                    className={
                      formik.isSubmitting || emailSentTimer
                        ? "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 opacity-60"
                        : "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    }
                  >
                    <ClipLoader
                      color={"4A90E2"}
                      loading={loading}
                      size={20}
                    />
                    {formik.isSubmitting ? null : "Send"}
                  </button>
                </div>
              </form>
              {emailSentTimer > 0 && <EmailSent />}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}


export default ForgotPassword;