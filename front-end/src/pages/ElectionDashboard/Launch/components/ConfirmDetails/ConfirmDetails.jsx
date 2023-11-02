const ConfirmDetails = ({ election }) => {

  const rows = [
    {
      label: "Title",
      content: election.title
    },
    {
      label: "Description",
      content: election.description
    },
    {
      label: "Start Date",
      content: election.startDate
    },
    {
      label: "End Date",
      content: election.endDate
    },
    {
      label: "Url",
      content: election.url
    },
  ]
  return (
    <div className='flex flex-col'>
      <header className='font-semibold'>Confirm Election Details</header>
      <main className='w-full pt-4'>
        <table className='w-full text-left table-fixed border-2 p-5'>
          <tbody>
            {rows.map((row, idx) => <tr key={idx}>
              <td className="p-3 border-2">{row.label}</td>
              <td className="p-3 border-2">{row.content}</td>
            </tr>)}
          </tbody>
        </table>

      </main>
    </div>
  )
}

export default ConfirmDetails;