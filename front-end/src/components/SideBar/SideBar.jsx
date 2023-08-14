import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HomeIcon, CogIcon, OfficeBuildingIcon, UserGroupIcon, PlayIcon, RssIcon } from "@heroicons/react/outline";
import { ElectionContextApp } from "../../utils/contexts/ElectionContext";

import "./SideBar.css";

const links = [
  {
    location: "overview",
    icon: () => <HomeIcon className="h-6 w-6 -ml-1" />,
    label: "Overview"
  },
  {
    location: "settings",
    icon: () => <CogIcon className="h-6 w-6 -ml-1" />,
    label: "Settings"
  },
  {
    location: "ballot",
    icon: () => <OfficeBuildingIcon className="h-6 w-6 -ml-1" />,
    label: "Ballot"
  },
  {
    location: "voters",
    icon: () => <UserGroupIcon className="h-6 w-6 -ml-1" />,
    label: "Voters"
  },
  {
    location: "preview",
    style: "flex py-5 px-2 items-center gap-2 ",
    icon: () => <PlayIcon className="h-6 w-6 -ml-1" />,
    label: "Preview"
  },
  {
    location: "launch",
    icon: () => <RssIcon className="h-6 w-6 -ml-1" />,
    label: "Launch"
  }
]

const SideBar = () => {

  const { pathname: pathName } = useLocation();
  const currentChildPath = pathName?.split('/')[3];

  const { election } = useContext(ElectionContextApp);

  const SideBarTitle = () => {
    if (!election) return <>
      <div className="animate-pulse h-5 mb-10 bg-primary-300 rounded-full "></div>
      <div className="animate-pulse h-5 bg-primary-300 rounded-full "></div>
    </>
    return <div>
      <h1 className="mb-10">ElectApp</h1>
      <h2>{election?.title}</h2>
    </div>
  }

  const SideBarFooter = () => {
    if (!election) return (
      <footer>
        <div className="mb-5 h-5 animate-pulse bg-primary-300 rounded-full"></div>
        <div className="mb-5 h-5 animate-pulse bg-primary-300rounded-full"></div>
        {/* <div className="mb-5 h-5 animate-pulse bg-indigo-500 rounded-full"></div> */}
      </footer>
    )
    return (
      <footer>
        <div className="py-5">
          <p className="pb-1">Start Date</p>
          <p>{election.startDate}</p>
        </div>
        <div className="py-5">
          <p className="pb-1">End Date</p>
          <p>{election.endDate}</p>
        </div>
        {/* <div className="py-5">Timezone</div> */}
      </footer>
    )
  }

  const SideBarBody = () => {
    if (!election) return (
      <>
        {links.map(() => < div className="mb-5 h-5 animate-pulse bg-primary-300 rounded-full"></div>)}
      </>
    )
    return (
      <>
        {links.map((link) => <NavLink to={link.location} className={`${currentChildPath === link.location && "bg-primary-300 bg-opacity-75"} flex py-5 px-2  items-center gap-2 rounded-md text-white transition-all hover:bg-primary-300 hover:bg-opacity-75 side-bar-item`}>
          {link.icon()}
          {link.label}
        </NavLink>)}
      </>
    )
  }

  return (
    <aside className="fixed w-72 h-screen sideBarAside bg-primary-100 text-white shadow-lg">
      <div className="flex flex-col justify-between px-2 sm:px-4 lg:px-4 h-full">
        <header className="pt-8 px-2">
          <SideBarTitle />
        </header>
        <main>
          <SideBarBody />
        </main>
        <SideBarFooter />
      </div>
    </aside>
  )
}
export default SideBar;