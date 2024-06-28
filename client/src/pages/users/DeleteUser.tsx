
import { Navigate, useParams } from "react-router-dom";
import FormDialogDelete from "../../components/form/form-dialog-delete";
import { useDeleteUserMutation, useGetUserByIdQuery } from "../../store/services/user.slice";

const DeleteUser = () => {
    const { id } = useParams();

    const {
        data: userData,
        isLoading: dataIsLoading,
        isError: dataIsError,
        error: dataError,
    } = useGetUserByIdQuery(id || "");
    const [deleteUser, { isLoading, isError, error, isSuccess }] =
        useDeleteUserMutation();

    const onSubmit = () => {
        deleteUser(id);
    };

    if (dataIsLoading) return <p>Loading...</p>;
    if (isSuccess) return <Navigate to="../" />;
    return (
        <FormDialogDelete
            navigateUrl="../"
            headerTitle="Delete User"
            name={`User ${userData?.firstName}`}
            isLoading={isLoading}
            onSubmit={onSubmit}
        />
    );
};
export default DeleteUser;
