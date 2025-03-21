import { AlignCenter, AlignCenterHorizontal, AlignLeft, AlignRight, ArrowDown, ArrowDownToLine, ArrowUp, ArrowUpToLine, GripHorizontal, ImagePlus, MinusSquare, Replace, Trash, X } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import SelectFile from '../media/SelectFile'
import Swal from 'sweetalert2'
import toast from 'react-hot-toast'
import PageBuilderSideBar from '../pagebuilder_side_controls/PageBuilderSideBar'
import { motion, useDragControls } from "framer-motion"

import { useAppSelector } from '@/redux/store'
import { debounce } from 'lodash'

function Image({ value, elementIndex, selectedElements, setSelectedElements, saveGrid }: { value: any, elementIndex: number, selectedElements: any, setSelectedElements: any, saveGrid: any }) {

    const [showControls, setShowControls] = useState<boolean>(false)
    const isPreview = useAppSelector((state) => state.customStyleSlice.isPreview)
    const breakpoint = useAppSelector((state) => state.customStyleSlice.breakpoint)

    const constraintsRef = useRef(null);
    const [image, setImage] = React.useState<any>(value?.url)

    const [showImageSelect, setShowImageSelect] = React.useState<any>()
    // const constraintsRef = useAppSelector((state) => state.customStyleSlice.constraintsRef)
    const controls = useDragControls()

    const [imgPlacement, setimgPlacement] = React.useState<string>(value.styles?.[breakpoint]?.imgPlacement ? value.styles?.[breakpoint]?.imgPlacement : 'center')
    const [animationStyle, setAnimationStyle] = useState<string>(value.styles?.animation ? value.styles?.animation : 'none')

    const [imgHeight, setimgHeight] = React.useState(value.styles?.[breakpoint]?.height ? value.styles?.[breakpoint]?.height : 200)
    const [imgWidth, setimgWidth] = React.useState(value.styles?.[breakpoint]?.width ? value.styles?.[breakpoint]?.width : 200)
    const [imgFit, setimgFit] = React.useState(value.styles?.[breakpoint]?.imgfit ? value.styles?.[breakpoint]?.imgfit : "contain")
    // const [imgPadding, setimgPadding] = React.useState(value.styles?.[breakpoint]?.padding ? value.styles?.[breakpoint]?.padding : 0)

    const [imgPaddingTop, setImgPaddingTop] = useState<number>(value.styles?.[breakpoint]?.paddingTop ? value.styles?.[breakpoint]?.paddingTop : 0)
    const [imgPaddingBottom, setImgPaddingBottom] = useState<number>(value.styles?.[breakpoint]?.paddingBottom ? value.styles?.[breakpoint]?.paddingBottom : 0)
    const [imgPaddingLeft, setImgPaddingLeft] = useState<number>(value.styles?.[breakpoint]?.paddingLeft ? value.styles?.[breakpoint]?.paddingLeft : 0)
    const [imgPaddingRight, setImgPaddingRight] = useState<number>(value.styles?.[breakpoint]?.paddingRight ? value.styles?.[breakpoint]?.paddingRight : 0)

    const [imgMarginTop, setImgMarginTop] = useState<number>(value.styles?.[breakpoint]?.marginTop ? value.styles?.[breakpoint]?.marginTop : 0)
    const [imgMarginBottom, setImgMarginBottom] = useState<number>(value.styles?.[breakpoint]?.marginBottom ? value.styles?.[breakpoint]?.marginBottom : 0)
    const [imgMarginLeft, setImgMarginLeft] = useState<number>(value.styles?.[breakpoint]?.marginLeft ? value.styles?.[breakpoint]?.marginLeft : 0)
    const [imgMarginRight, setImgMarginRight] = useState<number>(value.styles?.[breakpoint]?.marginRight ? value.styles?.[breakpoint]?.marginRight : 0)

    const [marginTopAuto, setMarginTopAuto] = useState<string>(value.styles?.[breakpoint]?.marginTopAuto ? value.styles?.[breakpoint]?.marginTopAuto : '')
    const [marginBottomAuto, setMarginBottomAuto] = useState<string>(value.styles?.[breakpoint]?.marginBottomAuto ? value.styles?.[breakpoint]?.marginBottomAuto : '')

    const [verticalAlign, setVerticalAlign] = useState<string>(value.styles?.[breakpoint]?.verticalAlign ? value.styles?.[breakpoint]?.verticalAlign : '-')

    const [rowSpan, setRowSpan] = useState<string>(value.styles?.[breakpoint]?.rowSpan ? value.styles?.[breakpoint]?.rowSpan : '1')
    const [columnSpan, setColumnSpan] = useState<string>(value.styles?.[breakpoint]?.columnSpan ? value.styles?.[breakpoint]?.columnSpan : '1')

    useEffect(() => {

        setimgPlacement(value.styles?.[breakpoint]?.imgPlacement ? value.styles?.[breakpoint]?.imgPlacement : 'center')
        setAnimationStyle > (value.styles?.animation ? value.styles?.animation : 'none')

        setimgHeight(value.styles?.[breakpoint]?.height ? value.styles?.[breakpoint]?.height : 200)
        setimgWidth(value.styles?.[breakpoint]?.width ? value.styles?.[breakpoint]?.width : 200)
        setimgFit(value.styles?.[breakpoint]?.imgfit ? value.styles?.[breakpoint]?.imgfit : "contain")
        // setimgPadding(value.styles?.[breakpoint]?.padding ? value.styles?.[breakpoint]?.padding : 0)

        setImgPaddingTop(value.styles?.[breakpoint]?.paddingTop ? value.styles?.[breakpoint]?.paddingTop : 0)
        setImgPaddingBottom(value.styles?.[breakpoint]?.paddingBottom ? value.styles?.[breakpoint]?.paddingBottom : 0)
        setImgPaddingLeft(value.styles?.[breakpoint]?.paddingLeft ? value.styles?.[breakpoint]?.paddingLeft : 0)
        setImgPaddingRight(value.styles?.[breakpoint]?.paddingRight ? value.styles?.[breakpoint]?.paddingRight : 0)

        setImgMarginTop(value.styles?.[breakpoint]?.marginTop ? value.styles?.[breakpoint]?.marginTop : 0)
        setImgMarginBottom(value.styles?.[breakpoint]?.marginBottom ? value.styles?.[breakpoint]?.marginBottom : 0)
        setImgMarginLeft(value.styles?.[breakpoint]?.marginLeft ? value.styles?.[breakpoint]?.marginLeft : 0)
        setImgMarginRight(value.styles?.[breakpoint]?.marginRight ? value.styles?.[breakpoint]?.marginRight : 0)

        setMarginTopAuto(value.styles?.[breakpoint]?.marginTopAuto ? value.styles?.[breakpoint]?.marginTopAuto : '')
        setMarginBottomAuto(value.styles?.[breakpoint]?.marginBottomAuto ? value.styles?.[breakpoint]?.marginBottomAuto : '')

        setVerticalAlign(value.styles?.[breakpoint]?.verticalAlign ? value.styles?.[breakpoint]?.verticalAlign : '-')

        setRowSpan(value?.styles?.[breakpoint]?.rowSpan ? value?.styles?.[breakpoint]?.rowSpan : '1')
        setColumnSpan(value?.styles?.[breakpoint]?.columnSpan ? value?.styles?.[breakpoint]?.columnSpan : '1')

    }, [breakpoint])

    // console.log('value.styles', value.styles)

    // const handleStop = (event: any, dragElement: any) => {
    //     console.log(dragElement)
    // };

    // const handleImage = (e: any) => {
    //     setImage(e.target.files[0])
    // }

    const styles = {
        objectFit: imgFit,
        maxHeight: `${imgHeight}px`,
        maxWidth: `${imgWidth}px`,
        height: `${imgHeight}px`,
        width: `${imgWidth}px`,

        paddingTop: `${imgPaddingTop}px`,
        paddingBottom: `${imgPaddingBottom}px`,
        paddingLeft: `${imgPaddingLeft}px`,
        paddingRight: `${imgPaddingRight}px`,

        // marginTop: ` ${marginTopAuto === "auto" ? "auto" : `${imgMarginTop}px`} `,
        // marginBottom: ` ${marginBottomAuto === "auto" ? "auto" : `${imgMarginTop}px`} `,

        marginTop: `${imgMarginTop}px`,
        marginBottom: `${imgMarginBottom}px`,
        marginLeft: `${imgMarginLeft}px`,
        marginRight: `${imgMarginRight}px`,


    }

    const confirmReOrder = (move: any) => {
        const array = [...selectedElements];

        if (move === "up") {
            [array[elementIndex], array[elementIndex - 1]] = [array[elementIndex - 1], array[elementIndex]];
            setSelectedElements(array)
        }

        if (move === "down") {
            [array[elementIndex], array[elementIndex + 1]] = [array[elementIndex + 1], array[elementIndex]];
            setSelectedElements(array)
        }

        setTimeout(() => {
            saveGrid(array)
        }, 200)
    }

    const closeControls = () => {
        saveGrid()
        setShowControls(false);

        // Create a copy of selectedElements and update the desired element
        const updatedSelectedElements = [...selectedElements];
        updatedSelectedElements[elementIndex] = {
            ...updatedSelectedElements[elementIndex],
            styles: styles,
            content: image
        };

        // Set the updated array in the state
        setSelectedElements(updatedSelectedElements);

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

                    let newArray = selectedElements.filter((item: any) => item.id !== value.id);

                    setSelectedElements(newArray)
                }
            })
        } catch (ERR) {
            console.log(ERR)
            toast.error('Failed to Delete')
        }
    }

    const handleChanges = debounce(async (name: any, value: any) => {
        const newElements = selectedElements.map((element: { styles: any }, index: number) => {
            if (index !== elementIndex) {
                return element;
            }

            const updatedStyles = { ...element.styles };

            // Update the styles for the specified breakpoint
            updatedStyles[breakpoint] = {
                ...updatedStyles[breakpoint],
                [name]: value
            };

            let breakpointList = [
                1440,
                1024,
                768,
                425,
                320
            ]

            if (name === "url") {
                return {
                    ...element,
                    url: value,
                    styles: {
                        ...updatedStyles,
                    }
                };
            }

            // Update styles for smaller breakpoints if they don't have the property already
            for (let i = 0; i < breakpointList.length; i++) {
                const smallerBreakpoint = breakpointList[i];
                if (smallerBreakpoint < breakpoint
                    //  && !updatedStyles[smallerBreakpoint]?.hasOwnProperty(name)
                ) {
                    updatedStyles[smallerBreakpoint] = {
                        ...updatedStyles[smallerBreakpoint],
                        [name]: value
                    };
                }
            }

            return {
                ...element,
                styles: updatedStyles
            };
        });

        await setSelectedElements(newElements);

        saveGrid(newElements);

        // Further logic with newElements
    }, 500)


    const renderDialog = () => {
        try {
            return (
                <motion.div dragMomentum={false} dragListener={false} dragControls={controls} drag dragConstraints={constraintsRef}
                    className='p-5 z-10 bg-white right-0 fixed w-fit shadow-lg text-xs border max-h-screen overflow-auto'>
                    <div className='flex justify-between mb-3'>
                        <label className='font-semibold'>Details</label>
                        <button onPointerDown={(e) => {
                            controls.start(e)
                        }} className='handle cursor-move select-none p-2'><GripHorizontal /></button>
                        <button onClick={() => {
                            setShowControls(false)
                        }}>
                            <X size={16} />
                        </button>
                    </div>
                    <div className='flex items-center gap-2'>
                        <label className='font-semibold'>Row Span</label>
                        <select className='rounded border p-0 text-xs' value={rowSpan} onChange={(e: any) => {
                            setRowSpan(e.target.value)
                            handleChanges('rowSpan', e.target.value)
                        }}>
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
                        </select>
                    </div>
                    <div className='flex items-center gap-2'>
                        <label className='font-semibold'>Column Span</label>
                        <select className='rounded border p-0 text-xs' value={columnSpan} onChange={(e: any) => {
                            setColumnSpan(e.target.value)
                            handleChanges('columnSpan', e.target.value)
                        }}>
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
                        </select>
                    </div>
                    <div className='grid gap-2'>
                        <div>
                            Object Fit : <select className='border' defaultValue={imgFit} onChange={(e: any) => {
                                setimgFit(e.target.value)
                                handleChanges('imgfit', e.target.value)
                            }}>
                                <option value={"cover"}>cover</option>
                                <option value={"contain"}>contain</option>
                                {/* <option value={"stretch"}>stretch</option> */}
                            </select>
                        </div>

                        <div>
                            Height : <input value={imgHeight} type='number' className='border' onChange={(e: any) => {
                                setimgHeight(e.target.value)
                                handleChanges('height', e.target.value)
                            }} />
                        </div>
                        <div>
                            Width : <input value={imgWidth} type='number' className='border' onChange={(e: any) => {
                                setimgWidth(e.target.value)
                                handleChanges('width', e.target.value)
                            }} />
                        </div>

                        <div className=' flex gap-3'>
                            <label className='font-semibold'>
                                Animation Style :
                            </label>

                            <select className='border' value={animationStyle} onChange={(e: any) => {
                                setAnimationStyle(e.target.value)
                                handleChanges('animation', e.target.value)
                            }}>
                                <option value={"none"}>None</option>
                                <option value={"btt"}>Bottom To Top</option>
                                <option value={"ttb"}>Top To Bottom</option>
                                <option value={"ltr"}>Left to Right</option>
                                <option value={"rtl"}>Right to Left</option>
                                <option value={"fadeIn"}>Fade In</option>
                                <option value={"small2big"}>Small to Big</option>
                                <option value={"big2small"}>Big To Small</option>
                            </select>
                        </div>


                        <div className='border rounded flex w-fit items-center gap-3 p-1'>
                            <button onClick={() => {
                                setimgPlacement("start")
                                handleChanges('imgPlacement', 'start')
                            }}><AlignLeft size={18} /></button>
                            <button onClick={() => {
                                setimgPlacement("center")
                                handleChanges('imgPlacement', 'center')
                            }}><AlignCenter size={18} /></button>
                            <button onClick={() => {
                                setimgPlacement("end")
                                handleChanges('imgPlacement', 'end')
                            }}><AlignRight size={18} /></button>

                            <button onClick={() => {
                                setVerticalAlign('top')
                                handleChanges('verticalAlign', 'top')
                            }}><ArrowUpToLine size={18} /></button>

                            <button onClick={() => {
                                setVerticalAlign('bottom')
                                handleChanges('verticalAlign', 'bottom')
                            }}><ArrowDownToLine size={18} /></button>

                            <button onClick={async () => {
                                setVerticalAlign("center")
                                await handleChanges('verticalAlign', 'center')
                            }}><AlignCenterHorizontal size={18} /></button>

                            <button onClick={async () => {
                                setVerticalAlign("-")
                                await handleChanges('verticalAlign', '-')
                            }}><MinusSquare size={18} /></button>

                        </div>

                        <label className='font-semibold '>Margin</label>
                        <div className='border relative ' style={{
                            height: "150px"
                        }}>
                            <div className='flex gap-3 items-center justify-center absolute bg-gray-100 hover:bg-blue-100 hover:font-semibold top-0 paddingTop w-full' >
                                Top : <input type='number' value={imgMarginTop} onChange={(e: any) => {
                                    setImgMarginTop(e.target.value)
                                    handleChanges('marginTop', e.target.value)
                                }} className='border text-center w-12 rounded' />
                            </div>

                            <div className='flex gap-3 items-center justify-center paddingBottom absolute bottom-0 bg-gray-100 hover:font-semibold hover:bg-blue-100' >
                                Bottom : <input type='number' value={imgMarginBottom} onChange={(e: any) => {
                                    setImgMarginBottom(e.target.value)
                                    handleChanges('marginBottom', e.target.value)
                                }} className='border text-center w-12 rounded' />
                            </div>

                            <div className='flex flex-col gap-2 items-center justify-center paddingLeft absolute left-0 top-0 bg-gray-100  hover:font-semibold  text-center  hover:bg-blue-100' style={{
                            }}>  Left: <input type='number' value={imgMarginLeft} onChange={(e: any) => {
                                handleChanges('marginLeft', e.target.value)
                                setImgMarginLeft(e.target.value)
                            }} className='border text-center w-12 rounded' /></div>

                            <div className='flex flex-col gap-2 items-center justify-center paddingRight bg-gray-100 hover:font-semibold hover:bg-blue-100 absolute right-0' style={{
                            }}>
                                Right: <input type='number' value={imgMarginRight} onChange={(e: any) => {
                                    handleChanges('marginRight', e.target.value)
                                    setImgMarginRight(e.target.value)
                                }} className='border text-center w-12 rounded' />
                            </div>
                        </div>

                        <label className='font-semibold '>Padding</label>

                        <div className='border relative text-xs bg-white' style={{
                            height: "150px"
                        }}>
                            <div className='flex gap-3 items-center justify-center absolute bg-gray-100 hover:bg-blue-100 hover:font-semibold top-0 paddingTop w-full' >
                                Top : <input type='number' value={imgPaddingTop} onChange={(e: any) => {
                                    setImgPaddingTop(e.target.value)
                                    handleChanges('paddingTop', e.target.value)
                                }} className='border text-center w-12 rounded' />
                            </div>

                            {/* Margin */}

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

                        {/* <div className='flex justify-end gap-2 text-xs'>
                                <button className='btn-primary'>Save</button>
                                <button className='btn-danger' onClick={() => {
                                    closeControls()
                                }}>Cancel</button>
                            </div> */}
                    </div>
                </motion.div >
            )
        } catch (ERR) {
            console.log(ERR)
        }
    }

    const verticallyCentered = {
        gridRow: `span ${rowSpan}`,
        gridColumn: `span ${columnSpan}`,
        display: 'grid',
        marginTop: `auto`,
        marginBottom: `auto`,
    }
    const toTop = {
        gridRow: `span ${rowSpan}`,
        gridColumn: `span ${columnSpan}`,
        display: 'grid',
        marginTop: ``,
        marginBottom: `auto`,
    }

    const toBottom = {
        gridRow: `span ${rowSpan}`,
        gridColumn: `span ${columnSpan}`,
        display: 'grid',
        marginTop: `auto`,
        marginBottom: ``,
    }
    const toDefault = {
        gridRow: `span ${rowSpan}`,
        gridColumn: `span ${columnSpan}`,
        display: 'grid',
    }

    const renderPositionStyle = () => {
        switch (verticalAlign) {
            case 'center':
                return verticallyCentered
                break;
            case 'top':
                return toTop
                break;
            case 'bottom':
                return toBottom
                break;
            default:
                return toDefault
                break;
        }
    }

    return (
        <div key={elementIndex} className='w-full' style={
            renderPositionStyle()
            //     {
            //     gridRow: `span ${rowSpan}`,
            //     gridColumn: `span ${columnSpan}`,
            //     display: 'grid',
            //     marginTop: `${verticalAlign === "bottom" ? "auto" : ""}`,
            //     marginBottom: `${verticalAlign === "top" ? "auto" : ""}`,
            // }
        }>

            {
                showControls &&
                <div className='fixed right-0 top-0 z-40 h-screen w-full bg-black bg-opacity-10' ref={constraintsRef}>
                    {renderDialog()}
                    <div className='fixed top-0 left-0 h-full w-full  opacity-0' onClick={() => {
                        setShowControls(false)
                    }}></div>
                </div>
            }

            {
                showImageSelect &&
                <SelectFile selectedFile={image} handleChanges={handleChanges} filepath={'url'} setSelectedFile={setImage} setShowModal={setShowImageSelect} showModal={showImageSelect} accept='image' />
            }

            <div className={` ${isPreview ? "" : "group"}  relative `} style={{
                zIndex: 2,

            }}>
                <div className={` ${isPreview ? "" : "group"} absolute z-20 top-0  gap-3 group-hover:flex hidden p-2 font-semibold`}>
                    {/* <button onClick={() => setShowControls(true)} className='bg-blue-400 p-2'>Settings</button> */}
                    <button className='btn-danger text-xs' onClick={() => {
                        removeElement()
                    }}><Trash size={12} /></button>
                    {
                        image &&
                        <button title='Replace Image' onClick={() => {
                            setShowImageSelect(true)
                        }} className=' btn-primary text-xs'><Replace size={12} /></button>
                    }
                    {
                        elementIndex != 0 &&
                        <button title='Move Up' className=' !p-1 btn-primary ' onClick={(e) => {
                            e.stopPropagation()
                            confirmReOrder('up')
                        }}><ArrowUp size={12} /></button>
                    }

                    {
                        selectedElements.length != (elementIndex + 1) &&
                        <button title='Move Down' className=' !p-1 btn-primary ' onClick={(e) => {
                            e.stopPropagation()
                            confirmReOrder('down')
                        }}><ArrowDown size={12} /> </button>

                    }
                </div>
                {
                    !image ?
                        <div className={`grid place-items-center   border hover:border-gray-300  ${showControls ? 'border-gray-300' : "border-transparent"}`}>
                            <button className='flex flex-col justify-center items-center' onClick={() => {
                                setShowImageSelect(true)
                            }}>
                                <ImagePlus size={100} />
                                Click To Add Image
                            </button>
                        </div>
                        :
                        <div role={!isPreview ? "button" : undefined} onClick={() => {
                            if (!isPreview) {
                                setShowControls(true)
                            }
                        }
                        } className={`grid ${imgPlacement ? `justify-${imgPlacement}` : `justify-start`}   ${showControls ? 'border-gray-300' : "border-transparent"} ${!isPreview && "border"} hover:border-gray-300 border-transparent`}>
                            <img style={styles} className={` group-hover:opacity-30 ${showControls ? 'opacity-30' : ""}`}
                                src={`${process.env.NEXT_PUBLIC_IMG_URL}${image?.path}`} />
                        </div>
                }
            </div>

        </div >
    )
}

export default Image