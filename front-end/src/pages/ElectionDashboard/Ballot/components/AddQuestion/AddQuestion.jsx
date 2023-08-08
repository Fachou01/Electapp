import Modal from '../../../../../components/Modal/Modal';

const AddQuestion = ({ showModal, setShowModal, setType, questions, setQuestions }) => {

  const handleShowModal = () => {
    setShowModal(!showModal);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    setType();
    const question = {
      q: {
        id:1,
        title: "test",
        description: "test desc"
      },
      options: [
        {
          id:1,
          title: "testOpt",
          value: "1"
        }
      ]
    } 
    
    setQuestions([...questions, question ]);
    
  }
  return (
    <Modal showModal={showModal} handleShowModal={handleShowModal} title={"Multiple Choice Question"}>
      <h1 className="mb-4">Multiple Choice - Voters can select one or many options</h1>
      <form onSubmit={handleSubmit} className="space-y-6 w-full">
        <div className='bg-gray-50 border border-gray-300 p-2.5 rounded-lg'>
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
            type="text"
            name="title"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
            type="text"
            name="description"
            id="description"
            placeholder="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />

        </div>
        <button type='submit' className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded">
          Save
        </button>
      </form>

    </Modal>
  )
}
export default AddQuestion;