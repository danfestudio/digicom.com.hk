"use client";
import React, { useEffect, useState, useMemo } from 'react'
import { PenSquare, RefreshCcw, Trash2 } from 'lucide-react';
import Title from '@/app/components/Title'
import axios from '../../../axios/axios';
import { debounce } from 'lodash';
import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Skeleton from '@/app/components/SkeletonLoader/Skeleton';
import { Table } from '@/app/components/Table/Table';
import Link from 'next/link';

function Warranty() {
    type Item = {
        country_code: string;
        _id: string;
        title: string;
        createdAt: Date;
        startDate: Date;
        endDate: Date;
        content: any;
        is_active: boolean;
    }

    const router = useRouter()
    const [warrantyLimit, setWarrantyLimit] = useState<number>(10)
    const [warrantyPage, setWarrantyPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [keyword, setKeyword] = useState()
    const [isLoading, setIsLoading] = useState()

    const [warrantyData, setWarrantyData] = useState<any>([])

    const getAllWarranty = async () => {
        try {
            let result = await axios.get('warranty/', {
                params: {
                    page: warrantyPage,
                    limit: warrantyLimit,
                    country: keyword
                }
            })
            if (result.data.success) {
                setWarrantyData(result.data.data.data)
                setTotalPages(result.data.data.totalPage)
            }
        } catch (ERR) {
            (ERR)
        }
    }

    useEffect(() => {
        getAllWarranty()
    }, [keyword, warrantyLimit, warrantyPage])

    const makeActive = async (data: any) => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                // text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    let result = await axios.put('warranty/' + data._id, {
                        is_active: data.is_active === true ? false : true
                    })
                    if (result.data.success) {
                        getAllWarranty()
                    }
                }
            })


        } catch (ERR) {
            console.log(ERR)
        }
    }

    const deleteWarranty = async (id: string) => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    let result = await axios.delete('warranty/' + id)
                    if (result.data.success) {
                        getAllWarranty()
                    }
                }
            })


        } catch (ERR) {
            console.log(ERR)
        }
    }

    const cols = useMemo<ColumnDef<Item>[]>(
        () => [
            {
                header: 'continent',
                cell: (row) => row.renderValue(),
                accessorKey: 'continent',
            },
            {
                header: 'country',
                cell: (row) => row.renderValue(),
                accessorKey: 'country',
            },
            {
                header: 'Status',
                cell: (row) => (
                    <div className='flex gap-2'>
                        {
                            row.cell.row.original?.is_active === true
                                ?
                                <label className='btn-success hover:shadow-none'>Active</label>
                                :
                                <label className='btn-danger hover:shadow-none'>InActive</label>
                        }
                    </div >
                ),
            },
            {
                header: 'Actions',
                cell: (row) => (
                    <div className='flex gap-2'>
                        <button title='Status Change' className='btn-success' onClick={() => makeActive(row.cell.row.original)}>
                            <RefreshCcw size={16} />
                        </button>
                        <button title='Delete' className='btn-danger' onClick={() => deleteWarranty(row.cell.row.original._id)}>
                            <Trash2 size={16} />
                        </button>
                        <button
                            title='Edit'
                            className='btn-primary'
                            onClick={() => {
                                router.push('/dashboard/warranty/editwarranty/' + row.cell.row.original.country_code)
                                // dispatch(setSelectedWarranty(row.cell.row.original))
                            }
                            }
                        ><PenSquare size={16} /></button>
                    </div >
                ),
            },
        ],
        [router]
    );

    const handleInputChangeDebounced = debounce((value) => {
        setKeyword(value)
    }, 800);


    return (
        <div>
            <div className='rounded p-4 antialiased  mx-auto'>
                <div className='mb-4 flex justify-between items-center text-center flex-wrap'>
                    <Title title='Warranty'></Title>
                </div>
                <hr className='mb-4' />
                <div className='flex gap-2 items-center card mb-5 justify-between'>
                    <input type='search' className='inputfield md:!w-1/3 !w-1/2 ' onChange={(e: any) => {
                        handleInputChangeDebounced(e.target.value)
                    }} placeholder='Search by Country' />
                    <Link href={'/dashboard/warranty/addwarranty'} className='btn-primary min-w-max'>Add Warranty</Link>
                </div>
                {
                    isLoading ?
                        <Skeleton />
                        :
                        <div className='card'>
                            {
                                warrantyData.length === 0 ?
                                    <div className='px-5 pb-4'>
                                        <h1 className='text-xl font-semibold text-gray-400'>No Data Found</h1>
                                    </div>
                                    :
                                    <div className=''>
                                        <Table data={warrantyData} columns={cols} showFooter limit={warrantyLimit} totalPage={totalPages} setlimit={setWarrantyLimit} page={warrantyPage} setPage={setWarrantyPage} />
                                    </div>
                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default Warranty