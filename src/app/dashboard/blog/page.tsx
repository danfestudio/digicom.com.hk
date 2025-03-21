'use client'

import React, { useMemo, useState, useEffect } from 'react'
import { Table } from '@/app/components/Table/Table'
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import { ColumnDef } from '@tanstack/react-table';
import { Edit, Star, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Title from '@/app/components/Title';
import Link from 'next/link';
import Skeleton from '@/app/components/SkeletonLoader/Skeleton';
import { debounce } from 'lodash';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { startSkeletonLoad, stopSkeletonLoad } from '@/redux/features/skeletonSlice';
import axios from '../../../axios/axios';
import { setSelectedBlog } from '@/redux/features/blogSlice';


function BlogList() {

    type Item = {
        _id: string;
        title: string;
        createdAt: Date;
        is_featured: string
    }

    const router = useRouter()

    const [bloglimit, setBlogLimit] = useState<number>(10)
    const [blogPage, setBlogPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [blogData, setBlogData] = useState<any>([])
    const [keyword, setKeyword] = useState()
    // const [isLoading, setIsLoading] = useState()

    const isLoading = useAppSelector((state)=> state.loaderSlice.value)
    const dispatch = useDispatch<AppDispatch>()

    const cols = useMemo<ColumnDef<Item>[]>(
        () => [
            {
                header: 'title',
                cell: (row) => row.renderValue(),
                accessorKey: 'title',
            },
            {
                header: 'description',
                cell: (row) => row.renderValue(),
                accessorKey: 'description',
            },
            {
                header: 'author',
                cell: (row) => row.renderValue(),
                accessorKey: 'author',
            },
            {
                header: 'Actions',
                cell: (row) => (
                    <div className='flex gap-2'>
                        <button
                            title='Edit'
                            className='btn-primary'
                            onClick={() => {
                                router.push('blog/editblog')
                                dispatch(setSelectedBlog(row.cell.row.original))
                            }
                            }
                        >
                            <Edit size={15} />
                        </button>

                        {/* <button
                            title='Change Status/Featured'
                            className='btn-success'
                            onClick={() => {
                                changeStatus(row.cell.row?.original)
                                // dispatch(setSelectedBlog(row.cell.row.original))
                            }
                            }
                        >
                            {row.cell.row?.original?.is_featured ?
                                <Star size={15} fill="yellow" />
                                :
                                <Star size={15} />
                            }
                        </button> */}

                        <button title='Delete' className='btn-danger'
                            onClick={() => deleteBlog(row.cell.row.original._id)}
                        >
                            <Trash2 size={15} />
                        </button>
                    </div >
                ),
            },
        ],
        [router]
    );

    const getBlogDetails = async () => {
        try {
            dispatch(startSkeletonLoad())

            let result = await axios.get('blog/', {
                params: {
                    search: keyword,
                    limit: bloglimit,
                    page: blogPage
                }
            })
            if (result.data.success) {
                setBlogData(result.data.data?.blogs.data)
                setTotalPages(result.data.data.blogs.totalPage)
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

    const changeStatus = async (data: any) => {
        try {
            dispatch(startSkeletonLoad())

            let result = await axios.put('blog/change-status/' + data._id, {
                status: data.is_featured === true ? false : true
            })
            if (result.data.success) {
                getBlogDetails()
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

    const deleteBlog = async (id: string) => {
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
                    let result = await axios.delete('blog/' + id)
                    if (result.data.success) {
                        getBlogDetails()
                    }
                }
            })


        } catch (ERR) {
            console.log(ERR)
        }
    }

    useEffect(() => {
        getBlogDetails()
    }, [keyword, bloglimit, blogPage])


    const handleInputChangeDebounced = debounce((value) => {
        setKeyword(value)
    }, 800);

    return (
        <div>
            <div className='rounded p-4 antialiased  mx-auto'>
                <div className='mb-4  flex justify-between items-center flex-wrap'>
                    <Title title='Blog'></Title>
                </div>
                <hr className='mb-4' />

                <div className='flex gap-2 items-center card mb-5 justify-between'>
                    <input type='search' className='inputfield md:!w-1/3 !w-1/2' onChange={(e: any) => {
                        handleInputChangeDebounced(e.target.value)
                    }} placeholder='Search Blogs' />
                    <div className='flex gap-2 '>
                        <Link className='btn-primary min-w-max' href={'/dashboard/blog/addblog'}>Add Blog</Link>
                    </div>
                </div>
                {
                    isLoading ?
                        <Skeleton />
                        :
                        <div className='card'>
                            {
                                blogData.length === 0 ?
                                    <div className='px-5 pb-4'>
                                        <h1 className='text-xl font-semibold text-gray-400'>No Data Found</h1>
                                    </div>
                                    :
                                    <Table data={blogData} columns={cols} showFooter limit={bloglimit} totalPage={totalPages} setlimit={setBlogLimit} page={blogPage} setPage={setBlogPage} />
                            }
                        </div>

                }
            </div>
        </div>
    )
}

export default BlogList