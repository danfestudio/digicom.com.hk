"use client";
import React, { useEffect, useState, useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ArrowLeft, ArrowRight, PenSquare, RefreshCcw, Trash2 } from 'lucide-react';
import Title from '@/app/components/Title'
import Link from 'next/link'
import axios from '../../../axios/axios';
import { debounce } from 'lodash';
import { ColumnDef } from '@tanstack/react-table';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { AppDispatch, useAppSelector } from '@/redux/store';
import Swal from 'sweetalert2';
import Skeleton from '@/app/components/SkeletonLoader/Skeleton';
import RenderCategory from './RenderCategory';
import AddCategory from './AddCategory';
import toast from 'react-hot-toast';
import EditCategory from './EditCategory';
import { setSelectedCategory } from '@/redux/features/categorySlice';


function CategoryPage() {
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()

    const [categoryLimit, setCategoryLimit] = useState<number>(10)
    const [categoryPage, setCategoryPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [keyword, setKeyword] = useState()
    const [isLoading, setIsLoading] = useState()

    const [showModal, setShowModal] = React.useState(false)
    const [showEditModal, setShowEditModal] = React.useState(false)

    const [categoryData, setCategoryData] = useState<any>([])
    const [expandedChildCategory, setExpandedChildCategory] = useState<string>("")

    const selectedCategory = useAppSelector((state) => state.categorySlice.value)

    const getAllCategory = async () => {
        try {
            let result = await axios.get('category/')
            if (result.data.success) {
                setCategoryData(result.data.data)
            }
        } catch (ERR) {
            console.log(ERR)
        }
    }

    useEffect(() => {
        getAllCategory()
    }, [keyword, categoryLimit, categoryPage])

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
                    let result = await axios.put('category/make-active/' + data._id, {
                        is_active: data.is_active === true ? false : true
                    })
                    if (result.data.success) {
                        getAllCategory()
                    }
                }
            })


        } catch (ERR) {
            console.log(ERR)
        }
    }

    const showInNav = async (data: any) => {
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
                    let result = await axios.put('category/' + data._id, {
                        show_in_nav: data.show_in_nav === true ? false : true
                    })
                    if (result.data.success) {
                        getAllCategory()
                    }
                }
            })


        } catch (ERR) {
            console.log(ERR)
        }
    }

    const deleteCategory = async (category: any) => {
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
                    let result = await axios.delete('category/' + category._id)
                    if (result.data.success) {
                        toast.success('Deleted Successfully')
                        getAllCategory()
                    }
                }
            })


        } catch (ERR) {
            console.log(ERR)
        }
    }

    const handleInputChangeDebounced = debounce((value) => {
        setKeyword(value)
    }, 800);
    return (
        <div>

            {
                showModal &&
                <AddCategory showModal={showModal} setShowModal={setShowModal} getAllCategory={getAllCategory} />
            }
            {
                showEditModal &&
                <EditCategory showModal={showEditModal} setShowModal={setShowEditModal} getAllCategory={getAllCategory} />
            }

            <div className='rounded p-4 antialiased  mx-auto'>
                <div className='mb-4 flex justify-between items-center text-center flex-wrap'>
                    <Title title='Category'></Title>
                </div>
                <hr className='mb-4' />
                <div className='flex gap-2 items-center card mb-5 justify-between'>
                    <input type='search' className='inputfield md:!w-1/3 !w-1/2 ' onChange={(e: any) => {
                        // handleInputChangeDebounced(e.target.value)
                    }} placeholder='Search Category' />
                    <button className='btn-primary min-w-max' onClick={() => {
                        setShowModal(true)
                        dispatch(setSelectedCategory(''))
                    }} >Add Category</button>
                </div>
                {
                    isLoading ?
                        <Skeleton />
                        :
                        <div className='card'>
                            {
                                categoryData?.length === 0 ?
                                    <div className='px-5 pb-4'>
                                        <h1 className='text-xl font-semibold text-gray-400'>No Data Found</h1>
                                    </div>
                                    :
                                    <div className=' flex flex-col items-start '>
                                        {categoryData.map((value: any, index: number) => (
                                            <div className='border-b  mb-2 py-2 w-full relative ' key={index}>
                                                <RenderCategory
                                                    deleteCategory={deleteCategory}
                                                    key={value._id}
                                                    category={value}
                                                    expandedChildCategory={expandedChildCategory}
                                                    setExpandedChildCategory={setExpandedChildCategory}
                                                    showModal={showModal}
                                                    setShowModal={setShowModal}
                                                    setShowEditModal={setShowEditModal}
                                                    getAllCategory={getAllCategory}
                                                />
                                                <button className={`text-xs absolute !p-1 !px-3 right-5 top-5 ${value.show_in_nav === true ? "btn-danger" : "btn-success"}`}
                                                    onClick={() => {
                                                        showInNav(value)
                                                    }}>
                                                    {value.show_in_nav === true ? "Remove From Header" : "Show In Header"}
                                                </button>
                                            </div>
                                        ))}
                                    </div>

                            }
                        </div>
                }
            </div>
        </div>
    )
}

export default CategoryPage