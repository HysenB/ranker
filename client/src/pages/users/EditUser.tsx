
import { useEditUserMutation, useGetUserByIdQuery } from "../../store/services/user.slice";
import { useForm } from "react-hook-form";
import FormDialog from "../../components/form/form-dialog";
import { Navigate, useParams } from "react-router-dom";
export const userFields = [
    {
        name: "firstName",
        label: "FirstName",
        placeholder: "Enter organization firstName",
    },
    {
        name: "lastName",
        label: "LastName",
        placeholder: "Enter organization lastName",
    },
    {
        name: "email",
        label: "Email Address",
        placeholder: "Enter organization email address",
    },
];

const EditUser = () => {
    const { id } = useParams();
    const {
        data: userData,
        isLoading: dataIsLoading,
        isError: dataIsError,
        error: dataError
    } = useGetUserByIdQuery(id);
    const [editUser, { isLoading, isError, error, isSuccess }] = useEditUserMutation();

    const form = useForm({
        // defaultValues: {
        //     firstName: "",
        //     lastName: "",
        //     email: ""
        // },
        values: {
            firstName: userData?.firstName,
            lastName: userData?.lastName,
            email: userData?.email
        }
    });


    function onSubmit(_data: any) {
        console.log("submit", _data);
        editUser({ id, body: _data });
    }

    if (isSuccess) return <Navigate to='../' />
    return (
        <FormDialog
            navigateUrl="../"
            headerTitle="Edit User"
            form={form}
            onSubmit={onSubmit}
            fields={userFields}
            buttonText="Edit"
            isLoading={isLoading}
        />
    )


}

export default EditUser;