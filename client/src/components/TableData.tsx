import React from "react";
import { Dropdown } from "./Dropdown";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "../../components/ui/table";

type TableDataType = {
    head: string[];
    threeDots?: any;
    data?: any;
};
export const TableData = ({
    head,
    threeDots,
    data,
}: TableDataType) => {
    return (
        <Table className="bg-white dark:bg-[#282D33]">
            <TableHeader className="sticky top-0 bg-white dark:bg-[#282D33]">
                <TableRow className="dark:bg-[#282D33] border-[1px] dark:border-[#3C4248]">
                    {head?.map((col, idx) => (
                        <TableHead
                            key={idx}
                            className="font-[500] text-[#111111] dark:text-white"
                        >
                            {col}
                        </TableHead>
                    ))}
                    {threeDots ? (
                        <TableHead className="w-[120px] text-right dark:text-white">
                            {" "}
                        </TableHead>
                    ) : null}
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.map((row: any, idx: number) => {
                    console.log({ row })
                    return (
                        <TableRow key={idx} className="dark:border-[#3C4248] h-[65px]">
                            {Object.keys(row).map((rowData: any, idx: number) => {
                                return (
                                    <TableCell key={idx} className="font-medium">
                                        {row[rowData]}
                                    </TableCell>
                                )
                            })}
                            <TableCell className="text-right">
                                {threeDots ? (
                                    <Dropdown
                                        isThreeDots={true}
                                        selected="All"
                                        items={threeDots}
                                        id={row.id}
                                    />
                                ) : null}
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    )
}