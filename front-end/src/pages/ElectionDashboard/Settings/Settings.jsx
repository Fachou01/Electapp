import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import OutletLayout from '../../../components/OutletLayout/OutletLayout';

import './Settings.css';

const Settings = () => {

    return (
        <OutletLayout pageName={"Settings"}>
            {/* <div className='flex justify-between py-10 border-solid border-slate-600 '>
                <NavLink className='settings-item' to='general' >General </NavLink>
                <NavLink className='settings-item' to='dates' >Dates </NavLink>
                <NavLink className='settings-item' to='email' >Email </NavLink>
                <NavLink className='settings-item' to='results' >Results </NavLink>
                <NavLink className='settings-item' to='delete' >Delete </NavLink>
            </div>
            <div>
                <Outlet />
            </div> */}
            <p>🚧 Under Development</p>
        </OutletLayout>
    )
}

export default Settings