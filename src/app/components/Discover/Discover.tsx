
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
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// import 'swiper/css';

import { Navigation, Pagination } from 'swiper/modules';
import { Variants, motion } from 'framer-motion'
import AnimatedDiv from '../AnimatedDiv/AnimatedDiv'


function Discover() {

    const dispatch = useDispatch<AppDispatch>()
    const [blogData, setBlogData] = useState<any>([])
    // const [featuredBlog, setFeaturedBlog] = useState<any>([])

    const router = useRouter()

    const getBlogDetails = async () => {
        try {
            dispatch(startSkeletonLoad())

            let result = await axios.get('blog/', {
                params: {
                    limit: 5,
                    page: 1
                }
            })
            if (result.data.success) {
                setBlogData(result.data.data.blogs.data)
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

    const pagination = {
        clickable: true,
        renderBullet: function ({ index, className }: { index: number, className: string }) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    // const getFeaturedBlogDetails = async () => {
    //     try {
    //         dispatch(startSkeletonLoad())

    //         let result = await axios.get('blog/featured-blog', {
    //             params: {
    //                 limit: 5,
    //                 page: 1
    //             }
    //         })
    //         if (result.data.success) {
    //             setFeaturedBlog(result.data.data)
    //             setTimeout(() => {
    //                 dispatch(stopSkeletonLoad())
    //             }, 200)
    //         }
    //     } catch (ERR) {
    //         console.log(ERR)
    //         toast.error('Failed to fetch Data')
    //         setTimeout(() => {
    //             dispatch(stopSkeletonLoad())
    //         }, 200)
    //     }
    // }

    useEffect(() => {
        getBlogDetails()
        // getFeaturedBlogDetails()
    }, [])


    const cardVariants: Variants = {
        offscreen: {
            y: 100,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.1,
                duration: 1.5
            }
        }
    };


    return (
        <div className='container mx-auto pb-32' id='product'>
            <AnimatedDiv>
                <div className='flex justify-center items-center mb-10'>
                    <label className='font-bold text-3xl text-center'> Discover</label>
                </div>
            </AnimatedDiv>

            {/* {
                featuredBlog.length > 0 ?
                    featuredBlog?.map((value: any, index: any) => (
                        <div className='w-full bg-blue-100 relative' key={index}>
                            <img className='w-full h-96 object-cover' alt='feturedCommentary' src={`${process.env.NEXT_PUBLIC_IMG_URL}${value?.image?.path}`} />
                            <div className='bg-white absolute p-8 -translate-y-1/2 top-1/2 md:right-10 lg:right-0 xl:right-32  md:w-2/4 lg:w-1/3 '>
                                <label className='text-sm md:text-base'>{dayjs(value?.updatedAt).format('MMMM D, YYYY')}</label>
                                <h1 className='font-bold text-xl md:text-3xl '>{value?.title} </h1>
                                <p className=' text-sm md:text-base mt-2'>{value?.description}</p>
                                <button onClick={() => {
                                    router.push('/product/' + value.product_slug)
                                }} className='mt-4 text-xs uppercase font-semibold underline'>View Product</button>
                            </div>
                        </div>
                    )) : ""
            } */}

            <div className='mt-10 px-3'>
                <AnimatedDiv>
                    <Swiper
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        autoHeight={true}
                        height={386}
                        // navigation={true}
                        modules={[Navigation, Pagination]}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                        spaceBetween={20}
                        slidesPerView={1}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            blogData.map((value: any, index: number) => (
                                <SwiperSlide role='button'
                                    onClick={() => {
                                        router.push('/blog/' + value.blog_slug)
                                    }}
                                    className={`relative bg-white rounded-2xl overflow-hidden group `} key={index}>

                                    <div className={`text-center w-full relative h-96`}>
                                        <img className={`h-72 w-full object-cover duration-300 `} src={`${process.env.NEXT_PUBLIC_IMG_URL}${value?.image?.path}`} />
                                        <div className={`md:text-xl h-full font-semibold text-center p-5 `}>
                                            <h1 className='text-ellipsis overflow-hidden line-clamp-2' title={value?.title}>{value?.title} </h1>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    {/* <div className='mt-3'>
                        <button className="arrow-left p-2 border rounded-full bg-white"><ArrowLeft /></button>
                        <button className="arrow-right p-2 border rounded-full bg-white"><ArrowRight /></button>
                    </div> */}
                </AnimatedDiv>
            </div>
        </div >
    )
}

export default Discover