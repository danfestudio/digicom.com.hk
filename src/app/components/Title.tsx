import React from 'react'

function Title({ title }: {
    title: string
}) {
    return (
        <h1 className='text-3xl font-semibold text-primaryBlue-2'>{title}</h1>
    )
}

export default Title