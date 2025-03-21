"use client"
import axios from '../../../../axios/axios'
import { Info, RefreshCcw, Star, Trash2 } from 'lucide-react'
import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import Skeleton from '@/app/components/SkeletonLoader/Skeleton'
import { Table } from '@/app/components/Table/Table'
import { debounce } from 'lodash'
import { ColumnDef } from '@tanstack/react-table'
import Swal from 'sweetalert2'

function AddLatestProduct({ id }: { id: string }) {

    const inputRef = useRef<HTMLInputElement | null>(null)

    const [useAuto, setUseAuto] = useState<boolean>(true)

    const [pageLimit, setPageLimit] = useState<number>(10)
    const [page, setPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [keyword, setKeyword] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [productData, setProductData] = useState<any>([])
    const [selectedProductData, setSelectedProductData] = useState<any>([])

    const [latestData, setLatestData] = useState<any>([])
    const [latestProducts, setLatestProducts] = useState<any>([])

    const getLatestProducts = async () => {
        try {
            let result = await axios.get('featured-product/latest-product/', {
                params: {
                    is_admin: true,
                    limit: pageLimit,
                    page: page
                }
            })
            if (result.data.success) {
                setLatestData(result?.data?.data)
                setLatestProducts(result?.data?.data?.products || [])
                setTotalPages(Math.ceil(result?.data?.data?.productCount / pageLimit))
                setUseAuto(result.data?.data?.is_active)

            }
        } catch (ERR) {
            console.log(ERR)
            toast.error('Failed to fetch data')
        }
    }

    const getAllProduct = async () => {
        try {
            setIsLoading(true)
            let result = await axios.get('product/', {
                params: {
                    'search': keyword
                }
            })
            if (result.data.success) {
                setProductData(result.data.data.data)
                setIsLoading(false)
            }
        } catch (ERR) {
            setIsLoading(false)
            toast.error('Failed To Fetch Data')
            console.log(ERR)
        }
    }

    const addProducts = async () => {
        try {
            setIsLoading(true)
            let result = await axios.put('featured-product/add-product/' + id, {
                products: selectedProductData
            })
            if (result.data.success) {
                // setProductData(result.data.data.data)
                setKeyword('')
                setSelectedProductData([])

                if (inputRef.current !== null) {
                    inputRef.current.value = ""
                }

                toast.success('Successfully Added')
                getLatestProducts()
                setIsLoading(false)
            }
        } catch (ERR: any) {
            setIsLoading(false)
            toast.error(ERR.response.data.message ? ERR.response.data.message : 'Failed')
            console.log(ERR)
        }
    }

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
                    let result = await axios.put('featured-product/set-product-status/' + id, {
                        is_active: data.is_active === true ? false : true,
                        product: data.product._id,
                    })
                    if (result.data.success) {
                        getLatestProducts()
                    }
                }
            })


        } catch (ERR) {
            console.log(ERR)
        }
    }

    const deleteProduct = (index: any) => {
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
                    let result = await axios.put('featured-product/remove-product/' + id, {
                        index: index
                    })
                    if (result.data.success) {
                        getLatestProducts()
                    }
                }
            })


        } catch (ERR) {
            console.log(ERR)
        }
    }

    const cols = useMemo<ColumnDef<any>[]>(
        () => [
            {
                header: 'Title',
                cell: (row) => row.renderValue(),
                accessorKey: 'product.product_name',
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
                    </div>
                ),
            },
            {
                header: 'Actions',
                cell: (row) => (
                    <div className='flex gap-2'>
                        <button title='Status Change' className='btn-success' onClick={() => {
                            makeActive(row.cell.row.original)
                        }}>
                            <RefreshCcw size={16} />
                        </button>

                        <button title='Delete' className='btn-danger' onClick={() => deleteProduct(row.cell.row)}>
                            <Trash2 size={16} />
                        </button>

                        <button title='Move to Top' className={`${((page === 1 && Number(row.cell.row.index) === 0) ? 'btn-danger' : "btn-primary")}`}
                            onClick={() => {
                                movePlace(row.cell.row.original)
                            }}>
                            <Star size={16} />
                        </button>

                    </div >
                ),
            },
        ],
        []
    );

    const handleInputChangeDebounced = debounce((value) => {
        setKeyword(value)
    }, 800);

    useEffect(() => {
        getLatestProducts()
    }, [pageLimit, page])

    useEffect(() => {
        getAllProduct()
    }, [keyword])

    const movePlace = async (value: any) => {
        try {
            let result = await axios.put('featured-product/update-product-order/' + id, {
                index: 0,
                product: value?.product?._id
            })
            if (result.data.success) {
                getLatestProducts()
            }

        } catch (ERR) {
            console.log(ERR)
        }
    }

    const toggleAuto = async () => {
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
                    let result = await axios.put('featured-product/' + id, {
                        is_active: latestData.is_active === true ? false : true
                    })
                    if (result.data.success) {
                        getLatestProducts()
                    }
                }
            })


        } catch (ERR) {
            console.log(ERR)
        }
    }

    return (
        <div className='flex flex-col '>
            <div className='flex flex-wrap gap-5 justify-between items-center'>
                <h1 className='font-semibold text-3xl'>Latest Products</h1>

                <div className='flex gap-3 items-center'>
                    <label className="inline-flex items-center cursor-pointer">
                        <input onChange={(e) => toggleAuto()} type="checkbox" checked={useAuto} className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Use Manual Listing</span>
                    </label>
                </div>
            </div>

            {!useAuto ?
                <div className='mt-5 bg-green-200 p-4 rounded'>
                    Automatic setting is turned on. The products will be shown according to the added date
                </div>
                :
                <div>
                    <div className='mt-4 relative'>
                        <label className='font-semibold text-sm opacity-60'>Search Product To Add</label>
                        <input ref={inputRef} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            handleInputChangeDebounced(e.target.value)
                        }} type='search' required className='inputfield mt-2 text-sm' />

                        {
                            keyword &&
                            <>
                                <div className=' h-32 overflow-auto w-full border p-2'>
                                    <label className='font-semibold '>Search Results</label>
                                    <div className='grid'>
                                        {
                                            productData?.length > 0 ? productData?.map((value: any) => (
                                                <label className='gap-2 flex items-center' key={value?._id}>
                                                    <input type='checkbox' onChange={(e) => {
                                                        if (selectedProductData.some((item: any) => item.product === value?._id)) {
                                                            let newArray = selectedProductData.filter((item: any) => item.product !== value?._id);
                                                            setSelectedProductData(newArray)
                                                        } else
                                                            setSelectedProductData([...selectedProductData, {
                                                                product: e.target.value
                                                            }])

                                                    }} className='text-white' value={value?._id} />
                                                    {value?.product_name}
                                                </label>
                                            )) : <label className='font-semibold '>No Results</label>
                                        }
                                    </div>
                                </div>
                                {
                                    selectedProductData.length > 0 && <button onClick={() => {
                                        addProducts()
                                    }} className='btn-primary my-2 text-xs'>Confirm</button>
                                }
                            </>
                        }
                    </div>

                    {
                        isLoading ?
                            <Skeleton />
                            :
                            <div className='card mt-4'>
                                {
                                    latestProducts?.length === 0 ?
                                        <div className='px-5 pb-4'>
                                            <h1 className='text-xl font-semibold text-gray-400'>No Data Found</h1>
                                        </div>
                                        :
                                        <div className=''>
                                            <Table data={latestProducts} columns={cols} showFooter limit={pageLimit} totalPage={totalPages} setlimit={setPageLimit} page={page} setPage={setPage} />
                                        </div>
                                }
                            </div>
                    }
                </div>}

        </div>
    )
}

export default AddLatestProduct