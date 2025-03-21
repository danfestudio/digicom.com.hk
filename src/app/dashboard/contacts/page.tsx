'use client'

import Skeleton from '@/app/components/SkeletonLoader/Skeleton';
import Title from '@/app/components/Title'
import { startSkeletonLoad, stopSkeletonLoad } from '@/redux/features/skeletonSlice';
import { AppDispatch } from '@/redux/store';
import { debounce } from 'lodash';
import { EyeIcon, Link, Trash2 } from 'lucide-react'
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux';
import axios from '../../../axios/axios';
import toast from 'react-hot-toast';
import { ColumnDef } from '@tanstack/react-table';
import Swal from 'sweetalert2';
import { Table } from '@/app/components/Table/Table'
import dayjs from 'dayjs';

function Contacts() {

    const dispatch = useDispatch<AppDispatch>()
    const [keyword, setKeyword] = useState()
    const [isLoading, setIsLoading] = useState()
    const [contactsLimit, setContactsLimit] = useState<number>(10)
    const [contactsPage, setContactsPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [contactsData, setContactsData] = useState<any>([])

    const handleInputChangeDebounced = debounce((value) => {
        setKeyword(value)
    }, 800);

    type Item = {
        _id: string;
        // fullname: string;
        email: string;
        // message: string;
        createdAt: Date;
        startDate: Date;
    }

    const getContacts = async () => {
        try {
            dispatch(startSkeletonLoad())
            let result = await axios.get('stay-in-touch/', {
                params: {
                    search: keyword,
                    limit: contactsLimit,
                    page: contactsPage
                }
            })
            if (result.data.success) {
                setContactsData(result.data.data.data)
                setTotalPages(result.data.data.totalPage)
                setTimeout(() => {
                    dispatch(stopSkeletonLoad())
                }, 200)
            }
        } catch (ERR) {
            console.log(ERR)
            toast.error('Failed to fetch Data')
            setTimeout(() => {
                dispatch(stopSkeletonLoad())
            }, 200)
        }
    }

    useEffect(() => {
        getContacts()
    }, [keyword, contactsLimit, contactsPage])

    const deleteContact = async (id: string) => {
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
                    let result = await axios.delete('stay-in-touch/' + id)
                    if (result.data.success) {
                        getContacts()
                    }
                }
            })


        } catch (ERR) {
            console.log(ERR)
        }
    }

    const formatDate = (date: Date | string) => {
        if (!date) return ''; // Handle null or undefined dates
        return dayjs(date).format('MMM D, YYYY - h:mm a'); // Format the date as "August 6, 2023"
    };

    const cols = useMemo<ColumnDef<Item>[]>(
        () => [
            // {
            //     header: 'fullname',
            //     cell: (row) => row.renderValue(),
            //     accessorKey: 'fullname',
            // },
            {
                header: 'email',
                cell: (row) => row.renderValue(),
                accessorKey: 'email',
            },
            // {
            //     header: 'startDate',
            //     cell: (row) => formatDate(row.cell.row.original.createdAt),
            //     accessorKey: 'createdAt',
            // },
            {
                header: 'Actions',
                cell: (row) => (
                    <div className='flex gap-2'>
                        <button title='Delete' className='btn-danger' onClick={() => deleteContact(row.cell.row.original._id)}>
                            <Trash2 size={16} />
                        </button>
                        {/* <button
                            title='Edit'
                            className='btn-primary'
                            onClick={() => {
                                Swal.fire({
                                    customClass: {
                                        title: "!text-left ",
                                        htmlContainer: "!text-left !mt-0",
                                        confirmButton: "align-end"
                                    },
                                    title: `<strong style=text-align:left>${row.cell.row.original?.fullname}</strong>`,
                                    html:
                                        `<div >
                                        <label class="!text-sm">
                                        ${row.cell.row.original?.email}
                                        </label>
                                        <br/>
                                        <br/>
                                        <p class="!font-semibold">
                                        ${row.cell.row.original?.message}
                                        </p>
                                        </div>`,
                                    showCloseButton: true,
                                    showCancelButton: false,
                                    showConfirmButton: false,
                                    focusConfirm: false,
                                    confirmButtonText:
                                        '<i class="fa fa-thumbs-up"></i> Okay!',
                                    confirmButtonAriaLabel: 'Thumbs up, great!',
                                })
                            }
                            }
                        ><EyeIcon size={16} /></button> */}
                    </div >
                ),
            },
        ],
        []
    );


    return (
        <div>
            <div className='p-4 antialiased  mx-auto'>
                <div className='mb-4 flex justify-between items-center flex-wrap'>
                    <Title title='Contacts'></Title>
                </div>
                <hr className='mb-4' />


                <div className='flex gap-2 items-center card mb-5 justify-between'>
                    <input type='search' className='inputfield md:!w-1/3 !w-1/2' onChange={(e: any) => {
                        handleInputChangeDebounced(e.target.value)
                    }} placeholder='Search Contacts' />
                </div>
                {
                    isLoading ?
                        <Skeleton />
                        :
                        <div className='card'>
                            {
                                contactsData.length === 0 ?
                                    <div className='px-5 pb-4'>
                                        <h1 className='text-xl font-semibold text-gray-400'>No Data Found</h1>
                                    </div>
                                    :
                                    <div className='px-4'>
                                        <Table data={contactsData} columns={cols} showFooter limit={contactsLimit} totalPage={totalPages} setlimit={setContactsLimit} page={contactsPage} setPage={setContactsPage} />
                                    </div>
                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default Contacts