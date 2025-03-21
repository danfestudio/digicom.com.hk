"use client";
import React, { useEffect, useState, useMemo } from 'react'
import { ArrowDown, ArrowUp, PenSquare, RefreshCcw, Trash2 } from 'lucide-react';
import Title from '@/app/components/Title'
import CreateModal from './CreateModal';
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
import EditBanner from './EditBanner';
import { setSelectedBanner } from '@/redux/features/bannerSlice';
import toast from 'react-hot-toast';

function HeroSettings() {
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

    const [bannerLimit, setBannerLimit] = useState<number>(10)
    const [bannerPage, setBannerPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [keyword, setKeyword] = useState()
    const [isLoading, setIsLoading] = useState<boolean>()

    const [showModal, setShowModal] = React.useState(false)
    const [showEditModal, setShowEditModal] = React.useState(false)

    const [bannerData, setBannerData] = useState<any>([])

    const getAllBanners = async () => {
        try {
            let result = await axios.get('banner/', {
                params: {
                    page: bannerPage,
                    limit: bannerLimit
                }
            })
            if (result.data.success) {
                setBannerData(result.data.data.data)
                setTotalPages(result.data.data.totalPage)
            }
        } catch (ERR) {
            (ERR)
        }
    }

    useEffect(() => {
        getAllBanners()
    }, [keyword, bannerLimit, bannerPage])

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
                    let result = await axios.put('banner/make-active/' + data._id, {
                        is_active: data.is_active === true ? false : true
                    })
                    if (result.data.success) {
                        getAllBanners()
                    }
                }
            })


        } catch (ERR) {
            console.log(ERR)
        }
    }

    const deleteBanner = async (id: string) => {
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
                    let result = await axios.delete('banner/' + id)
                    if (result.data.success) {
                        getAllBanners()
                    }
                }
            })


        } catch (ERR) {
            console.log(ERR)
        }
    }

    const movePlace = async (value: any, place: number) => {
        try {
            setIsLoading(true)
            let result = await axios.put('banner/update-banner-order/' + value?._id, {
                order: place,
            })
            if (result.data.success) {
                setIsLoading(false)
                toast.success('Position Changed Successfully')
                getAllBanners()
            }

        } catch (ERR) {
            setIsLoading(false)
            console.log(ERR)
        }
    }


    const cols = useMemo<ColumnDef<Item>[]>(
        () => [
            {
                header: 'Title',
                cell: (row) => row.renderValue(),
                accessorKey: 'banner_name',
            },
            {
                header: 'Order Action',
                cell: (row) => (
                    <div className='flex gap-2'>
                        <button title='Move Down' className='btn-outline !p-1' onClick={() => movePlace(row.cell.row.original, 1)}>
                            <ArrowDown size={16} />
                        </button>
                        <button title='Move Up' className='btn-outline !p-1' onClick={() => movePlace(row.cell.row.original, -1)}>
                            <ArrowUp size={16} />
                        </button>
                    </div >
                ),
            },
            {
                header: 'Order',
                cell: (row) => row.renderValue(),
                accessorKey: 'order',
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
                        <button title='Delete' className='btn-danger' onClick={() => deleteBanner(row.cell.row.original._id)}>
                            <Trash2 size={16} />
                        </button>
                        <button
                            title='Edit'
                            className='btn-primary'
                            onClick={() => {
                                // setShowEditModal(true)
                                // router.push('/events/editeventdetail')
                                router.push('/dashboard/banner/editbanner')
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
                <CreateModal showModal={showModal} setShowModal={setShowModal} getAllBanners={getAllBanners} />
            }

            {
                showEditModal &&
                <EditBanner showModal={showEditModal} setShowModal={setShowEditModal} getAllBanners={getAllBanners} />
            }

            <div className='rounded p-4 antialiased  mx-auto'>
                <div className='mb-4 flex justify-between items-center text-center flex-wrap'>
                    <Title title='Banner'></Title>
                </div>
                <hr className='mb-4' />
                <div className='flex gap-2 items-center card mb-5 justify-between'>
                    <input type='search' className='inputfield md:!w-1/3 !w-1/2 ' onChange={(e: any) => {
                        handleInputChangeDebounced(e.target.value)
                    }} placeholder='Search Banner' />
                    <button className='btn-primary min-w-max' onClick={() => {
                        // setShowModal(true)
                        router.push('/dashboard/banner/addbanner')
                    }} >Add Banner</button>
                </div>
                {
                    isLoading ?
                        <Skeleton />
                        :
                        <div className='card'>
                            {
                                bannerData.length === 0 ?
                                    <div className='px-5 pb-4'>
                                        <h1 className='text-xl font-semibold text-gray-400'>No Data Found</h1>
                                    </div>
                                    :
                                    <div className=''>
                                        <Table data={bannerData} columns={cols} showFooter limit={bannerLimit} totalPage={totalPages} setlimit={setBannerLimit} page={bannerPage} setPage={setBannerPage} />
                                    </div>
                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default HeroSettings