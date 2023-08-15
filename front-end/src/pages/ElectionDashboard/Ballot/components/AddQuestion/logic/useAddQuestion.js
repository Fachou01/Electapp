import { useContext, useState } from "react";
import { useFormik } from "formik";
import addQuestionService from "./addQuestionService";
import { validationSchema } from "./addQuestion.schema";
import { ElectionContextApp } from "../../../../../../utils/contexts/ElectionContext";
import { toast } from 'react-toastify';

const useAddQuestion = (setShowModal, questions, setQuestions) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { election } = useContext(ElectionContextApp);

  const initialValues = {
    title: "",
    description: ""
  };

  const addQuestion = async (values) => {
    try {
      setError();
      setLoading(true);
      const question = values;
      question.electionId = election.id
      const response = await addQuestionService.addQuestion(question);
      console.log("response", response)
      if (response.status === 201) {
        toast.success("Question successfully created !");
        setShowModal(false);
        setQuestions([...questions, response.data.data]);
      }
    } catch (error) {
      toast.error("Error occured");
      setError("Error Occured");
      console.error("Error in addQuestion");
    } finally {
      setLoading(false);
    }

  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: addQuestion,
  })

  return {
    loading,
    error,
    formik
  }

}
export default useAddQuestion;