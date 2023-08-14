import { useRef, useState } from 'react';

const useBallot = () => {

  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [questions, setQuestions] = useState([]);
  const genId = useRef(0);

  const addOption = (question) => {
    const newQuestions = questions.map((currentQuestion) => {
      if (currentQuestion.id === question.id) {
        if (!question?.suggestions) question.suggestions = [];
        const suggestions = question.suggestions.length;
        const id = suggestions + 1;
        genId.current += 1;
        const newOption = {
          id: id,
          genId: genId.current,
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

  const onChangeOption = (id, genId, question, title) => {

    const questionIndex = questions.findIndex(currentQuestion => currentQuestion.id === question.id);
    if (questionIndex > -1) {
      const suggestionIndex = questions[questionIndex].suggestions.findIndex(suggestion => suggestion.genId === genId);
      if (suggestionIndex > -1) {
        const option = questions[questionIndex].suggestions[suggestionIndex];
        const newOption = { ...option, title: title, dirty: true }
        questions[questionIndex].suggestions[suggestionIndex] = newOption;
      }
    }

  }

  
  return {
    showAddQuestion,
    setShowAddQuestion,
    questions,
    setQuestions,
    genId,
    addOption,
    onChangeOption,
  }
}

export default useBallot;