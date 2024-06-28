import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { Check } from "lucide-react";

export const SelectDropDown = ({
    items,
    selected,
    filteredName,
    handleClick,
}: any) => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 text-center outline-none text-md font-poppins md:text-left">
                    <span className="text-[#535353]">{filteredName}:</span>
                    <span className="flex items-center gap-1 font-bold">
                        {selected.label ?? "All"} <IoIosArrowDown />
                    </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="dark:bg-[#282D33]">
                    {(items as string[])?.map((item: any) => (
                        <React.Fragment key={item.value}>
                            <DropdownMenuItem
                                onClick={() => handleClick(item)}
                                className="cursor-pointer"
                            >
                                <Check
                                    className={`mr-2 h-4 w-4
                                          ${item.value === selected.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                        }`}
                                />
                                {item.label}
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="dark:bg-[#3C4248]" />
                        </React.Fragment>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};
