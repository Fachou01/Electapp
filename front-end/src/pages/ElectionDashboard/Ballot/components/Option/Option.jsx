import { XIcon } from '@heroicons/react/outline';

import './Option.css';

const Option = ({ index, id, title, value, onChangeOption, question }) => {
  return (
    <div className="flex items-center justify-between pb-4 w-full ">
      <div className='flex items-center gap-3 h-5 w-full'>
        <input disabled id={`option-${index}`} type="radio" value={value} name="default-radio" className="w-4 h-4 bg-transparent text-secondary-100 bg-gray-100 border-gray-300" />
        <input className='w-full hover:border-b-2' type="text" name="txt1" id={`input-${index}`} defaultValue={title} onChange={(e) => onChangeOption(id, question, e.target.value)} />
      </div>
      <div>
        <div className="p-1 cursor-pointer rounded-lg hover:bg-secondary-300 hover:text-[#f9f9f9]"><XIcon className='w-5 h-5' /></div>
      </div>
    </div>
  )
}
export default Option;