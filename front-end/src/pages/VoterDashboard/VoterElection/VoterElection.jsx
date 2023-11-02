import { ClipLoader } from "react-spinners";
import Alert from "../../../components/Alert/Alert";
import PageLayout from "../../../components/PageLayout/PageLayout";
import useVoterElection from "./logic/useVoterElection";
import { Outlet } from "react-router-dom";

const VoterElection = () => {
  const { isElectionLoading, electionError, electionData, election } = useVoterElection();

  const MainComponent = () => {
    if (isElectionLoading && !election) return <div className='w-full h-full flex justify-center items-center'><ClipLoader color={"#4A90E2"} loading={isElectionLoading} size={60} /></div>
    if (electionError) return <div className='w-full h-full'><Alert error={"Error occured"} /></div>
    if (!electionData) return (
      <div className="flex flex-col items-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-full h-full">
        <h2 className="text-3xl pb-5">Not Found</h2>
        <p className="text-lg pb-5">Sorry! The election you were looking for is not active or could not be found.</p>
      </div>
    )
    return <Outlet />
  }
  return (
    <PageLayout>
      <MainComponent />
    </PageLayout>
  );
}
export default VoterElection;