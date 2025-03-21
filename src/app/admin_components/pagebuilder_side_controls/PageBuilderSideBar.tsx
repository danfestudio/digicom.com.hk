import React, { ReactNode } from 'react'

function PageBuilderSideBar({ children }: { children: ReactNode }) {
    return (
        <div style={{
            minWidth: "240px",
            maxHeight: "75vh",
            minHeight: "75vh",
        }} className='fixed right-1 top-16 p-2 border-2 bg-white shadow z-50 max-h-screen overflow-auto'>
            {children}
        </div>
    )
}

export default PageBuilderSideBar