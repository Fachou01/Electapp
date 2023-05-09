import React from 'react'
import Container from '../../../../components/container/Container'


function Dates() {


    return (

        // <Container>
            <div className='bg-gray-100 shadow-sm p-5 rounded-lg '>
            <label for="default-input" class="block mb-2 text-mb font-medium text-gray-900 dark:text-white">Dates</label>
                <form className='p-10  '>
                    <div class="mb-6">
                        <label for="Title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>
                        {/* start */}


                        {/* end */}
                    </div>
                    <div class="mb-6">
                        <label for="Title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date</label>
                        <input type="Title" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div class="mb-6">
                        <label for="Title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time-Zone</label>
                        <input type="Title" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    
                </form>
            </div>
        // </Container>
    )
}

export default Dates