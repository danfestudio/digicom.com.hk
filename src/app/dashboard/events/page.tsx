'use client'

import React, { useMemo, useState, useEffect } from 'react'
import { Table } from '@/app/components/Table/Table'
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import { ColumnDef } from '@tanstack/react-table';
import { PenSquare, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Title from '@/app/components/Title';
import Link from 'next/link';
import Skeleton from '@/app/components/SkeletonLoader/Skeleton';
import { debounce } from 'lodash';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { setSelectedEvent } from '@/redux/features/eventSlice';
import { startSkeletonLoad, stopSkeletonLoad } from '@/redux/features/skeletonSlice';
import axios from '../../../axios/axios';
import dayjs from 'dayjs';

function EventsList() {

    type Item = {
        _id: string;
        title: string;
        createdAt: Date;
        startDate: Date;
        endDate: Date;
    }

    const router = useRouter()

    const [eventlimit, setEventLimit] = useState<number>(10)
    const [eventPage, setEventPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [eventData, setEventData] = useState<any>([])
    const [keyword, setKeyword] = useState()
    const [isLoading, setIsLoading] = useState()
    const dispatch = useDispatch<AppDispatch>()

    const formatDate = (date: Date | string) => {
        if (!date) return ''; // Handle null or undefined dates
        return dayjs(date).format('MMM D, YYYY - h:mm a'); // Format the date as "August 6, 2023"
    };


    const deleteEvent = async (id: string) => {
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
                    let result = await axios.delete('event/' + id)
                    if (result.data.success) {
                        getEventDetails()
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
                header: 'Name',
                cell: (row) => row.renderValue(),
                accessorKey: 'title',
            },
            {
                header: 'type',
                cell: (row) => row.renderValue(),
                accessorKey: 'type',
            },
            {
                header: 'startDate',
                cell: (row) => formatDate(row.cell.row.original.startDate),
                accessorKey: 'startDate',
            },
            {
                header: 'endDate',
                cell: (row) => formatDate(row.cell.row.original.endDate),
                accessorKey: 'endDate',
            },
            {
                header: 'Actions',
                cell: (row) => (
                    <div className='flex gap-2'>
                        <button title='Delete' className='btn-danger' onClick={() => deleteEvent(row.cell.row.original._id)}>
                            <Trash2 size={16} />
                        </button>
                        <button
                            title='Edit'
                            className='btn-primary'
                            onClick={() => {
                                router.push('/dashboard/events/editevent')
                                dispatch(setSelectedEvent(row.cell.row.original))
                            }
                            }
                        ><PenSquare size={16} /></button>
                    </div >
                ),
            },
        ],
        [router]
    );


    const getEventDetails = async () => {
        try {
            dispatch(startSkeletonLoad())

            let result = await axios.get('event/', {
                params: {
                    search: keyword,
                    limit: eventlimit,
                    page: eventPage
                }
            })
            if (result.data.success) {
                setEventData(result.data.data.data)
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
        getEventDetails()
    }, [keyword, eventlimit, eventPage])


    const handleInputChangeDebounced = debounce((value) => {
        setKeyword(value)
    }, 800);

    return (
        <div className='rounded p-4 mx-auto'>
            <div className='mb-4 flex justify-between items-center flex-wrap'>
                <Title title='Events'></Title>
            </div>
            <hr className='mb-4' />

            <div className='flex gap-2 items-center card mb-5 justify-between'>
                <input type='search' className='inputfield !w-1/3' onChange={(e: any) => {
                    handleInputChangeDebounced(e.target.value)
                }} placeholder='Search Events' />
                <div className='flex gap-2 '>
                    <Link className='btn-primary' href={'/dashboard/events/addevent'}>Add Event</Link>
                </div>
            </div>
            {
                isLoading ?
                    <Skeleton />
                    :
                    <div className='card'>

                        {
                            eventData.length === 0 ?
                                <div className='px-5 pb-4'>
                                    <h1 className='text-xl font-semibold text-gray-400'>No Data Found</h1>
                                </div>
                                :
                                <div className='px-4'>
                                    <Table data={eventData} columns={cols} showFooter limit={eventlimit} totalPage={totalPages} setlimit={setEventLimit} page={eventPage} setPage={setEventPage} />
                                </div>
                        }
                    </div>
            }
        </div>
    )
}

export default EventsList