import React from 'react';
import OutletLayout from '../../../components/OutletLayout/OutletLayout';
import Card from '../../../components/Card/Card';
import Button from '../../../components/Button/Button';
import { PlusIcon, CloudUploadIcon } from '@heroicons/react/outline';
import useVoters from './logic/useVoters';
import AddVoter from './AddVoter/AddVoter';
import ImportVoters from './ImportVoters/ImportVoters';
import Table from './Table/Table';
import EditVoter from './EditVoter/EditVoter';

const Voters = () => {

	const { voters,
		loading,
		getVoters,
		showAddVoter, setShowAddVoter,
		voterIdRef,
		showEditVoter, setShowEditVoter,
		showImportVoters, setShowImportVoters
	} = useVoters();

	const SearchInput = () => {
		return (
			<>
				<label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
				<div className="relative">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
							<path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
						</svg>
					</div>
					<input type="search" id="default-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." required></input>
				</div>
			</>
		)
	}
	const VotersLayout = () => {
		if (!voters && !loading) {
			return <div className='flex items-center justify-center flex-col pb-24 ballotWrapper h-full w-fit mx-auto'>
				<h2 className='text-4xl pb-4'>Add Voters</h2>
				<p className='pb-6 text-xl'>Add voters to this election</p>
				<div className="flex items-center gap-2">
					<Button onClick={() => setShowImportVoters(true)} variant="secondary"><CloudUploadIcon className="h-5 w-5" />Import</Button>
					<Button onClick={() => setShowAddVoter(true)} variant="primary"><PlusIcon className="h-5 w-5" />Add Voter</Button>
				</div>
			</div>
		}
		if (voters && voters.length) {
			return <div>
				<header className='flex justify-between pb-4 items-center'>
					<SearchInput />
					<Button onClick={() => setShowAddVoter(true)} variant="primary"><PlusIcon className="h-5 w-5" />Add Voter</Button></header>
				<Table data={voters} loading={loading} voterIdRef={voterIdRef} setShowEditVoter={setShowEditVoter} />
			</div>
		}
	}


	return (
		<OutletLayout pageName={"Ballot"}>
			<Card extendStyle="h-full">
				<VotersLayout />
			</Card>
			{showAddVoter && <AddVoter showModal={showAddVoter} setShowModal={setShowAddVoter} getVoters={getVoters} />}
			{showEditVoter && <EditVoter showModal={showEditVoter} setShowModal={setShowEditVoter} voterIdRef={voterIdRef} getVoters={getVoters} />}
			{showImportVoters && <ImportVoters showModal={showImportVoters} setShowModal={setShowImportVoters} />}

		</OutletLayout>
	)
}

export default Voters;