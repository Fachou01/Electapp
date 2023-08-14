import Button from '../../../../../components/Button/Button';
import Modal from '../../../../../components/Modal/Modal';
import useAddQuestion from './logic/useAddQuestion';
import { ClipLoader } from 'react-spinners';

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
      <form onSubmit={formik.handleSubmit} className="space-y-6 w-full">
        <div className='bg-light-300 border border-light-300 p-2.5 rounded-lg'>
          Voters can select a maximum of
          <input
            type="number"
            name="minimum"
            id="maximum"
            defaultValue={1}
            min={1}
            className="bg-gray-50 mx-2 border w-14 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1"
          />
          and a minimum of
          <input
            type="number"
            name="maximum"
            id="maximum"
            defaultValue={1}
            min={1}
            className="bg-gray-50 border border-gray-300 w-14 mx-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1"

          />
          option(s)
        </div>
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
        <Button disabled={loading} type='submit' variant={"primary"}>
          {loading ? <ClipLoader color='#FFF' size={18} loading={loading}  /> : <span>Save</span>}
        </Button>
      </form>

    </Modal>
  )
}
export default AddQuestion;