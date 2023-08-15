import { useState } from 'react';
import { toast } from 'react-toastify';
import ballotService from '../../../logic/ballotService';

const useQuestion = (question, refreshQuestions) => {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const deleteQuestionById = async () => {
    try {
      setDeleteLoading(true);
      const response = await ballotService.deleteQuestionById(question.id);
      if (response.status === 200) {
        toast.success("Question successfully deleted");
        setShowDeleteModal(false);
        refreshQuestions();
      }
    } catch (error) {
      toast.error("Error occured");
    } finally {
      setDeleteLoading(false);
    }

  }

  const handleShowDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  }


  return {
    showDeleteModal,
    deleteLoading,
    deleteQuestionById,
    handleShowDeleteModal
  }

}

export default useQuestion;