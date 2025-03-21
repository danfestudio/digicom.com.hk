import Modal from '@/app/components/Modal/Modal'
import axios from '../../../../axios/axios'
import { ArrowUp, ChevronFirst, PenSquare, RefreshCcw, Star, Trash2, X } from 'lucide-react'
import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import Skeleton from '@/app/components/SkeletonLoader/Skeleton'
import { Table } from '@/app/components/Table/Table'
import { debounce } from 'lodash'
import { ColumnDef } from '@tanstack/react-table'
import Swal from 'sweetalert2'


function AddFeaturedProductModal({ selectedCategory, setSelectedCategory, setShowModal, showModal, getAllCategory }: { selectedCategory: any, setSelectedCategory: any, showModal: any, setShowModal: any, getAllCategory: any }) {

    const [pageLimit, setPageLimit] = useState<number>(10)
    const [page, setPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(1)
    const [keyword, setKeyword] = useState()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [productData, setProductData] = useState<any>([])
    const [selectedProductData, setSelectedProductData] = useState<any>([])

    const [featuredData, setFeaturedData] = useState<any>([])
    const [featuredProducts, setFeaturedProducts] = useState<any>([])

    console.log(page)

    const getFeaturedProducts = async () => {
        try {
            let result = await axios.get('/featured-product/' + selectedCategory._id, {
                params: {
                    limit: pageLimit,
                    page: page
                }
            })
            if (result.data.success) {
                setFeaturedData(result.data.data)
                setFeaturedProducts(result.data.data.products)
                setTotalPages(Math.ceil(result.data.data.productCount / pageLimit))

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
            let result = await axios.put('featured-product/add-product/' + selectedCategory._id, {
                products: selectedProductData
            })
            if (result.data.success) {
                // setProductData(result.data.data.data)
                toast.success('Successfully Added')
                getFeaturedProducts()
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
                    let result = await axios.put('featured-product/set-product-status/' + selectedCategory?._id, {
                        is_active: data.is_active === true ? false : true,
                        product: data.product._id,
                    })
                    if (result.data.success) {
                        getFeaturedProducts()
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
                    let result = await axios.put('featured-product/remove-product/' + selectedCategory?._id, {
                        index: index
                    })
                    if (result.data.success) {
                        getFeaturedProducts()
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

                        <button title='Show on Top' className={`${((page === 1 && Number(row.cell.row.index) === 0) ? 'btn-danger' : "btn-primary")}`}
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
        getFeaturedProducts()
    }, [pageLimit, page])

    useEffect(() => {
        getAllProduct()
    }, [keyword])

    const movePlace = async (value: any) => {
        try {
            let result = await axios.put('featured-product/update-product-order/' + selectedCategory?._id, {
                index: 0,
                product: value?.product?._id
            })
            if (result.data.success) {
                getFeaturedProducts()
            }

        } catch (ERR) {
            console.log(ERR)
        }
    }

    return (
        <Modal setShowModal={setShowModal} showModal={showModal} classname={'max-w-7xl min-h-[55vh]'}>
            <button className='absolute mb-2 top-1 right-1' onClick={() => setShowModal(false)}>
                <X size={20} />
            </button>
            <div className='flex flex-col '>
                <h1 className='font-semibold text-xl'>Featured Products of - " {featuredData.feature_name} "</h1>

                <div className='mt-4 relative'>
                    <label className='font-semibold text-sm opacity-60'>Search Product To Add</label>
                    <input onChange={(e: ChangeEvent<HTMLInputElement>) => {
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
                        <div className='card mt-2'>
                            {
                                featuredProducts.length === 0 ?
                                    <div className='px-5 pb-4'>
                                        <h1 className='text-xl font-semibold text-gray-400'>No Data Found</h1>
                                    </div>
                                    :
                                    <div className=''>
                                        <Table data={featuredProducts} columns={cols} showFooter limit={pageLimit} totalPage={totalPages} setlimit={setPageLimit} page={page} setPage={setPage} />
                                    </div>
                            }
                        </div>
                }

            </div>
        </Modal>
    )
}

export default AddFeaturedProductModal