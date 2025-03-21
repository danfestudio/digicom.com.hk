import React, { useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import axios from '../../../axios/axios'
import { debounce } from 'lodash';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { X } from 'lucide-react';

function SearchModal({ setShowModal, showModal }: { setShowModal: any, showModal: any }) {

    const [productData, setProductData] = useState<any>()
    const [keyword, setKeyword] = useState()
    const router = useRouter()

    const searchProducts = async () => {
        try {
            let result = await axios.get('/product/search/' + keyword)
            if (result.data.success) {
                setProductData(result.data.data.data)
            }
        } catch (ERR) {
            console.log(ERR)
        }
    }

    useEffect(() => {
        searchProducts()
    }, [keyword])

    const handleInputChangeDebounced = debounce((value) => {
        setKeyword(value)
    }, 800);

    return (
        <Modal setShowModal={setShowModal} showModal={showModal} classname={'max-w-7xl'}>
            <h2 className='font-semibold'>Search For Products</h2>
            <button className='absolute top-2 right-2' onClick={() => {
                setShowModal(false)
            }}><X /></button>

            <div>
                <input type='search' onChange={(e: any) => {
                    handleInputChangeDebounced(e.target.value)
                }} className='inputfield mt-4 text-sm' placeholder='Search' />
            </div>

            <div className='mt-4 '>
                <div className="grid sm:grid-cols-2 gap-10 lg:grid-cols-4">
                    {
                        productData?.length > 0 ?
                            productData?.map((product: any) => (
                                <div key={product?._id} role='button' onClick={() => {
                                    router.push('/product/' + product.product_sku)
                                    setShowModal(false)
                                }} className='card text-center flex flex-col gap-6'>
                                    <h3 className='font-semibold text-2xl'>{product.product_name}</h3>
                                    <button className='btn-dark !rounded-lg !text-xs !max-w-fit mx-auto !shadow-none'>View Product</button>
                                    <div className='h-56 grid overflow-hidden place-items-center'>
                                        <Image
                                            className='object-cover'
                                            src={`${process.env.NEXT_PUBLIC_IMG_URL}${product.front_image.path}`}
                                            alt='Product Image'
                                            width={400}
                                            height={400}
                                        />
                                    </div>
                                </div>
                            ))
                            :
                            <div className='col-span-full'>
                                {keyword ?
                                    <label className='text-red-700'>Found No Results for "{keyword}"</label>
                                    :
                                    ""
                                }
                            </div>
                    }
                </div>
            </div>
        </Modal>
    )
}

export default SearchModal