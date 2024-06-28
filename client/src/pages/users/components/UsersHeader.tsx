import { SelectDropDown } from "../../../components/SelectDropDown";
import React from "react"
import { Link } from "react-router-dom";

const items = [
    { label: "Hourly", value: "Hourly" },
    { label: "Daily", value: "Daily" },
    { label: "Weekly", value: "Weekly" },
    { label: "Monthly", value: "Monthly" },
    { label: "Yearly", value: "Yearly" },
];

const UsersHeader: React.FC<any> = ({
    schoolName,
    setSchoolName,
    query,
    setQuery
}) => {
    return (
        <div className="flex flex-col items-center justify-center py-4 md:flex-row md:justify-between">
            <p className="text-xl font-bold">All Users</p>
            <div className="flex items-center gap-5">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for an item"
                />
                <SelectDropDown
                    items={items}
                    selected={schoolName}
                    handleClick={setSchoolName}
                    filteredName="Select School Name"
                />
                <div>
                    <Link
                        to="new"
                        className="w-[170px] bg-[#579DFF] rounded-lg text-white flex items-center py-2 justify-center gap-2 font-poppins"
                    >
                        New User
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UsersHeader;