'use client';
import { Field, FieldArray, Form, Formik } from 'formik';
import { AlignStartHorizontal, AlignVerticalJustifyCenter, AlignVerticalJustifyEnd, ArrowDown, ArrowUp, GripHorizontal, ImagePlus, PlusCircle, X } from 'lucide-react';
import React, { useState } from 'react'

function DefaultStyle3({ data }: { data: any }) {
    const [divHeight, setDivHeight] = useState<string>(data.components?.divHeight)
    const [divHeightType, setDivHeightType] = useState<string>(data.components?.divHeightType)
    const [selectedFieldType, setSelectedFieldType] = useState<string>('')

    const [titleTextFont, setTitleTextFont] = useState<string>(data.components?.title?.font ? data.components?.title?.font : '')

    const [textPlacement, setTextPlacement] = React.useState(data.components?.content_placement)
    const [imgPlacement, setimgPlacement] = React.useState(data.components?.image_placement)

    const [imgHeight, setimgHeight] = React.useState(data.components?.image?.height)
    const [imgWidth, setimgWidth] = React.useState(data.components?.image?.width)
    const [imgFit, setimgFit] = React.useState(data.components?.image?.objectfit)
    const [imgMargin, setimgMargin] = React.useState(data.components?.image?.margin)

    const [image, setImage] = React.useState<any>(data.components?.image?.data)


    return (
        <div
            className={` container mx-auto  w-full overflow-hidden `}>
            <div className='flex flex-col gap-10 rounded w-full group ' style={{
                maxHeight: `${divHeightType === "custom" ? `${divHeight}px` : divHeightType}`,
                height: `${divHeightType === "custom" ? `${divHeight}px` : divHeightType}`,
                minHeight: `100%`
            }}>
                <div className={`w-full h-full group flex flex-col justify-${textPlacement} relative ${imgPlacement === 'left' ? "order-last" : ""} ${imgPlacement === 'right' ? "text-left" : "text-right"}`} >

                    <div className=''>
                        <h1 className={`w-full whitespace-pre ${titleTextFont === 'default' ? "" : titleTextFont}`} onClick={() => {
                            setSelectedFieldType('title')
                        }} style={{
                            fontStyle: data.components?.title?.textstyle,
                            fontWeight: data.components?.title?.textweight,
                            textAlign: data.components?.title?.align,
                            textDecoration: data.components?.title?.textdecoration,
                            fontSize: `${data.components?.title?.fontsize}px`,
                            paddingTop: `${data.components?.title?.paddingTop}px`,
                            paddingBottom: `${data.components?.title?.paddingBottom}px`,
                            paddingLeft: `${data.components?.title?.paddingLeft}px`,
                            paddingRight: `${data.components?.title?.paddingRight}px`,
                            lineHeight: `${data.components?.title?.lineheight}px`,
                            color: data.components?.title?.color
                        }}>
                            {data.components?.title?.text}
                        </h1>
                    </div>

                    <div onClick={() => {
                        setSelectedFieldType('description')
                    }} className='relative flex gap-2 items-center'>
                        <span className='w-full whitespace-pre' style={{
                            fontStyle: data.components?.description?.textstyle,
                            fontWeight: data.components?.description?.textweight,
                            textAlign: data.components?.description?.align,
                            textDecoration: data.components?.description?.textdecoration,
                            fontSize: `${data.components?.description?.fontsize}px`,
                            padding: `${data.components?.description?.padding}px`,
                            lineHeight: `${data.components?.description?.lineheight}px`,
                            color: data.components?.description?.color
                        }} >
                            {data.components?.description?.text}
                        </span>
                    </div>
                </div>

                <div className={`w-full h-full group relative  ${imgPlacement === 'right' ? "order-last" : ""}`}>
                    {
                        !image ?
                            <div className='grid place-items-center h-full w-full border  border-transparent'>

                            </div>
                            :
                            <div className='grid place-items-center h-full w-full border  border-transparent'>
                                <img style={{
                                    objectFit: imgFit,
                                    maxHeight: `${imgHeight}px`,
                                    maxWidth: `${imgWidth}px`,
                                    height: `${data.components?.image?.height}px`,
                                    width: `${data.components?.image?.width}px`,
                                    paddingTop: `${data.components?.image?.paddingTop}px`,
                                    paddingBottom: `${data.components?.image?.paddingBottom}px`,
                                    paddingLeft: `${data.components?.image?.paddingLeft}px`,
                                    paddingRight: `${data.components?.image?.paddingRight}px`,
                                    margin: `${imgMargin}px`,
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                }} className='w-full object-cover place-items-center object-center '
                                    src={`${process.env.NEXT_PUBLIC_IMG_URL}${image?.path}`}
                                />
                            </div>
                    }
                </div>
            </div>
        </div >
    )
}

export default DefaultStyle3