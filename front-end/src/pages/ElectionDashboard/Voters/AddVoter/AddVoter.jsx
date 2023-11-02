import { ClipLoader } from 'react-spinners';
import useAddVoter from './logic/useAddVoter';
import Modal from '../../../../components/Modal/Modal';
import Button from '../../../../components/Button/Button';
import AppForm from '../../../../components/AppForm/AppForm';

const AddVoter = ({ showModal, setShowModal, getVoters }) => {


  const { loading, error, formik } = useAddVoter(setShowModal, getVoters);

  const handleShowModal = () => {
    setShowModal(!showModal);
  }

  return (
    <Modal showModal={showModal} handleShowModal={handleShowModal} title={"Add Voter"}>
      <AppForm handleSubmit={formik.handleSubmit} isSubmitting={formik.isSubmitting} isSubmitButtonLoading={loading} submitButtonLabel={"Save"}>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="name"
            id="voterName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-300 focus:border-secondary-300 block w-full p-2.5"
            placeholder="name"

          />
          {formik.errors.name && formik.touched.name ? (
            <p className="text-red-500 text-sm">
              {formik.errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="email"
            id="voterEmail"
            placeholder="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-300 focus:border-secondary-300 block w-full p-2.5"
          />
          {formik.errors.email && formik.touched.email ? (
            <p className="text-red-500 text-sm">
              {formik.errors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="id"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Voter ID
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="voterId"
            id="voterId"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-300 focus:border-secondary-300 block w-full p-2.5"
            placeholder="id"

          />
          {formik.errors.id && formik.touched.id ? (
            <p className="text-red-500 text-sm">
              {formik.errors.id}
            </p>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="key"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Voter Key
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="key"
            id="voterKey"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-300 focus:border-secondary-300 block w-full p-2.5"
            placeholder="key"

          />
          {formik.errors.key && formik.touched.key ? (
            <p className="text-red-500 text-sm">
              {formik.errors.key}
            </p>
          ) : null}
        </div>
      </AppForm>
    </Modal>
  )
}
export default AddVoter;