import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import PageLayout from '../../../components/PageLayout/PageLayout';
import useVoterLogin from './logic/useVoterLogin';
import Alert from '../../../components/Alert/Alert';

const VoterLogin = () => {

  const { isElectionLoading, electionError, electionData, loading, error, formik } = useVoterLogin();

  const MainComponent = () => {
    if (isElectionLoading) return <div className='w-full h-full flex justify-center items-center'><ClipLoader color={"#4A90E2"} loading={isElectionLoading} size={60} /></div>
    if (electionError) return <div className='w-full h-full'><Alert error={"Error occured"} /></div>
    if (!electionData) return (
      <div className="flex flex-col items-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-full h-full">
        <h2 className="text-3xl pb-5">Not Found</h2>
        <p className="text-lg pb-5">Sorry! The election you were looking for is not active or could not be found.</p>
      </div>
    )
    return (
      <div className="flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-full h-full">
        <h2 className="pb-5 text-2xl text-gray-700">
          {electionData.title}
        </h2>
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <img
            className="h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Login to Vote
          </h2>
          <div className="mt-8">
            <div className="mt-6">
              {error ? (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6"
                  role="alert"
                >
                  <span className="block sm:inline">Incorrect Id/Key. Please try again !</span>
                  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg
                      className="fill-current h-6 w-6 text-red-500"
                      role="button"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <title>Close</title>
                      <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                  </span>
                </div>
              ) : null}
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Voter ID
                  </label>
                  <input
                    id="id"
                    name="id"
                    type="text"
                    value={formik.values.id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      formik.errors.id && formik.touched.id
                        ? "appearance-none block w-full mt-1 px-3 py-2 border border-red-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        : "appearance-none block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    }
                  />
                  {formik.errors.id && formik.touched.id ? (
                    <p className="text-red-500 text-sm">
                      {formik.errors.id}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Voter Key
                  </label>
                  <input
                    id="key"
                    name="key"
                    type="password"
                    value={formik.values.key}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      formik.errors.key && formik.touched.key
                        ? "appearance-none block w-full mt-1 px-3 py-2 border border-red-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        : "appearance-none block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    }
                  />
                  {formik.errors.key && formik.touched.key ? (
                    <p className="text-red-500 text-sm">
                      {formik.errors.key}
                    </p>
                  ) : null}
                </div>

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
                  {formik.isSubmitting ? null : "Login to Vote"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <PageLayout>
      <MainComponent />
    </PageLayout>
  );
};

export default VoterLogin;
