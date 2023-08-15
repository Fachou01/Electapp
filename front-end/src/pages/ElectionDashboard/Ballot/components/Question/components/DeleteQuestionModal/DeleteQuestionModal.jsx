import { ClipLoader } from "react-spinners"
import Button from "../../../../../../../components/Button/Button"
import Modal from "../../../../../../../components/Modal/Modal"

const DeleteQuestionModal = ({ showModal, handleShowModal, handleButtonClick, isButtonLoading }) => {
  return (
    <Modal showModal={showModal} handleShowModal={handleShowModal} title={"Delete Question"}>
      <div className="space-y-6 w-96">
        <h2>Are you sure you want to delete this question ?</h2>
        <div className="flex justify-end items-center gap-2">
        <Button
            onClick={handleShowModal}
            variant={"secondary"}
            type="button"
            className={`${isButtonLoading && "opacity-60"} `}>
            <ClipLoader
              color={"4A90E2"}
              loading={isButtonLoading}
              size={20}
            />
            Cancel
          </Button>
          <Button
            onClick={handleButtonClick}
            variant={"primary"}
            type="submit"
            className={`${isButtonLoading && "opacity-60"} `}>
            <ClipLoader
              color={"4A90E2"}
              loading={isButtonLoading}
              size={20}
            />
            {isButtonLoading ? null : "Confirm"}
          </Button>
          
        </div>

      </div>
    </Modal>
  )
}
export default DeleteQuestionModal