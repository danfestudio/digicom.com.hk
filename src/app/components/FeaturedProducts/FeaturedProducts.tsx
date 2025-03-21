
'use client';
import React, { useState, useEffect } from 'react'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'
import axios from '../../../axios/axios'
import { toast } from 'react-hot-toast'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import HomePageSectionSkeleton from '../SkeletonLoader/HomePageSectionSkeleton'
import { motion } from 'framer-motion'
import AnimatedDiv from '../AnimatedDiv/AnimatedDiv';
import CardSkeleton from '../SkeletonLoader/CardSkeleton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function FeaturedProducts() {

    const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()
    const [productData, setProductData] = useState<any>([])
    const [featuredCategory, setFeaturedCategory] = useState<number>()
    const [featuredProduct, setFeaturedProduct] = useState<any>([])
    const [featuredCategoryLimit, setFeaturedCategoryLimit] = useState<number>(10)
    const [featuredCategoryPage, setFeaturedCategoryPage] = useState<number>(1)
    const [featuredCategories, setFeaturedCategories] = useState<any>([])

    const [isSkeletonLoading, setIsSkeletonLoading] = useState<boolean>(true)
    const [isComponentLoading, setIsComponentLoading] = useState<boolean>(true)

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    const getAllCategory = async () => {
        try {
            setIsSkeletonLoading(true)
            let result = await axios.get('featured-product/', {
                params: {
                    is_active: true,
                    limit: featuredCategoryLimit,
                    page: featuredCategoryPage,
                }
            })
            if (result.data.success) {
                setFeaturedCategories(result.data.data.data)
                setFeaturedCategory(result.data.data.data[0]?._id)
                getFeaturedProductDetails(result.data.data.data[0]?._id)
                setTimeout(() => {
                    setIsSkeletonLoading(false)
                    setIsComponentLoading(false)
                }, 200)
            }
        } catch (ERR) {
            toast.error('Failed to Fetch Categories')
            console.log(ERR)
            setIsSkeletonLoading(false)
            setIsComponentLoading(false)
        }
    }

    const getProductDetails = async () => {
        try {
            setIsSkeletonLoading(true)

            let result = await axios.get('product/', {
                params: {
                    is_active: true,
                    limit: 5,
                    page: 1
                }
            })
            if (result.data.success) {
                setProductData(result.data.data.data)
                setTimeout(() => {
                    setIsSkeletonLoading(false)
                    setIsComponentLoading(false)
                }, 200)
            }
        } catch (ERR) {
            console.log(ERR)
            toast.error('Failed to fetch Data')
            setTimeout(() => {
                setIsSkeletonLoading(false)
                setIsComponentLoading(false)
            }, 200)
        }
    }

    const getFeaturedProductDetails = async (id: string) => {
        try {
            if (id) {
                setIsSkeletonLoading(true)

                let result = await axios.get('/featured-product/' + id, {
                    params: {
                        is_active: true,
                        limit: 5,
                        page: 1
                    }
                })
                if (result.data.success) {
                    setFeaturedProduct(result.data.data)
                    setTimeout(() => {
                        setIsSkeletonLoading(false)
                        setIsComponentLoading(false)
                    }, 200)
                }
            }
        } catch (ERR) {
            console.log(ERR)
            toast.error('Failed to fetch Data')
            setTimeout(() => {
                setIsSkeletonLoading(false)
                setIsComponentLoading(false)
            }, 200)
        }
    }

    useEffect(() => {
        getProductDetails()
        getAllCategory()
        setIsComponentLoading(false)
    }, [])

    return (
        <>
            {
                isComponentLoading ?
                    <div>
                        <HomePageSectionSkeleton />
                    </div>
                    :
                    <div className='max-w-7xl mx-auto  pb-32 px-5' id='product'>
                        {
                            featuredProduct.length > 0 ?
                                featuredProduct?.map((value: any, index: any) => (
                                    <div className='w-full bg-blue-100 relative' key={index}>
                                        <img className='w-full h-96 object-cover' alt='feturedCommentary' src={`${process.env.NEXT_PUBLIC_IMG_URL}${value?.front_image.path}`} />
                                        <div className='bg-white absolute p-8 -translate-y-1/2 top-1/2 md:right-10 lg:right-0 xl:right-32  md:w-2/4 lg:w-1/3 '>
                                            <label className='text-sm md:text-base'>{dayjs(value?.updatedAt).format('MMMM D, YYYY')}</label>
                                            <h1 className='font-bold text-xl md:text-3xl '>{value?.product_name}</h1>
                                            <p className=' text-sm md:text-base mt-2'>{value?.description}</p>
                                            <button onClick={() => {
                                                router.push('/product/' + value.product_slug)
                                            }} className='mt-4 text-xs uppercase font-semibold underline'>View Product</button>
                                        </div>
                                    </div>
                                )) : ""
                        }

                        <div className='mt-10'>
                            <AnimatedDiv>
                                <div className='flex justify-center items-center'>
                                    <label className='font-bold text-3xl text-center'>Featured Products</label>
                                </div>
                            </AnimatedDiv>
                            <AnimatedDiv>
                                <div className='flex md:justify-center gap-4 mt-8 relative overflow-x-scroll md:overflow-x-auto pb-2 md:pb-0'>
                                    {
                                        featuredCategories?.map((value: any, index: any) => (
                                            <button key={index} className={`min-w-max relative py-4 px-8 text-xs md:text-sm ${featuredCategory === value?._id ? " text-green-600 font-semibold" : "border-b-transparent"}`} onClick={() => {
                                                getFeaturedProductDetails(value?._id)
                                                setFeaturedCategory(value?._id)
                                            }}>{value.feature_name}
                                                {featuredCategory === value?._id ? (
                                                    <motion.div className="absolute bg-green-600 left-0 bottom-0 h-0.5 w-full" layoutId="underline" />
                                                ) : null}
                                            </button>
                                        ))
                                    }
                                </div>
                                {
                                    isSkeletonLoading ?
                                        <div className='flex gap-4 flex-wrap'>
                                            <CardSkeleton />
                                            <CardSkeleton />
                                            <CardSkeleton />
                                            <CardSkeleton />
                                        </div>
                                        :
                                        <div className='mb-10 grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 grid-cols-2 md:gap-10 gap-3 bg-white p-6 rounded-xl'>
                                            {
                                                featuredProduct?.products?.length > 0 ? featuredProduct?.products?.map((value: any, index: number) => (
                                                    <div role='button' onClick={() => {
                                                        router.push('/product/' + value?.product?.product_sku)
                                                    }} className={`relative bg-gray-primary rounded-xl overflow-hidden group  ${index === 0 ? " sm:flex  sm:flex-row sm:col-span-full" : ""} items-center`} key={index}>
                                                        <img className={` object-center ${index === 0 ? "md:h-72 sm:h-60 sm:mb-0 mb-4 sm:w-1/2 mt-6 sm:mt-0 md:p-10" : "md:h-40 mb-4 mt-6 w-full"} h-28 max-h-72  md:px-10 p-4 object-contain group-hover:scale-105 duration-300 `} src={`${process.env.NEXT_PUBLIC_IMG_URL}${value?.product?.front_image?.path}`} />                                {/* <img className='h-full w-full object-center object-cover -z-10' src='/heroSampleImage.png' /> */}
                                                        <div className={`pb-5 text-center w-full relative px-3  ${index === 0 ? " sm:flex  sm:flex-col sm:justify-center  sm:h-full " : ""}`}>
                                                            <div className={`${index === 0 ? "sm:flex sm:flex-col sm:justify-center sm:h-full mb-10 sm:mb-0 " : "mb-10"}`}>
                                                                <AnimatedDiv>
                                                                    <h1 className={`md:text-xl sm:text-lg text-xs font-semibold h-fit w-full capitalize ${index === 0 ? "md:mb-2" : ""}`}>{value?.product?.product_name}</h1>
                                                                </AnimatedDiv>
                                                                {/* <p className='text-sm'>{dayjs(value?.updatedAt).format('MMM D, YYYY')}</p> */}
                                                                <AnimatedDiv>
                                                                    <p className={`md:text-sm h-fit text-xs transition-all  ${index === 0 ? "group-hover:opacity-0 md:group-hover:opacity-100" : "group-hover:opacity-0"}`}>{value?.product?.category?.name}</p>
                                                                </AnimatedDiv>
                                                            </div>
                                                            <button className='bg-green-600 rounded-md text-white text-xs px-3 py-2   absolute left-1/2 -translate-x-1/2 sm:bottom-0 translate-y-full group-hover:-translate-y-full duration-300 opacity-0 group-hover:opacity-100'>View Product</button>
                                                        </div>
                                                    </div>
                                                )) : <>No Products Yet</>
                                            }
                                        </div>
                                }
                            </AnimatedDiv>
                        </div>

                    </div>


            }
        </>
    )
}

export default FeaturedProducts