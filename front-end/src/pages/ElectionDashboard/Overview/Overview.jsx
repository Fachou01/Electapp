import React from 'react'
import Chart from "chart.js/auto";
import { Bar, Pie, Radar, PolarArea } from "react-chartjs-2";
import Card from '../../../components/Card/Card';
import { HomeIcon, UserGroupIcon } from "@heroicons/react/outline";
import OutletLayout from '../../../components/OutletLayout/OutletLayout';

function Overview() {

  const sampleData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],

    }]
  }

  return (
    <OutletLayout pageName={"Overview"}>
      <div className='flex items-center w-full flex-wrap mb-12'>
        <div className='w-1/4'>
          <Card color={"green"}>
            <div className='flex justify-between items-center text-white'>
              <HomeIcon className="h-10 w-10 " />
              <div className='flex items-end flex-col'>
                <p className='text-lg'>0 %</p>
                <p> Participation</p>
              </div>
            </div>
          </Card>
        </div>
        <div className='w-1/4 pl-3'>
          <Card color={"red"}>
            <div className='flex justify-between items-center text-white'>
              <UserGroupIcon className="h-10 w-10" />
              <div className='flex items-end flex-col'>
                <p className='text-lg'>0</p>
                <p> Voters</p>
              </div>
            </div>
          </Card>
        </div>
        <div className='w-1/4 pl-3'>
          <Card color={"blue"}>
            <div className='flex justify-between items-center text-white'>
              <HomeIcon className="h-10 w-10" />
              <div className='flex items-end flex-col'>
                <p className='text-lg'>0 %</p>
                <p> Ballot questions</p>
              </div>
            </div>
          </Card>
        </div>
        <div className='w-1/4 pl-3'>
          <Card color={"blue"}>
            <div className='flex justify-between items-center text-white'>
              <HomeIcon className="h-10 w-10" />
              <div className='flex items-end flex-col'>
                <p className='text-lg'>0 %</p>
                <p> Options</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className='flex items-center flex-wrap'>
        <div className='w-1/3 pr-1'>
          <Card>
            <PolarArea data={sampleData} />
          </Card>
        </div>
        <div className='w-1/3 pl-1 pr-1'>
          <Card>
            <Pie data={sampleData} />
          </Card>
        </div>
        <div className='w-1/3 pl-1'>
          <Card>
            <Pie data={sampleData} />
          </Card>
        </div>
      </div>
    </OutletLayout>
  )
}

export default Overview