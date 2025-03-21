"use client";
import React, { useEffect, useState, useMemo } from 'react'
import { Brush, Clock, PenSquare, RefreshCcw, Star, Trash2 } from 'lucide-react';
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
// import AddProduct from './AddProduct';
import toast from 'react-hot-toast';
import { Table } from '@/app/components/Table/Table';
import { setSelectedProduct } from '@/redux/features/productSlice';

function Product() {
    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()
    type Item = {
        _id: string;
        title: string;
        createdAt: Date;
        startDate: Date;
        endDate: Date;
        content: any;
        is_active: boolean;
    }
    const [productLimit, setProductLimit] = useState<number>(10)
    const [productPage, setProductPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [keyword, setKeyword] = useState()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [productData, setProductData] = useState<any>([])
    const [expandedChildProduct, setExpandedChildProduct] = useState<string>("")

    const selectedProduct = useAppSelector((state) => state.productSlice.value)

    const getAllProduct = async () => {
        try {
            setIsLoading(true)
            let result = await axios.get('product/', {
                params: {
                    page: productPage,
                    limit: productLimit,
                    search: keyword
                }
            })
            if (result.data.success) {
                setProductData(result.data.data.data)
                setTotalPages(result.data.data.totalPage)
                setIsLoading(false)
            }
        } catch (ERR) {
            setIsLoading(false)
            toast.error('Failed To Fetch Data')
            console.log(ERR)
        }
    }

    useEffect(() => {
        getAllProduct()
    }, [keyword, productLimit, productPage])

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
                    setIsLoading(true)


                    let result = await axios.put('product/' + data._id, {
                        is_active: data.is_active === true ? false : true
                    })
                    if (result.data.success) {
                        getAllProduct()
                    } else (
                        setIsLoading(false)
                    )
                }
            })

        } catch (ERR) {
            console.log(ERR)
        }
    }

    const deleteProduct = async (product: any) => {
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
                    let result = await axios.delete('product/' + product)
                    if (result.data.success) {
                        toast.success('Deleted Successfully')
                        getAllProduct()
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

    const cols = useMemo<ColumnDef<Item>[]>(
        () => [
            {
                header: 'product name',
                cell: (row) => row.renderValue(),
                accessorKey: 'product_name',
            },
            {
                header: 'product SKU',
                cell: (row) => row.renderValue(),
                accessorKey: 'product_sku',
            },
            {
                header: 'product Warranty',
                cell: (row) => row.renderValue(),
                accessorKey: 'product_warranty',
            },
            {
                header: 'serial number',
                cell: (row) => row.renderValue(),
                accessorKey: 'serial_number',
            },
            // {
            //     header: 'Description',
            //     cell: (row) => (
            //         <div className='flex gap-2'>
            //             {
            //                 row.cell.row.original?.content.description?.map((value: string, index: number) => (
            //                     <label key={index}>{value}</label>
            //                 ))
            //             }
            //         </div >
            //     ),
            // },
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
                        <button title='Delete' className='btn-danger' onClick={() => deleteProduct(row.cell.row.original._id)}>
                            <Trash2 size={16} />
                        </button>
                        <button
                            title='Edit'
                            className='btn-primary'
                            onClick={() => {
                                // setShowEditModal(true)
                                router.push('/dashboard/product/editproduct')
                                dispatch(setSelectedProduct(row.cell.row.original))
                            }
                            }
                        ><PenSquare size={16} /></button>
                        <button
                            title='Design Page'
                            className='btn-primary'
                            onClick={() => {
                                dispatch(setSelectedProduct(row.cell.row.original))
                                // setShowEditModal(true)
                                router.push('/dashboard/pagebuilder')
                                // dispatch(setSelectedProduct(row.cell.row.original))
                            }
                            }
                        ><Brush size={16} /></button>
                    </div >
                ),
            },
        ],
        [router]
    );

    return (
        <div className='rounded p-4 antialiased  mx-auto'>
            <div className='mb-4 flex justify-between items-center text-center flex-wrap'>
                <Title title='Product'></Title>
                <div className='flex gap-5'>
                    <Link href={'/dashboard/product/latestproducts'} className=' flex items-center gap-3 underline underline-offset-4 text-blue-600'><Clock fill='lightgreen' stroke='black' size={16} />Latest Products</Link>
                    <Link href={'/dashboard/product/featuredproducts'} className=' flex items-center gap-3 underline underline-offset-4 text-blue-600'><Star fill='yellow' stroke='black' size={16} />Featured Products</Link>
                </div>
            </div>
            <hr className='mb-4' />
            <div className='flex gap-2 items-center card mb-5 justify-between'>
                <input type='search' className='inputfield md:!w-1/3 !w-1/2 ' onChange={(e: any) => {
                    handleInputChangeDebounced(e.target.value)
                }} placeholder='Search Product' />
                <button className='btn-primary min-w-max' onClick={() => {
                    router.push('/dashboard/product/addproduct')
                }} >Add Product</button>
            </div>

            {
                isLoading ?
                    <Skeleton />
                    :
                    <div className='card'>
                        {
                            productData.length === 0 ?
                                <div className='px-5 pb-4'>
                                    <h1 className='text-xl font-semibold text-gray-400'>No Data Found</h1>
                                </div>
                                :
                                <div className=''>
                                    <Table data={productData} columns={cols} showFooter limit={productLimit} totalPage={totalPages} setlimit={setProductLimit} page={productPage} setPage={setProductPage} />
                                </div>
                        }
                    </div>
            }
        </div>
    )
}

export default Product