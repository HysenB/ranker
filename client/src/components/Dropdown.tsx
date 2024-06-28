import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineHourglassDisabled } from "react-icons/md";
import { RiDeleteBin7Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Dropdown = ({
    id,
    isThreeDots,
    selected,
    items,
    filterName,
}: {
    id?: string;
    isThreeDots: boolean;
    selected: string;
    items?: string[] | any[];
    filterName?: string;
}) => {
    const threeDotsDefault: any[] = [
        {
            text: "Edit",
            link: `edit/${id}`,
            icon: <FiEdit2 size={20} />,
        },
        {
            text: "Delete",
            link: `delete/${id}`,
            icon: <RiDeleteBin7Line color="#EC4444" size={20} />,
        },
    ];

    if (isThreeDots) {
        const dots = items?.length
            ? (items as any)
            : threeDotsDefault;
        return (
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-center outline-none text-md font-poppins md:text-left">
                    <BsThreeDots />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="dark:bg-[#282D33]">
                    {dots?.map((content: any, idx: number) => (
                        <DropdownMenuItem
                            className="p-0 flex items-center gap-2 w-[150px]"
                            key={idx}
                        >
                            <Link
                                to={
                                    items?.length ? `${content?.link}/${id}` : `${content?.link}`
                                }
                                className="flex items-center w-full gap-2 p-2 font-poppins text-md"
                            >
                                {content.icon}
                                {content.text}
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-center outline-none text-md font-poppins md:text-left">
                    <span className="text-[#535353]">{filterName}:</span>
                    <span className="flex items-center gap-1 font-bold">
                        {selected ?? "All"} <IoIosArrowDown />
                    </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="dark:bg-[#282D33]">
                    {(items as string[])?.map((item) => (
                        <React.Fragment key={item}>
                            <DropdownMenuItem>{item}</DropdownMenuItem>
                            <DropdownMenuSeparator className="dark:bg-[#3C4248]" />
                        </React.Fragment>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};