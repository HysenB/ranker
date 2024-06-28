
import { useCreateUserMutation } from "../../store/services/user.slice"
import { useForm } from "react-hook-form";
import FormDialog from "../../components/form/form-dialog";
import { Navigate } from "react-router-dom";
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

const NewUser = () => {
    const [createUser, { isLoading, isError, error, isSuccess }] = useCreateUserMutation();

    const form = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: ""
        },
    });


    function onSubmit(_data: any) {
        console.log("submit", _data);
        createUser(_data);
    }

    if (isSuccess) return <Navigate to='../' />
    return (
        <FormDialog
            navigateUrl="../"
            headerTitle="New User"
            form={form}
            onSubmit={onSubmit}
            fields={userFields}
            buttonText="Create"
            isLoading={isLoading}
        />
    )


}

export default NewUser;