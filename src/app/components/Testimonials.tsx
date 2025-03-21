"use client";
import React, { useMemo, useState, useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { startSkeletonLoad, stopSkeletonLoad } from '@/redux/features/skeletonSlice';
import axios from '../../axios/axios';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { toast } from 'react-hot-toast';

function Testimonials() {

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)
    const dispatch = useDispatch<AppDispatch>()
    const [testimonialData, setTestimonialData] = useState<any>([])


    const getTestimonialDetails = async () => {
        try {
            dispatch(startSkeletonLoad())

            let result = await axios.get('testimonial/', {

            })
            if (result.data.success) {
                setTestimonialData(result.data.data.data)
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
        getTestimonialDetails()
    }, [])



    return (
        <div id='testimonial' className='max-w-7xl mx-auto px-5 md:py-20 py-16'>
            <div>
                <Swiper
                    className='items-center'
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    onBeforeInit={(swiper: any) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                    modules={[Navigation, Pagination]}

                    spaceBetween={50}
                    slidesPerView={1}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        testimonialData.map((value: any, index: number) => (
                            <SwiperSlide key={value?._id}>
                                {
                                    value?.image ?
                                        <>
                                            <div className='sm:flex gap-10 w-full overflow-hidden items-center'  key={index}>
                                                <img alt='testimonial' src={`${process.env.NEXT_PUBLIC_IMG_URL}${value?.image}`} className=' sm:w-1/2 h-[500px] w-full object-cover' />
                                                <div className='flex flex-col'>
                                                    <p className='lg:text-2xl text-sm md:text-base md:mt-0 mt-4'>
                                                        <b> “ </b> {value?.content} <b> ”</b>
                                                    </p>
                                                    <div className='mt-4    '>
                                                        <p className='text-xl font-bold'>{value?.author}</p>
                                                        <p className='md:text-base text-sm'>{value?.designation}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                        :
                                        <>
                                            <div className='flex text-center items-center justify-center gap-10 w-full h-full overflow-hidden'>
                                                <div className='flex flex-col  justify-self-center '>
                                                    <p className='lg:text-3xl text-sm md:text-base'>
                                                        <b> “ </b> {value?.content} <b> ”</b>
                                                    </p>
                                                    <div className='mt-4'>
                                                        <p className='text-xl font-bold'>{value?.author}</p>
                                                        <p className='md:text-base text-sm'>{value?.designation}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                }
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
                <div className="flex justify-end py-3 sm:flex sm:flex-row ">
                    <div className='flex gap-4'>
                        <button
                            className='bg-black text-white  font-bold  p-3  flex items-center'
                            ref={navigationPrevRef}>
                            <ArrowLeft />
                        </button>

                        {/* <div ref={navigationPrevRef.current}></div> */}

                        <button
                            className='bg-black text-white  font-bold  p-3 flex items-center'
                            ref={navigationNextRef}>
                            <ArrowRight />

                        </button>
                    </div>
                    {/* <button onClick={() => {
                        setIsSeen(true)
                        localStorage.setItem('isSeen', 'true')
                    }} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Close</button> */}
                </div>
            </div>
        </div>
    )
}

export default Testimonials