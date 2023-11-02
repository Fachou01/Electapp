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
          dirty: false,
          new: true
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
        console.log("newOption", newOption)
      }
    }
  }

  const deleteOption = async (id, question) => {
    let newOption = false;
    const questionIndex = questions.findIndex(currentQuestion => currentQuestion.id === question.id);
    if (questionIndex > -1) {
      const filteredSuggestions = questions[questionIndex].suggestions.filter(suggestion => {
        if (suggestion.id === id && suggestion.new === true) newOption = true;
        return suggestion.id !== id
      });
      if (newOption) {
        const newQuestions = [...questions];
        newQuestions[questionIndex].suggestions = filteredSuggestions;
        setQuestions(newQuestions);
      } else {
        const response = await ballotService.deleteSuggestion(id, question.id);
        if (response.status === 200) refreshQuestionById(question.id);
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
        console.log("questions response", response.data);
        setQuestions(response.data);
      }else setQuestions([])
    } catch (error) {
      // toast.error("Error occured");
      // setError("Error Occured");
      console.error("Error in getQuestionsByElectionId");
    } finally {
      // setLoading(false);
      setLoading(false);
    }
  }


  const getQuestionById = async (questionId) => {
    try {
      // setError();
      setLoading(true);
      const response = await ballotService.getQuestionById(questionId);
      if (response.status === 200) {
        const newQuestions = [...questions];
        const newQuestionIndex = newQuestions.findIndex(currentQuestion => currentQuestion.id === questionId);
        console.log("newQuestionIndex",newQuestionIndex)
        newQuestions[newQuestionIndex] = response.data;
        setQuestions(newQuestions);
      }else setQuestions([])
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
  const refreshQuestionById = (id) => getQuestionById(id);


  useEffect(() => {
    getQuestionsByElectionId();
  }, [election])


  return {
    addBallotLoading,
    refreshQuestionById,
    refreshQuestions,
    showAddQuestion,
    setShowAddQuestion,
    questions,
    setQuestions,
    loading,
    genId,
    addOption,
    onChangeOption,
    deleteOption,
    submitBallot
  }
}

export default useBallot;