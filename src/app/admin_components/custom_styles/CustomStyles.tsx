'use client';
import { ArrowDown, ArrowUp, GripHorizontal, ImageMinus, Save, Settings, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import SingleComponent from '../IndividualSections/SingleComponent';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { motion, useDragControls } from "framer-motion"
import SelectFile from '../media/SelectFile';
import Gradientpicker from '../ColorPickers/Gradientpicker';
import { useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { setBreakpoint } from '@/redux/features/CustomStyleSlice';
import axios from '../../../axios/axios';
import html2canvas from 'html2canvas';
import SaveDefaultStyleScreeshot from '../DefaultStyles/SaveDefaultStyleScreeshot';
import dayjs from 'dayjs';


function CustomStyles({ data, isBanner, sectionsList, sectionListIndex, setSectionsList }: { data: any, isBanner?: boolean, sectionsList: any, sectionListIndex: any, setSectionsList: any }) {

    const breakpoint = useAppSelector((state) => state.customStyleSlice.breakpoint)
    const dispatch = useDispatch()
    // const style = data.styles[breakpoint]

    const [currentStyle, setCurrentStyle] = useState(data.styles[breakpoint])
    const [readyForDownload, setReadyForDownload] = useState<boolean>(false)

    const controls = useDragControls()
    const constraintsRef = useRef(null);
    const isPreview = useAppSelector((state) => state.customStyleSlice.isPreview)
    const [showControls, setShowControls] = useState<boolean>(false)
    const [gridStyles, setGridStyles] = useState(data?.styles ? data?.styles : {})
    const [grids, setGrids] = useState<any>(data?.components ? data?.components : [])
    const [overlayColor, setOverlayColor] = useState<string>(data?.overlayColor ? data?.overlayColor : '')
    const [showgridBackgroundSelect, setShowGridBackgroundSelect] = useState<boolean>(false)
    const [hasOverlay, setHasOverlay] = useState<boolean>(data?.hasOverlay ? data?.hasOverlay : false)

    const [gridHeight, setGridHeight] = useState<number>(currentStyle?.height ? currentStyle?.height : 500)
    const [gridHeightType, setGridHeightType] = useState(currentStyle?.gridHeightType ? currentStyle?.gridHeightType : 'custom')
    const [alignContent, setAlignContent] = useState<string>(currentStyle?.alignContent ? currentStyle?.alignContent : 'center')
    const [gridCols, setGridCols] = useState(currentStyle?.gridLayout ? currentStyle?.gridLayout : 1)
    const [gap, setGap] = useState(currentStyle?.gap ? currentStyle?.gap : 0)
    const [padding, setPadding] = useState<number>(0)
    const [contentWidth, setContentWidth] = useState<string>(currentStyle?.contentWidth ? currentStyle?.contentWidth : 'max-w-7xl')
    const [contentPlacement, setContentPlacement] = useState<string>(currentStyle?.contentPlacement ? currentStyle?.contentPlacement : 'mx-auto')

    const [backgroundColor, setBackgroundColor] = useState<string>(currentStyle?.backgroundColor ? currentStyle?.backgroundColor : '')
    const [hasBackground, setHasBackground] = useState<boolean>(currentStyle?.hasBackground ? currentStyle?.hasBackground : false)
    const [gridBackgroundImg, setGridBackgroundImg] = useState<any>(currentStyle?.backgroundImage)

    const [paddingTop, setPaddingTop] = useState<number>(currentStyle?.paddingTop ? currentStyle?.paddingTop : 0)
    const [paddingBottom, setPaddingBottom] = useState<number>(currentStyle?.paddingBottom ? currentStyle?.paddingBottom : 0)
    const [paddingLeft, setPaddingLeft] = useState<number>(currentStyle?.paddingLeft ? currentStyle?.paddingLeft : 0)
    const [paddingRight, setPaddingRight] = useState<number>(currentStyle?.paddingRight ? currentStyle?.paddingRight : 0)

    const [marginTop, setMarginTop] = useState<number>(currentStyle?.marginTop ? currentStyle?.marginTop : 0)
    const [marginBottom, setMarginBottom] = useState<number>(currentStyle?.marginBottom ? currentStyle?.marginBottom : 0)
    const [marginLeft, setMarginLeft] = useState<number>(currentStyle?.marginLeft ? currentStyle?.marginLeft : 0)
    const [marginRight, setMarginRight] = useState<number>(currentStyle?.marginRight ? currentStyle?.marginRight : 0)

    const [radiusTopLeft, setRadiusTopLeft] = useState<number>(currentStyle?.radiusTopLeft ? currentStyle?.radiusTopLeft : 0)
    const [radiusTopRight, setRadiusTopRight] = useState<number>(currentStyle?.radiusTopRight ? currentStyle?.radiusTopRight : 0)
    const [radiusBottomLeft, setRadiusBottomLeft] = useState<number>(currentStyle?.radiusBottomLeft ? currentStyle?.radiusBottomLeft : 0)
    const [radiusBottomRight, setRadiusBottomRight] = useState<number>(currentStyle?.radiusBottomRight ? currentStyle?.radiusBottomRight : 0)

    useEffect(() => {
        dispatch(setBreakpoint(breakpoint ? breakpoint : 1440))
    }, [])

    useEffect(() => {
        setCurrentStyle(data.styles[breakpoint])

        setGridHeight(data.styles[breakpoint]?.height ? data.styles[breakpoint]?.height : 500)
        setGridHeightType(data.styles[breakpoint]?.gridHeightType ? data.styles[breakpoint]?.gridHeightType : 'custom')
        setAlignContent(data.styles[breakpoint]?.alignContent ? data.styles[breakpoint]?.alignContent : 'center')
        setGridCols(data.styles[breakpoint]?.gridLayout ? data.styles[breakpoint]?.gridLayout : 1)
        setGap(data.styles[breakpoint]?.gap ? data.styles[breakpoint]?.gap : 0)
        setPadding(0)
        setContentWidth(data.styles[breakpoint]?.contentWidth ? data.styles[breakpoint]?.contentWidth : 'max-w-7xl')
        setContentPlacement(data.styles[breakpoint]?.contentPlacement ? data.styles[breakpoint]?.contentPlacement : 'mx-auto')

        setBackgroundColor(data.styles[breakpoint]?.backgroundColor)
        setHasBackground(data.styles[breakpoint]?.hasBackground ? data.styles[breakpoint]?.hasBackground : false)
        setGridBackgroundImg(data.styles[breakpoint]?.backgroundImage)

        setPaddingTop(data.styles[breakpoint]?.paddingTop ? data.styles[breakpoint]?.paddingTop : 0)
        setPaddingBottom(data.styles[breakpoint]?.paddingBottom ? data.styles[breakpoint]?.paddingBottom : 0)
        setPaddingLeft(data.styles[breakpoint]?.paddingLeft ? data.styles[breakpoint]?.paddingLeft : 0)
        setPaddingRight(data.styles[breakpoint]?.paddingRight ? data.styles[breakpoint]?.paddingRight : 0)

        setMarginTop(data.styles[breakpoint]?.marginTop ? data.styles[breakpoint]?.marginTop : 0)
        setMarginBottom(data.styles[breakpoint]?.marginBottom ? data.styles[breakpoint]?.marginBottom : 0)
        setMarginLeft(data.styles[breakpoint]?.marginLeft ? data.styles[breakpoint]?.marginLeft : 0)
        setMarginRight(data.styles[breakpoint]?.marginRight ? data.styles[breakpoint]?.marginRight : 0)

        setRadiusTopLeft(data.styles[breakpoint]?.radiusTopLeft ? data.styles[breakpoint]?.radiusTopLeft : 0)
        setRadiusTopRight(data.styles[breakpoint]?.radiusTopRight ? data.styles[breakpoint]?.radiusTopRight : 0)
        setRadiusBottomLeft(data.styles[breakpoint]?.radiusBottomLeft ? data.styles[breakpoint]?.radiusBottomLeft : 0)
        setRadiusBottomRight(data.styles[breakpoint]?.radiusBottomRight ? data.styles[breakpoint]?.radiusBottomRight : 0)

    }, [breakpoint])

    const handleChanges = async (name: any, value: any) => {
        // console.log(name, value)
        // console.log('gridStyles', gridStyles)

        let newStyleElements = gridStyles
        newStyleElements[breakpoint][name] = value;
        let breakpointList = [
            1440,
            1024,
            768,
            425,
            320
        ]

        for (let i = 0; i < breakpointList.length; i++) {
            const smallerBreakpoint = breakpointList[i];
            if (smallerBreakpoint < breakpoint
                //  && !newStyleElements[smallerBreakpoint]?.hasOwnProperty(name)
            ) {
                newStyleElements[smallerBreakpoint] = {
                    ...newStyleElements[smallerBreakpoint],
                    [name]: value
                };
            }
        }

        setGridStyles(newStyleElements)
        // setTimeout(() => {
        saveSection(sectionsList[sectionListIndex]?.components, gridCols)
        // }, 500)
    }

    const confirmReOrder = (move: any) => {
        const array = [...sectionsList];
        if (move === "up") {
            [array[sectionListIndex], array[sectionListIndex - 1]] = [array[sectionListIndex - 1], array[sectionListIndex]];
            setSectionsList(array)
        }
        if (move === "down") {
            [array[sectionListIndex], array[sectionListIndex + 1]] = [array[sectionListIndex + 1], array[sectionListIndex]];
            setSectionsList(array)
        }

        // setTimeout(() => {
        //     saveSection(array, '')
        // }, 200)
    }

    const renderDialog = () => {
        try {
            return (
                <motion.div dragMomentum={false} dragListener={false} dragControls={controls} drag dragConstraints={constraintsRef} className='p-5 z-10 bg-white right-0 fixed w-fit shadow-lg text-xs border max-h-screen overflow-auto'
                // onStop={handleStop}
                // handle='.handle'
                // defaultPosition={{ x: 0, y: 0 }}
                >
                    <div className='flex justify-between items-center mb-3 min-w-max w-56'>
                        <label className='font-semibold'></label>
                        <button className='handle select-none' onPointerDown={(e) => {
                            controls.start(e)
                        }}><GripHorizontal /></button>
                        <button onClick={() => {
                            setShowControls(false)
                        }}>
                            <X size={16} />
                        </button>
                    </div>
                    <div className='flex items-center gap-2 my-3'>
                        <label className='font-semibold'>Height</label>
                        <select className='rounded border p-0 text-xs' value={gridHeightType} onChange={(e: any) => {
                            setGridHeightType(e.target.value)
                            handleChanges('gridHeightType', e.target.value)

                        }}>

                            <option className='' value={'custom'}>Custom</option>
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
                    <div className='grid gap-2'>
                        <div className='flex gap-3'>
                            Grid
                            <input className='w-12 border rounded px-1' value={gridCols} onChange={(e) => {
                                setGridCols(e.target.value)
                                handleChanges('gridLayout', e.target.value)
                            }} type='number' />
                        </div>
                        <div className='flex gap-3'>
                            Gap
                            <input className='w-12 border rounded px-1' value={gap} onChange={(e) => {
                                setGap(e.target.value)
                                handleChanges('gap', e.target.value)
                            }} type='number' />
                        </div>
                        <div className='flex gap-3 items-center'>
                            Content Width
                            <select className='w-max border rounded px-1' defaultValue={contentWidth} value={contentWidth} onChange={(e) => {
                                setContentWidth(e.target.value)
                                handleChanges('contentWidth', e.target.value)
                            }} >
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
                        </div>
                        <div className='flex gap-3 items-center'>
                            Content Placement
                            <select className='w-max border rounded px-1' defaultValue={contentPlacement} value={contentPlacement} onChange={(e) => {
                                setContentPlacement(e.target.value)
                                handleChanges('contentPlacement', e.target.value)
                            }} >
                                <option value={'mr-auto'}>left</option>
                                <option value={'mx-auto'}>Center</option>
                                <option value={'ml-auto'}>Right</option>
                            </select>
                        </div>

                        <div className='flex gap-3 items-center'>
                            Vertical Content Placement
                            <select className='w-max border rounded px-1' defaultValue={alignContent} value={alignContent} onChange={(e) => {
                                setAlignContent(e.target.value)
                                handleChanges('alignContent', e.target.value)
                            }} >
                                <option value={'start'}>Top</option>
                                <option value={'center'}>Center</option>
                                <option value={'end'}>Bottom</option>
                            </select>
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

                        <div className='flex gap-3 items-center'>
                            <label>Background Image</label>
                            <button type='button' className='btn-outline !p-1 !px-2 !rounded-full text-xs' onClick={() => {
                                setShowGridBackgroundSelect(true)
                            }}>
                                {gridBackgroundImg ? "Change" : "Upload"}
                            </button>
                            {
                                gridBackgroundImg &&

                                <button type='button' className='text-red-600' onClick={() => {
                                    setGridBackgroundImg('')
                                    handleChanges('backgroundImage', '')
                                }}>
                                    <ImageMinus />
                                </button>
                            }
                        </div>

                        <label className='flex gap-2 w-fit'>
                            <input
                                type='checkbox'
                                defaultChecked={hasOverlay}
                                onChange={(e) => {
                                    setHasOverlay(e.target.checked);
                                }}
                            />
                            Overlay
                        </label>

                        {
                            hasOverlay && <Gradientpicker setColor={setOverlayColor} color={overlayColor} />
                        }

                        <label className='font-semibold '>Padding</label>
                        <div className='border relative ' style={{
                            height: "150px"
                        }}>
                            <div className='flex gap-3 items-center justify-center absolute bg-gray-100 hover:bg-blue-100 hover:font-semibold top-0 paddingTop w-full' >
                                Top : <input type='number' value={paddingTop} onChange={(e: any) => {
                                    setPaddingTop(e.target.value)
                                    handleChanges('paddingTop', e.target.value)
                                }} className='border text-center w-12 rounded' />
                            </div>

                            <div className='flex gap-3 items-center justify-center paddingBottom absolute bottom-0 bg-gray-100 hover:font-semibold hover:bg-blue-100' >
                                Bottom : <input type='number' value={paddingBottom} onChange={(e: any) => {
                                    setPaddingBottom(e.target.value)
                                    handleChanges('paddingBottom', e.target.value)
                                }} className='border text-center w-12 rounded' />
                            </div>

                            <div className='flex flex-col gap-2 items-center justify-center paddingLeft absolute left-0 top-0 bg-gray-100  hover:font-semibold  text-center  hover:bg-blue-100' style={{
                            }}>  Left: <input type='number' value={paddingLeft} onChange={(e: any) => {
                                handleChanges('paddingLeft', e.target.value)
                                setPaddingLeft(e.target.value)
                            }} className='border text-center w-12 rounded' /></div>

                            <div className='flex flex-col gap-2 items-center justify-center paddingRight bg-gray-100 hover:font-semibold hover:bg-blue-100 absolute right-0' style={{
                            }}>
                                Right: <input type='number' value={paddingRight} onChange={(e: any) => {
                                    handleChanges('paddingRight', e.target.value)
                                    setPaddingRight(e.target.value)
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
                                    setMarginTop(e.target.value)
                                    handleChanges('marginTop', e.target.value)
                                }} className='border text-center w-12 rounded' />
                            </div>

                            <div className='flex gap-3 items-center justify-center paddingBottom absolute bottom-0 bg-gray-100 hover:font-semibold hover:bg-blue-100' >
                                Bottom : <input type='number' value={marginBottom} onChange={(e: any) => {
                                    setMarginBottom(e.target.value)
                                    handleChanges('marginBottom', e.target.value)
                                }} className='border text-center w-12 rounded' />
                            </div>

                            <div className='flex flex-col gap-2 items-center justify-center paddingLeft absolute left-0 top-0 bg-gray-100  hover:font-semibold  text-center  hover:bg-blue-100' style={{
                            }}>  Left: <input type='number' value={marginLeft} onChange={(e: any) => {
                                handleChanges('marginLeft', e.target.value)
                                setMarginLeft(e.target.value)
                            }} className='border text-center w-12 rounded' /></div>

                            <div className='flex flex-col gap-2 items-center justify-center paddingRight bg-gray-100 hover:font-semibold hover:bg-blue-100 absolute right-0' style={{
                            }}>
                                Right: <input type='number' value={marginRight} onChange={(e: any) => {
                                    handleChanges('marginRight', e.target.value)
                                    setMarginRight(e.target.value)
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
                </motion.div >
            )
        } catch (ERR) {
            console.log(ERR)
        }
    }

    const saveSection = (updatedGrid: any, gridvalue: any) => {

        const updatedSectionList = [...sectionsList];

        if (updatedGrid?.length > 0) {
            updatedSectionList[sectionListIndex] = {
                ...updatedSectionList[sectionListIndex],
                components: updatedGrid,
                gridLayout: gridvalue ? gridvalue : gridCols,
                styles: gridStyles,
            };
        } else {
            updatedSectionList.splice(sectionListIndex, 1);
        }

        setSectionsList(updatedSectionList);
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

    function convertIdsToUuid(obj: any) {
        if (typeof obj === 'object' && obj !== null) {
            for (const key in obj) {
                if (key === 'id') {
                    obj[key] = 'uuidv4()';
                } else {
                    convertIdsToUuid(obj[key]);
                }
            }
        }
        return obj
    }

    // const parsedFunc = (obj) => {
    //     if (typeof obj === 'object' && obj !== null) {
    //         for (const key in obj) {
    //             if (key === 'id') {
    //                 obj[key] = uuidv4();
    //             } else {
    //                 parsedFunc(obj[key]);
    //             }
    //         }
    //     }
    //     console.log('ParsedObj', obj);
    // }

    // function convertDataURIToBinary(dataURI) {
    //     var BASE64_MARKER = ';base64,';
    //     var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    //     var base64 = dataURI.substring(base64Index);
    //     var raw = window.atob(base64);
    //     var rawLength = raw.length;
    //     var array = new Uint8Array(new ArrayBuffer(rawLength));

    //     for (let i = 0; i < rawLength; i++) {
    //         array[i] = raw.charCodeAt(i);
    //     }

    //     console.log('array', array)
    //     return array;
    // }
    // let imageBinaryData;


    const dataURLtoBlob = (dataURL: any) => {
        const parts = dataURL.split(';base64,');
        const contentType = parts[0].split(':')[1];
        const raw = window.atob(parts[1]);
        const rawLength = raw.length;
        const uInt8Array = new Uint8Array(rawLength);

        for (let i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }

        return new Blob([uInt8Array], { type: contentType });
    };

    const captureRef = useRef<any>(null);

    const handleDownload = async () => {

        const canvas = await html2canvas(captureRef.current);
        const imgData = canvas.toDataURL('image/png');
        const blob = dataURLtoBlob(imgData);

        //   // Automatically trigger the download
        // const link = document.createElement('a');
        // link.href = imgData;
        // link.download = `digicom-design-${dayjs().format('YYYY-MM-DDTHH:mm:ss')}.png`;
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);

        // Proceed to upload the image
        saveComponent(blob);
        // uploadImage(blob);
    };

    // const uploadImage = (blob: Blob) => {
    //     const formData = new FormData();

    //     formData.append('file', blob, `digicom-design-${dayjs().format('YYYY-MM-DDTHH:mm:ss')}.png`);

    //     fetch('https://your-api-endpoint.com/upload', {
    //         method: 'POST',
    //         body: formData,
    //     })
    //         .then((response) => response.json())
    //         .then((data) => console.log('Success:', data))
    //         .catch((error) => console.error('Error:', error));
    // };

    const saveComponent = async (blob: Blob) => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "This component will be saved in the my styles section when you click on add section!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Save it!'
            }).then(async (result) => {
                if (result.isConfirmed) {

                    const formData = new FormData();

                    formData.append('image', blob, `digicom-design-${dayjs().format('YYYY-MM-DDTHHmmss')}.png`);

                    // await html2canvas(screenshotRef.current).then(function (canvas) {
                    //     // document.body.appendChild(canvas);

                    //     const imageData = canvas.toDataURL("image/png");
                    //     imageBinaryData = convertDataURIToBinary(imageData);
                    // });

                    const newTheme = convertIdsToUuid(data);
                    formData.append('theme', JSON.stringify([newTheme]))

                    // let formData = new FormData()

                    formData.append('style_name', `customstyle-${dayjs().format('YYYY-MM-DDTHHmmss')}`)
                    // if (imageBinaryData) {
                    //     formData.append('image', imageBinaryData)
                    // }

                    let result = await axios.post('page-style/default-style', formData)

                    if (result.data.success) {
                        toast.success('Theme Saved')
                    }
                }
            })
        } catch (ERR) {
            console.log(ERR)
            toast.error('Failed to Delete')
        }
    }

    return (
        <div className={`${!isPreview && "border-dashed border-red-500 border-2"}  ${isBanner ? "" : "h-full"} mx-auto  w-full overflow-hidden relative`}>

            <div className='w-full -z-50 absolute transform -translate-x-3 '>
                <SaveDefaultStyleScreeshot data={data} captureRef={captureRef} />
            </div>

            {
                showgridBackgroundSelect &&
                <SelectFile handleChanges={handleChanges} filepath='backgroundImage' selectedFile={gridBackgroundImg} setSelectedFile={setGridBackgroundImg} setShowModal={setShowGridBackgroundSelect} showModal={showgridBackgroundSelect} accept='image' />
            }

            {
                showControls &&
                <div className='fixed right-0 top-0 z-40 h-screen w-full bg-black bg-opacity-10' ref={constraintsRef}>
                    {renderDialog()}
                    <div className='fixed top-0 left-0 h-full w-full z-0 opacity-0' onClick={() => {
                        setShowControls(false)
                    }}></div>
                </div>
            }
            {
                (!isBanner && !isPreview) &&

                <div className=' relative flex items-center gap-4 bg-white' style={{
                    zIndex: '1'
                }}>
                    <button type='button' className='' onClick={() => {
                        setShowControls(true)
                    }}>
                        <Settings />
                    </button>
                    <label>Move</label>
                    <div className='flex gap-2 border rounded px-2'>
                        {
                            sectionListIndex != 0 &&
                            <button className='text-sm' onClick={() => {
                                confirmReOrder('up')
                            }}><ArrowUp size={16} /></button>
                        }
                        {
                            sectionsList.length != (sectionListIndex + 1) &&
                            <button className='text-sm' onClick={() => {
                                confirmReOrder('down')
                            }}><ArrowDown size={16} /></button>
                        }
                    </div>
                    <button onClick={() => {
                        handleDownload()
                    }}><Save />
                        {/* Save as component */}
                    </button>
                    {/* <div>
                        <button onClick={() => parsedFunc(data)}>Get Parsed Value</button>
                    </div> */}

                </div>
            }

            {/* <div className='flex gap-2 border'>
               
                <div>
                    Bg Color
                    <input type='color' value={backgroundColor} onChange={(e) => {
                        setBackgroundColor(e.target.value)
                    }} />
                </div>
                <div>
                    Padding
                    <input type='number' value={padding} onChange={(e) => {
                        setPadding(Number(e.target.value))
                    }} />
                </div>
            </div> */}

            {
                gridBackgroundImg &&
                <div className='absolute z-0 top-0 right-0 h-full w-full' style={{
                    zIndex: 0
                }}>
                    <img
                        style={{
                            borderRadius: `${radiusTopLeft}px ${radiusTopRight}px  ${radiusBottomRight}px ${radiusBottomLeft}px`,
                        }}
                        src={`${process.env.NEXT_PUBLIC_IMG_URL}${gridBackgroundImg.path} `} className='h-full w-full object-cover' />
                </div>
            }
            <div style={{
                paddingLeft: `${paddingLeft}px`,
                paddingRight: `${paddingRight}px`,
                paddingTop: `${paddingTop}px`,
                paddingBottom: `${paddingBottom}px`,
                marginLeft: `${marginLeft}px`,
                marginRight: `${marginRight}px`,
                marginTop: `${marginTop}px`,
                marginBottom: `${marginBottom}px`,
                background: hasBackground ? backgroundColor : "",

            }} className={` h-full relative `}>

                <div className={`w-full  relative ${contentWidth} ${contentPlacement}`} style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
                    gap: `${gap}px`,
                    height: "fit-content",
                    minHeight: gridHeightType === 'custom' ? `${gridHeight}px` : gridHeightType,
                    alignContent: alignContent,
                }}>
                    {
                        grids.map((value: any, index: number) => (
                            <SingleComponent data={value} key={value?.id} gridIndex={index} grids={grids} setGrids={setGrids} saveSection={saveSection} />
                        ))
                    }
                    {
                        !isPreview &&
                        <button onClick={() => {
                            setGrids([
                                ...grids,
                                {
                                    id: uuidv4()
                                }
                            ])
                        }} className='h-10 bg-white w-full'> + Add</button>
                    }
                </div>

            </div>

        </div >
    )
}

export default CustomStyles