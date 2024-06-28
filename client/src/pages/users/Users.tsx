
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import UsersHeader from './components/UsersHeader';
import UsersData from './components/UsersData';
export const Users: React.FC = () => {
    const [schoolName, setSchoolName] = useState<{
        label: string;
        value: string;
    }>({
        label: "Hourly",
        value: "Hourly",
    });
    const [query, setQuery] = useState("");
    console.log({ query })
    return (

        <div className="container flex flex-col items-stretch w-full h-full mx-auto">
            <UsersHeader schoolName={schoolName} setSchoolName={setSchoolName} query={query} setQuery={setQuery} />
            <UsersData schoolName={schoolName} query={query} />
            <Outlet />
        </div>
    )
}