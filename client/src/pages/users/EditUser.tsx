
import { useEditUserMutation, useGetUserByIdQuery } from "../../store/services/user.slice";
import { useForm } from "react-hook-form";
import FormDialog from "../../components/form/form-dialog";
import { Navigate, useParams } from "react-router-dom";
import { useGetAllSchoolsQuery } from "../../store/services/school.slice";


const EditUser = () => {
    const { id } = useParams();
    const { data: schoolData, isLoading: schoolDataIsLoading } = useGetAllSchoolsQuery('');
    const {
        data: userData,
        isLoading: dataIsLoading,
        isError: dataIsError,
        error: dataError
    } = useGetUserByIdQuery(id);
    const [editUser, { isLoading, isError, error, isSuccess }] = useEditUserMutation();

    const form = useForm({
        values: {
            firstName: userData?.firstName,
            lastName: userData?.lastName,
            email: userData?.email,
            schoolId: userData?.schoolId
        }
    });


    function onSubmit(_data: any) {
        console.log("submit", _data);
        editUser({ id, body: _data });
    }

    if (schoolDataIsLoading) return <p>loading...</p>
    if (isSuccess) return <Navigate to='../' />
    console.log({ schoolData })
    const userFields = [
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
        {
            name: "schoolId",
            label: "School",
            placeholder: "Edit school",
            type: "select",
            sourceType: "all",
            options: schoolData ? schoolData : [],
        },
    ];
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