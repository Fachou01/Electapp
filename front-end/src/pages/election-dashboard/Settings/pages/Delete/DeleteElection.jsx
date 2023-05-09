import React, { useState } from 'react'
import Modal from '../../../../../components/modal/Modal'
import useDeleteElection from './useDeleteElection'
import { ClipLoader } from 'react-spinners';



function DeleteElection() {
    const [showModal, setShowModal] = useState(false);

    const {handleShowModal,deleteElection,isButtonLoading} = useDeleteElection(showModal,setShowModal)

    return (

        // <Container>
        
            <div className='bg-gray-100 shadow-sm p-5 rounded-lg '>
            <label  className="block mb-2 text-mb font-medium text-gray-900 dark:text-white">Delete Election</label>
               <div className=' flex justify-center'>
                <button onClick={()=> handleShowModal()} type='button' className='btn focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>Delete Election</button>
               </div>
               <Modal showModal={showModal} handleShowModal={handleShowModal} title={"Delete Election"}>
                <div className=' flex justify-center' >
               <button onClick={()=> deleteElection()} type='button' className='btn focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
               {isButtonLoading ? <ClipLoader
              color={"4A90E2"}
              loading={isButtonLoading}
              size={20}
            /> : 'Confirm Delete'} </button>
               </div>
               </Modal>
            </div>
            
        // </Container>
    )
}

export default DeleteElection