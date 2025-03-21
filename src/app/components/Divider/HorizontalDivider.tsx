import React from 'react'

function HorizontalDivider({
    color,
    size,
    height,
    marginTop,
    marginBottom,
    opacity,
}: {
    color?: "black" | "white",
    size?:
    'max-w-7xl' |
    'max-w-6xl' |
    'max-w-5xl' |
    'max-w-4xl' |
    'max-w-3xl' |
    'max-w-2xl' |
    'max-w-xl' |
    'max-w-1/2',
    height?: number,
    marginTop?: number
    marginBottom?: number
    opacity?: `${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}` | `${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}` | '100'
}) {

    return (
        <div style={{
            marginTop: marginTop ? `${marginTop}px` : `15px`,
            marginBottom: marginBottom ? `${marginBottom}px` : `15px`,
            height: height ? `${height}px` : `1px`,
            opacity: opacity ? Number(opacity) / 100 : 1
        }} className={` w-full ${color ? `bg-${color}` : "bg-black"}  ${opacity ? `!opacity-${opacity}` : ""} `}></div>
    )
}

export default HorizontalDivider