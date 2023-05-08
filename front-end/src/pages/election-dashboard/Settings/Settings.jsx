import React from 'react'
import Container from '../../../components/container/Container'
import { NavLink, Outlet } from 'react-router-dom'
import './style.css'
import PageLayout from '../../../components/page-layout/PageLayout'

function Settings() {


    return (
        <PageLayout>
            {/* <Container> */}
                {/* <Container> */}
                <div className='flex justify-between py-10 border-solid border-slate-600 '>
                    <NavLink className='settings-item'   to='general' >General </NavLink>
                    <NavLink className='settings-item' to='dates' >Dates </NavLink>
                    <NavLink className='settings-item' to='email' >Email </NavLink>
                    <NavLink className='settings-item' to='results' >Results </NavLink>
                    <NavLink className='settings-item' to='delete' >Delete </NavLink>
                </div>
                {/* </Container> */}
                <div>  
                    <Outlet />
                </div>
            {/* </Container> */}
        </PageLayout>
    )
}

export default Settings