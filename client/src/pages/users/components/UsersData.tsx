import React from "react"
import { useGetAllUsersQuery } from "../../../store/services/user.slice";
import { TableData } from "./../../../components/TableData";


const UsersData: React.FC = () => {

    const { data, isLoading, isError, error } = useGetAllUsersQuery('');

    if (isLoading) return <p>Loading...</p>
    return (
        <TableData
            head={["Id", "First Name", "Last Name", "Email"]}
            threeDots={true}
            data={data}
        />
    )
}

export default UsersData;