import React from 'react';
import OutletLayout from '../../../components/OutletLayout/OutletLayout';
import Card from '../../../components/Card/Card';
import useLaunch from './logic/useLaunch';
import ConfirmDetails from './components/ConfirmDetails/ConfirmDetails';
import { ClipLoader } from 'react-spinners';
import Button from '../../../components/Button/Button';
import LaunchItem from './components/LaunchItem/LaunchItem';
import NavigationItem from './components/NaviationItem/NavigationItem';
import Alert from '../../../components/Alert/Alert';


const Launch = () => {

	const { changeNavigation, isLastNavigationItem, currentNavigationItem,
		electionData, isElectionLoading, electionError, confirmElectionDetailsMutate, launchElectionMutate,
		isNavigationActionLoading, navigationActionError,
		launchElectionData,
		navigate
	} = useLaunch();

	const navigationItems = [
		{
			title: "Confirm",
			component: <ConfirmDetails election={electionData} currentNavigationItem={currentNavigationItem} changeNavigation={changeNavigation} />,
			fn: () => confirmElectionDetailsMutate(electionData)
		},
		{
			title: "Launch",
			component: <LaunchItem election={electionData} />,
			fn: () => launchElectionMutate(electionData)
		},
	]

	const NavigationMainContent = () => {
		if (electionError) return <Alert error={electionError} />
		if (isElectionLoading) return <ClipLoader color={"4A90E2"} size={20} />
		return <div>
			{navigationItems[currentNavigationItem].component}
			{navigationActionError && <div className='pt-5'><Alert error={navigationActionError} /></div>}
		</div>
	}

	const NavigationFooter = () => {
		const buttonLabel = isLastNavigationItem(navigationItems) ? "Confirm" : "Next";
		return <Button
			variant={"primary"}
			className={`min-w-fit w-16 mt-4 ${isNavigationActionLoading && "opacity-60"}`}
			onClick={navigationItems[currentNavigationItem].fn}
		>
			<ClipLoader
				color={"4A90E2"}
				loading={isNavigationActionLoading}
				size={20}
			/>
			{isNavigationActionLoading ? null : buttonLabel}
		</Button>
	}

	const ElectionStatus = () => {
		if (electionData?.status === "STARTED") return <div>
			<h2>You Election is already Launched</h2>
			<p>You can view the stats of the election through the Overview section</p>
		</div>
		if (launchElectionData) return <div>
			<h2>You Election is Successefully Launched</h2>
			<p>You can view the stats of the election through the Overview section</p>
		</div>
		return <>
			<NavigationMainContent />
			<NavigationFooter />
		</>
	}

	return (
		<OutletLayout pageName={"Launch"}>
			<section>
				{launchElectionData || electionData?.status === "STARTED" ? null :
					<header className='pb-5'>
						<Card extendStyle={"rounded-lg p-5"}>
							<ol class="flex items-center w-full text-sm font-medium text-center text-gray-500sm:text-base">
								{navigationItems.map(({ title }, idx) => <NavigationItem navigationItems={navigationItems} num={idx + 1} title={title} current={currentNavigationItem + 1 === idx + 1} />)}
							</ol>
						</Card>
					</header>
				}
				<main className="w-1/2 mx-auto">
					<Card extendStyle={"rounded-lg p-5"}>
						<ElectionStatus />
					</Card>
				</main>
			</section>
		</OutletLayout>
	)
}

export default Launch;