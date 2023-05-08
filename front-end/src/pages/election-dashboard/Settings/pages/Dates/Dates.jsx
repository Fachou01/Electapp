import React from 'react'
import Container from '../../../../../components/container/Container'
import useChangeDate from './useChangeDate';
import { ClipLoader } from 'react-spinners';


function Dates() {
  const { formik, isButtonLoading } = useChangeDate();

  return (

    // <Container>
    <div className='bg-gray-100 shadow-sm p-5 rounded-lg '>
      <label htmlFor="default-input" className="block mb-2 text-mb font-medium text-gray-900 dark:text-white">Dates</label>
      <form  onSubmit={formik.handleSubmit} className='p-10'>

        <div>
          <label
            htmlFor="startDate"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Start Date
          </label>
          <div className="inline-block w-1/2 pr-1">
            <input
              type="date"
              name="startDate"
              id="startDate"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="start-date"
              className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <div className="inline-block w-1/2">
            <input
              type="time"
              name="startTime"
              id="startTime"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="start-time"
              className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          {(formik.errors.startDate && formik.touched.startDate) || ((formik.errors.startTime && formik.touched.startTime)) ? (
            <p className="text-red-500 text-sm">
              {formik.errors.startDate || formik.errors.startTime}
            </p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="endDate"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            End Date
          </label>
          <div className="inline-block w-1/2 pr-1">
            <input
              type="date"
              name="endDate"
              id="endDate"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="end-date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <div className="inline-block w-1/2">
            <input
              type="time"
              name="endTime"
              id="endTime"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="end-time"
              className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          {(formik.errors.endDate && formik.touched.endDate) || (formik.errors.endTime && formik.touched.endTime) ? (
            <p className="text-red-500 text-sm ">
              {formik.errors.endDate || formik.errors.endTime}
            </p>
          ) : null}
        </div>
        <button
          type="submit"
          className={
            formik.isSubmitting
              ? "w-full flex justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 opacity-60"
              : "w-full flex justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          }
        >
          <ClipLoader
            color={"4A90E2"}
            loading={isButtonLoading}
            size={20}
          />
          {formik.isSubmitting ? null : "Add election"}
        </button>
      </form>
    </div>
    // </Container>
  )
}

export default Dates