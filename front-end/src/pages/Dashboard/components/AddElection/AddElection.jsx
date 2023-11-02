import React from "react";
import { ClipLoader } from "react-spinners";
import Modal from "../../../../components/Modal/Modal";
import useAddElection from "./hooks/useAddElection";
import Button from "../../../../components/Button/Button";
import AppForm from "../../../../components/AppForm/AppForm";


const AddElection = ({ showModal, setShowModal }) => {

  const { formik, handleShowModal, isButtonLoading } = useAddElection(showModal, setShowModal);

  return (
    <>
      <Modal showModal={showModal} handleShowModal={handleShowModal} title={"Add a new election"}>
        <AppForm handleSubmit={formik.handleSubmit} isSubmitting={formik.isSubmitting} isSubmitButtonLoading={isButtonLoading} submitButtonLabel={"Add election"}>
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="title"

            />
            {formik.errors.title && formik.touched.title ? (
              <p className="text-red-500 text-sm">
                {formik.errors.title}
              </p>
            ) : null}
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              placeholder="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {formik.errors.description && formik.touched.description ? (
              <p className="text-red-500 text-sm">
                {formik.errors.description}
              </p>
            ) : null}
          </div>
          <div>
            <label
              htmlFor="startDate"
              className="block mb-2 text-sm font-medium text-gray-900"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
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
              className="block mb-2 text-sm font-medium text-gray-900"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 w-full p-2.5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {(formik.errors.endDate && formik.touched.endDate) || (formik.errors.endTime && formik.touched.endTime) ? (
              <p className="text-red-500 text-sm ">
                {formik.errors.endDate || formik.errors.endTime}
              </p>
            ) : null}
          </div>
        </AppForm>
      </Modal>
    </>
  );
};

export default AddElection;
