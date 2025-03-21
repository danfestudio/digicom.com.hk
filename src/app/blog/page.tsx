"use client";
import { startSkeletonLoad, stopSkeletonLoad } from '@/redux/features/skeletonSlice';
import { AppDispatch, useAppSelector } from '@/redux/store';
import axios from '../../axios/axios'
import { Dot } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs'
import Link from 'next/link';
import LoadingScreen from '../components/Loading/LoadingScreen';
import SuggestedPosts from './SuggestedPosts';

function Blog() {
    typeof window !== 'undefined' && window.scrollTo({ top: 0, behavior: 'smooth' });

    const dispatch = useDispatch<AppDispatch>()
    const [blogData, setBlogData] = useState<any>([])
    const [randomBlogData, setRandomBlogData] = useState<any>([])
    const isLoading = useAppSelector((state) => state.skeletonSlice.value)

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
                setRandomBlogData(result.data.data.randomBlogs)
                dispatch(stopSkeletonLoad())
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
    }, [])


    return (
        <div className='max-w-7xl mx-auto'>
            <title>Blogs</title>
            {
                isLoading ? <LoadingScreen /> : ""
            }
            <div className='lg:flex'>
                <div className='p-10 lg:w-2/3 min-h-screen'>
                    <h1 className='text-4xl font-bold mb-10'>Blogs</h1>
                    <div className='grid grid-cols-1 gap-5'>
                        {
                            blogData.map((value: any, index: number) => (
                                <div key={index} className='w-full longBlogCard h-96 bg-white rounded-md overflow-hidden shadow-lg relative'>
                                    <img className='absolute top-0 left-0 h-full w-full object-cover z-0' src={`${process.env.NEXT_PUBLIC_IMG_URL}${value?.image.path}`} />
                                    <div className='absolute top-0 p-8 text-white flex gap-5 justify-between flex-wrap items-end left-0 h-full w-full z-0 bg-black bg-opacity-10 from-black via-transparent to-transparent bg-gradient-to-t'>
                                        <div className='flex flex-col gap-3 md:w-4/5'>
                                            <p className='text-sm font-light'>{dayjs(value?.updatedAt).format('D MMMM, YYYY')}</p>
                                            <h2 className='text-2xl font-semibold blogtitle' title={value?.title}>{value?.title}</h2>
                                            <p className='text-sm font-light blogdescription' title={value?.description}>{value?.description}</p>
                                        </div>
                                        <Link href={`/blog/${value?.blog_slug}`} scroll={true} className='btn-dark !bg-green-700 text-sm'>Read More</Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <SuggestedPosts randomBlogData={randomBlogData} />


                {/* <div className=' w-1/3 h-fit sticky flex flex-col gap-5 top-16 p-10'>
                    <h3 className='font-bold'>Suggested Posts</h3>
                    <div className='grid gap-5'>
                        {
                            randomBlogData?.map((value: any, index: any) => (
                                <Link href={`/blog/${value?.blog_slug}`} className='flex gap-5 items-start suggestedBlogs'>
                                    <img className='h-[100px] w-[100px] rounded-lg object-cover z-0' src={`${process.env.NEXT_PUBLIC_API_URL}${value?.image}`} />
                                    <div className='flex flex-col gap-2 justify-center'>
                                        <div className='flex gap-2 text-xs text-gray '>
                                            <p>{value?.author}</p>
                                            <Dot className='' size={20} />
                                            <p>{dayjs(value?.updatedAt).format('D MMM, YYYY')}</p>
                                        </div>
                                        <p className='font-bold blogtitle'>{value?.title}</p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Blog