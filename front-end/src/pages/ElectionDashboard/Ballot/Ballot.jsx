import React, { useState } from 'react';
import OutletLayout from '../../../components/OutletLayout/OutletLayout';
import Card from '../../../components/Card/Card';
import { PlusIcon } from '@heroicons/react/outline';
import QuestionType from './components/QuestionType';
import AddQuestion from './components/AddQuestion/AddQuestion';
import { TrashIcon } from "@heroicons/react/outline";

import './Ballot.css';


const Ballot = () => {

  const [showQuestionType, setShowQuestionType] = useState(false);
  const [type, setType] = useState();
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [questions, setQuestions] = useState([]);

  console.log('questions', questions)
  // {
  //   q: {
  //     title: "test",
  //     description: "test desc"
  //   },
  //   options: [
  //     {
  //       title: "testOpt",
  //       value: "1"
  //     }
  //   ] 
  // } 

  const addOption = (question) => {
    const newQuestions = questions.map((q)=>{
      if(q.id === question.id){
        const newOption = {
          title: "testOpt",
          value: "1"
        }
        question.options.push(newOption);
        return question;
      }
      return q;
    })
   
    setQuestions(newQuestions);
  }

  const QuestionsLayout = () => {
    if (questions && questions.length > 0) {
      return (
        <>
        <div className='flex justify-end items-center'>
          <button onClick={() => setShowQuestionType(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded flex items-center gap-1">
            <PlusIcon className="h-5 w-5" />
            Add Question
          </button>
        </div>
        <div className='w-1/2 mx-auto border p-4'>
          <header>
            <h2 className='text-lg pb-4'>Multiple Choice</h2>
            <p className='pb-6 text-md'>Description</p>
          </header>

          <div className='flex justify-center flex-col ballotWrapper w-full mx-auto'>
            <main>
              {
                questions.map((question) => {
                  return (
                    <div className='border p-4 mb-3'>
                      <h2 className='pb-2'>{question.q.title}</h2>
                      <p className='pb-2'>{question.q.description}</p>
                      <div className="py-4">
                        {question.options.map((option) => {
                          return (
                            <div class="flex items-center justify-between pb-4">
                              <div className='flex items-center gap-3 h-5'>
                                <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500 " />
                                <input className='w-full hover:border-b-2' type="text" name="txt1" id="1" defaultValue={option.title}  />
                                
                              </div>
                              {/* <div>
                                <TrashIcon className='w-5 h-5' />
                              </div> */}

                            </div>
                          )
                        })}
                         <div class="flex items-center justify-between pb-4">
                              <div className='flex items-center'>
                                <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500 " />
                                <label onClick={()=>addOption(question)} htmlFor="default-radio-1" className="ml-2 cursor-text text-sm font-medium text-gray-400 accent-indigo-500 hover:border-b-2 ">Add new option</label>
                              </div>
                            </div>

                      </div>
                    </div>
                  )
                })
              }

            </main>
          </div>
        </div>
        </>
      )
    }
    return (
      <div className='flex items-center justify-center flex-col ballotWrapper h-full -mt-14 w-fit mx-auto'>
        <h2 className='text-4xl pb-4'>Build Your Ballot</h2>
        <p className='pb-6 text-xl'>Get started by adding your first question</p>
        <button onClick={() => setShowQuestionType(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded flex items-center gap-1">
          <PlusIcon className="h-5 w-5" />
          Add Question
        </button>
      </div>
    )
  }

  return (
    <OutletLayout pageName={"Ballot"}>

      <Card extendStyle="h-full">
        
        <QuestionsLayout />
      </Card>
      {showQuestionType && <QuestionType showModal={showQuestionType} setShowModal={setShowQuestionType} setShowAddQuestion={setShowAddQuestion} type={type} setType={setType} />}
      {(showAddQuestion && type === "MULTI") && <AddQuestion showModal={showAddQuestion} setShowModal={setShowAddQuestion} setType={setType} questions={questions} setQuestions={setQuestions} />}
    </OutletLayout>
  )
}

export default Ballot;