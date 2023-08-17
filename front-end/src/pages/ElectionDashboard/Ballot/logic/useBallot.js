import { useContext, useEffect, useRef, useState } from 'react';
import ballotService from './ballotService';
import { toast } from 'react-toastify';
import { ElectionContextApp } from '../../../../utils/contexts/ElectionContext';

const useBallot = () => {

  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [addBallotLoading, setAddBallotLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const genId = useRef(0);

  const { election } = useContext(ElectionContextApp);

  const addOption = (question) => {
    const newQuestions = questions.map((currentQuestion) => {

      if (currentQuestion.id === question.id) {
        if (!question?.suggestions) {
          question.suggestions = [];
        } else {
          genId.current = question?.suggestions[question.suggestions.length - 1]?.id || genId.current;
        }
        const suggestionsCount = question.suggestions.length;
        const id = suggestionsCount + 1;
        genId.current = genId.current + 1 + "#option";
        const newOption = {
          id: genId.current,
          title: "New option",
          value: id,
          dirty: false
        }

        question.suggestions.push(newOption);

        return question;
      }
      return currentQuestion;
    })

    setQuestions(newQuestions);
  }

  const onChangeOption = (id, question, title) => {
    const questionIndex = questions.findIndex(currentQuestion => currentQuestion.id === question.id);
    if (questionIndex > -1) {
      const suggestionIndex = questions[questionIndex].suggestions.findIndex(suggestion => suggestion.id === id);
      if (suggestionIndex > -1) {
        const option = questions[questionIndex].suggestions[suggestionIndex];
        const newOption = { ...option, title: title, dirty: true }
        questions[questionIndex].suggestions[suggestionIndex] = newOption;
      }
    }
  }

  const submitBallot = async () => {
    try {
      setAddBallotLoading(true);
      questions.forEach(async (question) => {
        const suggestions = question.suggestions.map(({ id, title }) => {
          return { id: id, title: title, description: "test", questionId: question.id }
        })
        const response = await ballotService.addBulkSuggestions(suggestions, question.id);

        if (response.status === 201) {
          toast.success("Ballot saved successfully");
          getQuestionsByElectionId();
        }
      })
    } catch (error) {
      console.error('Error in AddBulkSuggestions', error);
      toast.error("Error occured");
    } finally {
      setAddBallotLoading(false);
    }

  }

  const getQuestionsByElectionId = async () => {
    try {
      // setError();
      setLoading(true);
      const response = await ballotService.getQuestionsByElectionId(election.id);
      if (response.status === 200) {
        setQuestions(response.data);
      }
    } catch (error) {
      // toast.error("Error occured");
      // setError("Error Occured");
      console.error("Error in getQuestionsByElectionId");
    } finally {
      // setLoading(false);
      setLoading(false);
    }
  }

  const refreshQuestions = () => getQuestionsByElectionId();


  useEffect(() => {
    getQuestionsByElectionId();
  }, [election])


  return {
    addBallotLoading,
    refreshQuestions,
    showAddQuestion,
    setShowAddQuestion,
    questions,
    setQuestions,
    loading,
    genId,
    addOption,
    onChangeOption,
    submitBallot
  }
}

export default useBallot;