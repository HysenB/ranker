import React from "react"
import { useGetAllUsersQuery } from "../../../store/services/user.slice";
import { TableData } from "./../../../components/TableData";

type UsersDataType = {
    schoolName: {
        label: string;
        value: string;
    };
    query: string;
};


const UsersData: React.FC<UsersDataType> = ({
    schoolName,
    query
}) => {

    const { data, isLoading, isError, error } = useGetAllUsersQuery({
        name: query,
    });

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