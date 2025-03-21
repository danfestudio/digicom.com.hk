"use client";
import { useSearchParams } from 'next/navigation'
import React from 'react'

function DynamicPage({ params }: {
    params: any
}) {

    return (
        <div>DynamicPage {params.id}</div>
    )
}

export default DynamicPage