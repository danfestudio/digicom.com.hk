
'use client'

import React, { useMemo, useState, useEffect } from 'react'
import { AppDispatch } from '@/redux/store'

import { useDispatch } from 'react-redux'
import { startSkeletonLoad, stopSkeletonLoad } from '@/redux/features/skeletonSlice'
import axios from '../../axios/axios'
import { toast } from 'react-hot-toast'
import dayjs from 'dayjs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Commentary() {

    const dispatch = useDispatch<AppDispatch>()
    const [blogData, setBlogData] = useState<any>([])
    const [featuredBlog, setFeaturedBlog] = useState<any>([])

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

    const getFeaturedBlogDetails = async () => {
        try {
            dispatch(startSkeletonLoad())

            let result = await axios.get('blog/featured-blog', {
                params: {
                    limit: 5,
                    page: 1
                }
            })
            if (result.data.success) {
                setFeaturedBlog(result.data.data)
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
        getBlogDetails()
        getFeaturedBlogDetails()
    }, [])


    return (
        <div className='max-w-7xl mx-auto min-h-screen py-10 px-5' id='blog'>
            {/* Featured */}
            {
                featuredBlog.length > 0 ?
                    featuredBlog?.map((value: any, index: any) => (
                        <div className='w-full bg-blue-100 relative' key={index}>
                            <img className='w-full h-96 object-cover' alt='feturedCommentary' src={`${process.env.NEXT_PUBLIC_IMG_URL}${value?.image}`} />
                            <div className='bg-white absolute p-8 -translate-y-1/2 top-1/2 md:right-10 lg:right-0 xl:right-32  md:w-2/4 lg:w-1/3 '>
                                <label className='text-sm md:text-base'>{dayjs(value?.updatedAt).format('MMMM D, YYYY')}</label>
                                <h1 className='font-bold text-xl md:text-3xl '>{value?.title}</h1>
                                <p className=' text-sm md:text-base mt-2'>{value?.description}</p>
                                <button onClick={() => {
                                    router.push('/blog/' + value.blog_slug)
                                }} className='mt-4 text-xs uppercase font-semibold underline'>View Product</button>
                            </div>
                        </div>
                    )) : ""
            }

            <div className='mt-10'>
                <div className='flex justify-between items-center'>
                    <label className='font-bold'>Latest Commentary</label>
                    <Link href={"/blog"} className=''>See All Commentary</Link>
                </div>
                <div className='mb-10 my-5 grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                    {
                        blogData.map((value: any, index: number) => (
                            <div role='button' onClick={() => {
                                router.push('/blog/' + value.blog_slug)
                            }} className='relative blogCard' key={index}>
                                <img className='w-full object-center object-cover h-80 max-h-80 -z-10' src={`${process.env.NEXT_PUBLIC_IMG_URL}${value?.image}`} />
                                {/* <img className='h-full w-full object-center object-cover -z-10' src='/heroSampleImage.png' /> */}
                                <div className='absolute flex flex-col justify-end min-h-full top-0 w-full bg-opacity-60 from-black to-transparent  bg-gradient-to-t text-white'>
                                    <div className='p-5'>
                                        <h1 className='text-xl font-semibold my-4 blogtitle'>{value?.title}</h1>
                                        <p className='text-sm'>{dayjs(value?.updatedAt).format('MMM D, YYYY')}</p>
                                        <p className='text-sm mt-2 blogdescription'>{value?.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Commentary