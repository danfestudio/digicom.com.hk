import { ArrowDown, ArrowUp, Columns, Grid2X2, GripHorizontal, ImageIcon, ImageMinus, Plus, PlusCircle, Settings, Trash, X, XCircle } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import CustomElements from '../custom_styles/CustomElements'
import toast from 'react-hot-toast'
import Text from '../admin_ui_elements/Text'
import Image from '../admin_ui_elements/Image'
import SelectFile from '../media/SelectFile'
import Gradientpicker from '../ColorPickers/Gradientpicker'
import Swal from 'sweetalert2'
import { motion, useDragControls } from "framer-motion"
import { useAppSelector } from '@/redux/store'

function SingleComponent({ data, gridIndex, setGrids, grids, saveSection }: { data: any, gridIndex: number, setGrids: any, grids: any, saveSection: any }) {

    const breakpoint = useAppSelector((state) => state.customStyleSlice.breakpoint)

    // console.log('data.styles', data?.styles)

    const [tempStyle, setTempStyle] = useState(data?.styles?.[breakpoint])

    useEffect(() => {
        setGridPadding(data?.styles?.[breakpoint]?.padding ? data?.styles?.[breakpoint]?.padding : 0)
        setGridHeight(data?.styles?.[breakpoint]?.height ? data?.styles?.[breakpoint]?.height : 500)
        setGridHeightType(data?.styles?.[breakpoint]?.gridHeightType ? data?.styles?.[breakpoint]?.gridHeightType : 'custom')
        setGridWidth(data?.styles?.[breakpoint]?.width ? data?.styles?.[breakpoint]?.width : 500)
        setGridWidthType(data?.styles?.[breakpoint]?.gridWidthType ? data?.styles?.[breakpoint]?.gridWidthType : 'custom')
        setRowSpan(data?.styles?.[breakpoint]?.rowSpan ? data?.styles?.[breakpoint]?.rowSpan : '1')
        setGridOverflow(data?.styles?.[breakpoint]?.gridOverflow ? data?.styles?.[breakpoint]?.gridOverflow : 'overflow-visible')
        setContentPlacement(data?.styles?.[breakpoint]?.contentPlacement ? data?.styles?.[breakpoint]?.contentPlacement : 'mx-auto')
        setGridBackgroundImg(data?.styles?.[breakpoint]?.backgroundImage ? data?.styles?.[breakpoint]?.backgroundImage : "")
        setBgColor(data?.styles?.[breakpoint]?.backgroundColor ? data?.styles?.[breakpoint]?.backgroundColor : '')
        setHasBackground(data?.styles?.[breakpoint]?.hasBackground ? data?.styles?.[breakpoint]?.hasBackground : false)
        setDisplay(data?.styles?.[breakpoint]?.display ? data?.styles?.[breakpoint]?.display : 'flex')
        setBackgroundSize(data?.styles?.[breakpoint]?.backgroundSize ? data?.styles?.[breakpoint]?.backgroundSize : 'cover')
        setFlexDirection(data?.styles?.[breakpoint]?.flexDirection ? data?.styles?.[breakpoint]?.flexDirection : 'column')
        setAlignItems(data?.styles?.[breakpoint]?.alignItems ? data?.styles?.[breakpoint]?.alignItems : 'start')
        setJustifyContent(data?.styles?.[breakpoint]?.justifyContent ? data?.styles?.[breakpoint]?.justifyContent : 'start')
        setGap(data?.styles?.[breakpoint]?.gap ? data?.styles?.[breakpoint]?.gap : 1)
        setGridCols(data?.styles?.[breakpoint]?.gridCols ? data?.styles?.[breakpoint]?.gridCols : 1)
        setBorderTop(data?.styles?.[breakpoint]?.borderTop ? data?.styles?.[breakpoint]?.borderTop : 0)
        setBorderBottom(data?.styles?.[breakpoint]?.borderBottom ? data?.styles?.[breakpoint]?.borderBottom : 0)
        setBorderLeft(data?.styles?.[breakpoint]?.borderLeft ? data?.styles?.[breakpoint]?.borderLeft : 0)
        setBorderRight(data?.styles?.[breakpoint]?.borderRight ? data?.styles?.[breakpoint]?.borderRight : 0)
        setTextPaddingTop(data?.styles?.[breakpoint]?.paddingTop ? data?.styles?.[breakpoint]?.paddingTop : 0)
        setTextPaddingBottom(data?.styles?.[breakpoint]?.paddingBottom ? data?.styles?.[breakpoint]?.paddingBottom : 0)
        setTextPaddingLeft(data?.styles?.[breakpoint]?.paddingLeft ? data?.styles?.[breakpoint]?.paddingLeft : 0)
        setTextPaddingRight(data?.styles?.[breakpoint]?.paddingRight ? data?.styles?.[breakpoint]?.paddingRight : 0)
        setRadiusTopLeft(data?.styles?.[breakpoint]?.radiusTopLeft ? data?.styles?.[breakpoint]?.radiusTopLeft : 0)
        setRadiusTopRight(data?.styles?.[breakpoint]?.radiusTopRight ? data?.styles?.[breakpoint]?.radiusTopRight : 0)
        setRadiusBottomLeft(data?.styles?.[breakpoint]?.radiusBottomLeft ? data?.styles?.[breakpoint]?.radiusBottomLeft : 0)
        setRadiusBottomRight(data?.styles?.[breakpoint]?.radiusBottomRight ? data?.styles?.[breakpoint]?.radiusBottomRight : 0)
        setColumnSpan(data?.styles?.[breakpoint]?.columnSpan ? data?.styles?.[breakpoint]?.columnSpan : '1')
    }, [breakpoint])

    const isPreview = useAppSelector((state) => state.customStyleSlice.isPreview)

    const [selectedElements, setSelectedElements] = useState(data?.elements ? data?.elements : [])
    const controls = useDragControls()
    const [showElements, setShowElements] = useState<boolean>(false)
    const [hasOverlay, setHasOverlay] = useState<boolean>(data?.hasOverlay ? data?.hasOverlay : false)
    const [showgridBackgroundSelect, setShowGridBackgroundSelect] = useState<boolean>(false)
    const [overlayColor, setOverlayColor] = useState<string>(data?.overlayColor ? data?.overlayColor : '')

    const [showBgControls, setShowBgControls] = useState<boolean>(false)

    const [gridPadding, setGridPadding] = useState<number>(data?.styles?.[breakpoint]?.padding ? data?.styles?.[breakpoint]?.padding : 0)
    const [gridHeight, setGridHeight] = useState<number>(data?.styles?.[breakpoint]?.height ? data?.styles?.[breakpoint]?.height : 500)
    const [gridHeightType, setGridHeightType] = useState<string | number>(data?.styles?.[breakpoint]?.gridHeightType ? data?.styles?.[breakpoint]?.gridHeightType : 'custom')
    const [gridWidth, setGridWidth] = useState<string | number>(data?.styles?.[breakpoint]?.width ? data?.styles?.[breakpoint]?.width : 500)
    const [gridWidthType, setGridWidthType] = useState<string>(data?.styles?.[breakpoint]?.gridWidthType ? data?.styles?.[breakpoint]?.gridWidthType : 'custom')
    const [rowSpan, setRowSpan] = useState<string>(data?.styles?.[breakpoint]?.rowSpan ? data?.styles?.[breakpoint]?.rowSpan : '1')

    const [gridOverflow, setGridOverflow] = useState<string>(data?.styles?.[breakpoint]?.gridOverflow ? data?.styles?.[breakpoint]?.gridOverflow : 'overflow-visible')

    const [contentPlacement, setContentPlacement] = useState<string>(data?.styles?.[breakpoint]?.contentPlacement ? data?.styles?.[breakpoint]?.contentPlacement : 'mx-auto')
    const [gridBackgroundImg, setGridBackgroundImg] = useState<any>(data?.styles?.[breakpoint]?.backgroundImage)

    const [bgColor, setBgColor] = useState(data?.styles?.[breakpoint]?.backgroundColor ? data?.styles?.[breakpoint]?.backgroundColor : '')

    const [borderColor, setBorderColor] = useState(data?.styles?.[breakpoint]?.borderColor ? data?.styles?.[breakpoint]?.borderColor : '#000000')

    const [hasBackground, setHasBackground] = useState<boolean>(data?.styles?.[breakpoint]?.hasBackground ? data?.styles?.[breakpoint]?.hasBackground : false)

    const [display, setDisplay] = useState(data?.styles?.[breakpoint]?.display ? data?.styles?.[breakpoint]?.display : 'flex')
    const [backgroundSize, setBackgroundSize] = useState(data?.styles?.[breakpoint]?.backgroundSize ? data?.styles?.[breakpoint]?.backgroundSize : 'cover')
    const [flexDirection, setFlexDirection] = useState<any>(data?.styles?.[breakpoint]?.flexDirection ? data?.styles?.[breakpoint]?.flexDirection : 'column')
    const [alignItems, setAlignItems] = useState(data?.styles?.[breakpoint]?.alignItems ? data?.styles?.[breakpoint]?.alignItems : 'start')
    const [justifyContent, setJustifyContent] = useState(data?.styles?.[breakpoint]?.justifyContent ? data?.styles?.[breakpoint]?.justifyContent : 'start')
    const [gap, setGap] = useState(data?.styles?.[breakpoint]?.gap ? data?.styles?.[breakpoint]?.gap : 1)
    const [gridCols, setGridCols] = useState(data?.styles?.[breakpoint]?.gridCols ? data?.styles?.[breakpoint]?.gridCols : 1)
    const [borderTop, setBorderTop] = useState<number>(data?.styles?.[breakpoint]?.borderTop ? data?.styles?.[breakpoint]?.borderTop : 0)
    const [borderBottom, setBorderBottom] = useState<number>(data?.styles?.[breakpoint]?.borderBottom ? data?.styles?.[breakpoint]?.borderBottom : 0)
    const [borderLeft, setBorderLeft] = useState<number>(data?.styles?.[breakpoint]?.borderLeft ? data?.styles?.[breakpoint]?.borderLeft : 0)
    const [borderRight, setBorderRight] = useState<number>(data?.styles?.[breakpoint]?.borderRight ? data?.styles?.[breakpoint]?.borderRight : 0)

    const [paddingTop, setTextPaddingTop] = useState<number>(data?.styles?.[breakpoint]?.paddingTop ? data?.styles?.[breakpoint]?.paddingTop : 0)
    const [paddingBottom, setTextPaddingBottom] = useState<number>(data?.styles?.[breakpoint]?.paddingBottom ? data?.styles?.[breakpoint]?.paddingBottom : 0)
    const [paddingLeft, setTextPaddingLeft] = useState<number>(data?.styles?.[breakpoint]?.paddingLeft ? data?.styles?.[breakpoint]?.paddingLeft : 0)
    const [paddingRight, setTextPaddingRight] = useState<number>(data?.styles?.[breakpoint]?.paddingRight ? data?.styles?.[breakpoint]?.paddingRight : 0)

    const [radiusTopLeft, setRadiusTopLeft] = useState<number>(data?.styles?.[breakpoint]?.radiusTopLeft ? data?.styles?.[breakpoint]?.radiusTopLeft : 0)
    const [radiusTopRight, setRadiusTopRight] = useState<number>(data?.styles?.[breakpoint]?.radiusTopRight ? data?.styles?.[breakpoint]?.radiusTopRight : 0)
    const [radiusBottomLeft, setRadiusBottomLeft] = useState<number>(data?.styles?.[breakpoint]?.radiusBottomLeft ? data?.styles?.[breakpoint]?.radiusBottomLeft : 0)
    const [radiusBottomRight, setRadiusBottomRight] = useState<number>(data?.styles?.[breakpoint]?.radiusBottomRight ? data?.styles?.[breakpoint]?.radiusBottomRight : 0)
    const [columnSpan, setColumnSpan] = useState<string>(data?.styles?.[breakpoint]?.columnSpan ? data?.styles?.[breakpoint]?.columnSpan : '1')

    // const constraintsRef = useAppSelector((state) => state.customStyleSlice.constraintsRef)
    const constraintsRef = useRef(null)


    // const updateStylesWith320 = (obj) => {
    //     // Function to recursively update styles
    //     // Function to recursively update styles
    //     const updateStyles = (item) => {
    //         if (item.styles) {
    //             if (item.styles[425]) {
    //                 item.styles[320] = { ...item.styles[425] }; // Adding the 320 breakpoint with 425 properties
    //             }
    //         }
    //         // Iterate through the elements if they exist
    //         if (item.elements) {
    //             item.elements.forEach(updateStyles);
    //         }
    //         // Iterate through the components if they exist
    //         if (item.components) {
    //             item.components.forEach(updateStyles);
    //         }
    //     };

    //     // Iterate through the themes in the object
    //     // obj.theme.forEach((theme) => {
    //         updateStyles(obj);
    //     // });

    //     console.log(obj)
    //     // return obj;
    // };


    const handleChanges = async (name: any, value: any) => {

        // console.log(name, value)

        const diffStyle = (display === "grid") ?
            {
                gridCols: gridCols,
            }
            :
            {
                flexDirection: flexDirection,
            }

        const newStyles = {
            ...diffStyle,
            ...data?.styles?.[breakpoint],
            [name]: value
        }

        await setTempStyle(newStyles)

        setTimeout(() => {
            saveGrid(selectedElements, newStyles)
        }, 300)

        // let newStyleElements = gridStyles
        // newStyleElements[breakpoint][name] = value;
        let breakpointList = [
            1440,
            1024,
            768,
            425,
            320
        ]

        // for (let i = 0; i < breakpointList.length; i++) {
        //     const smallerBreakpoint = breakpointList[i];
        //     if (smallerBreakpoint < breakpoint
        //         //  && !newStyleElements[smallerBreakpoint]?.hasOwnProperty(name)
        //     ) {
        //         newStyleElements[smallerBreakpoint] = {
        //             ...newStyleElements[smallerBreakpoint],
        //             [name]: value
        //         };
        //     }
        // }

        // for (let i = 0; i < breakpointList.length; i++) {
        //     const smallerBreakpoint = breakpointList[i];
        //     if (smallerBreakpoint < breakpoint
        //         //  && !newStyleElements[smallerBreakpoint]?.hasOwnProperty(name)
        //         ) {
        //         newStyleElements[smallerBreakpoint] = {
        //             ...newStyleElements[smallerBreakpoint],
        //             [name]: value
        //         };
        //     }
        // }

        // setGridStyles(newStyleElements)
        // // setTimeout(() => {
        // saveSection(sectionsList[sectionListIndex]?.components, gridCols)
        // // }, 500)
    }

    const saveGrid = (updatedSelectedElements: any, newStyles: any) => {

        // Create a copy of selectedElements and update the desired element
        const updatedSelectedGrids = [...grids];
        // let selectedBreakpoint = updatedSelectedGrids[gridIndex].styles[breakpoint]

        // console.log('selectedBreakpoint', breakpoint)
        // console.log('selectedBreakpoint', updatedSelectedGrids[gridIndex].styles)

        // console.log('tempStyle', tempStyle)


        const diffStyle = (display === "grid") ?
            {
                gridCols: gridCols,
            }
            :
            {
                flexDirection: flexDirection,
            }

        // updatedSelectedGrids[gridIndex] = {
        //     ...updatedSelectedGrids[gridIndex],
        //     elements: updatedSelectedElements,
        //     styles: {
        //         ...updatedSelectedGrids[gridIndex].styles,
        //         [breakpoint]: {
        //             ...diffStyle,
        //             display: display,
        //             gridOverflow: gridOverflow,
        //             gridWidth: gridWidth,
        //             gridWidthType: gridWidthType,
        //             contentPlacement: contentPlacement,
        //             gridHeightType: gridHeightType,
        //             radiusTopLeft: radiusTopLeft,
        //             radiusTopRight: radiusTopRight,
        //             radiusBottomLeft: radiusBottomLeft,
        //             radiusBottomRight: radiusBottomRight,
        //             paddingTop: paddingTop,
        //             paddingBottom: paddingBottom,
        //             paddingLeft: paddingLeft,
        //             paddingRight: paddingRight,
        //             borderTop: borderTop,
        //             borderBottom: borderBottom,
        //             borderLeft: borderLeft,
        //             borderRight: borderRight,
        //             backgroundImage: gridBackgroundImg,
        //             backgroundColor: bgColor,
        //             hasBackground: hasBackground,
        //             backgroundRepeat: "no-repeat",
        //             backgroundPosition: "center",
        //             backgroundSize: 'cover',
        //             rowSpan: rowSpan,
        //             columnSpan: columnSpan,
        //             gap: gap,
        //             height: gridHeight,
        //             alignItems: alignItems,
        //             justifyContent: justifyContent,
        //         }

        //     },
        //     hasOverlay: hasOverlay,
        //     overlayColor: overlayColor,
        // };

        // let newStyleElements = updatedSelectedGrids[gridIndex]

        let breakpointList = [
            1440,
            1024,
            768,
            425,
            320
        ]

        // const selectedGridStyle = updatedSelectedGrids[gridIndex]

        if (newStyles) {
            for (let i = 0; i < breakpointList.length; i++) {
                const smallerBreakpoint = breakpointList[i];

                if (smallerBreakpoint <= breakpoint) {
                    updatedSelectedGrids[gridIndex] = {
                        ...updatedSelectedGrids[gridIndex],
                        elements: updatedSelectedElements,
                        styles: {
                            ...updatedSelectedGrids[gridIndex].styles,
                            [smallerBreakpoint]: newStyles ? newStyles : tempStyle
                        }
                        ,
                        hasOverlay: hasOverlay,
                        overlayColor: overlayColor,
                    };
                }
            }
        } else {
            for (let i = 0; i < breakpointList.length; i++) {
                const smallerBreakpoint = breakpointList[i];

                if (smallerBreakpoint <= breakpoint) {
                    updatedSelectedGrids[gridIndex] = {
                        ...updatedSelectedGrids[gridIndex],
                        elements: updatedSelectedElements,
                        hasOverlay: hasOverlay,
                        overlayColor: overlayColor,
                    };
                }
            }
        }

        // console.log('tempStyle', tempStyle)
        // console.log(updatedSelectedGrids)
        // Set the updated array in the state
        setGrids(updatedSelectedGrids);

        // console.log('updatedSelectedGrids', updatedSelectedGrids)

        setTimeout(() => {
            saveSection(updatedSelectedGrids, '')
        }, 200)

    }

    // console.log('grids', grids)


    const confirmReOrder = (move: any) => {
        const array = [...grids];

        if (move === "up") {
            [array[gridIndex], array[gridIndex - 1]] = [array[gridIndex - 1], array[gridIndex]];
            setGrids(array)
        }

        if (move === "down") {
            [array[gridIndex], array[gridIndex + 1]] = [array[gridIndex + 1], array[gridIndex]];
            setGrids(array)
        }

        setTimeout(() => {
            saveSection(array, '')
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
                    let newArray = grids.filter((item: any) => item.id !== data?.id);
                    setGrids(newArray)
                    setTimeout(() => {
                        saveSection(newArray, '')
                    }, 200)

                }
            })
        } catch (ERR) {
            console.log(ERR)
            toast.error('Failed to Delete')
        }
    }

    const renderUIElements = (value: any, index: number) => {
        try {
            switch (value.name) {
                case 'text':
                    return (
                        <Text value={value} elementIndex={index} key={value?.id} selectedElements={selectedElements} setSelectedElements={setSelectedElements} saveGrid={saveGrid} />
                    )
                case 'image':
                    return (
                        <Image value={value} elementIndex={index} key={value?.id} selectedElements={selectedElements} setSelectedElements={setSelectedElements} saveGrid={saveGrid} />
                    )
                default:
                    return null
            }
        } catch (ERR) {
            toast.error('Failed to render Elements')
            console.log(ERR)
        }
    }

    const backgroundSettings = () => {
        return (
            <motion.div dragMomentum={false} dragListener={false} dragControls={controls} drag dragConstraints={constraintsRef} className='p-5 z-10 bg-white right-0 fixed w-fit shadow-lg text-xs border max-h-screen overflow-auto'
            >
                <div className=''>
                    <div className='flex justify-between items-center mb-3 '>
                        <label className='font-semibold'>Details</label>
                        <button onPointerDown={(e) => {
                            controls.start(e)
                        }} className='handle select-none p-2 cursor-move' ><GripHorizontal /></button>
                        <button onClick={() => {
                            setShowBgControls(false)
                            // saveGrid(selectedElements)
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
                        <div className='flex items-center gap-2'>
                            <label className='font-semibold'>Border</label>
                            <input type='color' value={borderColor} onChange={(e: any) => {
                                setBorderColor(e.target.value)
                                handleChanges('borderColor', e.target.value)
                            }} className=' w-6' />
                        </div>

                        <div className='border relative text-xs' style={{
                            height: "140px"
                        }}>
                            <div className='flex gap-3 items-center justify-center absolute bg-gray-100 hover:bg-blue-100 hover:font-semibold top-0 paddingTop w-full' >
                                Top : <input type='number' value={borderTop} onChange={(e: any) => {
                                    setBorderTop(e.target.value)
                                    handleChanges('borderTop', e.target.value)

                                }} className='border text-center w-12 rounded' />
                            </div>

                            <div className='flex flex-col gap-2 items-center justify-center paddingLeft absolute left-0 top-0 bg-gray-100  hover:font-semibold  text-center  hover:bg-blue-100' style={{
                            }}>  Left: <input type='number' value={borderLeft} onChange={(e: any) => {
                                setBorderLeft(e.target.value)
                                handleChanges('borderLeft', e.target.value)
                            }} className='border text-center w-12 rounded' /></div>

                            <div className='flex flex-col gap-2 items-center justify-center paddingRight bg-gray-100 hover:font-semibold hover:bg-blue-100 absolute right-0' style={{
                            }}>
                                Right: <input type='number' value={borderRight} onChange={(e: any) => {
                                    handleChanges('borderRight', e.target.value)
                                    setBorderRight(e.target.value)
                                }} className='border text-center w-12 rounded' />
                            </div>

                            <div className='flex gap-3 items-center justify-center paddingBottom absolute bottom-0 bg-gray-100 hover:font-semibold hover:bg-blue-100' >
                                Bottom : <input type='number' value={borderBottom} onChange={(e: any) => {
                                    setBorderBottom(e.target.value)
                                    handleChanges('borderBottom', e.target.value)
                                }} className='border text-center w-12 rounded' />
                            </div>

                        </div>

                        <div className='flex items-center gap-2'>
                            <label className='font-semibold'>Height</label>
                            <select className='rounded border p-0 text-xs' value={gridHeightType} onChange={(e: any) => {
                                setGridHeightType(e.target.value)
                                handleChanges('gridHeightType', e.target.value)
                            }}>
                                <option className='' value={'custom'}>Custom</option>
                                <option className='' value={'100%'}>Full</option>
                                <option className='' value={'100vh'}>Screen</option>
                                <option className='' value={'fit-content'}>Fit-Content</option>
                            </select>
                            {
                                gridHeightType === 'custom' &&
                                <input className='w-14 px-1 border' type='number' defaultValue={gridHeight} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setGridHeight(Number(e.target.value))
                                    handleChanges('height', Number(e.target.value))
                                }} />
                            }
                        </div>
                        <div className='flex items-center gap-2'>
                            <label className='font-semibold'>Contents Width</label>
                            <select className='rounded border p-0 text-xs' value={gridWidthType} onChange={(e: any) => {
                                setGridWidthType(e.target.value)
                                handleChanges('gridWidthType', e.target.value)
                            }}>
                                <option className='' value={'custom'}>Custom</option>
                                <option value={'max-w-sm'}>sm</option>
                                <option value={'max-w-md'}>md</option>
                                <option value={'max-w-lg'}>lg</option>
                                <option value={'max-w-xl'}>xl</option>
                                <option value={'max-w-2xl'}>2xl</option>
                                <option value={'max-w-3xl'}>3xl</option>
                                <option value={'max-w-4xl'}>4xl</option>
                                <option value={'max-w-5xl'}>5xl</option>
                                <option value={'max-w-6xl'}>6xl</option>
                                <option value={'max-w-7xl'}>7xl</option>
                                <option value={'container'}>Container</option>
                                <option value={'w-full'}>Full-Width</option>
                            </select>
                            {
                                gridWidthType === 'custom' &&
                                <input className='w-14 px-1 border' type='number' defaultValue={gridWidth} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setGridWidth(Number(e.target.value))
                                    handleChanges('width', Number(e.target.value))
                                }} />
                            }
                        </div>
                        <div className='flex items-center gap-2'>
                            <label className='font-semibold'>Content Overflow</label>
                            <select className='rounded border p-0 text-xs' value={gridOverflow} onChange={(e: any) => {
                                setGridOverflow(e.target.value)
                                handleChanges('gridOverflow', e.target.value)
                            }}>
                                <option value={'overflow-hidden'}>Hidden</option>
                                <option value={'overflow-visible'}>Visible</option>
                                <option value={'overflow-auto'}>Auto</option>
                                <option value={'overflow-scroll'}>Scroll</option>
                            </select>

                        </div>

                        {/* Border Radius */}
                        <div className='items-center gap-2 grid grid-cols-2'>
                            <div className='flex'>
                                <label><img src='/top_left.svg' className='h-5 p-1' /></label>
                                <input className='w-14 px-1 border' type='number' defaultValue={radiusTopLeft} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setRadiusTopLeft(Number(e.target.value))
                                    handleChanges('radiusTopLeft', Number(e.target.value))
                                }} />
                            </div>
                            <div className='flex'>

                                <label><img src='/top_right.svg' className='h-5 p-1' /></label>
                                <input className='w-14 px-1 border' type='number' defaultValue={radiusTopRight} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setRadiusTopRight(Number(e.target.value))
                                    handleChanges('radiusTopRight', Number(e.target.value))
                                }} />
                            </div>
                            <div className='flex'>

                                <label><img src='/bottom_left.svg' className='h-5 p-1' /></label>
                                <input className='w-14 px-1 border' type='number' defaultValue={radiusBottomLeft} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setRadiusBottomLeft(Number(e.target.value))
                                    handleChanges('radiusBottomLeft', Number(e.target.value))
                                }} />
                            </div>
                            <div className='flex'>

                                <label><img src='/bottom_right.svg' className='h-5 p-1' /></label>
                                <input className='w-14 px-1 border' type='number' defaultValue={radiusBottomRight} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setRadiusBottomRight(Number(e.target.value))
                                    handleChanges('radiusBottomRight', Number(e.target.value))
                                }} />
                            </div>
                        </div>
                        <label className='font-semibold text-sm'>Padding</label>
                        <div className='border relative text-xs' style={{
                            height: "140px"
                        }}>
                            <div className='flex gap-3 items-center justify-center absolute bg-gray-100 hover:bg-blue-100 hover:font-semibold top-0 paddingTop w-full' >
                                Top : <input type='number' value={paddingTop} onChange={(e: any) => {
                                    setTextPaddingTop(e.target.value)
                                    handleChanges('paddingTop', e.target.value)
                                }} className='border text-center w-12 rounded' />
                            </div>

                            <div className='flex flex-col gap-2 items-center justify-center paddingLeft absolute left-0 top-0 bg-gray-100  hover:font-semibold  text-center  hover:bg-blue-100' style={{
                            }}>  Left: <input type='number' value={paddingLeft} onChange={(e: any) => {
                                setTextPaddingLeft(e.target.value)
                                handleChanges('paddingLeft', e.target.value)
                            }} className='border text-center w-12 rounded' /></div>

                            <div className='flex flex-col gap-2 items-center justify-center paddingRight bg-gray-100 hover:font-semibold hover:bg-blue-100 absolute right-0' style={{
                            }}>
                                Right: <input type='number' value={paddingRight} onChange={(e: any) => {
                                    setTextPaddingRight(e.target.value)
                                    handleChanges('paddingRight', e.target.value)
                                }} className='border text-center w-12 rounded' />
                            </div>

                            <div className='flex gap-3 items-center justify-center paddingBottom absolute bottom-0 bg-gray-100 hover:font-semibold hover:bg-blue-100' >
                                Bottom : <input type='number' value={paddingBottom} onChange={(e: any) => {
                                    setTextPaddingBottom(e.target.value)
                                    handleChanges('paddingBottom', e.target.value)
                                }} className='border text-center w-12 rounded' />
                            </div>

                        </div>

                        {/* <div className='flex items-center gap-2'>
                            <label>Padding</label>
                            <input className='w-14 px-1 border' type='number' defaultValue={gridPadding} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setGridPadding(Number(e.target.value))
                            }} />
                        </div> */}

                        <div className='flex items-center gap-2'>
                            <label>Gap</label>
                            <input className='w-14 px-1 border' type='number' defaultValue={gap} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setGap(Number(e.target.value))
                                handleChanges('gap', Number(e.target.value))
                            }} />
                        </div>

                        <div className='flex gap-3 items-center'>
                            Layout:
                            <button className={` ${display === 'grid' ? "bg-blue-300" : ""}  `} onClick={() => {
                                setDisplay("grid")
                                handleChanges('display', 'grid')
                            }}><Grid2X2 /></button>
                            <button className={` ${display === 'flex' ? "bg-blue-300" : ""}  `} onClick={() => {
                                setDisplay("flex")
                                handleChanges('display', 'flex')
                            }}><Columns /></button>

                            {
                                display === 'flex' &&
                                <>
                                    <select className='border' value={flexDirection} onChange={(e: any) => {
                                        setFlexDirection(e.target.value)
                                        handleChanges('flexDirection', e.target.value)
                                    }}>
                                        <option value={"column"} >column</option>
                                        <option value={"row"} >row</option>
                                    </select>
                                    {
                                        flexDirection === "column" ?
                                            <div>
                                                Justify: <select className='border'
                                                    value={justifyContent} onChange={(e: any) => {
                                                        setJustifyContent(e.target.value)
                                                        handleChanges('justifyContent', e.target.value)
                                                    }}>
                                                    <option value={"start"} >Top</option>
                                                    <option value={"center"} >Center</option>
                                                    <option value={"end"} >Bottom</option>
                                                    <option value={"space-around"} >Spaced Evenly</option>
                                                    <option value={"space-between"} >Spaced Between</option>
                                                </select>
                                            </div>
                                            :
                                            <div>
                                                Justify: <select className='border'
                                                    value={justifyContent} onChange={(e: any) => {
                                                        setJustifyContent(e.target.value)
                                                        handleChanges('justifyContent', e.target.value)
                                                    }}>
                                                    <option value={"start"} >Left</option>
                                                    <option value={"center"} >Center</option>
                                                    <option value={"end"} >Right</option>
                                                    <option value={"space-around"} >Spaced Evenly</option>
                                                    <option value={"space-between"} >Spaced Between</option>
                                                </select>
                                            </div>
                                    }
                                </>

                            }
                        </div>
                        {
                            display === 'grid' &&

                            <div className='flex items-center gap-2'>
                                <label>Grid of </label>
                                <input className='w-14 px-1 border' type='number' defaultValue={gridCols} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setGridCols(Number(e.target.value))
                                    handleChanges('gridCols', Number(e.target.value))

                                }} />
                            </div>
                        }
                        {/* <div>
                            Direction: <select className='border' value={display} onChange={(e: any) => {
                                setDisplay(e.target.value)
                            }}>
                            <option value={""}>Default</option>
                            <option value={"flex-row"} >flex</option>
                            <option value={"flex-column"} >grid</option>
                            </select>
                        </div> */}

                        {
                            (display === "grid" || flexDirection === "row") &&

                            <div>
                                Align: <select className='border' value={alignItems} onChange={(e: any) => {
                                    setAlignItems(e.target.value)
                                    handleChanges('alignItems', e.target.value)
                                }}>
                                    <option value={"start"} >Top</option>
                                    <option value={"center"} >Center</option>
                                    <option value={"end"} >Bottom</option>
                                </select>
                            </div>
                        }


                        <div className='flex gap-3 items-center'>
                            <label>Background Image</label>
                            <button type='button' className='btn-outline !p-1 !px-2 !rounded-full text-xs' onClick={() => {
                                setShowGridBackgroundSelect(true)
                                handleChanges('showgridBackgroundSelect', true)
                            }}>
                                {gridBackgroundImg ? "Change" : "Upload"}
                            </button>
                            <button type='button' className='text-red-600' onClick={() => {
                                setGridBackgroundImg('')
                                handleChanges('backgroundImage', '')
                            }}>
                                <ImageMinus />
                            </button>
                        </div>

                        <label className='flex gap-2 w-fit'>
                            <input type='checkbox' defaultChecked={hasOverlay} onChange={(e) => {
                                setHasOverlay(e.target.checked)
                                handleChanges('hasOverlay', e.target.checked)
                            }} />
                            Overlay
                        </label>

                        {
                            hasOverlay &&

                            <Gradientpicker setColor={setOverlayColor} color={overlayColor} />
                        }

                        <label className='flex gap-2 w-fit  font-semibold'>
                            <input type='checkbox' defaultChecked={hasBackground} onChange={(e) => {
                                setHasBackground(e.target.checked)
                                handleChanges('hasBackground', e.target.checked)
                            }} />
                            Background
                        </label>

                        {
                            hasBackground &&

                            <input type='color' value={bgColor} onChange={(e: any) => {
                                setBgColor(e.target.value)
                                handleChanges('backgroundColor', e.target.value)
                            }} className=' w-6' />
                        }

                        {hasBackground && bgColor}

                    </div>
                </div>
            </motion.div >
        )
    }

    return (
        <div className={`${!isPreview && "hover:bg-gray-50 adminsinglecomponent border border-transparent hover:border-blue-200  min-h-fit shadow"}`} style={{
            gridRow: `span ${rowSpan}`,
            gridColumn: `span ${columnSpan}`,
        }} >
            {/* 
            <button onClick={() => {
                updateStylesWith320(data1)
            }}>Hello</button> */}

            {
                showElements &&
                <CustomElements showElements={showElements} setShowElements={setShowElements} setSelectedElements={setSelectedElements} selectedElements={selectedElements} />
            }

            {
                showgridBackgroundSelect &&
                <SelectFile selectedFile={gridBackgroundImg} setSelectedFile={setGridBackgroundImg} setShowModal={setShowGridBackgroundSelect} showModal={showgridBackgroundSelect} accept='image' filepath='backgroundImage' handleChanges={handleChanges} />
            }

            {
                showBgControls &&
                <div className='fixed right-0 top-0 z-40 h-screen w-full bg-black bg-opacity-10' ref={constraintsRef}>
                    {backgroundSettings()}
                    <div className='fixed top-0 left-0 h-full w-full z-0 opacity-0' onClick={() => {
                        setShowBgControls(false)
                        // saveGrid(selectedElements)
                    }}></div>
                </div>

                // <div className='fixed z-40 top-0 h-screen w-full left-0' ref={constraintsRef}>
                //     {backgroundSettings()}
                // </div>
            }
            {
                !isPreview &&

                <div className='flex gap-3 bg-white border items-center justify-between ' onClick={() => {
                    setShowBgControls(true)
                }}>
                    <div className='flex gap-2'>

                        <button className='  text-blue-700 rounded-full text-xs font-semibold px-3 py-1' onClick={(e) => {
                            setShowElements(true)
                            e.stopPropagation()
                        }}><PlusCircle /></button>

                        {grids.length > 1 &&
                            <div className='flex items-center gap-2'>
                                {/* <label>Move</label> */}
                                <div className='flex gap-2 border rounded px-2'>
                                    {
                                        gridIndex != 0 &&
                                        <button className='text-sm' onClick={(e) => {
                                            confirmReOrder('up')
                                            e.stopPropagation()
                                        }}><ArrowUp size={16} /></button>
                                    }

                                    {
                                        grids.length != (gridIndex + 1) &&
                                        <button className='text-sm' onClick={(e) => {
                                            e.stopPropagation()
                                            confirmReOrder('down')
                                        }}><ArrowDown size={16} /></button>

                                    }
                                </div>
                            </div>
                        }

                        <button className='btn-danger !px-2 !py-1 text-xs' onClick={(e) => {
                            removeElement()
                            e.stopPropagation()
                        }}><Trash size={14} /></button>
                    </div>

                    <button type='button' onClick={() => {
                        setShowBgControls(true)
                    }}>
                        <Settings />
                    </button>
                </div>
            }

            <div className={`relative adminsinglecomponentchild   ${gridOverflow} `} style={
                display === "grid" ?
                    {
                        borderRadius: `${radiusTopLeft}px ${radiusTopRight}px ${radiusBottomLeft}px ${radiusBottomRight}px`,
                        paddingTop: `${paddingTop}px`,
                        paddingBottom: `${paddingBottom}px`,
                        paddingLeft: `${paddingLeft}px`,
                        paddingRight: `${paddingRight}px`,
                        backgroundColor: hasBackground ? bgColor : "transparent",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: 'cover',
                        height: gridHeightType === 'custom' ? `${gridHeight}px` : gridHeightType,
                        borderTop: `${borderTop}px solid ${borderColor}`,
                        borderBottom: `${borderBottom}px solid ${borderColor}`,
                        borderLeft: `${borderLeft}px solid ${borderColor}`,
                        borderRight: `${borderRight}px solid ${borderColor}`,
                        // alignItems: alignItems,
                        // display: display,
                        // justifyContent: justifyContent,
                        // gap: `${gap}px`,
                        // gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
                        overflow: gridOverflow,
                    }
                    : {
                        borderRadius: `${radiusTopLeft}px ${radiusTopRight}px  ${radiusBottomRight}px ${radiusBottomLeft}px`,
                        paddingTop: `${paddingTop}px`,
                        paddingBottom: `${paddingBottom}px`,
                        paddingLeft: `${paddingLeft}px`,
                        paddingRight: `${paddingRight}px`,
                        backgroundColor: hasBackground ? bgColor : "transparent",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: 'cover',
                        height: gridHeightType === 'custom' ? `${gridHeight}px` : gridHeightType,
                        borderTop: `${borderTop}px solid ${borderColor}`,
                        borderBottom: `${borderBottom}px solid ${borderColor}`,
                        borderLeft: `${borderLeft}px solid ${borderColor}`,
                        borderRight: `${borderRight}px solid ${borderColor}`,
                        // alignItems: alignItems,
                        // display: display,
                        // flexDirection: flexDirection,
                        // justifyContent: justifyContent,
                        // gap: `${gap}px`
                        overflow: gridOverflow,
                    }
            }>

                {
                    hasOverlay &&
                    <div className='absolute left-0 top-0 w-full h-full' style={{
                        background: overlayColor,
                        overflow: "hidden",
                        borderRadius: `${radiusTopLeft}px ${radiusTopRight}px  ${radiusBottomRight}px ${radiusBottomLeft}px`,
                        zIndex: 1
                    }}></div>
                }

                <div className='absolute z-0 top-0 right-0 h-full w-full' style={{
                    zIndex: 0
                }}>
                    {
                        gridBackgroundImg &&
                        <img
                            style={{
                                borderRadius: `${radiusTopLeft}px ${radiusTopRight}px  ${radiusBottomRight}px ${radiusBottomLeft}px`,
                            }}
                            src={`${process.env.NEXT_PUBLIC_IMG_URL}${gridBackgroundImg.path} `} className='h-full w-full object-cover' />
                    }

                </div>

                {/* ${(flexDirection === 'row' && justifyContent === "space-between") && "w-fit"} */}
                <div className={` ${gridWidthType === 'custom' ? `w-[${gridWidth}px] h-full ${contentPlacement}` : `${gridWidthType} h-full ${contentPlacement} `}`} style={
                    display === "grid" ?
                        {
                            alignItems: alignItems,
                            display: display,
                            justifyContent: justifyContent,
                            gap: `${gap}px`,
                            gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
                            // zIndex: 1,
                            position: "relative"
                        }
                        : {
                            alignItems: alignItems,
                            display: display,
                            flexDirection: flexDirection,
                            justifyContent: justifyContent,
                            gap: `${gap}px`,
                            // 
                            position: "relative"
                        }
                }>
                    {
                        selectedElements.map((value: any, index: number) => (
                            renderUIElements(value, index)
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default SingleComponent