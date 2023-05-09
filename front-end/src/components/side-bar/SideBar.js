import { HomeIcon } from "@heroicons/react/outline"
import { NavLink } from "react-router-dom"

const SideBar = () => {
  return (
    <aside className="fixed w-72 h-screen bg-gray-50">
          <div className="flex flex-col  justify-between px-4 sm:px-6 lg:px-8 h-full">
            <header className="pt-8">
              <h2>ElectApp</h2>
            </header>
            <main>
              <NavLink to="overview" className="flex py-5 items-center gap-2 ">
                <HomeIcon className="h-6 w-6 -ml-1" />
                Overview
              </NavLink>
              <NavLink to="settings" className="flex py-5 items-center gap-2 ">
                <HomeIcon className="h-6 w-6 -ml-1" />
                Settings
              </NavLink>
             <NavLink to="ballot" className="flex py-5 items-center gap-2 ">
                <HomeIcon className="h-6 w-6 -ml-1" />
                Ballot
              </NavLink>
              <NavLink to="voters" className="flex py-5 items-center gap-2 ">
                <HomeIcon className="h-6 w-6 -ml-1" />
                Voters
              </NavLink>
              <NavLink to="preview" className="flex py-5 items-center gap-2 ">
                <HomeIcon className="h-6 w-6 -ml-1" />
                Preview
              </NavLink>
              <NavLink to="launch" className="flex py-5 items-center gap-2 ">
                <HomeIcon className="h-6 w-6 -ml-1" />
                Launch
              </NavLink>
            </main>
            <footer>
              <div className="py-5">Start Date</div>
              <div className="py-5">End Date</div>
              <div className="py-5">Timezone</div>
            </footer>
          </div>
        </aside>
  )
}
export default SideBar