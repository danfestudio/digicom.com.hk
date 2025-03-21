import { getCoreRowModel, useReactTable, flexRender, getPaginationRowModel } from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';
import { ChevronLeft, ChevronRight, ChevronLast, ChevronFirst } from 'lucide-react';

interface ReactTableProps<T extends object> {
    limit: any,
    totalPage: any
    setlimit: any,
    page: any,
    setPage: any,
    data: T[];
    columns: ColumnDef<T>[];
    showFooter: boolean;
    showNavigation?: boolean;
}

export const Table = <T extends object>({ limit, totalPage, setlimit, data, page, setPage, columns, showFooter = true, showNavigation = true, }: ReactTableProps<T>) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <>
            <div className="w-full overflow-x-auto text-left">
                {/* <table className="w-full border-collapse table-auto border  outline "> */}
                <table className="w-full border-collapse table-auto  ">
                    {/* <thead className="bg-gray-800"> */}
                    <thead className="border-b">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                <th className="px-6 py-4  text-xs font-semibold uppercase overflow-hidden text-gray-900 bg-primaryBlue-2">S.N</th>
                                {headerGroup.headers.map((header, index) => (
                                    <th key={index} className="px-6 py-4  text-xs font-semibold uppercase text-gray-900 bg-primaryBlue-2">
                                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody className=''>
                        {table.getRowModel().rows.map((row, index) => (
                            <tr key={index} className='bg-white  '>
                                {/* <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800 border-1 border" >{index + 1}</td> */}
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800 " >{index + 1}</td>
                                {row.getVisibleCells().map((cell) => (
                                    <td style={{
                                        maxWidth: "300px"
                                        // }} className="whitespace-nowrap px-6 py-4 text-sm overflow-clip text-ellipsis font-medium text-gray-800 border-1 border" key={cell.id}>
                                    }} className="whitespace-nowrap px-6 py-4 text-sm overflow-clip text-ellipsis font-medium text-gray-800 " key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                    {/* {showFooter ? (
                        <tfoot className=" bg-gray-50 ">
                            {table.getFooterGroups().map((footerGroup) => (
                                <tr key={footerGroup.id} className='py-4'>
                                    {footerGroup.headers.map((header) => (
                                        <th key={header.id} colSpan={header.colSpan}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.footer, header.getContext())}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </tfoot>
                    ) : null} */}
                </table>
            </div>

            {showNavigation ? (
                <div className="flex flex-wrap items-center justify-between gap-2 w-full py-4 px-5 mx-auto">
                    <div className='flex items-center gap-3'>

                        <span className="flex items-center gap-1">
                            Go to page:
                            <input
                                min={1}
                                max={totalPage}
                                type="number"
                                value={page}
                                onChange={(e) => {
                                    if (Number(e.target.value) < 1) {
                                        setPage(1)
                                    } else {
                                        const page = Number(e.target.value) > totalPage ? totalPage : e.target.value;
                                        setPage(Number(page));
                                    }
                                }}
                                className="w-16 rounded border p-1"
                            />
                        </span>
                    </div>
                    <div className='flex gap-3 flex-wrap items-center'>
                        <button
                            className={` rounded-full  relative group  p-1 ${page === 1 ? "text-gray-400" : "hover:bg-gray-200 cursor-pointer"}`}
                            onClick={() => setPage(1)}
                            disabled={page === 1}
                        >
                            {
                                page != 1 &&
                                <label
                                    className='font-semibold text-xs absolute top-0 transition-all left-1/2 -translate-x-1/2 bg-gray-500 text-white rounded-sm shadow m-0 h-0 p-0 opacity-0 group-hover:-top-7  
                            group-hover:opacity-100 group-hover:px-2 group-hover:py-1 group-hover:h-fit group-hover:w-max duration-200 '>
                                    First Page
                                </label>
                            }
                            <ChevronFirst size={20} />
                        </button>
                        <button
                            className={` rounded-full  relative group p-1 font-semibold ${page === 1 ? "text-gray-400" : "hover:bg-gray-200 cursor-pointer"}`}
                            onClick={() => setPage(page - 1)}
                            disabled={page === 1}
                        >
                            {
                                page != 1 &&
                                <label
                                    className='font-semibold text-xs absolute top-0 transition-all left-1/2 -translate-x-1/2 bg-gray-500 text-white rounded-sm shadow m-0 h-0 p-0 opacity-0 group-hover:-top-7  
                                group-hover:opacity-100 group-hover:px-2 group-hover:py-1 group-hover:h-fit group-hover:w-max duration-200 '>
                                    Previous
                                </label>
                            }

                            <ChevronLeft size={20} />
                        </button>
                        <span className="flex cursor-pointer items-center gap-1 px-2 font-semibold">
                            <div>Page</div>
                            <strong>
                                {page} of {totalPage}
                            </strong>
                        </span>
                        <button
                            className={`group  rounded-full  relative p-1 px-1 font-semibold ${page === totalPage ? "text-gray-400 " : "hover:bg-gray-200 cursor-pointer"}`}
                            onClick={() => setPage(page + 1)}
                            disabled={page === totalPage}
                        >
                            {
                                page != totalPage &&
                                <label
                                    className='font-semibold text-xs absolute top-0 transition-all left-1/2 -translate-x-1/2 bg-gray-500 text-white rounded-sm shadow m-0 h-0 p-0 opacity-0 group-hover:-top-7  
                                group-hover:opacity-100 group-hover:px-2 group-hover:py-1 group-hover:h-fit group-hover:w-max duration-200 '>
                                    Next
                                </label>
                            }

                            <ChevronRight size={20} />
                        </button>
                        <button
                            className={` rounded-full  relative group  p-1 ${page === totalPage ? "text-gray-400" : "hover:bg-gray-200 cursor-pointer"}`}
                            onClick={() => setPage(totalPage)}
                            disabled={page === totalPage}
                        >
                            {
                                page != totalPage &&
                                <label
                                    className='font-semibold text-xs absolute top-0 transition-all left-1/2 -translate-x-1/2 bg-gray-500 text-white rounded-sm shadow m-0 h-0 p-0 opacity-0 group-hover:-top-7  
                                group-hover:opacity-100 group-hover:px-2 group-hover:py-1 group-hover:h-fit group-hover:w-max duration-200 '>
                                    Last Page
                                </label>
                            }
                            <ChevronLast size={20} />
                        </button>
                    </div>
                    <div className='flex items-center gap-2'>
                        <label>Showing</label>
                        <select className='border rounded'
                            value={limit}
                            onChange={(e) => {
                                setlimit(Number(e.target.value));
                                setPage(1)
                                table.setPageSize(Number(e.target.value))
                            }}
                        >
                            {[1, 5, 10, 20, 30, 40, 50].map((pageSize, index) => (
                                <option key={index} value={pageSize}>
                                    {pageSize}
                                </option>
                            ))}
                        </select>
                    </div>
                </div >
            ) : null}
        </>
    );
};
