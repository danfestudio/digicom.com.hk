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
import { startSkeletonLoad, stopSkeletonLoad } from '@/redux/features/skeletonSlice';
import axios from '../../../axios/axios';
import dayjs from 'dayjs';
import { setSelectedTestimonial } from '@/redux/features/testimonialSlice';

function TestimonialsList() {

    type Item = {
        _id: string;
        title: string;
        createdAt: Date;
        startDate: Date;
        endDate: Date;
    }

    const router = useRouter()

    const [testimoniallimit, setTestimonialLimit] = useState<number>(10)
    const [testimonialPage, setTestimonialPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [testimonialData, setTestimonialData] = useState<any>([])
    const [keyword, setKeyword] = useState()
    const [isLoading, setIsLoading] = useState()
    const dispatch = useDispatch<AppDispatch>()

    const formatDate = (date: Date | string) => {
        if (!date) return ''; // Handle null or undefined dates
        return dayjs(date).format('MMM D, YYYY - h:mm a'); // Format the date as "August 6, 2023"
    };


    const deleteTestimonial = async (id: string) => {
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
                    let result = await axios.delete('testimonial/' + id)
                    if (result.data.success) {
                        getTestimonialDetails()
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
                accessorKey: 'author',
            },
            {
                header: 'designation',
                cell: (row) => row.renderValue(),
                accessorKey: 'designation',
            },
            {
                header: 'content',
                cell: (row) => row.renderValue(),
                accessorKey: 'content',
            },

            {
                header: 'Actions',
                cell: (row) => (
                    <div className='flex gap-2'>
                        <button title='Delete' className='btn-danger' onClick={() => deleteTestimonial(row.cell.row.original._id)}>
                            <Trash2 size={16} />
                        </button>
                        <button
                            title='Edit'
                            className='btn-primary'
                            onClick={() => {
                                router.push('/dashboard/testimonials/edittestimonial')
                                dispatch(setSelectedTestimonial(row.cell.row.original))
                            }
                            }
                        ><PenSquare size={16} /></button>
                    </div >
                ),
            },
        ],
        [router]
    );


    const getTestimonialDetails = async () => {
        try {
            dispatch(startSkeletonLoad())

            let result = await axios.get('testimonial/', {
                params: {
                    search: keyword,
                    limit: testimoniallimit,
                    page: testimonialPage
                }
            })
            if (result.data.success) {
                setTestimonialData(result.data.data.data)
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
        getTestimonialDetails()
    }, [keyword, testimoniallimit, testimonialPage])


    const handleInputChangeDebounced = debounce((value) => {
        setKeyword(value)
    }, 800);

    return (
        <div>
            <div className='p-4 antialiased  mx-auto'>
                <div className='mb-4 flex justify-between items-center flex-wrap'>
                    <Title title='Testimonials'></Title>
                </div>

                <hr className='mb-4' />

                <div className='flex gap-2 items-center card mb-5 justify-between'>
                    <input type='search' className='inputfield md:!w-1/3 !w-1/2 ' onChange={(e: any) => {
                        handleInputChangeDebounced(e.target.value)
                    }} placeholder='Search Testimonials' />
                    <div className='flex gap-2 '>
                        <Link className='btn-primary min-w-max' href={'/dashboard/testimonials/addtestimonial'}>Add Testimonial</Link>
                    </div>
                </div>
                {
                    isLoading ?
                        <Skeleton />
                        :
                        <div className='card'>

                            {
                                testimonialData.length === 0 ?
                                    <div className='px-5 pb-4'>
                                        <h1 className='text-xl font-semibold text-gray-400'>No Data Found</h1>
                                    </div>
                                    :
                                    <div className='px-4'>
                                        <Table data={testimonialData} columns={cols} showFooter limit={testimoniallimit} totalPage={totalPages} setlimit={setTestimonialLimit} page={testimonialPage} setPage={setTestimonialPage} />
                                    </div>
                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default TestimonialsList