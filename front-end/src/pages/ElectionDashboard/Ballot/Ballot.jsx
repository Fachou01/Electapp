import React from 'react';
import OutletLayout from '../../../components/OutletLayout/OutletLayout';
import Card from '../../../components/Card/Card';
import { PlusIcon } from '@heroicons/react/outline';
import { ClipLoader } from 'react-spinners';
import AddQuestion from './components/AddQuestion/AddQuestion';
import Button from '../../../components/Button/Button';
import Option from './components/Option/Option';
import Question from './components/Question/Question';
import useBallot from './logic/useBallot';

import './Ballot.css';

const Ballot = () => {

  const { addBallotLoading,
    refreshQuestionById,
    showAddQuestion,
    setShowAddQuestion,
    questions,
    setQuestions,
    loading,
    addOption,
    onChangeOption,
    submitBallot,
    deleteOption,
    refreshQuestions
  } = useBallot();

  const Suggestions = ({ question }) => {
    console.log("rended suggestions")
    if (question?.suggestions) return (
      <>
        {question.suggestions.map(({ id, title, value }, idx) => {
          return <Option index={idx} id={id} title={title} value={value} question={question} onChangeOption={onChangeOption} deleteOption={deleteOption} />
        })}
      </>
    )
  }

  const QuestionsLayout = () => {
    if (loading) return <div className="flex items-center justify-center h-full pb-40"> <ClipLoader color={"4A90E2"} loading={loading} size={40} /></div>
    if (questions && questions.length > 0) {
      return (
        <>
          <div className='md:w-[500px] lg:w-[800px] mx-auto border p-4 rounded-lg bg-light-100'>
            <header>
              <h2 className='text-lg pb-4'>Multiple Choice</h2>
            </header>

            <div className='flex justify-center flex-col ballotWrapper w-full mx-auto'>
              <main>
                {questions.map((question) => {
                  return (
                    <Question refreshQuestions={refreshQuestions} refreshQuestionById={refreshQuestionById} question={question} Suggestions={Suggestions} addOption={addOption} />
                  )
                })
                }
                <Button className="bg-light-300 text-black" onClick={() => setShowAddQuestion(true)}><PlusIcon className="h-5 w-5" />Add Question</Button>
                <div className="flex justify-end w-full">
                  <Button
                    onClick={submitBallot}
                    variant={"primary"}
                    className={`${addBallotLoading && "opacity-60"} `}>
                    <ClipLoader
                      color={"4A90E2"}
                      loading={addBallotLoading}
                      size={20}
                    />
                    {addBallotLoading ? null : "Save Ballot"}
                  </Button>
                </div>

              </main>
            </div>
          </div>
        </>
      )
    }
    if (!loading && questions.length <= 0) return (
      <section className="flex items-center justify-center h-full">
        <Card extendStyle={"rounded-lg"}>
          <div className='flex items-center justify-center flex-col p-16 ballotWrapper w-fit mx-auto'>
            <h2 className='text-4xl pb-4'>Build Your Ballot</h2>
            <p className='pb-6 text-xl'>Get started by adding your first question</p>
            <Button variant="primary" onClick={() => setShowAddQuestion(true)}><PlusIcon className="h-5 w-5" />Add Question</Button>
          </div>
        </Card>
      </section>
    )
  }

  return (
    <OutletLayout pageName={"Ballot"}>
      <QuestionsLayout />
      {showAddQuestion && <AddQuestion showModal={showAddQuestion} setShowModal={setShowAddQuestion} questions={questions} setQuestions={setQuestions} />}
    </OutletLayout>
  )
}

export default Ballot;