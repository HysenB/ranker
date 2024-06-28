
import React from 'react';
import { Outlet } from 'react-router-dom';
import UsersHeader from './components/UsersHeader';
import UsersData from './components/UsersData';
export const Users: React.FC = () => {
    return (

        <div className="container flex flex-col items-stretch w-full h-full mx-auto">
            <UsersHeader />
            <UsersData />
            <Outlet />
        </div>
    )
}