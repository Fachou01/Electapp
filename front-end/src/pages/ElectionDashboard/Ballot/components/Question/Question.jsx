import { ViewListIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import './Question.css';
import DeleteQuestionModal from './components/DeleteQuestionModal/DeleteQuestionModal';
import useQuestion from './logic/useQuestion';

const QuestionDropDown = ({ handleShowDeleteModal }) => {

  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-light-300 px-2 py-2 text-sm font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <ViewListIcon
            className="h-5 w-5"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-28 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${active ? 'bg-secondary-100 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Edit
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${active ? 'bg-secondary-100 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  onClick={handleShowDeleteModal}
                >
                  Delete
                </button>
              )}
            </Menu.Item>
          </div>

        </Menu.Items>
      </Transition>
    </Menu>
  )
}

const Question = ({ refreshQuestions, question, addOption, Suggestions }) => {

  const { handleShowDeleteModal, showDeleteModal, deleteLoading, deleteQuestionById } = useQuestion(question, refreshQuestions);
  return (
    <>
      <div className='border p-4 mb-3 bg-light-100 rounded-lg relative'>
        <div className='flex justify-between items-center'>
          <h2 className='pb-2'>{question.title}</h2>
          {/* <ViewListIcon className='w-5 h-5' /> */}
          <QuestionDropDown handleShowDeleteModal={handleShowDeleteModal} />
        </div>

        <p className='pb-2'>{question.description}</p>
        {/* OPTIONS */}

        <div className="py-4">
          <Suggestions question={question} />
          <div class="flex items-center justify-between pb-4 w-full">
            <div className='flex items-center w-full'>
              <input disabled id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 bg-transparent text-secondary-100 bg-gray-100 border-gray-300 focus:ring-secondary-300" />
              <label onClick={() => addOption(question)} htmlFor="default-radio-1" className="w-full ml-2 cursor-text text-sm font-medium text-gray-400 accent-indigo-500 hover:border-b-2 ">Add new option</label>
            </div>
          </div>
        </div>
      </div>
      {showDeleteModal && <DeleteQuestionModal handleButtonClick={deleteQuestionById} handleShowModal={handleShowDeleteModal} showModal={showDeleteModal} isButtonLoading={deleteLoading} />}
    </>
  )
}
export default Question