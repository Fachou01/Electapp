import AppForm from '../../../../../components/AppForm/AppForm';
import Modal from '../../../../../components/Modal/Modal';
import useAddQuestion from './logic/useAddQuestion';

const AddQuestion = ({ showModal, setShowModal, questions, setQuestions }) => {

  const { loading, error, formik } = useAddQuestion(setShowModal, questions, setQuestions);

  const handleShowModal = () => {
    setShowModal(!showModal);
  }

  // const FormBodyLoading = () =>  <div className='flex w-full h-full rounded-lg items-center justify-center absolute top-0 left-0'><ClipLoader color='#32a852' loading={loading} size={50} /></div>

  return (
    <Modal showModal={showModal} handleShowModal={handleShowModal} title={"Multiple Choice Question"}>
      {/* {loading && !error && <FormBodyLoading />} */}
      <h1 className="mb-4">Multiple Choice - Voters can select one or many options</h1>
      <AppForm handleSubmit={formik.handleSubmit} isSubmitting={formik.isSubmitting} isSubmitButtonLoading={loading} submitButtonLabel={"Save"}>
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="title"
            id="questionTitle"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-300 focus:border-secondary-300 block w-full p-2.5"
            placeholder="title"

          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Description
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="description"
            id="questionDescription"
            placeholder="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary-300 focus:border-secondary-300 block w-full p-2.5"
          />
        </div>
      </AppForm>
    </Modal>
  )
}
export default AddQuestion;