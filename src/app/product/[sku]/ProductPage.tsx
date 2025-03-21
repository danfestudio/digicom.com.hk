"use client";
import Link from 'next/link';
import axios from '../../../axios/axios';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Overview from './Overview';
import Specs from './Specs';

function ProductPage() {

    const params = useParams()
    const searchParams = useSearchParams()
    const tab = searchParams.get('page') ? searchParams.get('page') : 'overview'

    const [productData, setProductData] = useState<any>({})
    const [pageStyle, setPageStyle] = useState<any>([])

    const getProductDetail = async () => {
        try {
            let result = await axios.get('/page-style/' + params.sku)
            setProductData(result.data.data.product)
            setPageStyle(result.data.data.theme)
        } catch (ERR) {
            console.log(ERR)
        }
    }

    useEffect(() => {
        getProductDetail()
    }, [])

    return (
        <div className=''>
            <div className=' text-sm bg-black bg-opacity-[0.83]  backdrop-blur-[5px] top-18 w-full fixed z-[5]'>
                <div className='px-4 py-3 flex flex-wrap gap-5 justify-between container mx-auto'>
                    <h1 className='font-semibold text-gray-100'>{productData?.product_name}</h1>
                    <div className='flex gap-8 items-center font-semibold '>
                        <Link
                            href={`/product/${params.sku}?page=overview`}
                            className={`${tab === 'overview' ? 'text-gray-200 font-bold' : "text-gray-500"}`}>
                            Overview
                        </Link>
                        <Link
                            href={`/product/${params.sku}?page=specs`}
                            className={`${tab === 'specs' ? 'text-gray-200 font-bold' : "text-gray-500"}`}>
                            Specs
                        </Link>
                    </div>
                </div>
            </div>

            {
                tab === 'overview' ?
                    <Overview pageStyle={pageStyle} />
                    :
                    <Specs productData={productData} />
            }
        </div>
    )
}

export default ProductPage