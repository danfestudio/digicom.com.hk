
'use client'

import React, { useMemo, useState, useEffect } from 'react'
import { AppDispatch } from '@/redux/store'

import { useDispatch } from 'react-redux'
import { startSkeletonLoad, stopSkeletonLoad } from '@/redux/features/skeletonSlice'
import axios from '../../../axios/axios'
import { toast } from 'react-hot-toast'
import dayjs from 'dayjs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import AnimatedDiv from '../AnimatedDiv/AnimatedDiv'

function LatestProduct() {

    const dispatch = useDispatch<AppDispatch>()
    const [productData, setProductData] = useState<any>([])
    const [featuredCategory, setFeaturedCategory] = useState<number>(0)
    const [featuredProduct, setFeaturedProduct] = useState<any>([])
    const [isActive, setisActive] = useState<any>()

    const router = useRouter()

    const getProductDetails = async () => {
        try {
            dispatch(startSkeletonLoad())

            let result = await axios.get('product/', {
                params: {
                    limit: 5,
                    page: 1,
                    is_active: true
                }
            })
            if (result.data.success) {
                setProductData(result.data.data.data)
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

    const getFeaturedProductDetails = async () => {
        try {
            dispatch(startSkeletonLoad())

            let result = await axios.get('featured-product/latest-product', {
                params: {
                    limit: 5,
                    page: 1
                }
            })
            if (result.data.success) {

                // console.log('result.data.data', result.data.data)
                if (result.data.data.is_active) {
                    setFeaturedProduct(result.data.data.products)
                } else setFeaturedProduct(result.data.data.data)
                setisActive(result.data.data.is_active)
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
        getProductDetails()
        getFeaturedProductDetails()
    }, [])


    return (
        <div className='max-w-7xl mx-auto pb-32' id='product'>
            {/* {
                featuredProduct.length > 0 ?
                    featuredProduct?.map((value: any, index: any) => (
                        <div className='w-full bg-blue-100 relative' key={index}>
                            <img className='w-full h-96 object-cover' alt='feturedCommentary' src={`${process.env.NEXT_PUBLIC_IMG_URL}${value?.front_image.path}`} />
                            <div className='bg-white absolute p-8 -translate-y-1/2 top-1/2 md:right-10 lg:right-0 xl:right-32  md:w-2/4 lg:w-1/3 '>
                                <label className='text-sm md:text-base'>{dayjs(value?.updatedAt).format('MMMM D, YYYY')}</label>
                                <h1 className='font-bold text-xl md:text-3xl '>{value?.product_name} asd</h1>
                                <p className=' text-sm md:text-base mt-2'>{value?.description}</p>
                                <button onClick={() => {
                                    router.push('/product/' + value.product_slug)
                                }} className='mt-4 text-xs uppercase font-semibold underline'>View Product</button>
                            </div>
                        </div>
                    )) : ""
            } */}

            <div className='mt-10'>
                <AnimatedDiv>
                    <div className='flex justify-center items-center'>
                        <label className='font-bold text-3xl text-center'> Latest Products</label>
                    </div>
                </AnimatedDiv>
                <AnimatedDiv>
                    {
                        !isActive ?
                            <div className='my-10 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 grid-rows-2 gap-4  p-6 rounded-xl'>
                                {
                                    productData.map((value: any, index: number) => (
                                        <div role='button' onClick={() => {
                                            router.push('/product/' + value.product_sku)
                                        }} className={`relative bg-white rounded-xl overflow-hidden group sm:p-10 p-5 ${index === 0 ? "row-span-full flex flex-col" : "row-span-1 grid md:grid-cols-2 items-center justify-between"} `} key={index}>
                                            <div className={`pb-5 text-center w-full relative px-3 `}> 
                                                <h1 className={`md:text-3xl sm:text-2xl text-xl font-semibold h-fit text-left `}>{value?.product_name}</h1>
                                                <div className={`text-green-600 gap-1 mt-3 h-fit text-left border-b w-fit border-green-600 flex items-center`}>
                                                    <label className='font-semibold'>View Product </label>
                                                    <ArrowRight size={17} /></div>
                                                {/* <p className='text-sm'>{dayjs(value?.updatedAt).format('MMM D, YYYY')}</p> */}
                                            </div>
                                            <img className={`${index === 0 ? "object-contain my-auto" : "h-72 max-h-72 "}  object-contain p-4 group-hover:scale-105 duration-300 `} src={`${process.env.NEXT_PUBLIC_IMG_URL}${value?.front_image?.path}`} />
                                            {/* <img className='h-full w-full object-center object-cover -z-10' src='/heroSampleImage.png' /> */}
                                        </div>
                                    ))

                                }
                            </div>
                            :
                            <div className='my-10 grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 grid-rows-2 gap-4  p-6 rounded-xl'>
                                {
                                    featuredProduct.map((value: any, index: number) => (
                                        <div role='button' onClick={() => {
                                            router.push('/product/' + value?.product.product_sku)
                                        }} className={`relative bg-white rounded-xl overflow-hidden group sm:p-10 p-5 ${index === 0 ? "row-span-full flex flex-col" : "row-span-1 grid md:grid-cols-2 items-center justify-between"} `} key={index}>
                                            <div className={`pb-5 text-center w-full relative px-3 `}>
                                                <h1 className={`md:text-3xl sm:text-2xl text-xl font-semibold h-fit text-left `}>{value?.product?.product_name}</h1>
                                                <div className={`text-green-600 gap-1 mt-3 h-fit text-left border-b w-fit border-green-600 flex items-center`}>
                                                    <label className='font-semibold'>View Product </label>
                                                    <ArrowRight size={17} /></div>
                                                {/* <p className='text-sm'>{dayjs(value?.updatedAt).format('MMM D, YYYY')}</p> */}
                                            </div>
                                            <img className={`${index === 0 ? "object-contain my-auto" : "h-72 max-h-72 "}  object-contain p-4 group-hover:scale-105 duration-300 `} src={`${process.env.NEXT_PUBLIC_IMG_URL}${value?.product.front_image?.path}`} />
                                            {/* <img className='h-full w-full object-center object-cover -z-10' src='/heroSampleImage.png' /> */}
                                        </div>
                                    ))

                                }
                            </div>
                    }
                </AnimatedDiv>
            </div>
        </div>
    )
}

export default LatestProduct