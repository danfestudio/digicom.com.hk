"use client";

import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import axios from '../../axios/axios';
import CustomStyles from './clientStyleComponents/ClientStyleOptions/CustomStyles';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/store';
import HeroSkeleton from './SkeletonLoader/HeroSkeleton';
import AnimatedDiv from './AnimatedDiv/AnimatedDiv';
import Link from 'next/link';

function HeroSection() {

    const dispatch = useDispatch()

    const isLoading = useAppSelector((state) => state.skeletonSlice.value)

    const [isSkeletonLoading, setIsSkeletonLoading] = useState(true)
    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    const [bannerData, setBannerData] = useState<any>([])

    const getAllBanners = async () => {
        try {
            setIsSkeletonLoading(true)
            let result = await axios.get('banner', {
                params: {
                    is_active: true
                }
            })
            if (result.data.success) {
                setBannerData(result.data.data.data)
                setIsSkeletonLoading(false)
            }
        } catch (ERR) {
            console.log(ERR)
            setIsSkeletonLoading(false)
        }
    }

    useEffect(() => {
        getAllBanners()
    }, [])

    return (
        <>
            {
                isSkeletonLoading ?
                    <div className='h-[500px]'>
                        <HeroSkeleton />
                    </div>
                    :
                    <AnimatedDiv>
                        <div className='mx-auto relative group' id='#home'>
                            <Swiper
                                autoHeight
                                loop={true}
                                autoplay={{
                                    delay: 6000,
                                    disableOnInteraction: true,
                                }}
                                navigation={{
                                    prevEl: navigationPrevRef.current,
                                    nextEl: navigationNextRef.current,
                                }}
                                onBeforeInit={(swiper: any) => {
                                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                                    swiper.params.navigation.nextEl = navigationNextRef.current;
                                }}
                                modules={[Navigation, Pagination, Autoplay]}

                                spaceBetween={50}
                                slidesPerView={1}
                            >
                                {
                                    bannerData?.map((value: any, index: any) => (
                                        <SwiperSlide key={value?._id}>
                                            {
                                                value?.link?.value ?
                                                    <Link className='' href={`${value?.link?.for === "product" ? `/product/${value?.link?.value}` : `/category/${value?.link?.value}`}`}>
                                                        <CustomStyles data={value?.banner_style[0]} />
                                                    </Link>
                                                    :
                                                    <CustomStyles data={value?.banner_style[0]} />
                                            }
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>

                            <button
                                className='bg-black bg-opacity-70 group-hover:opacity-100 opacity-0 transition-opacity duration-300 rounded-lg absolute left-10  top-1/2 -translate-y-1/2 text-white  font-bold  p-2 '
                                ref={navigationPrevRef}
                                style={{
                                    zIndex: "1"
                                }}
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                className='bg-black bg-opacity-70 group-hover:opacity-100 opacity-0 transition-opacity duration-300 rounded-lg absolute right-10  top-1/2 -translate-y-1/2 text-white  font-bold  p-2'
                                ref={navigationNextRef}
                                style={{
                                    zIndex: "1"
                                }}
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </AnimatedDiv>
            }
        </>
    )
}

export default HeroSection