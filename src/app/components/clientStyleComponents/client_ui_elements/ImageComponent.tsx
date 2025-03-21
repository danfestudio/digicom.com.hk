/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import AnimatedDiv from '../../AnimatedDiv/AnimatedDiv'
import { css } from '@emotion/react'
import { useAppSelector } from '@/redux/store'
import Image from 'next/image'

const color = 'white'

function ImageComponent({ value, elementIndex }: { value: any, elementIndex: number }) {

    // console.log('value', value)

    const [showControls, setShowControls] = useState<boolean>(false)
    // const breakpoint = 1440
    const breakpoint = useAppSelector((state) => state.customStyleSlice.clientSideBreakpoint)

    const [image, setImage] = React.useState<any>(value?.url)

    const [showImageSelect, setShowImageSelect] = React.useState<any>()
    // const constraintsRef = useAppSelector((state) => state.customStyleSlice.constraintsRef)

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
            case 'top':
                return toTop
            case 'bottom':
                return toBottom
            default:
                return toDefault
        }
    }

    return (
        <div key={elementIndex} className='w-full' style={
            renderPositionStyle()
        }>

            <AnimatedDiv variant={value.styles?.animation}>
                <div className={` relative `} style={{
                    zIndex: 2,
                }}>
                    {
                        !image ?
                            ''
                            :
                            <div className={`grid ${imgPlacement ? `justify-${imgPlacement}` : `justify-start`}   ${showControls ? 'border-gray-300' : "border-transparent"}  hover:border-gray-300 border-transparent`}>
                                <Image loading='eager' alt='' width={imgWidth} height={imgHeight} style={styles}
                                    src={`${process.env.NEXT_PUBLIC_IMG_URL}${image?.path}`} />
                            </div>
                    }
                </div>
            </AnimatedDiv>

        </div >
    )
}

export default ImageComponent