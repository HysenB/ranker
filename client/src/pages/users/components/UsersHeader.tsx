import React from "react"
import { Link } from "react-router-dom";

const UsersHeader: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center py-4 md:flex-row md:justify-between">
            <p className="text-xl font-bold">All Users</p>
            <div>
                <Link
                    to="new"
                    className="w-[170px] bg-[#579DFF] rounded-lg text-white flex items-center py-2 justify-center gap-2 font-poppins"
                >
                    New User
                </Link>
            </div>
        </div>
    )
}

export default UsersHeader;