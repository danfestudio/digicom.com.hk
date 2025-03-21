import React from 'react'
import SingleBlog from './SingleBlog'
import axios from '../../../axios/axios'
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

// export async function generateStaticParams() {
//     const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}blog`).then((res) => res.json())
//     const blogs = result?.data?.blogs?.data

//     const array = blogs?.map((post: { blog_slug: any }) => ({
//         slug: post.blog_slug,
//     }))

//     console.log('array', array)
//     return array

//     // return blogs?.map((post: { blog_slug: any }) => ({
//     //     slug: post.blog_slug,
//     // }))
// }

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const slug = params.slug

    // fetch data
    const blog = await fetch(`${process.env.NEXT_PUBLIC_API_URL}blog/get-blog/${slug}`).then((res) => res.json())

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    // previousImages.push(`${process.env.NEXT_PUBLIC_IMG_URL}${blog?.data?.image?.path}`)

    return {
        title: `${blog.data.title} - Digicom`,
        description: `${blog.data.description} - Digicom`,
        openGraph: {
            images: [`${process.env.NEXT_PUBLIC_IMG_URL}${blog?.data?.image?.path}`, ...previousImages],
        },
    }
}

const getData = async (slug: string) => {

    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}blog/get-blog/${slug}`).then((res) => res.json())
    return data

    // let result = await axios.get("blog/get-blog/" + slug)
    // console.log('result', result)
}
const getRandomData = async () => {

    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}blog`).then((res) => res.json())
    return data.data

    // let result = await axios.get("blog/get-blog/" + slug)
    // console.log('result', result)
}

async function Page({ params }: {
    params: {
        slug: string
    }
}) {

    const data = await getData(params.slug)
    const randomBlog = await getRandomData()

    return (
        // <div></div>
        <SingleBlog data={data} randomBlog={randomBlog} />
    )
}

export default Page