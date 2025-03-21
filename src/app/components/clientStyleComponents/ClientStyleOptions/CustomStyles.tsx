/** @jsxImportSource @emotion/react */
'use client';
import { css } from '@emotion/react'

import React, { useEffect, useState } from 'react'
import SingleComponent from '../SingleComponent/SingleComponent';
import { useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { setClientSideBreakpoint } from '@/redux/features/CustomStyleSlice';

function CustomStyles({ data }: { data: any }) {

    const dispatch = useDispatch()

    const breakpoint = useAppSelector((state) => state.customStyleSlice.clientSideBreakpoint)

    // const [breakpoint, setBreakpoint] = useState<number>(1440)
    const [currentStyle, setCurrentStyle] = useState(data?.styles[breakpoint] ? data?.styles[breakpoint] : data?.styles)

    const [width, setWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 1440);

    useEffect(() => {
        const handleResize = () => {
            setWidth(typeof window !== "undefined" ? window.innerWidth : 1440);
        };

        typeof window !== "undefined" && window.addEventListener('resize', handleResize);

        return () => {
            typeof window !== "undefined" && window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        checkBreakpoint()
    }, [width]);

    const checkBreakpoint = () => {
        if (width >= 1440) {
            dispatch(setClientSideBreakpoint(1440))
            // setBreakpoint(1440);
        } else if (width >= 1024) {
            dispatch(setClientSideBreakpoint(1024))
            // setBreakpoint(1024);
        } else if (width >= 768) {
            dispatch(setClientSideBreakpoint(768))
            // setBreakpoint(768);
        } else if (width >= 425) {
            dispatch(setClientSideBreakpoint(425))
            // setBreakpoint(425);
        } else dispatch(setClientSideBreakpoint(320))
    }

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

    const [backgroundColor, setBackgroundColor] = useState<string>(currentStyle?.backgroundColor)
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


    return (
        <div className={` mx-auto  w-full overflow-hidden relative`}>

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
                            <SingleComponent data={value} key={value?.id} gridIndex={index} grids={grids} setGrids={setGrids} />
                        ))
                    }

                </div>

            </div>

        </div >
    )
}

export default CustomStyles