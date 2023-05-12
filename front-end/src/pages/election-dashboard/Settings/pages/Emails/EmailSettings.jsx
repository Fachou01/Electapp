import React from 'react'




function EmailSettings() {

    return (

        // <Container>
        <>
            <div className='bg-gray-100 shadow-sm p-5 rounded-lg mb-6'>
                <label className="block mb-2 text-mb font-medium text-gray-900 dark:text-white">Voting Invtite Template</label>
                <form className='p-10  '>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className="mb-6">
                            <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sender</label>
                            <input type="Title" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default</label>
                            <div> Fachou </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                        <input type="Title" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body Template</label>

                        <textarea id="desc" rows="8" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hi %Name% please vote in this election" required></textarea>

                    </div>
                    <div className='flex gap-3'>
                        <button className='flex justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Save</button>
                        <button className='flex justify-center mt-3 py-2 px-4 border bg-transparent rounded-md shadow-sm text-sm font-medium  text-indigo-600 border-indigo-600 hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>preview</button>
                    </div>
                </form>
            </div>
            <div className='bg-gray-100 shadow-sm p-5 rounded-lg '>
                <label className="block mb-2 text-mb font-medium text-gray-900 dark:text-white">Voting Reminder Template</label>
                <form className='p-10  '>
                    <div className='grid grid-cols-2 gap-6'>
                        <div className="mb-6">
                            <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sender</label>
                            <input type="Title" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default</label>
                            <div> Fachou </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                        <input type="Title" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body Template</label>

                        <textarea id="desc" rows="8" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hi %Name% please vote in this election" required></textarea>

                    </div>
                    <div className='flex gap-3'>
                        <button className='flex justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Save</button>
                        <button className='flex justify-center mt-3 py-2 px-4 border bg-transparent rounded-md shadow-sm text-sm font-medium  text-indigo-600 border-indigo-600 hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>preview</button>
                    </div>
                </form>
            </div>
        </>
        // </Container>
    )
}

export default EmailSettings