'use client';
import { Field, FieldArray, Form, Formik } from 'formik';
import { AlignCenter, AlignLeft, AlignRight, AlignStartHorizontal, AlignVerticalJustifyCenter, AlignVerticalJustifyEnd, ArrowDown, ArrowUp, GripHorizontal, ImagePlus, Italic, Minus, PlusCircle, Strikethrough, Underline, X } from 'lucide-react';
import React, { useRef, useState } from 'react'
import Draggable from 'react-draggable';
import SelectFile from '../../media/SelectFile';
import PageBuilderSideBar from '../../pagebuilder_side_controls/PageBuilderSideBar';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { motion, useDragControls } from "framer-motion"

function DefaultStyle3({ data, sectionsList, sectionListIndex, setSectionsList }: { data: any, sectionsList: any, sectionListIndex: any, setSectionsList: any }) {


    const constraintsRef = useRef(null);
    const [showControls, setShowControls] = useState<boolean>(false)
    const controls = useDragControls()

    const [divHeight, setDivHeight] = useState<string>(data?.components?.divHeight)
    const [divHeightType, setDivHeightType] = useState<string>(data?.components?.divHeightType)
    const [selectedFieldType, setSelectedFieldType] = useState<string>('')

    const [titleTextStyle, setTitleTextStyle] = useState<string>(data?.components?.title?.fontStyle)
    const [titleTextWeight, setTitleTextWeight] = useState<string>(data?.components?.title?.textweight)
    const [titleAlign, setTitleAlign] = useState<CanvasTextAlign>(data?.components?.title?.align)
    const [titleText, setTitleText] = useState<string>(data?.components?.title?.text)
    const [titleTextSize, setTitleTextSize] = useState<string>(data?.components?.title?.fontsize)
    const [titleTextPadding, setTitleTextPadding] = useState<string>(data?.components?.title?.padding)

    const [titleTextPaddingTop, setTitleTextPaddingTop] = useState<string>(data?.components?.title?.paddingTop)
    const [titleTextPaddingBottom, setTitleTextPaddingBottom] = useState<string>(data?.components?.title?.paddingBottom)
    const [titleTextPaddingLeft, setTitleTextPaddingLeft] = useState<string>(data?.components?.title?.paddingLeft)
    const [titleTextPaddingRight, setTitleTextPaddingRight] = useState<string>(data?.components?.title?.paddingRight)

    const [titleTextLineHeight, setTitleTextLineHeight] = useState<string>(data?.components?.title?.lineheight)
    const [titleTextDecoration, setTitleTextDecoration] = useState<string>(data?.components?.title?.textdecoration)
    const [titleTextFont, setTitleTextFont] = useState<string>(data?.components?.title?.font ? data?.components?.title?.font : '')
    const [titleTextColor, setTitleTextColor] = useState<string>(data?.components?.title?.color)

    const [descriptionAlign, setDescriptionAlign] = useState<CanvasTextAlign>(data?.components?.description?.align)
    const [descriptionText, setDescriptionText] = useState<string>(data?.components?.description?.text)
    const [descriptionTextSize, setDescriptionTextSize] = useState<string>(data?.components?.description?.fontsize)
    const [descriptionTextPadding, setDescriptionTextPadding] = useState<string>(data?.components?.description?.padding)
    const [descriptionLineHeight, setDescriptionLineHeight] = useState<string>(data?.components?.description?.lineheight)
    const [descriptionTextColor, setDescriptionTextColor] = useState<string>(data?.components?.description?.color)
    const [descriptionTextFont, setDescriptionTextFont] = useState<string>(data?.components?.description?.font)
    const [descriptionTextStyle, setDescriptionTextStyle] = useState<string>(data?.components?.description?.textstyle)
    const [descriptionTextDecoration, setDescriptionTextDecoration] = useState<string>(data?.components?.description?.textdecoration)
    const [descriptionTextWeight, setDescriptionTextWeight] = useState<string>(data?.components?.description?.textweight)

    const imageRef = React.useRef<any>(null)

    const [textPlacement, setTextPlacement] = React.useState(data?.components?.content_placement)
    const [imgPlacement, setimgPlacement] = React.useState(data?.components?.image_placement)

    const [imgHeight, setimgHeight] = React.useState(data?.components?.image?.height ? data?.components?.image?.height : 200)
    const [imgWidth, setimgWidth] = React.useState(data?.components?.image?.width ? data?.components?.image?.width : 200)
    const [imgFit, setimgFit] = React.useState(data?.components?.image?.objectfit ? data?.components?.image?.objectfit : 'contain')
    // const [imgPadding, setimgPadding] = React.useState(data?.components?.image?.padding)
    const [imgMargin, setimgMargin] = React.useState(data?.components?.image?.margin)

    const [imgPaddingTop, setImgPaddingTop] = useState<number>(data?.components?.image?.imgPaddingTop ? data?.components?.image?.imgPaddingTop : 0)
    const [imgPaddingBottom, setImgPaddingBottom] = useState<number>(data?.components?.image?.imgPaddingBottom ? data?.components?.image?.imgPaddingBottom : 0)
    const [imgPaddingLeft, setImgPaddingLeft] = useState<number>(data?.components?.image?.imgPaddingLeft ? data?.components?.image?.imgPaddingLeft : 0)
    const [imgPaddingRight, setImgPaddingRight] = useState<number>(data?.components?.image?.imgPaddingRight ? data?.components?.image?.imgPaddingRight : 0)

    const [showImageSelect, setShowImageSelect] = React.useState<any>()
    const [image, setImage] = React.useState<any>(data?.components?.image?.data)

    const renderDialog = (type: string) => {
        try {
            switch (type) {
                case 'title':
                    return (
                        <motion.div dragMomentum={false} dragListener={false} dragControls={controls} drag dragConstraints={constraintsRef}
                            className='p-5 bg-white  w-fit shadow-lg text-xs border max-h-screen overflow-auto'>
                            <div className='flex justify-between items-center mb-3 max-w-sm bg-white'>
                                <label className='font-semibold'>Details</label>
                                <button className='handle select-none p-2' onPointerDown={(e) => {
                                    controls.start(e)
                                }}><GripHorizontal /></button>
                                <button onClick={() => {
                                    setSelectedFieldType('')
                                    setShowControls(false);
                                }}>
                                    <X size={16} />
                                </button>
                            </div>
                            <div className='grid gap-2'>
                                <div>
                                    Text : <textarea value={titleText} onChange={(e: any) => {
                                        setTitleText(e.target.value)
                                        handleChanges('title.text', e.target.value)
                                    }} className='border' />
                                </div>

                                <div>
                                    Color : <input type='color' value={titleTextColor} onChange={(e: any) => {
                                        setTitleTextColor(e.target.value)
                                        handleChanges('title.color', e.target.value)
                                    }} className='border' />
                                </div>
                                <div>
                                    Font Size :  <input type='number' value={titleTextSize} onChange={(e: any) => {
                                        setTitleTextSize(e.target.value)
                                        handleChanges('title.fontsize', e.target.value)
                                    }} className='border w-12 p-1 rounded text-xs font-semibold' />
                                </div>
                                <div>
                                    Font: <select className='border' value={titleTextFont} onChange={(e: any) => {
                                        setTitleTextFont(e.target.value)
                                        handleChanges('title.font', e.target.value)
                                    }}>
                                        <option value={"default"}>default</option>
                                        <option value={"font-serif"} >Serif</option>
                                        <option value={"font-sans"} >Sans</option>
                                        <option value={"font-mono"}>Mono</option>
                                    </select>
                                </div>
                                <div className='border rounded flex items-center gap-3 p-1 w-fit'>
                                    <button className='' onClick={() => {
                                        setTitleTextStyle("normal")
                                        handleChanges('title.fontStyle', 'normal')
                                    }}><Minus size={17} /></button>

                                    <button className='' onClick={() => {
                                        setTitleTextStyle("italic")
                                        handleChanges('title.fontStyle', 'italic')
                                    }}><Italic size={17} /></button>
                                </div>

                                {/* <div>
                                    Font Style : <select className='border' value={titleTextStyle} onChange={(e: any) => {
                                        setTitleTextStyle(e.target.value)
                                    }}>
                                        <option value={"normal"}>normal</option>
                                        <option value={"italic"}>italic</option>
                                    </select>
                                </div> */}
                                <div className='flex gap-4  text-sm items-center'>
                                    <label className='font-semibold'>
                                        Decoration :
                                    </label>
                                    <div className='w-fit border rounded flex items-center gap-3 p-1'>
                                        <button onClick={() => {
                                            setTitleTextDecoration("none")
                                            handleChanges('title.textdecoration', 'none')
                                        }}><Minus size={17} /></button>
                                        <button onClick={() => {
                                            setTitleTextDecoration("underline")
                                            handleChanges('title.textdecoration', 'underline')
                                        }}><Underline size={17} /></button>
                                        <button onClick={() => {
                                            setTitleTextDecoration("line-through")
                                            handleChanges('title.textdecoration', 'line-through')
                                        }}><Strikethrough size={17} /></button>
                                    </div>
                                </div>

                                <div className='text-sm flex gap-3'>
                                    <label className='font-semibold'>
                                        Font Weight :
                                    </label>

                                    <select className='border' value={titleTextWeight} onChange={(e: any) => {
                                        setTitleTextWeight(e.target.value)
                                        handleChanges('title.textweight', e.target.value)
                                    }}>
                                        <option value={"100"}>100</option>
                                        <option value={"200"}>200</option>
                                        <option value={"300"}>300</option>
                                        <option value={"400"}>400</option>
                                        <option value={"500"}>500</option>
                                        <option value={"600"}>600</option>
                                        <option value={"700"}>700</option>
                                        <option value={"800"}>800</option>
                                        <option value={"900"}>900</option>
                                    </select>
                                </div>
                                <div>

                                    <div className='border rounded flex items-center gap-3 p-1 w-fit'>
                                        <button onClick={() => {
                                            setTitleAlign("start")
                                            handleChanges('title.align', 'start')
                                        }}><AlignLeft size={18} /></button>
                                        <button onClick={() => {
                                            setTitleAlign("center")
                                            handleChanges('title.align', 'center')
                                        }}><AlignCenter size={18} /></button>
                                        <button onClick={() => {
                                            setTitleAlign("end")
                                            handleChanges('title.align', 'end')
                                        }}><AlignRight size={18} /></button>
                                    </div>
                                </div>

                                <div className='border relative text-xs' style={{
                                    height: "150px"
                                }}>
                                    <div className='flex gap-3 items-center justify-center absolute bg-gray-100 hover:bg-blue-100 hover:font-semibold top-0 paddingTop w-full' >
                                        Top : <input type='number' value={titleTextPaddingTop} onChange={(e: any) => {
                                            setTitleTextPaddingTop(e.target.value)
                                            handleChanges('title.paddingTop', e.target.value)
                                        }} className='border text-center w-12 rounded' />
                                    </div>

                                    <div className='flex flex-col gap-2 items-center justify-center paddingLeft absolute left-0 top-0 bg-gray-100  hover:font-semibold  text-center  hover:bg-blue-100' style={{
                                    }}>  Left: <input type='number' value={Number(titleTextPaddingLeft)} onChange={(e: any) => {
                                        setTitleTextPaddingLeft(e.target.value)
                                        // handleChanges('title.paddingLeft', e.target.value)
                                    }} className='border text-center w-12 rounded' /></div>

                                    <div className='flex flex-col gap-2 items-center justify-center paddingRight bg-gray-100 hover:font-semibold hover:bg-blue-100 absolute right-0' style={{
                                    }}>
                                        Right: <input type='number' value={titleTextPaddingRight} onChange={(e: any) => {
                                            setTitleTextPaddingRight(e.target.value)
                                            handleChanges('title.paddingRight', e.target.value)
                                        }} className='border text-center w-12 rounded' />
                                    </div>


                                    <div className='flex gap-3 items-center justify-center paddingBottom absolute bottom-0 bg-gray-100 hover:font-semibold hover:bg-blue-100' >
                                        Bottom : <input type='number' value={titleTextPaddingBottom} onChange={(e: any) => {
                                            setTitleTextPaddingBottom(e.target.value)
                                            handleChanges('title.paddingBottom', e.target.value)
                                        }} className='border text-center w-12 rounded' />
                                    </div>

                                    <div className='flex flex-col gap-2 items-center justify-center paddingLeft absolute left-0 top-0 bg-gray-100  hover:font-semibold  text-center  hover:bg-blue-100' style={{
                                    }}>  Left: <input type='number' value={titleTextPaddingLeft} onChange={(e: any) => {
                                        handleChanges('title.paddingLeft', e.target.value)
                                        setTitleTextPaddingLeft(e.target.value)
                                    }} className='border text-center w-12 rounded' /></div>

                                    <div className='flex flex-col gap-2 items-center justify-center paddingRight bg-gray-100 hover:font-semibold hover:bg-blue-100 absolute right-0' style={{
                                    }}>
                                        Right: <input type='number' value={titleTextPaddingRight} onChange={(e: any) => {
                                            handleChanges('title.paddingRight', e.target.value)
                                            setTitleTextPaddingRight(e.target.value)
                                        }} className='border text-center w-12 rounded' />
                                    </div>
                                </div>

                                <div className='text-sm flex gap-3 items-center'>
                                    <label className='font-semibold'>
                                        Line Spacing :
                                    </label>
                                    <input type='number' value={titleTextLineHeight} onChange={(e: any) => {
                                        setTitleTextLineHeight(e.target.value)
                                        handleChanges('title.lineHeight', e.target.value)
                                    }} className='border w-24' />
                                </div>

                                {/* <div className='flex justify-end gap-2 text-xs'>
                                    <button className='btn-primary'>Save</button>
                                    <button className='btn-danger' onClick={() => {
                                        setSelectedFieldType('')
                                        setShowControls(false);
                                    }}>Cancel</button>
                                </div> */}
                            </div>
                        </motion.div>
                    )
                    break;
                case 'description':
                    return (
                        <motion.div dragMomentum={false} dragListener={false} dragControls={controls} drag dragConstraints={constraintsRef} >
                            <div className=' border-dashed w-fit p-2 border-2 bg-white shadow z-50'>
                                <div className='flex justify-between items-center mb-3 '>
                                    <label className='font-semibold'>Details</label>
                                    <button className='handle select-none p-2' onPointerDown={(e) => {
                                        controls.start(e)
                                    }}><GripHorizontal /></button>
                                    <button onClick={() => {
                                        setSelectedFieldType('')
                                    }}>
                                        <X size={16} />
                                    </button>
                                </div>
                                <div className='grid gap-2'>
                                    <div>
                                        Text : <textarea value={descriptionText} onChange={(e: any) => {
                                            setDescriptionText(e.target.value)
                                            handleChanges('description.text', e.target.value)
                                        }} className='border' />
                                    </div>

                                    <div>
                                        Color : <input type='color' value={descriptionTextColor} onChange={(e: any) => {
                                            setDescriptionTextColor(e.target.value)
                                            handleChanges('description.color', e.target.value)

                                        }} className='border' />
                                    </div>
                                    <div>
                                        Font Size : <input type='number' value={descriptionTextSize} onChange={(e: any) => {
                                            setDescriptionTextSize(e.target.value)
                                            handleChanges('description.fontsize', e.target.value)
                                        }} className='border' />
                                    </div>
                                    <div>
                                        Font: <select className='border' value={descriptionTextFont} onChange={(e: any) => {
                                            setDescriptionTextFont(e.target.value)
                                            handleChanges('description.font', e.target.value)
                                        }}>
                                            <option value={"default"}>default</option>
                                            <option value={"font-serif"} >Serif</option>
                                            <option value={"font-sans"} >Sans</option>
                                            <option value={"font-mono"}>Mono</option>
                                        </select>
                                    </div>
                                    <div>
                                        Font Style : <select className='border' value={descriptionTextStyle} onChange={(e: any) => {
                                            setDescriptionTextStyle(e.target.value)
                                            handleChanges('description.textstyle', e.target.value)
                                        }}>
                                            <option value={"normal"}>normal</option>
                                            <option value={"italic"}>italic</option>
                                        </select>
                                    </div>
                                    <div>
                                        Text Decoration : <select className='border' value={descriptionTextDecoration} onChange={(e: any) => {
                                            setDescriptionTextDecoration(e.target.value)
                                            handleChanges('description.textdecoration', e.target.value)
                                        }}>
                                            <option value={"none"}>None</option>
                                            <option value={"underline"}>Underline</option>
                                            <option value={"line-through"}>line-through</option>
                                            <option value={"overline"}>overline</option>
                                        </select>
                                    </div>
                                    <div>
                                        Font Weight : <select className='border' value={descriptionTextWeight} onChange={(e: any) => {
                                            setDescriptionTextWeight(e.target.value)
                                            handleChanges('description.textweight', e.target.value)
                                        }}>
                                            <option value={"100"}>100</option>
                                            <option value={"200"}>200</option>
                                            <option value={"300"}>300</option>
                                            <option value={"400"}>400</option>
                                            <option value={"500"}>500</option>
                                            <option value={"600"}>600</option>
                                            <option value={"700"}>700</option>
                                            <option value={"800"}>800</option>
                                            <option value={"900"}>900</option>
                                        </select>
                                    </div>
                                    <div>
                                        Align : <select className='border' value={descriptionAlign} onChange={(e: any) => {
                                            setDescriptionAlign(e.target.value)
                                            handleChanges('description.align', e.target.value)
                                        }}>
                                            <option value={"center"}>Center</option>
                                            <option value={"start"}>Left</option>
                                            <option value={"end"}>Right</option>
                                        </select>
                                    </div>
                                    <div>
                                        Padding : <input type='number' value={descriptionTextPadding} onChange={(e: any) => {
                                            setDescriptionTextPadding(e.target.value)
                                            handleChanges('description.padding', e.target.value)
                                        }} className='border' />
                                    </div>
                                    <div>
                                        Line Spacing : <input type='number' value={descriptionLineHeight} onChange={(e: any) => {
                                            setDescriptionLineHeight(e.target.value)
                                            handleChanges('description.lineheight', e.target.value)
                                        }} className='border' />
                                    </div>

                                    {/* <div className='flex justify-end gap-2 text-xs'>
                                        <button className='btn-primary'>Save</button>
                                        <button className='btn-danger' onClick={() => {
                                            setSelectedFieldType('')
                                        }}>Cancel</button>
                                    </div> */}
                                </div>
                            </div>
                        </motion.div>
                    )
                    break;
                case 'image':
                    return (
                        <motion.div dragMomentum={false} dragListener={false} dragControls={controls} drag dragConstraints={constraintsRef} >
                            <div className=' border-dashed w-fit p-2 border-2 bg-gray-100 shadow '>
                                <div className='flex justify-between mb-3'>
                                    <label className='font-semibold'>Details</label>
                                    <button className='handle cursor-move select-none p-2' onPointerDown={(e) => {
                                        controls.start(e)
                                    }}><GripHorizontal /></button>
                                    <button onClick={() => {
                                        setSelectedFieldType('')
                                    }}>
                                        <X size={16} />
                                    </button>
                                </div>
                                <div className='grid gap-2'>
                                    <div>
                                        Object Fit : <select className='border' defaultValue={imgFit} onChange={(e: any) => {
                                            setimgFit(e.target.value)
                                            handleChanges('image.objectfit', e.target.value)
                                        }}>
                                            <option value={"cover"}>cover</option>
                                            <option value={"contain"}>contain</option>
                                            {/* <option value={"stretch"}>stretch</option> */}
                                        </select>
                                    </div>

                                    <div>
                                        Height : <input value={imgHeight} type='number' className='border' onChange={(e: any) => {
                                            handleChanges('image.height', e.target.value)
                                            setimgHeight(e.target.value)
                                        }} />
                                    </div>
                                    <div>
                                        Width : <input value={imgWidth} type='number' className='border' onChange={(e: any) => {
                                            setimgWidth(e.target.value)
                                            handleChanges('image.width', e.target.value)
                                        }} />
                                    </div>

                                    <label>Padding: </label>
                                    <div className='border relative text-xs bg-white' style={{
                                        height: "150px"
                                    }}>
                                        <div className='flex gap-3 items-center justify-center absolute bg-gray-100 hover:bg-blue-100 hover:font-semibold top-0 paddingTop w-full' >
                                            Top : <input type='number' value={imgPaddingTop} onChange={(e: any) => {
                                                setImgPaddingTop(e.target.value)
                                                handleChanges('paddingTop', e.target.value)
                                            }} className='border text-center w-12 rounded' />
                                        </div>

                                        <div className='flex flex-col gap-2 items-center justify-center paddingLeft absolute left-0 top-0 bg-gray-100  hover:font-semibold  text-center  hover:bg-blue-100' style={{
                                        }}>  Left: <input type='number' value={Number(imgPaddingLeft)} onChange={(e: any) => {
                                            setImgPaddingLeft(e.target.value)
                                            handleChanges('paddingLeft', e.target.value)
                                        }} className='border text-center w-12 rounded' /></div>

                                        <div className='flex flex-col gap-2 items-center justify-center paddingRight bg-gray-100 hover:font-semibold hover:bg-blue-100 absolute right-0' style={{
                                        }}>
                                            Right: <input type='number' value={imgPaddingRight} onChange={(e: any) => {
                                                setImgPaddingRight(e.target.value)
                                                handleChanges('paddingRight', e.target.value)
                                            }} className='border text-center w-12 rounded' />
                                        </div>

                                        <div className='flex gap-3 items-center justify-center paddingBottom absolute bottom-0 bg-gray-100 hover:font-semibold hover:bg-blue-100' >
                                            Bottom : <input type='number' value={imgPaddingBottom} onChange={(e: any) => {
                                                setImgPaddingBottom(e.target.value)
                                                handleChanges('paddingBottom', e.target.value)
                                            }} className='border text-center w-12 rounded' />
                                        </div>

                                        <div className='flex flex-col gap-2 items-center justify-center paddingLeft absolute left-0 top-0 bg-gray-100  hover:font-semibold  text-center  hover:bg-blue-100' style={{
                                        }}>  Left: <input type='number' value={imgPaddingLeft} onChange={(e: any) => {
                                            handleChanges('paddingLeft', e.target.value)
                                            setImgPaddingLeft(e.target.value)
                                        }} className='border text-center w-12 rounded' /></div>

                                        <div className='flex flex-col gap-2 items-center justify-center paddingRight bg-gray-100 hover:font-semibold hover:bg-blue-100 absolute right-0' style={{
                                        }}>
                                            Right: <input type='number' value={imgPaddingRight} onChange={(e: any) => {
                                                handleChanges('paddingRight', e.target.value)
                                                setImgPaddingRight(e.target.value)
                                            }} className='border text-center w-12 rounded' />
                                        </div>
                                    </div>

                                    <div>
                                        Margin Left : <input value={imgMargin} type='number' className='border' onChange={(e: any) => {
                                            setimgMargin(e.target.value)
                                        }} />
                                    </div>
                                    <div>
                                        Margin Right: <input value={imgMargin} type='number' className='border' onChange={(e: any) => {
                                            setimgMargin(e.target.value)
                                        }} />
                                    </div>
                                    <div>
                                        Margin Top: <input value={imgMargin} type='number' className='border' onChange={(e: any) => {
                                            setimgMargin(e.target.value)
                                        }} />
                                    </div>
                                    <div>
                                        Margin Bottom: <input value={imgMargin} type='number' className='border' onChange={(e: any) => {
                                            setimgMargin(e.target.value)
                                        }} />
                                    </div>
                                    {/* <div className='flex justify-end gap-2 text-xs'>
                                        <button className='btn-primary'>Save</button>
                                        <button className='btn-danger' onClick={() => {
                                            setSelectedFieldType('')
                                        }}>Cancel</button>
                                    </div> */}
                                </div>
                            </div>
                        </motion.div>
                    )
                    break;
                default:
                    break;
            }
        } catch (ERR) {
            console.log(ERR)
        }
    }
    const handleImage = (e: any) => {
        setImage(e.target.files[0])
    }

    const handleChanges = async (name: any, value: any) => {
        const newElements: any[] = sectionsList;

        // Split the property name by dot (.) to access nested properties
        const properties = name.split('.');
        // console.log('properties', properties)
        // console.log('name', name + value)
        let target = newElements[sectionListIndex].components;

        // Traverse the nested structure until the second-to-last property
        for (let i = 0; i < properties.length - 1; i++) {
            target = target[properties[i]];
        }

        // Update the value of the last property
        target[properties[properties.length - 1]] = value;

        await setSectionsList(newElements);
    }

    const removeElement = () => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    let newArray = sectionsList.filter((item: any) => item.id !== data?.id);
                    setSectionsList(newArray)
                }
            })
        } catch (ERR) {
            console.log(ERR)
            toast.error('Failed to Delete')
        }
    }

    return (
        <div
            className={`border-dashed container mx-auto border-2 w-full overflow-hidden `}>

            {
                (showControls && selectedFieldType) &&
                <div className='fixed right-0 top-0 z-40 h-screen w-full' ref={constraintsRef}>
                    {renderDialog(selectedFieldType)}
                </div>
            }

            {
                showImageSelect &&
                <SelectFile selectedFile={setImage} filepath={'image.data'} handleChanges={handleChanges} setSelectedFile={setImage} setShowModal={setShowImageSelect} showModal={showImageSelect} accept='image' />
            }


            <div className='flex gap-2 px-2 py-1 border-b flex-wrap  items-center justify-between  ' >
                <div className='flex items-center gap-1'>
                    <label className={`${sectionsList.length === 1 && "hidden"}`}>Move: </label>
                    <button className={`px-2 border py-1 bg-white ${sectionListIndex === 0 && "hidden"}`}> <ArrowUp /></button>
                    <button className={`px-2 border py-1 bg-white ${sectionListIndex === sectionsList.length - 1 && "hidden"}`}> <ArrowDown /></button>
                </div>
                <div className='flex items-center gap-1'>
                    <label>Height: </label>

                    {divHeightType === "custom" &&
                        <input disabled={divHeightType != "custom"} type="number" onChange={(e: any) => {
                            setDivHeight(e.target.value)
                            handleChanges('divHeight', e.target.value)
                        }} className='w-20 border pl-2 py-1' min={10} defaultValue={Number(divHeight)} />
                    }
                    <select defaultValue={divHeightType} onChange={(e: any) => {
                        setDivHeightType(e.target.value)
                        handleChanges('divHeightType', e.target.value)
                    }} className='border px-2 py-1 h-full'>
                        <option value={'custom'}>Custom</option>
                        {/* <option value={'fit-content'}>Fit-Content</option> */}
                        <option value={'100vh'}>Screen</option>
                    </select>
                </div>
                <div className='flex items-center gap-1'>
                    <button className='btn-danger text-xs mr-2' onClick={() => {
                        removeElement()
                    }}>Delete</button>
                    {/* <label>Grid: </label>
                    <select defaultValue={gridCols} onChange={(e: any) => {
                        setGridCols(e.target.value)
                        handleChanges('divHeightType', e.target.value)
                    }} className='border px-2 py-1 h-full'>
                        <option value={'1'}>1</option>
                        <option value={'2'}>2</option>
                        <option value={'3'}>3</option>
                        <option value={'4'}>4</option>
                        <option value={'5'}>5</option>
                        <option value={'6'}>6</option>
                        <option value={'7'}>7</option>
                        <option value={'8'}>8</option>
                        <option value={'9'}>9</option>
                        <option value={'10'}>10</option>
                        <option value={'11'}>11</option>
                        <option value={'12'}>12</option>
                    </select> */}

                </div>
            </div>
            {/* <button title='Delete' className='px-2 border py-1 bg-red-600 text-white'>Delete</button> */}

            <div className='flex flex-col gap-10 rounded w-full group ' style={{
                maxHeight: `${divHeightType === "custom" ? `${divHeight}px` : divHeightType}`,
                height: `${divHeightType === "custom" ? `${divHeight}px` : divHeightType}`,
                minHeight: `100%`
            }}>
                <div className={`w-full h-full group flex flex-col justify-${textPlacement} relative ${imgPlacement === 'left' ? "order-last" : ""} ${imgPlacement === 'right' ? "text-left" : "text-right"}`} >

                    <div className='group-hover:block hidden absolute top-0'>
                        <button onClick={() => {
                            setTextPlacement('start')
                            handleChanges('content_placement', 'start')
                        }} className='bg-blue-400 p-2'><AlignStartHorizontal /></button>
                        <button onClick={() => {
                            setTextPlacement('center')
                            handleChanges('content_placement', 'center')
                        }} className='bg-blue-400 p-2'><AlignVerticalJustifyCenter /></button>
                        <button onClick={() => {
                            setTextPlacement('end')
                            handleChanges('content_placement', 'end')
                        }} className='bg-blue-400 p-2'><AlignVerticalJustifyEnd /> </button>
                    </div>

                    {
                        titleText ?

                            <div className=''>
                                <h1 className={`w-full whitespace-pre ${titleTextFont === 'default' ? "" : titleTextFont}`} onClick={() => {
                                    setSelectedFieldType('title')
                                    setShowControls(true);
                                }} style={{
                                    fontStyle: titleTextStyle,
                                    fontWeight: titleTextWeight,
                                    textAlign: titleAlign,
                                    textDecoration: titleTextDecoration,
                                    fontSize: `${titleTextSize}px`,
                                    padding: `${titleTextPadding}px`,
                                    paddingTop: `${titleTextPaddingTop}px`,
                                    paddingBottom: `${titleTextPaddingBottom}px`,
                                    paddingLeft: `${titleTextPaddingLeft}px`,
                                    paddingRight: `${titleTextPaddingRight}px`,
                                    lineHeight: `${titleTextLineHeight}px`,
                                    color: titleTextColor
                                }}>
                                    {titleText}

                                </h1>
                            </div>
                            :
                            <span onClick={() => {
                                setSelectedFieldType('title')
                                setShowControls(true);
                            }} className='w-full opacity-30 mr-auto text-center select-none cursor-pointer' style={{
                                textAlign: 'center',
                                fontSize: `14px`,
                                padding: `5px`,
                                lineHeight: `${descriptionLineHeight}px`,
                            }} >
                                Title
                            </span>
                    }

                    <div onClick={() => {
                        setSelectedFieldType('description')
                        setShowControls(true);
                    }} className='relative flex gap-2 items-center'>
                        {
                            descriptionText ?

                                <span className='w-full whitespace-pre' style={{
                                    fontStyle: descriptionTextStyle,
                                    fontWeight: descriptionTextWeight,
                                    textAlign: descriptionAlign,
                                    textDecoration: descriptionTextDecoration,
                                    fontSize: `${descriptionTextSize}px`,
                                    padding: `${descriptionTextPadding}px`,
                                    lineHeight: `${descriptionLineHeight}px`,
                                    color: descriptionTextColor

                                    // textAlign: descriptionAlign,
                                    // fontSize: `${descriptionTextSize}px`,
                                    // padding: `${descriptionTextPadding}px`,
                                    // lineHeight: `${descriptionLineHeight}px`,
                                }} >
                                    {descriptionText ? descriptionText : "Paragraph"}
                                </span>
                                :
                                <span className='w-full whitespace-pre opacity-30 select-none cursor-pointer' style={{
                                    textAlign: descriptionAlign,
                                    fontSize: `${descriptionTextSize}px`,
                                    padding: `${descriptionTextPadding}px`,
                                    lineHeight: `${descriptionLineHeight}px`,
                                }} >
                                    Paragraph
                                </span>
                        }
                    </div>

                    {/* <div>
                <button ref={submitRef} type="submit" className='hidden'>Submit</button>
            </div> */}

                    {/* <Formik initialValues={content}
                    onSubmit={(values, action) => {
                        console.log(values)
                    }}
                >
                    {(props) => (
                        <Form>
                            <div className='text-6xl font-bold'>
                                <Field
                                    as="textarea"
                                    className="inputfield !border-none"
                                    name='title'
                                    id='title'
                                    placeholder='Your Title'
                                />
                            </div>
                            <FieldArray
                                name="description"
                                render={arrayHelpers => (
                                    <div>
                                        {props.values.description && props.values.description.length > 0 ? (
                                            props.values.description.map((desc, sectionListIndex) => (
                                                <div key={sectionListIndex} className='relative flex gap-2 items-center'>
                                                    <Field as="textarea" className="inputfield !border-none"
                                                        placeholder='Your Text'
                                                        name={`description.${sectionListIndex}`} />
                                                    <div className='gap-3 right-0 top-0 flex items-center'>
                                                        {
                                                            props.values.description.length > 1 &&
                                                            <button className='bg-green-600 px-3  rounded-sm text-white font-bold'
                                                                type="button"
                                                                onClick={() => arrayHelpers.remove(sectionListIndex)}
                                                            >
                                                                -
                                                            </button>
                                                        }
                                                        <button className='bg-red-600 px-3  rounded-sm text-white font-bold'
                                                            type="button"
                                                            onClick={() => arrayHelpers.insert(sectionListIndex + 1, '')}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <button type="button" className='p-3 font-bold opacity-50' onClick={() => arrayHelpers.push('')}>
                                                Add Text
                                            </button>
                                        )}
                                        <div>
                                            <button ref={submitRef} type="submit" className='hidden'>Submit</button>
                                        </div>
                                    </div>
                                )}
                            />
                        </Form>
                    )
                    }
                </Formik> */}

                    {/* <div className='text-6xl font-bold'>
                    <input defaultValue={content.title} onChange={(e) => {
                        content.title = e.target.value
                        console.log(content)
                    }} className='inputfield' />
                    {content.title}

                </div> */}
                    {/* {
                    content.description.map((value, sectionListIndex) => (
                        <div>
                            {value}
                        </div>
                    ))
                } */}

                </div>

                <div className={`w-full h-full group relative  ${imgPlacement === 'right' ? "order-last" : ""}`}>
                    <div className='absolute top-0  gap-3 group-hover:flex hidden p-2 font-semibold'>
                        <button onClick={() => {
                            setSelectedFieldType('image')
                            setShowControls(true);
                        }} className='bg-blue-400 p-2'>Settings</button>
                        {
                            image?.path &&
                            <button onClick={() => {
                                setImage("")
                            }} className=' bg-white btn-danger text-sm'>Remove Image</button>
                        }
                    </div>
                    {
                        !image?.path ?
                            <div className='grid place-items-center h-full w-full border hover:border-gray-300 border-transparent'>
                                <input className='hidden' ref={imageRef} type='file' onChange={(e) => {
                                    handleImage(e)
                                }} />
                                <button className='flex flex-col justify-center items-center' onClick={() => {
                                    // imageRef.current.click()
                                    setShowImageSelect(true)
                                }}>
                                    <ImagePlus size={100} />
                                    Click To Add Image
                                </button>
                            </div>
                            :
                            <div role='button' className='grid place-items-center h-full w-full border hover:border-gray-300 border-transparent' onClick={() => {
                                setSelectedFieldType('image')
                                setShowControls(true);
                            }}>
                                <img style={{
                                    objectFit: imgFit,
                                    maxHeight: `${imgHeight}px`,
                                    maxWidth: `${imgWidth}px`,
                                    height: `${imgHeight}px`,
                                    width: `${imgWidth}px`,
                                    paddingTop: `${titleTextPaddingTop}px`,
                                    paddingBottom: `${titleTextPaddingBottom}px`,
                                    paddingLeft: `${titleTextPaddingLeft}px`,
                                    paddingRight: `${titleTextPaddingRight}px`,
                                    margin: `${imgMargin}px`,
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                }} className='w-full object-cover place-items-center object-center group-hover:opacity-30'
                                    // src={URL.createObjectURL(image)}
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