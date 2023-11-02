import { ClipLoader } from "react-spinners"

const TableBody = ({ data, loading, voterIdRef, setShowEditVoter }) => {
  const showEditModal = (id) => {
    voterIdRef.current = id
    setShowEditVoter(true);
  }

  if (!data && loading) return <tr> <td className="px-6 py-3 text-center" colSpan={4}><ClipLoader color='#1E293B' size={24} loading={true} /></td></tr>
  if (data && !loading) return data.map((elem) => {
    return (
      <tr className="bg-white border-b ">
        <td className="px-6 py-4">
          {elem.name}
        </td>
        <td className="px-6 py-4">
          {elem.email}
        </td>
        <td className="px-6 py-4">
          {elem.voterId}
        </td>
        <td className="px-6 py-4">
          <span onClick={() => showEditModal(elem.id)} className="font-medium pr-2 text-secondary-300 hover:underline cursor-pointer">Edit</span>
        </td>
      </tr>
    )
  })
}


const Table = ({ data, loading, voterIdRef, setShowEditVoter }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-light-100 uppercase bg-primary-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Voter Id
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <TableBody data={data} loading={loading} voterIdRef={voterIdRef} setShowEditVoter={setShowEditVoter} />
        </tbody>
      </table>
    </div>

  )
}

export default Table;