import { AlignCenter, AlignCenterHorizontal, AlignLeft, AlignRight, ArrowDown, ArrowDownToLine, ArrowUp, ArrowUpToLine, Bold, GripHorizontal, Italic, Minus, MinusSquare, Strikethrough, Trash, Underline, X } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'
import PageBuilderSideBar from '../pagebuilder_side_controls/PageBuilderSideBar'
import { useDispatch } from 'react-redux'
import { setSelectedElement } from '@/redux/features/CustomStyleSlice'
import { useAppSelector } from '@/redux/store'
import { motion, useDragControls } from "framer-motion"
import { debounce } from 'lodash'

function Text({ value, elementIndex, selectedElements, setSelectedElements, saveGrid }: { value: any, elementIndex: number, selectedElements: any, setSelectedElements: any, saveGrid: any }) {

    const dispatch = useDispatch()
    const selectedElement = useAppSelector((state) => state.customStyleSlice.selectedElement)
    const controls = useDragControls()
    const isPreview = useAppSelector((state) => state.customStyleSlice.isPreview)
    const [showControls, setShowControls] = useState<boolean>(false)

    const breakpoint = useAppSelector((state) => state.customStyleSlice.breakpoint)

    const constraintsRef = useRef(null);

    // const constraintsRef = useAppSelector((state) => state.customStyleSlice.constraintsRef)

    const [hasBackground, setHasBackground] = useState<boolean>(value.styles?.[breakpoint]?.hasBackground ? value.styles?.[breakpoint]?.hasBackground : false)

    const [text, setText] = useState<string>(value.styles?.[breakpoint]?.content ? value.styles?.[breakpoint]?.content : "")
    const [textStyle, setTextStyle] = useState<string>(value.styles?.[breakpoint]?.fontStyle ? value.styles?.[breakpoint]?.fontStyle : "")
    const [fontWeight, setTextWeight] = useState<string>(value.styles?.[breakpoint]?.fontWeight ? value.styles?.[breakpoint]?.fontWeight : '400')
    const [animationStyle, setAnimationStyle] = useState<string>(value.styles?.[breakpoint]?.animation ? value.styles?.[breakpoint]?.animation : 'none')
    const [textAlign, setAlign] = useState<CanvasTextAlign>(value.styles?.[breakpoint]?.textAlign ? value.styles?.[breakpoint]?.textAlign : 'start')
    const [fontSize, setTextSize] = useState<number>(value.styles?.[breakpoint]?.fontSize ? value.styles?.[breakpoint]?.fontSize : 16)
    const [textHeight, setTextHeight] = useState<string>(value.styles?.[breakpoint]?.height ? value.styles?.[breakpoint]?.height : "100%")
    const [textWidth, setTextWidth] = useState<string>(value.styles?.[breakpoint]?.width ? value.styles?.[breakpoint]?.width : '100%')
    // const [textPadding, setTextPadding] = useState<string>()

    const [paddingTop, setTextPaddingTop] = useState<number>(value.styles?.[breakpoint]?.paddingTop ? value.styles?.[breakpoint]?.paddingTop : 0)
    const [paddingBottom, setTextPaddingBottom] = useState<number>(value.styles?.[breakpoint]?.paddingBottom ? value.styles?.[breakpoint]?.paddingBottom : 0)
    const [paddingLeft, setTextPaddingLeft] = useState<number>(value.styles?.[breakpoint]?.paddingLeft ? value.styles?.[breakpoint]?.paddingLeft : 0)
    const [paddingRight, setTextPaddingRight] = useState<number>(value.styles?.[breakpoint]?.paddingRight ? value.styles?.[breakpoint]?.paddingRight : 0)
    const [marginTop, setTextMarginTop] = useState<number>(value.styles?.[breakpoint]?.marginTop ? value.styles?.[breakpoint]?.marginTop : 0)
    const [marginBottom, setTextMarginBottom] = useState<number>(value.styles?.[breakpoint]?.marginBottom ? value.styles?.[breakpoint]?.marginBottom : 0)
    const [marginLeft, setTextMarginLeft] = useState<number>(value.styles?.[breakpoint]?.marginLeft ? value.styles?.[breakpoint]?.marginLeft : 0)
    const [marginRight, setTextMarginRight] = useState<number>(value.styles?.[breakpoint]?.marginRight ? value.styles?.[breakpoint]?.marginRight : 0)

    const [lineHeight, setTextLineHeight] = useState<number>(value.styles?.[breakpoint]?.lineHeight ? value.styles?.[breakpoint]?.lineHeight : 22)
    const [lineHeightType, setTextLineHeightType] = useState<string>(value.styles?.[breakpoint]?.lineHeightType ? value.styles?.[breakpoint]?.lineHeightType : 'normal')
    const [textDecoration, setTextDecoration] = useState<string>(value.styles?.[breakpoint]?.textDecoration ? value.styles?.[breakpoint]?.textDecoration : "")
    const [textFont, setTextFont] = useState<string>(value.styles?.[breakpoint]?.textFont ? value.styles?.[breakpoint]?.textFont : '')
    const [textColor, setTextColor] = useState<string>(value.styles?.[breakpoint]?.color ? value.styles?.[breakpoint]?.color : '#000000')

    const [rowSpan, setRowSpan] = useState<string>(value.styles?.[breakpoint]?.rowSpan ? value.styles?.[breakpoint]?.rowSpan : '1')
    const [columnSpan, setColumnSpan] = useState<string>(value.styles?.[breakpoint]?.columnSpan ? value.styles?.[breakpoint]?.columnSpan : '1')
    const [verticalAlign, setVerticalAlign] = useState<string>(value.styles?.[breakpoint]?.verticalAlign ? value.styles?.[breakpoint]?.verticalAlign : '-')

    const [backgroundColor, setBackgroundColor] = useState<string>(value.styles?.[breakpoint]?.backgroundColor ? value.styles?.[breakpoint]?.backgroundColor : '')

    useEffect(() => {
        setTextStyle(value.styles?.[breakpoint]?.fontStyle ? value.styles?.[breakpoint]?.fontStyle : "")
        setText(value.styles?.[breakpoint]?.content ? value.styles?.[breakpoint]?.content : "")
        setTextWeight(value.styles?.[breakpoint]?.fontWeight ? value.styles?.[breakpoint]?.fontWeight : '400')
        setAnimationStyle(value.styles?.[breakpoint]?.animation ? value.styles?.[breakpoint]?.animation : 'none')
        setAlign(value.styles?.[breakpoint]?.textAlign ? value.styles?.[breakpoint]?.textAlign : 'start')
        setTextSize(value.styles?.[breakpoint]?.fontSize ? value.styles?.[breakpoint]?.fontSize : 16)
        setTextHeight(value.styles?.[breakpoint]?.height ? value.styles?.[breakpoint]?.height : "100%")
        setTextWidth(value.styles?.[breakpoint]?.width ? value.styles?.[breakpoint]?.width : '100%')
        // setTextPadding()
        setTextPaddingTop(value.styles?.[breakpoint]?.paddingTop ? value.styles?.[breakpoint]?.paddingTop : 0)
        setTextPaddingBottom(value.styles?.[breakpoint]?.paddingBottom ? value.styles?.[breakpoint]?.paddingBottom : 0)
        setTextPaddingLeft(value.styles?.[breakpoint]?.paddingLeft ? value.styles?.[breakpoint]?.paddingLeft : 0)
        setTextPaddingRight(value.styles?.[breakpoint]?.paddingRight ? value.styles?.[breakpoint]?.paddingRight : 0)
        setTextMarginTop(value.styles?.[breakpoint]?.marginTop ? value.styles?.[breakpoint]?.marginTop : 0)
        setTextMarginBottom(value.styles?.[breakpoint]?.marginBottom ? value.styles?.[breakpoint]?.marginBottom : 0)
        setTextMarginLeft(value.styles?.[breakpoint]?.marginLeft ? value.styles?.[breakpoint]?.marginLeft : 0)
        setTextMarginRight(value.styles?.[breakpoint]?.marginRight ? value.styles?.[breakpoint]?.marginRight : 0)

        setTextLineHeight(value.styles?.[breakpoint]?.lineHeight ? value.styles?.[breakpoint]?.lineHeight : 22)
        setTextLineHeightType(value.styles?.[breakpoint]?.lineHeightType ? value.styles?.[breakpoint]?.lineHeightType : 'normal')
        setTextDecoration(value.styles?.[breakpoint]?.textDecoration ? value.styles?.[breakpoint]?.textDecoration : "")
        setTextFont(value.styles?.[breakpoint]?.textFont ? value.styles?.[breakpoint]?.textFont : '')
        setTextColor(value.styles?.[breakpoint]?.color ? value.styles?.[breakpoint]?.color : '#000000')

        setRowSpan(value?.styles?.[breakpoint]?.rowSpan ? value?.styles?.[breakpoint]?.rowSpan : '1')
        setColumnSpan(value?.styles?.[breakpoint]?.columnSpan ? value?.styles?.[breakpoint]?.columnSpan : '1')
        setVerticalAlign(value.styles?.[breakpoint]?.verticalAlign ? value.styles?.[breakpoint]?.verticalAlign : '-')

        setBackgroundColor(value.styles?.[breakpoint]?.backgroundColor ? value.styles?.[breakpoint]?.backgroundColor : '')
        setHasBackground(value.styles?.[breakpoint]?.hasBackground ? value.styles?.[breakpoint]?.hasBackground : '')
    }, [breakpoint])

    // console.log(value.styles)
    // const handleChanges = async (name: any, value: any) => {

    //     const newElements = selectedElements.map((element: any, index: number) => {
    //         if (index !== elementIndex) {
    //             return element; // Return unchanged elements
    //         }


    //         // Make a deep copy of the element to avoid mutating state directly
    //         return {
    //             ...element,
    //             styles: {
    //                 ...element.styles,
    //                 [breakpoint]: {
    //                     ...element.styles[breakpoint],
    //                     [name]: value, // Update the specified style property
    //                 }
    //             },
    //         };
    //     });

    //     // const newElements: any[] = selectedElements;

    //     // // Split the property name by dot (.) to access nested properties
    //     // const properties = name.split('.');
    //     // let target = newElements[elementIndex];
    //     // // Traverse the nested structure until the second-to-last property
    //     // for (let i = 0; i < properties.length - 1; i++) {
    //     //     target = target[properties[i]];
    //     // }



    //     // // Update the value of the last property
    //     // target[properties[properties.length - 1]] = value;

    //     // console.log('newElements', newElements[elementIndex])
    //     await setSelectedElements(newElements);

    //     saveGrid(newElements)


    //     // Further logic with newElements
    // }

    const handleChanges = async (name: string, value: string | boolean) => {

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

            // if (name === "content") {
            //     return {
            //         ...element,
            //         [name]: value,
            //         styles: {
            //             ...updatedStyles,
            //         }
            //     };
            // }

            // Update styles for smaller breakpoints if they don't have the property already
            for (let i = 0; i < breakpointList.length; i++) {
                const smallerBreakpoint = breakpointList[i];
                if (smallerBreakpoint < breakpoint
                    // && !updatedStyles[smallerBreakpoint]?.hasOwnProperty(name)
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
    };

    const handleChangeDebounced = debounce((name, value) => {
        handleChanges(name, value);
    }, 700); // Adjust the delay time as needed

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

    const styles = {
        fontStyle: textStyle,
        fontWeight: fontWeight,
        textAlign: textAlign,
        textDecoration: textDecoration,
        fontSize: fontSize,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
        lineHeight: lineHeight,
        color: textColor,
        backgroundColor: backgroundColor,
        height: textHeight,
        width: textWidth
    }

    // const handleStop = (event: any, dragElement: any) => {
    //     console.log(dragElement)
    // };

    const renderDialog = () => {
        try {
            return (
                <motion.div dragMomentum={false} dragListener={false} dragControls={controls} drag dragConstraints={constraintsRef} className='p-5 z-10 bg-white right-0 fixed w-fit shadow-lg text-xs border max-h-screen overflow-auto'
                // onStop={handleStop}
                // handle='.handle'
                // defaultPosition={{ x: 0, y: 0 }}
                >
                    <div className='flex justify-between items-center mb-3 '>
                        <label className='font-semibold'></label>
                        <button onPointerDown={(e) => {
                            controls.start(e)
                        }} className='handle select-none cursor-move'><GripHorizontal /></button>
                        <button onClick={() => {
                            setShowControls(false)
                        }}>
                            <X size={16} />
                        </button>
                    </div>
                    <div className='grid gap-2'>
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
                        <div className=''>
                            <label className='font-semibold'>
                                Text :
                            </label>
                            <textarea placeholder='Place Your Text Here' defaultValue={text} onChange={(e: any) => {
                                handleChangeDebounced('content', e.target.value)
                                setText(e.target.value)
                            }} className='border w-full p-1 rounded' />
                        </div>

                        <label className='font-semibold '>Font:</label>

                        <div className='flex gap-3 items-center'>

                            <input type='number' value={fontSize} onChange={(e: any) => {
                                setTextSize(e.target.value)
                                handleChanges('fontSize', e.target.value)

                            }} className='border w-12 p-1 rounded  font-semibold' />

                            <div className='border rounded flex items-center gap-3 p-1'>
                                <button className='' onClick={() => {
                                    setTextStyle("normal")
                                    handleChanges('fontStyle', 'normal')
                                }}><Minus size={17} /></button>

                                <button className='' onClick={() => {
                                    setTextStyle("italic")
                                    handleChanges('fontStyle', 'italic')
                                }}><Italic size={17} /></button>
                            </div>

                            <div className='border rounded flex items-center gap-3 p-1'>
                                <button onClick={() => {
                                    setAlign("start")
                                    handleChanges('textAlign', 'start')
                                }}><AlignLeft size={18} /></button>
                                <button onClick={() => {
                                    setAlign("center")
                                    handleChanges('textAlign', 'center')
                                }}><AlignCenter size={18} /></button>
                                <button onClick={() => {
                                    setAlign("end")
                                    handleChanges('textAlign', 'end')
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
                        </div>

                        <div className=' flex items-center gap-3'>
                            <input type='color' value={textColor} onChange={(e: any) => {
                                setTextColor(e.target.value)
                                handleChanges('color', e.target.value)

                            }} className='w-6' /> {textColor}
                        </div>

                        <div className='flex items-center gap-3'>

                            <label className='flex gap-2 w-fit  font-semibold'>
                                <input type='checkbox' defaultChecked={hasBackground} onChange={(e) => {
                                    setHasBackground(e.target.checked)
                                    handleChanges('hasBackground', e.target.checked)
                                }} />
                                Background
                            </label>

                            {
                                hasBackground &&

                                <input type='color' value={backgroundColor} onChange={(e: any) => {
                                    setBackgroundColor(e.target.value)
                                    handleChanges('backgroundColor', e.target.value)

                                }} className=' w-6' />
                            }

                            {hasBackground && backgroundColor}
                        </div>

                        <div className=' flex items-center gap-3'>
                            <label className=' font-semibold'>Height</label>
                            <select className='border' value={textHeight} onChange={(e: any) => {
                                setTextHeight(e.target.value)
                                handleChanges('height', e.target.value)
                            }}>
                                <option value={"100%"}>Full</option>
                                <option value={"fit-content"}>Auto</option>
                            </select>
                        </div>
                        <div className=' flex items-center gap-3'>
                            <label className=' font-semibold'>Width</label>
                            <select className='border' value={textWidth} onChange={(e: any) => {
                                setTextWidth(e.target.value)
                                handleChanges('width', e.target.value)
                            }}>
                                <option value={"100%"}>Full</option>
                                <option value={"fit-content"}>Auto</option>
                            </select>

                        </div>

                        <div className='flex gap-4   items-center'>
                            <label className='font-semibold'>
                                Decoration :
                            </label>
                            <div className='w-fit border rounded flex items-center gap-3 p-1'>
                                <button onClick={() => {
                                    setTextDecoration("none")
                                    handleChanges('textDecoration', 'none')
                                }}><Minus size={17} /></button>
                                <button onClick={() => {
                                    setTextDecoration("underline")
                                    handleChanges('textDecoration', 'underline')
                                }}><Underline size={17} /></button>
                                <button onClick={() => {
                                    setTextDecoration("line-through")
                                    handleChanges('textDecoration', 'line-through')
                                }}><Strikethrough size={17} /></button>
                            </div>
                        </div>


                        <div className=' flex gap-3 items-center'>
                            <label className='font-semibold'>
                                Line Spacing :
                            </label>
                            <select className='border' value={lineHeightType} onChange={(e: any) => {
                                setTextLineHeightType(e.target.value)
                                handleChanges('lineHeightType', e.target.value)
                            }}>
                                <option value={"normal"}>Auto</option>
                                <option value={"custom"}>custom</option>
                            </select>
                            {
                                lineHeightType === "custom" &&
                                <input type='number' value={lineHeight} onChange={(e: any) => {
                                    setTextLineHeight(e.target.value)
                                    handleChanges('lineHeight', e.target.value)
                                }} className='border w-12' />
                            }
                        </div>

                        <div className=' flex gap-3'>
                            <label className='font-semibold'>
                                Font Weight :
                            </label>

                            <select className='border' value={fontWeight} onChange={(e: any) => {
                                setTextWeight(e.target.value)
                                handleChanges('fontWeight', e.target.value)
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
                        <div className=' flex gap-3'>
                            <label className='font-semibold'>
                                Animation Style :
                            </label>

                            <select className='border' value={animationStyle} onChange={(e: any) => {
                                setAnimationStyle(e.target.value)
                                handleChanges('animation', e.target.value)
                            }}>
                                <option value={"btt"}>Bottom To Top</option>
                                <option value={"ttb"}>Top To Bottom</option>
                                <option value={"ltr"}>Left to Right</option>
                                <option value={"rtl"}>Right to Left</option>
                                <option value={"fadeIn"}>Fade In</option>
                                <option value={"small2big"}>Small to Big</option>
                                <option value={"big2small"}>Big To Small</option>
                            </select>
                        </div>

                        <label className='font-semibold '>Padding</label>
                        <div className='border relative ' style={{
                            height: "150px"
                        }}>
                            <div className='flex gap-3 items-center justify-center absolute bg-gray-100 hover:bg-blue-100 hover:font-semibold top-0 paddingTop w-full' >
                                Top : <input type='number' value={paddingTop} onChange={(e: any) => {
                                    setTextPaddingTop(e.target.value)
                                    handleChanges('paddingTop', e.target.value)
                                }} className='border text-center w-12 rounded' />
                            </div>

                            <div className='flex gap-3 items-center justify-center paddingBottom absolute bottom-0 bg-gray-100 hover:font-semibold hover:bg-blue-100' >
                                Bottom : <input type='number' value={paddingBottom} onChange={(e: any) => {
                                    setTextPaddingBottom(e.target.value)
                                    handleChanges('paddingBottom', e.target.value)
                                }} className='border text-center w-12 rounded' />
                            </div>

                            <div className='flex flex-col gap-2 items-center justify-center paddingLeft absolute left-0 top-0 bg-gray-100  hover:font-semibold  text-center  hover:bg-blue-100' style={{
                            }}>  Left: <input type='number' value={paddingLeft} onChange={(e: any) => {
                                handleChanges('paddingLeft', e.target.value)
                                setTextPaddingLeft(e.target.value)
                            }} className='border text-center w-12 rounded' /></div>

                            <div className='flex flex-col gap-2 items-center justify-center paddingRight bg-gray-100 hover:font-semibold hover:bg-blue-100 absolute right-0' style={{
                            }}>
                                Right: <input type='number' value={paddingRight} onChange={(e: any) => {
                                    handleChanges('paddingRight', e.target.value)
                                    setTextPaddingRight(e.target.value)
                                }} className='border text-center w-12 rounded' />
                            </div>
                        </div>

                        {/* Margin */}
                        <label className='font-semibold '>Margin</label>
                        <div className='border relative ' style={{
                            height: "150px"
                        }}>
                            <div className='flex gap-3 items-center justify-center absolute bg-gray-100 hover:bg-blue-100 hover:font-semibold top-0 paddingTop w-full' >
                                Top : <input type='number' value={marginTop} onChange={(e: any) => {
                                    setTextMarginTop(e.target.value)
                                    handleChanges('marginTop', e.target.value)
                                }} className='border text-center w-12 rounded' />
                            </div>

                            <div className='flex gap-3 items-center justify-center paddingBottom absolute bottom-0 bg-gray-100 hover:font-semibold hover:bg-blue-100' >
                                Bottom : <input type='number' value={marginBottom} onChange={(e: any) => {
                                    setTextMarginBottom(e.target.value)
                                    handleChanges('marginBottom', e.target.value)
                                }} className='border text-center w-12 rounded' />
                            </div>

                            <div className='flex flex-col gap-2 items-center justify-center paddingLeft absolute left-0 top-0 bg-gray-100  hover:font-semibold  text-center  hover:bg-blue-100' style={{
                            }}>  Left: <input type='number' value={marginLeft} onChange={(e: any) => {
                                handleChanges('marginLeft', e.target.value)
                                setTextMarginLeft(e.target.value)
                            }} className='border text-center w-12 rounded' /></div>

                            <div className='flex flex-col gap-2 items-center justify-center paddingRight bg-gray-100 hover:font-semibold hover:bg-blue-100 absolute right-0' style={{
                            }}>
                                Right: <input type='number' value={marginRight} onChange={(e: any) => {
                                    handleChanges('marginRight', e.target.value)
                                    setTextMarginRight(e.target.value)
                                }} className='border text-center w-12 rounded' />
                            </div>
                        </div>


                        {/* <div className='flex justify-end gap-2 '>
                                <button className='btn-primary' onClick={() => {
                                    closeControls()
                                }}>Save</button>
                                <button className='btn-danger' onClick={() => {
                                    closeControls()
                                }}>Cancel</button>
                            </div> */}
                    </div>
                </motion.div>
            )
        } catch (ERR) {
            console.log(ERR)
        }
    }


    const handleControls = () => {
        setShowControls(true)
    }


    const verticallyCentered = {
        gridRow: `span ${rowSpan}`,
        gridColumn: `span ${columnSpan}`,
        display: 'grid',
        marginTop: `auto`,
        marginBottom: `auto`,
        width: textWidth,

    }
    const toTop = {
        width: textWidth,
        gridRow: `span ${rowSpan}`,
        gridColumn: `span ${columnSpan}`,
        display: 'grid',
        marginTop: ``,
        marginBottom: `auto`,
    }

    const toBottom = {
        width: textWidth,
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
        <div key={elementIndex} className='w-full' style={renderPositionStyle()} >
            {
                (selectedElement.id === value?.id && showControls) &&
                <div className='fixed right-0 top-0 z-40 h-screen w-full bg-black bg-opacity-10' ref={constraintsRef}>
                    {renderDialog()}
                    <div className='fixed top-0 left-0 h-full w-full z-0 opacity-0' onClick={() => {
                        setShowControls(false)
                    }}></div>
                </div>
            }

            <div className={`${!isPreview && 'hover:border hover:bg-gray-100 group'}  relative`} style={{ zIndex: 2 }}>
                <div className='hidden  group-hover:flex z-50 text-xs absolute right-0 -top-2 gap-0.5'>
                    <button className='btn-danger !p-1' onClick={() => {
                        removeElement()
                    }}>
                        <Trash size={12} />
                    </button>
                    {
                        elementIndex != 0 &&
                        <button className=' !p-1 btn-primary ' onClick={(e) => {
                            e.stopPropagation()
                            confirmReOrder('up')
                        }}><ArrowUp size={12} /></button>
                    }

                    {
                        selectedElements.length != (elementIndex + 1) &&
                        <button className=' !p-1 btn-primary ' onClick={(e) => {
                            e.stopPropagation()
                            confirmReOrder('down')
                        }}><ArrowDown size={12} /> </button>

                    }
                </div>

                <div className={`whitespace-pre ${!isPreview && 'group-hover:!text-black cursor-pointer group'}  ${textFont === 'default' ? "" : textFont} ${(selectedElement.id === value?.id && showControls) ? "border" : ""}`} onClick={() => {
                    if (!isPreview) {
                        dispatch(setSelectedElement(value))
                        handleControls()
                    }
                }} style={{
                    fontStyle: textStyle,
                    fontWeight: fontWeight,
                    textAlign: textAlign,
                    textDecoration: textDecoration,
                    fontSize: `${fontSize}px`,
                    paddingTop: `${paddingTop}px`,
                    paddingBottom: `${paddingBottom}px`,
                    paddingLeft: `${paddingLeft}px`,
                    paddingRight: `${paddingRight}px`,
                    marginTop: `${marginTop}px`,
                    marginBottom: `${marginBottom}px`,
                    marginLeft: `${marginLeft}px`,
                    marginRight: `${marginRight}px`,
                    lineHeight: lineHeightType === 'custom' ? `${lineHeight}px` : 'normal',
                    color: textColor,
                    width: textWidth,
                    backgroundColor: hasBackground ? backgroundColor : '',
                    height: textHeight,
                }}>

                    {text ? text : "Place Your Text Here"}
                </div>
            </div>

        </div >
    )
}

export default Text