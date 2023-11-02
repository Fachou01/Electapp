import React from 'react'
import Chart from "chart.js/auto";
import { Bar, Pie, Radar, PolarArea, Doughnut, Line } from "react-chartjs-2";
import Card from '../../../components/Card/Card';
import { UserGroupIcon, QuestionMarkCircleIcon, ViewListIcon } from "@heroicons/react/outline";
import OutletLayout from '../../../components/OutletLayout/OutletLayout';
import useOverview from './logic/useOverview';
import { ClipLoader } from 'react-spinners';
import Alert from '../../../components/Alert/Alert';

const Overview = () => {

  const sampleData = {
    labels: ['Red', 'Blue'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19]
    }]
  }
  // const options = {
  //   plugins: {
  //     title: {
  //       display: true,
  //       text: 'Voters Participations',
  //       fontSize: 24,
  //     },
  //   },
  // };

  const { isLoading, error, data, election } = useOverview();

  const VotesStats = ({ statsData }) => {
    const CardBody = () => {
      if (data.electionStatus !== "STARTED") return <div className='w-full h-full pt-5'><Alert error={"Election Currently not Started"} /></div>
      return <div><Line data={sampleData}/></div>
    }
    return <Card extendStyle={"rounded-lg shadow-md border border-5 px-2"}>
      <CardBody />
    </Card>
  }

  const MainComponent = () => {
    if (isLoading) return <div className='w-full h-full flex justify-center items-center'><ClipLoader color={"#4A90E2"} loading={isLoading} size={60} /></div>
    if (error) return <div className='w-full h-full'><Alert error={"Error occured"} /></div>
    return (
      <>
        <div className='flex w-full flex-wrap pb-4'>
          <div className='w-1/4 pr-2'>
            <Card color={"primary"} extendStyle={"rounded-lg h-full"}>
              <div className='flex flex-col gap-14 justify-between text-white p-4'>
                <div className='flex items-center gap-5'>
                  <UserGroupIcon className="h-10 w-10" />
                  <span>Voters</span>
                </div>
                <div className='text-center'>
                  <p className='text-5xl'>{data.votersCount}</p>
                </div>
              </div>
            </Card>
          </div>
          <div className='w-1/4 pl-2 pr-2'>
            <Card color={"secondary"} extendStyle={"rounded-lg h-full"}>
              <div className='flex flex-col gap-14 justify-between text-white p-4'>
                <div className='flex items-center gap-5'>
                  <QuestionMarkCircleIcon className="h-10 w-10" />
                  <span>Ballot Questions</span>
                </div>
                <div className='text-center'>
                  <p className='text-5xl'>{data.questionsCount}</p>
                </div>
              </div>
            </Card>
          </div>
          <div className='w-1/4 pl-2 pr-2'>
            <Card color={"red"} extendStyle={"rounded-lg h-full"}>
              <div className='flex flex-col gap-14 justify-between text-white p-4'>
                <div className='flex items-center gap-5'>
                  <ViewListIcon className="h-10 w-10" />
                  <span>Options</span>
                </div>
                <div className='text-center'>
                  <p className='text-5xl'>0</p>
                </div>
              </div>
            </Card>
          </div>
          <div className='w-1/4 pl-2'>
            <Card extendStyle={"rounded-lg shadow w-full h-[260px] flex justify-center border border-5"}>
              <Doughnut data={sampleData} />
            </Card>
          </div>
        </div>

        <section className='flex'>
          <div className='w-1/2 pr-2'>
            <Card extendStyle={"rounded-lg shadow-md  border border-5 h-full"}>
              <div className='flex flex-col gap-6 p-4 '>
                <h1>Election URLs</h1>
                <div>
                  <h2 className='pb-2'>Election URL</h2>
                  <input className='w-full border border-gray-300 p-1' type="text" name="electionUrl" id="electionUrl" value={data.electionUrl} />
                </div>
                <div>
                  <h2 className='pb-2'>Short URL</h2>
                  <input className='w-full border border-gray-300 p-1' type="text" name="shortElectionUrl" id="shortElectionUrl" value={data.electionUrl} />
                </div>
                <p className='pb-2'>Start Date : {election.startDate}</p>
                <p>End Date : {election.endDate}</p>
                {/* <p>Status : <span>{data.electionStatus}</span></p> */}
              </div>
            </Card>
          </div>
          <div className='w-1/2 h-full pl-2'>
            <VotesStats data={sampleData} />
          </div>
        </section>
      </>
    )
  }

  return (
    <OutletLayout pageName={"Overview"}>
      {/* Cards Info */}
      <MainComponent />
    </OutletLayout>
  )
}

export default Overview;