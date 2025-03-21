// import React from 'react'
// import { Metadata } from 'next';

// import ProductPage from './ProductPage'
// import { getData } from './getData';

// export const metadata: Metadata = {
//     title: 'Category | Digicom Dashboard',
//     description: 'Category Page of Admin Digicom',
// };

// async function Page({ params }: { params: { sku: string } }) {

//     const data = await getData(params.sku)

//     console.log('data ----------------------', data.data.product)
//     return (
//         <ProductPage />
//     )
// }

// export default Page

import type { Metadata, ResolvingMetadata } from 'next'
import ProductPage from './ProductPage'

type Props = {
    params: { sku: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const sku = params.sku

    // fetch data
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/page-style/${sku}`).then((res) => res.json())

    const product = data.data.product

    const previousImages = (await parent).openGraph?.images || []

    return {
        title: `${product.product_name} - Digicom`,
        openGraph: {
            images: [`${process.env.NEXT_PUBLIC_IMG_URL}${product.front_image.path}`, ...previousImages],
        },
    }
}

export default function Page({ params, searchParams }: Props) {
    return (
        <ProductPage />
    )
}