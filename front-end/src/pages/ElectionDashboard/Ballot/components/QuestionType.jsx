import Button from '../../../../components/Button/Button';
import Modal from '../../../../components/Modal/Modal';

const QuestionType = ({ showModal, setShowModal, setShowAddQuestion, type, setType }) => {

  const handleShowModal = () => {
    setShowModal(!showModal);
  }
  const handleSubmit = () => {
    if (type) {
      setShowModal(false);
      setShowAddQuestion(true);
    }

  }
  return (
    <Modal showModal={showModal} handleShowModal={handleShowModal} title={"Add Ballot Question"}>
      <h1 className="mb-4">What type of question would you like to add to the ballot?</h1>
      <div className="flex justify-center w-full gap-3 mb-4">
        <div className="w-1/2">
          <input type="radio" name="questionType" id="multi-option" onChange={() => setType("MULTI")} className="hidden peer" />
          <label htmlFor="multi-option" className="h-full inline-flex justify-between w-full p-6 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer  peer-checked:border-indigo-600 hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50">
            <div className="block">
              <div className="w-full text-lg font-semibold">Multiple Choice</div>
              <div className="w-full text-sm">Voters select one or more options from a list.</div>
            </div>
          </label>
        </div>
        <div className="w-1/2">
          <input type="radio" name="questionType" id="flowbite-option" onChange={() => setType("IRV")} className="hidden peer" />
          <label htmlFor="flowbite-option" className="h-full inline-flex justify-between w-full p-6 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer  peer-checked:border-indigo-600 hover:text-gray-600  peer-checked:text-gray-600 hover:bg-gray-50">
            <div className="block">
              <div className="w-full text-lg font-semibold">Ranked Choice (IRV)</div>
              <div className="w-full text-sm">Voters rank options by preference. Results will be determined using Instant Run-off Voting.</div>
            </div>
          </label>
        </div>
      </div>
      <Button onClick={handleSubmit} variant={"primary"} className="font-medium">
        Confirm
      </Button>
    </Modal>
  )
}
export default QuestionType;