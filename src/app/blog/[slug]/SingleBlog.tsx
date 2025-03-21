"use client";
import { AppDispatch, useAppSelector } from '@/redux/store';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs'
import { useParams } from 'next/navigation';
import { getBlogDetails, getSingleBlogDetails } from '@/redux/features/blogSlice';
import SuggestedPosts from '../SuggestedPosts';
import dynamic from 'next/dynamic';
import LoadingScreen from '@/app/components/Loading/LoadingScreen';
import Skeleton from '@/app/components/SkeletonLoader/Skeleton';

const ContentView = dynamic(() => import('react-froala-wysiwyg/FroalaEditorView'), {
    ssr: false,
})

function SingleBlog({ data, randomBlog }: {
    data: {
        data: {
            _id: string,
            image: {
                _id: string,
                path: string
            },
            title: string,
            content: string,
            description: string,
            author: string,
            createdAt: string,
            updatedAt: string,
            blog_slug: string
        }
    }, randomBlog: any
}) {

    const dispatch = useDispatch<AppDispatch>()

    const { slug } = useParams()

    const [loading, setLoading] = useState(true)

    const randomBlogData = randomBlog?.randomBlogs
    const blogData = data.data

    useEffect(() => {
        dispatch(getSingleBlogDetails(slug))
        dispatch(getBlogDetails())
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        };

        setTimeout(() => {
            setLoading(false)
        }, 200)
    }, [])

    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <div className='lg:flex'>
                    <div className='p-10 lg:w-2/3 min-h-screen bg-white my-4 rounded-lg'>
                        <div className='mb-5'>
                            <h1 className='text-4xl font-bold '>{blogData?.title}</h1>
                            <p className='text-sm text-gray-500 mt-2'>{dayjs(blogData?.updatedAt).format('D MMMM, YYYY')}</p>
                            <p className='text-sm font-semibold mt-4'>{blogData?.description}</p>
                        </div>

                        <div className='grid grid-cols-1 gap-5'>
                            <div className='w-full  h-96 bg-white rounded-md overflow-hidden  relative'>
                                <img className='absolute top-0 left-0 h-full w-full object-cover z-0' src={`${process.env.NEXT_PUBLIC_IMG_URL}${blogData?.image?.path}`} />
                            </div>

                            <div className='mt-5'>
                                {
                                    loading ? <Skeleton /> : < ContentView model={blogData?.content} />
                                }

                            </div>
                        </div>
                    </div>
                    <SuggestedPosts randomBlogData={randomBlogData} />
                </div>
            </div>
        </>
    )
}

export default SingleBlog