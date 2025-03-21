import { AlignCenter, AlignLeft, AlignRight, Bold, GripHorizontal, Italic, Minus, Strikethrough, Trash, Underline, X } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import AnimatedDiv from '../../AnimatedDiv/AnimatedDiv'
import { useAppSelector } from '@/redux/store'

function Text({ value, elementIndex }: { value: any, elementIndex: number }) {

    // const breakpoint = 1440
    
    const breakpoint = useAppSelector((state) => state.customStyleSlice.clientSideBreakpoint)

    const [text, setText] = useState<string>(value.content ? value.content : '')
    const [hasBackground, setHasBackground] = useState<boolean>(value.styles?.[breakpoint]?.hasBackground ? value.styles?.[breakpoint]?.hasBackground : false)

    const [textStyle, setTextStyle] = useState<string>(value.styles?.[breakpoint]?.fontStyle ? value.styles?.[breakpoint]?.fontStyle : "")
    const [fontWeight, setTextWeight] = useState<string>(value.styles?.[breakpoint]?.fontWeight ? value.styles?.[breakpoint]?.fontWeight : '400')
    const [animationStyle, setAnimationStyle] = useState<string>(value.styles?.[breakpoint]?.animation ? value.styles?.[breakpoint]?.animation : 'none')
    const [textAlign, setAlign] = useState<CanvasTextAlign>(value.styles?.[breakpoint]?.textAlign ? value.styles?.[breakpoint]?.textAlign : 'start')
    const [fontSize, setTextSize] = useState<number>(value.styles?.[breakpoint]?.fontSize ? value.styles?.[breakpoint]?.fontSize : 16)
    const [textHeight, setTextHeight] = useState<string>(value.styles?.[breakpoint]?.height ? value.styles?.[breakpoint]?.height : "100%")
    const [textWidth, setTextWidth] = useState<string>(value.styles?.[breakpoint]?.width ? value.styles?.[breakpoint]?.width : '100%')

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

        setHasBackground(value.styles?.[breakpoint]?.hasBackground ? value.styles?.[breakpoint]?.hasBackground : '')
        setBackgroundColor(value.styles?.[breakpoint]?.backgroundColor ? value.styles?.[breakpoint]?.backgroundColor : '')
    }, [breakpoint])

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
        // <div key={elementIndex} className='w-full' style={renderPositionStyle()}>
        //     <AnimatedDiv variant={value.styles.animation}>
        //         <div className={`relative`}>
        //             <h1 ref={divRef} className={`singlecomponent overflow-auto ${hasOverflow ? "whitespace-normal" : "whitespace-pre"}  ${textFont === 'default' ? "" : textFont}`} style={{
        //                 fontStyle: textStyle,
        //                 fontWeight: fontWeight,
        //                 textAlign: textAlign,
        //                 textDecoration: textDecoration,
        //                 // fontSize: `${fontSize}vw`,
        //                 // fontSize: `${fontSize}px`,
        //                 // fontSize: `clamp(${value.styles?.fontSize > 16 ? 16 : value.styles?.fontSize}px, ${fontSize}vw, ${fontSize}vw)`,
        //                 // fontSize: `calc(${value.styles?.fontSize}px - 1`,
        //                 // paddingTop: `${paddingTop}px`,
        //                 // paddingBottom: `${paddingBottom}px`,
        //                 // paddingLeft: `${paddingLeft}px`,
        //                 // paddingRight: `${paddingRight}px`,
        //                 fontSize: `clamp(0rem, ${dynamicFont()}vw, ${fontSize}px)`,
        //                 paddingTop: `clamp(0rem, 6vw, ${paddingTop}px)`,
        //                 paddingBottom: `clamp(0rem, 6vw, ${paddingBottom}px)`,
        //                 paddingLeft: `clamp(0rem, 6vw, ${paddingLeft}px)`,
        //                 paddingRight: `clamp(0rem, 6vw, ${paddingRight}px)`,
        //                 marginTop: `clamp(0rem, 6vw, ${marginTop}px)`,
        //                 marginBottom: `clamp(0rem, 6vw, ${marginBottom}px)`,
        //                 marginLeft: `clamp(0rem, 6vw, ${marginLeft}px)`,
        //                 marginRight: `clamp(0rem, 6vw, ${marginRight}px)`,
        //                 lineHeight: lineHeightType === 'custom' ? `${lineHeight}px` : 'normal',
        //                 color: textColor,
        //                 width: textWidth,
        //                 backgroundColor: hasBackground ? backgroundColor : '',
        //                 height: textHeight,
        //                 minWidth: 'fit-content'
        //             }}>
        //                 {text ? text : "Place Your Text Here"}
        //             </h1>
        //         </div>

        //     </AnimatedDiv >
        // </div>

        <div key={elementIndex} className='w-full' style={renderPositionStyle()} >

            <AnimatedDiv variant={value.styles.animation}>
                <div className={`  relative`} style={{ zIndex: 2 }}>
                    <div className={`whitespace-pre  ${textFont === 'default' ? "" : textFont} `} style={{
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
            </AnimatedDiv>

        </div >

    )
}

export default Text