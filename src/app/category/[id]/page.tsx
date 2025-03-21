"use client"
import Image from 'next/image'
import axios from '../../../axios/axios'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { ChevronDown, Loader } from 'lucide-react'
import LoadMore from '@/app/components/Loadmore/LoadMore'

function ProductByCategory() {

    const params = useParams()
    const id = params.id.toString()
    const router = useRouter()

    const [loading, setLoading] = useState(false)
    const [productList, setProductList] = useState<any>([])
    const [categoryData, setCategoryData] = useState<any>({})
    const [totalCount, setTotalCount] = useState<number>(0)
    const [totalPage, setTotalPage] = useState<number>(0)
    const [limit, setLimit] = useState<number>(8)
    const [page, setPage] = useState<number>(1)

    const getProducts = async () => {
        try {
            let result = await axios.get('/product', {
                params: {
                    category: decodeURIComponent(id),
                    limit: limit,
                    page: page,
                }
            })

            if (result.data.success) {
                setTotalCount(result.data.data.count)
                setTotalPage(result.data.data.totalPage)
                setProductList([...productList, ...result.data.data.data])
                setCategoryData(result.data.data.category)
                setLoading(false)
            }
        } catch (ERR) {
            console.log(ERR)
        }
    }

    useEffect(() => {
        getProducts()
    }, [page])


    return (
        <div className="bg-white min-h-screen">
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="md:flex flex-wrap items-baseline justify-between border-b border-gray-200 pb-6  pt-10">
                    <h1 className="md:text-4xl text-3xl font-bold tracking-tight text-gray-900">{categoryData?.name}</h1>
                    <div className='opacity-70 text-sm'>Total Products : <label className='font-semibold text-xl ml-2'> {totalCount}</label></div>
                </div>

                {
                    productList.length > 0 &&

                    <section aria-labelledby="products-heading" className="pb-24 pt-6">
                        <h2 id="products-heading" className="sr-only">
                            Products
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
                            {
                                productList?.map((product: any, index: number) => (
                                    <div key={product?._id} role='button' onClick={() => {
                                        router.push('/product/' + product?.product_sku)
                                    }} className='card text-center flex flex-col gap-6'>
                                        <h3 className='font-semibold text-2xl'>{product?.product_name}</h3>
                                        <button className='btn-dark !bg-green-600 !rounded-lg !text-xs !max-w-fit mx-auto !shadow-none'>View Product</button>
                                        <div className='h-56 grid overflow-hidden place-items-center'>
                                            <Image
                                                className='object-cover'
                                                src={`${process.env.NEXT_PUBLIC_IMG_URL}${product?.front_image?.path}`}
                                                alt='Product Image'
                                                width={400}
                                                height={400}
                                            />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        {/* {
                            (page !== totalPage || loading) &&
                            <div className='my-10 flex items-center text-center justify-center w-full' >
                                <button className='items-center flex gap-3 bg-green-600 p-3 rounded-md px-4 text-sm text-white font-semibold' onClick={() => {
                                    setPage(page + 1)
                                    setLoading(true)
                                }}> <span>{!loading ? <ChevronDown /> : <Loader className='animate-spin' />} </span> Load More</button>
                            </div>
                        } */}

                        <LoadMore loading={loading} page={page} setLoading={setLoading} setPage={setPage} totalPage={totalPage}/>
                    </section>

                }
            </main>
        </div>
    )
}

export default ProductByCategory