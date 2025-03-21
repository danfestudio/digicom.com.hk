import axios from '../../../axios/axios'
import { AnimatePresence, motion } from 'framer-motion'
import { debounce } from 'lodash'
import { ArrowRight, Search } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import HorizontalDivider from '../Divider/HorizontalDivider'
import Title from '../Title'

function SearchDropdown({ setShowSearchModal, showSearchModal, inputRef }: { setShowSearchModal: any, showSearchModal: any, inputRef: any }) {
    const router = useRouter()
    const [keyword, setKeyword] = useState<string>('')
    const [productData, setProductData] = useState<any>([])
    const [categoryData, setCategoryData] = useState<any>([])

    const searchProducts = async () => {
        try {
            let result = await axios.get('/product/search/' + keyword)
            if (result.data.success) {
                setProductData(result.data.data.products)
                setCategoryData(result.data.data.categories)
            }
        } catch (ERR) {
            console.log(ERR)
        }
    }

    const handleInputChangeDebounced = debounce((value) => {
        setKeyword(value)
    }, 800);

    useEffect(() => {
        if (keyword) {
            searchProducts()
        }
    }, [keyword])

    return (
        <div
            onMouseOver={() => {
                // setSelectedCategoryData(value)
                setShowSearchModal(true)
            }}
            onMouseLeave={() => {
                // setSelectedCategoryData('')
                setShowSearchModal(false)
                setShowSearchModal(false)
                setKeyword('')
                if (inputRef.current) {
                    inputRef.current.value = ""
                }
            }}
            className='group'>
            <AnimatePresence mode="sync">
                {showSearchModal && (
                    <motion.div
                        key={'search'}
                        className=' absolute top-[52px] left-0   bg-[#0c0b0b] !bg-opacity-[0.88] shadow w-full min-h-fit z-0 '
                        initial={{ y: 0, opacity: 0, height: 0 }}
                        animate={{ y: 0, opacity: 1, height: 'fit-content' }}
                        exit={{ y: 0, opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className={`p-10  gap-4 container mx-auto list capitalize `}>
                            {/* <div className='px-10 text-white mx-auto w-fit'>
                                <Title title='Search' />
                            </div> */}
                            <div className='p-10'>
                                <div className='flex items-center gap-2'>
                                    <Search color='green' />
                                    <input className='text-white bg-[#0c0b0b] !bg-opacity-70 inputfield w-full !border-none !outline-none focus:!outline-none focus:!border-none' placeholder='Search digicom.com' onChange={(e) => {
                                        handleInputChangeDebounced(e.target.value)
                                    }} ref={inputRef} type='search' />

                                </div>
                                <HorizontalDivider color='white' opacity='20' />
                                <>

                                    {keyword &&
                                        <div className=" !bg-transparent !p-2 overflow-auto max-h-[200px] my-5">
                                            {
                                                productData?.length > 0 &&
                                                productData?.map((product: any) => (
                                                    <div key={product?._id} role='button' onClick={() => {
                                                        router.push('/product/' + product.product_sku)
                                                        setKeyword('')
                                                        setShowSearchModal(false)
                                                        if (inputRef.current) {
                                                            inputRef.current.value = ""
                                                        }
                                                    }} className='text-white text-left flex items-center gap-4 p-2 rounded  '>
                                                        <ArrowRight size={14} />
                                                        {/* <Image
                                                                className='object-contain'
                                                                src={`${process.env.NEXT_PUBLIC_IMG_URL}${product.front_image.path}`}
                                                                alt='Product Image'
                                                                width={30}
                                                                height={30}
                                                            /> */}
                                                        <div>
                                                            <h3 className='font-semibold leading-4 text-sm'>{product.product_name}</h3>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            {
                                                categoryData?.length > 0 &&
                                                categoryData?.map((category: any) => (
                                                    <div key={category?._id} role='button' onClick={() => {
                                                        router.push('/category/' + category.slug)
                                                        setKeyword('')
                                                        setShowSearchModal(false)
                                                        if (inputRef.current) {
                                                            inputRef.current.value = ""
                                                        }
                                                    }} className='text-white text-left flex items-center gap-4 p-2 rounded  '>
                                                        <ArrowRight size={14} />
                                                        <div>
                                                            <h3 className='font-semibold leading-4 text-sm'>{category.name}</h3>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                            {
                                                (categoryData?.length === 0 && productData?.length === 0) &&
                                                <div className='col-span-full '>
                                                    <label className='text-green-500 -white p-2 text-sm'>Found No Results for "{keyword}"</label>
                                                </div>
                                            }
                                        </div>
                                    }
                                </>
                            </div>
                        </div >
                    </motion.div>
                )}


            </AnimatePresence>

        </div>

    )
}

export default SearchDropdown