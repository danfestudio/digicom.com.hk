import dayjs from 'dayjs'
import { Dot } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function SuggestedPosts({ randomBlogData }: {
    randomBlogData: any
}) {

    return (
        <div className=' lg:w-1/3 h-fit lg:sticky flex flex-col gap-5 top-16 p-10'>
            <h3 className='font-bold'>Suggested Posts</h3>
            <div className='grid gap-5'>
                {
                    randomBlogData?.map((value: any, index: any) => (
                        <Link key={index} href={`/blog/${value?.blog_slug}`} className='flex gap-5 items-start suggestedBlogs'>
                            <img className='h-[100px] w-[100px] rounded-lg object-cover z-0' src={`${process.env.NEXT_PUBLIC_IMG_URL}${value?.image.path}`} />
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
        </div>
    )
}

export default SuggestedPosts