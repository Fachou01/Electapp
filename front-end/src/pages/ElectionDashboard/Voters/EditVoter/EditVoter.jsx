import { ClipLoader } from 'react-spinners';
import useEditVoter from './logic/useEditVoter';
import Modal from '../../../../components/Modal/Modal';
import Button from '../../../../components/Button/Button';

const EditVoter = ({ showModal, setShowModal, voterIdRef, getVoters }) => {

  const { data, loading, editValues, editLoading, error, formik } = useEditVoter(setShowModal, voterIdRef, getVoters);

  const handleShowModal = () => {
    setShowModal(!showModal);
  }

  return (
    <Modal showModal={showModal} handleShowModal={handleShowModal} title={"Edit Voter"}>
      {/* {loading && !error && <FormBodyLoading />} */}
      {(!data && loading) && <div className="p-20 text-center flex items-center justify-center" colSpan={4}><ClipLoader color='#1E293B' size={50} loading={true} /></div>}
      {(data && !loading) && <ModalBody formik={formik} data={data} loading={loading} editValues={editValues} editLoading={editLoading} />}
    </Modal>
  )

}

const ModalBody = ({ formik, data, loading, editValues, editLoading }) => {

  return <form onSubmit={formik.handleSubmit} className="space-y-6 w-[600px]">
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
        defaultValue={editValues.name}
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
        defaultValue={editValues.email}
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
        defaultValue={editValues.voterId}
        type="text"
        name="voterId"
        id="voterId"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-300 focus:border-secondary-300 block w-full p-2.5"
        placeholder="id"

      />
      {formik.errors.voterId && formik.touched.voterId ? (
        <p className="text-red-500 text-sm">
          {formik.errors.voterId}
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
        defaultValue={editValues.key}
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
    <Button disabled={loading || editLoading} type='submit' variant={"primary"}>
      {editLoading ? <ClipLoader color='#FFF' size={18} loading={editLoading} /> : <span>Save</span>}
    </Button>
  </form>
}


export default EditVoter;