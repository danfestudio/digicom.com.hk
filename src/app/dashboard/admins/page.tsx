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
import { AppDispatch} from '@/redux/store';
import Swal from 'sweetalert2';
import Skeleton from '@/app/components/SkeletonLoader/Skeleton';
import { Table } from '@/app/components/Table/Table';
import { setSelectedBanner } from '@/redux/features/bannerSlice';
import AddAdminModal from './AddAdminModal';
import EditAdminModal from './EditAdminModal';

function Admins() {
    type Item = {
        _id: string;
        title: string;
        createdAt: Date;
        startDate: Date;
        endDate: Date;
        content: any;
        is_active: boolean;
    }

    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()

    const [adminLimit, setAdminLimit] = useState<number>(10)
    const [adminPage, setAdminPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [keyword, setKeyword] = useState()
    const [isLoading, setIsLoading] = useState()

    const [showModal, setShowModal] = React.useState(false)
    const [showEditModal, setShowEditModal] = React.useState(false)

    const [adminData, setAdminData] = useState<any>([])

    const getAllAdmins = async () => {
        try {
            let result = await axios.get('admin/')
            if (result.data.success) {
                setAdminData(result.data.data.data)
            }
        } catch (ERR) {
            console.log(ERR)
        }
    }

    useEffect(() => {
        getAllAdmins()
    }, [keyword, adminLimit, adminPage])

    const formatDate = (date: Date | string) => {
        if (!date) return ''; // Handle null or undefined dates
        return dayjs(date).format('MMM D, YYYY - h:mm a'); // Format the date as "August 6, 2023"
    };



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
                    let result = await axios.put('admin/make-active/' + data._id, {
                        is_active: data.is_active === true ? false : true
                    })
                    if (result.data.success) {
                        getAllAdmins()
                    }
                }
            })

        } catch (ERR) {
            console.log(ERR)
        }
    }
    const deleteAdmin = async (id: string) => {
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
                    let result = await axios.delete('admin/' + id)
                    if (result.data.success) {
                        getAllAdmins()
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
                header: 'Title',
                cell: (row) => row.renderValue(),
                accessorKey: 'content.title',
            },
            {
                header: 'Description',
                cell: (row) => (
                    <div className='flex gap-2'>
                        {
                            row.cell.row.original?.content.description?.map((value: string, index: number) => (
                                <label key={index}>{value}</label>
                            ))
                        }
                    </div >
                ),
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
                        <button title='Delete' className='btn-danger' onClick={() => deleteAdmin(row.cell.row.original._id)}>
                            <Trash2 size={16} />
                        </button>
                        <button
                            title='Edit'
                            className='btn-primary'
                            onClick={() => {
                                setShowEditModal(true)
                                // router.push('/events/editeventdetail')
                                dispatch(setSelectedBanner(row.cell.row.original))
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
            {
                showModal &&
                <AddAdminModal showModal={showModal} setShowModal={setShowModal} getAllAdmins={getAllAdmins} />
            }

            {
                showEditModal &&
                <EditAdminModal showModal={showEditModal} setShowModal={setShowEditModal} getAllAdmins={getAllAdmins} />
            }

            <div className='rounded p-4 antialiased  mx-auto'>
                <div className='mb-4 flex justify-between items-center text-center flex-wrap'>
                    <Title title='Admins'></Title>
                </div>
                <hr className='mb-4' />
                <div className='flex gap-2 items-center card mb-5 justify-between'>
                    <input type='search' className='inputfield md:!w-1/3 !w-1/2 ' onChange={(e: any) => {
                        handleInputChangeDebounced(e.target.value)
                    }} placeholder='Search Admins' />
                    <button className='btn-primary min-w-max' onClick={() => {
                        setShowModal(true)
                    }} >Add Admin</button>
                </div>
                {
                    isLoading ?
                        <Skeleton />
                        :
                        <div className='card'>
                            {
                                adminData.length === 0 ?
                                    <div className='px-5 pb-4'>
                                        <h1 className='text-xl font-semibold text-gray-400'>No Data Found</h1>
                                    </div>
                                    :
                                    <div className=''>
                                        <Table data={adminData} columns={cols} showFooter limit={adminLimit} totalPage={totalPages} setlimit={setAdminLimit} page={adminPage} setPage={setAdminPage} />
                                    </div>
                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default Admins