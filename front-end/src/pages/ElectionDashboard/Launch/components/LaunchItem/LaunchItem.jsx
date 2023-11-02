const LaunchItem = ({ election }) => {
  return (
    <div className='flex flex-col'>
      <header className='font-semibold'>Launch Election</header>
      <main className='w-full pt-4'>
        <p className="pb-4">You are about to launch the election</p>
        <p>Election will be started at {election.startDate}</p>
      </main>
    </div>
  )
}

export default LaunchItem;