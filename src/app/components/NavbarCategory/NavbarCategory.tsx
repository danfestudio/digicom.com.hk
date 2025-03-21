import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import SVGRenderer from './SVGRenderer'

function NavbarCategory({ selectedCategoryData, setSelectedCategoryData, setShowCategory }: { selectedCategoryData: any, setSelectedCategoryData: any, setShowCategory: any }) {

    const [selectedSubCategory, setSelectedSubCategory] = useState<any>(selectedCategoryData?.children[0])

    return (
        <div className={`p-10 grid grid-cols-5 gap-4 container mx-auto list capitalize `}>
            {/* {renderChildren(selectedCategoryData, "", index)} */}
            <div className='col-span-1 flex flex-col items-start'>
                {
                    selectedCategoryData?.children?.map((child: any) => (
                        <Link key={child?._id} onClick={() => {
                            setSelectedCategoryData('')
                            setShowCategory(false)
                        }}
                            href={`/category/${child.slug}`}
                            onMouseOver={() => {
                                setSelectedSubCategory(child)
                            }} className={`hover:bg-gray-900 hover:text-green-600 capitalize opacity-70 p-3 text-left w-full ${selectedSubCategory?._id === child?._id ? "bg-gray-900 text-green-600" : ""}`}>{child.name}</Link>
                    ))
                }
            </div>

            <div className='col-span-4 grid xl:grid-cols-5 grid-cols-4 gap-4  w-full'>
                {
                    selectedSubCategory?.children?.map((child: any) => (
                        <div key={child?._id} className='flex flex-col opacity-70  w-full'>
                            <Link onClick={() => {
                                setSelectedCategoryData('')
                                setShowCategory(false)
                            }}
                                href={`/category/${child.slug}`}
                                className='text-sm capitalize hover:text-green-600 text-center'>
                                <div className='h-24 mb-2  border-white grid place-items-center'>
                                    <>
                                        {/* {child?.image?.file_details?.mimetype === "image/svg+xml" ?
                                            <SVGRenderer img={`${process.env.NEXT_PUBLIC_IMG_URL}${child?.image?.path}`} />
                                            : */}

                                            <Image
                                                className='object-contain max-h-[80px]'
                                                src={child?.image?.path ? `${process.env.NEXT_PUBLIC_IMG_URL}${child?.image?.path}` : '/logo.png'}
                                                alt='Product Image'
                                                width={100}
                                                height={100}
                                            />

                                        {/* } */}
                                    </>

                                </div>
                                {child.name}
                            </Link>
                        </div>
                    ))
                }

            </div >
        </div >
    )
}

export default NavbarCategory