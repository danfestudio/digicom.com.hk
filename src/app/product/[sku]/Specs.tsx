import AnimatedDiv from '@/app/components/AnimatedDiv/AnimatedDiv'
import HorizontalDivider from '@/app/components/Divider/HorizontalDivider'
import React from 'react'

function Specs({ productData }: { productData: any }) {

    return (
        <div className='max-w-7xl mx-auto p-4'>

            <AnimatedDiv>
                <img className='md:h-[70vh] md:p-14 mt-20 md:mt-0 h-[300px] mx-auto object-contain' src={`${process.env.NEXT_PUBLIC_IMG_URL}${productData?.front_image?.path}`} />
            </AnimatedDiv>

            <div className='md:my-16 my-10'>
                <HorizontalDivider />
            </div>

            <div className='md:mb-24  '>
                {productData?.specs?.length > 0 ?
                    productData?.specs?.map((value: any, index: number) => (
                        <div key={index} >
                            <div className='grid md:grid-cols-5 md:gap-10 gap-4 md:mt-10 mt-1 ' >
                                <div className='col-span-2'>
                                    <AnimatedDiv>
                                        <label className='md:text-4xl text-2xl font-semibold'>{value?.main_title}</label>
                                    </AnimatedDiv>
                                </div>
                                <div className='col-span-3'>
                                    {
                                        value.content.map((con: any, index: number) => (
                                            <div key={index} className='flex flex-col gap-2 md:mb-16 mb-5'>
                                                <AnimatedDiv>
                                                    <label className='md:text-2xl text-xl font-semibold mb-2'>{con?.subtitle}</label>
                                                </AnimatedDiv>
                                                {
                                                    con.items.map((item: any, index: number) => (
                                                        <AnimatedDiv key={index}>
                                                            <label className='md:text-2xl opacity-80' key={index}>{item}</label>
                                                        </AnimatedDiv>
                                                    ))
                                                }
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                            <div className='md:mb-16 mb-10'>
                                <HorizontalDivider />
                            </div>
                        </div>
                    ))
                    :
                    "No Data Found. Please Check Back Later"

                }
            </div>
        </div>
    )
}

export default Specs