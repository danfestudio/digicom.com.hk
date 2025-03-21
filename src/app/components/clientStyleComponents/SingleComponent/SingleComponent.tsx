/** @jsxImportSource @emotion/react */
"use client";

import { css } from '@emotion/react'

import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import Text from '../client_ui_elements/Text'
import { useAppSelector } from '@/redux/store'
import ImageComponent from '../client_ui_elements/ImageComponent'

function SingleComponent({ data, gridIndex, setGrids, grids }: { data: any, gridIndex: number, setGrids: any, grids: any }) {

    // console.log('data', data)
    // const breakpoint = 1440

    const breakpoint = useAppSelector((state) => state.customStyleSlice.clientSideBreakpoint)

    // console.log('data.styles', data?.styles?.[breakpoint])
    // const asd = {
    //     "flexDirection": "column",
    //     "display": "flex",
    //     "gridOverflow": "overflow-visible",
    //     "gridWidth": 500,
    //     "gridWidthType": "custom",
    //     "contentPlacement": "mx-auto",
    //     "gridHeightType": "custom",
    //     "radiusTopLeft": 20,
    //     "radiusTopRight": 20,
    //     "radiusBottomLeft": 20,
    //     "radiusBottomRight": 20,
    //     "paddingTop": 0,
    //     "paddingBottom": 0,
    //     "paddingLeft": 0,
    //     "paddingRight": 0,
    //     "borderTop": 0,
    //     "borderBottom": 0,
    //     "borderLeft": 0,
    //     "borderRight": 0,
    //     "backgroundColor": "#e60505",
    //     "hasBackground": true,
    //     "backgroundRepeat": "no-repeat",
    //     "backgroundPosition": "center",
    //     "backgroundSize": "cover",
    //     "rowSpan": "1",
    //     "columnSpan": "1",
    //     "gap": 1,
    //     "height": 250,
    //     "alignItems": "start",
    //     "justifyContent": "center",
    //     "bgColor": "#04ff00"
    // }

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
        setBorderColor(data?.styles?.[breakpoint]?.borderColor ? data?.styles?.[breakpoint]?.borderColor : '#000000')
    }, [breakpoint])


    const [selectedElements, setSelectedElements] = useState(data?.elements ? data?.elements : [])
    const [showElements, setShowElements] = useState<boolean>(false)
    const [hasOverlay, setHasOverlay] = useState<boolean>(data?.hasOverlay ? data?.hasOverlay : false)
    const [showgridBackgroundSelect, setShowGridBackgroundSelect] = useState<boolean>(false)
    const [overlayColor, setOverlayColor] = useState<string>(data?.overlayColor ? data?.overlayColor : '')

    const [showBgControls, setShowBgControls] = useState<boolean>(false)

    const [borderColor, setBorderColor] = useState(data?.styles?.[breakpoint]?.borderColor ? data?.styles?.[breakpoint]?.borderColor : '#000000')

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

    const renderUIElements = (value: any, index: number) => {
        try {
            switch (value.name) {
                case 'text':
                    return (
                        <Text value={value} elementIndex={index} key={value?.id} />
                    )
                case 'image':
                    return (
                        <ImageComponent value={value} elementIndex={index} key={value?.id} />
                    )
                default:
                    return null
            }
        } catch (ERR) {
            toast.error('Failed to render Elements')
            console.log(ERR)
        }
    }

    let breakpoints = [
        320,
        425,
        768,
        1024,
        1440,
    ]

    const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

    return (
        <div style={{
            gridRow: `span ${rowSpan}`,
            gridColumn: `span ${columnSpan}`,
        }} >

            <div className={`relative adminsinglecomponentchild ${gridOverflow} `} style={
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
                            src={`${process.env.NEXT_PUBLIC_IMG_URL}${gridBackgroundImg?.path} `} className='h-full w-full object-cover' />
                    }

                </div>

                <div className={` ${gridWidthType === 'custom' ? `w-[${gridWidth}px] h-full ${contentPlacement}` : `${gridWidthType} h-full ${contentPlacement} `}`} style={
                    display === "grid" ?
                        {
                            alignItems: alignItems,
                            display: display,
                            justifyContent: justifyContent,
                            gap: `${gap}px`,
                            gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
                            position: "relative"
                        }
                        : {
                            alignItems: alignItems,
                            display: display,
                            flexDirection: flexDirection,
                            justifyContent: justifyContent,
                            gap: `${gap}px`,
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