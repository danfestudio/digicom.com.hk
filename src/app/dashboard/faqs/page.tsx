"use client";
import React, { useEffect, useState, useMemo } from 'react'
import { PenSquare, RefreshCcw, Trash2 } from 'lucide-react';
import Title from '@/app/components/Title'
import axios from '../../../axios/axios';
import { debounce } from 'lodash';
import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { AppDispatch } from '@/redux/store';
import Swal from 'sweetalert2';
import Skeleton from '@/app/components/SkeletonLoader/Skeleton';
import { Table } from '@/app/components/Table/Table';
import { setSelectedBanner } from '@/redux/features/bannerSlice';
import AddFaqModal from './AddFaqModal';
import EditFaqModal from './EditFaqModal';

function FAQs() {
    type Item = {
        _id: string;
        answer: string;
        qustion: Date;
    }

    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()

    const [faqLimit, setFaqLimit] = useState<number>(10)
    const [faqPage, setFaqPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [keyword, setKeyword] = useState()
    const [isLoading, setIsLoading] = useState()

    const [selectedFAQ, setSelectedFAQ] = useState<any>({})

    const [showModal, setShowModal] = React.useState(false)
    const [showEditModal, setShowEditModal] = React.useState(false)

    const [faqData, setFaqData] = useState<any>([])

    const getAllFaqs = async () => {
        try {
            let result = await axios.get('faq/', {
                params: {
                    limit: faqLimit,
                    page: faqPage
                }
            })
            if (result.data.success) {
                setFaqData(result.data.data.data)
                setTotalPages(result.data.data.totalPage)
            }
        } catch (ERR) {
            console.log(ERR)
        }
    }

    useEffect(() => {
        getAllFaqs()
    }, [keyword, faqLimit, faqPage])

    const formatDate = (date: Date | string) => {
        if (!date) return ''; // Handle null or undefined dates
        return dayjs(date).format('MMM D, YYYY - h:mm a'); // Format the date as "August 6, 2023"
    };

    const deleteFaq = async (id: string) => {
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
                    let result = await axios.delete('faq/' + id)
                    if (result.data.success) {
                        getAllFaqs()
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
                header: 'question',
                cell: (row) => row.renderValue(),
                accessorKey: 'question',
            },
            {
                header: 'answer',
                cell: (row) => row.renderValue(),
                accessorKey: 'answer',
            },
            {
                header: 'Actions',
                cell: (row) => (
                    <div className='flex gap-2'>
                        <button title='Delete' className='btn-danger' onClick={() => deleteFaq(row.cell.row.original._id)}>
                            <Trash2 size={16} />
                        </button>
                        <button
                            title='Edit'
                            className='btn-primary'
                            onClick={() => {
                                setShowEditModal(true)
                                setSelectedFAQ(row.cell.row.original)
                            }}
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
            {
                showModal &&
                <AddFaqModal showModal={showModal} setShowModal={setShowModal} getAllFaqs={getAllFaqs} />
            }

            {
                showEditModal &&
                <EditFaqModal showModal={showEditModal} setShowModal={setShowEditModal} getAllFaqs={getAllFaqs} selectedFAQ={selectedFAQ} />
            }

            <div className='rounded p-4 antialiased  mx-auto'>
                <div className='mb-4 flex justify-between items-center text-center flex-wrap'>
                    <Title title='FAQs'></Title>
                </div>
                <hr className='mb-4' />
                <div className='flex gap-2 items-center card mb-5 justify-between'>
                    <input type='search' className='inputfield md:!w-1/3 !w-1/2 ' onChange={(e: any) => {
                        handleInputChangeDebounced(e.target.value)
                    }} placeholder='Search FAQs' />
                    <button className='btn-primary min-w-max' onClick={() => {
                        setShowModal(true)
                    }} >Add Faq</button>
                </div>
                {
                    isLoading ?
                        <Skeleton />
                        :
                        <div className='card'>
                            {
                                faqData.length === 0 ?
                                    <div className='px-5 pb-4'>
                                        <h1 className='text-xl font-semibold text-gray-400'>No Data Found</h1>
                                    </div>
                                    :
                                    <div className=''>
                                        <Table data={faqData} columns={cols} showFooter limit={faqLimit} totalPage={totalPages} setlimit={setFaqLimit} page={faqPage} setPage={setFaqPage} />
                                    </div>
                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default FAQs