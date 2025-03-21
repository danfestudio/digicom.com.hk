"use client";
import React from 'react'

function HomePageSectionSkeleton() {
    return (
        <div className="animate-pulse">
            <div className="flex items-center justify-center my-10">
                <div className="w-20 h-2.5 bg-gray-200 rounded-full  me-3"></div>
                <div className="w-24 h-2 bg-gray-200 rounded-full "></div>
            </div>

            <div className="h-2.5 bg-gray-300 rounded-full  max-w-[640px] mb-2.5 mx-auto"></div>
            <div className="h-2.5 mx-auto bg-gray-300 rounded-full  max-w-[540px]"></div>
            <span className="sr-only">Loading...</span>
        </div>

    )
}

export default HomePageSectionSkeleton