import React from 'react';
import OutletLayout from '../../../components/OutletLayout/OutletLayout';
import Card from '../../../components/Card/Card';
import Button from '../../../components/Button/Button';
import { PlusIcon, CloudUploadIcon } from '@heroicons/react/outline';
import useVoters from './logic/useVoters';
import AddVoter from './AddVoter/AddVoter';

const Voters = () => {

	const { showAddVoter, setShowAddVoter } = useVoters();


	return (
		<OutletLayout pageName={"Ballot"}>
			<Card extendStyle="h-full">
				<div className='flex items-center justify-center flex-col pb-24 ballotWrapper h-full w-fit mx-auto'>
					<h2 className='text-4xl pb-4'>Add Voters</h2>
					<p className='pb-6 text-xl'>Add voters to this election</p>
					<div className="flex items-center gap-2">
						<Button variant="secondary"><CloudUploadIcon className="h-5 w-5" />Import</Button>
						<Button onClick={() => setShowAddVoter(true)} variant="primary"><PlusIcon className="h-5 w-5" />Add Voter</Button>
					</div>
				</div>
			</Card>
			{showAddVoter && <AddVoter showModal={showAddVoter} setShowModal={setShowAddVoter} />}
		</OutletLayout>
	)
}

export default Voters;